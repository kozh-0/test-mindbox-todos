import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Itodos {
  input: string;
  isInListStatus: boolean;
  status: 'All' | 'Active' | 'Completed';
  list: {
    title: string;
    completed: boolean;
  }[]
}

const initialState = {
  input: '',
  isInListStatus: false,
  status: 'All',
  list: []
} as Itodos;

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    addTodo: (state, action: PayloadAction<string>) => {
      if (!state.list.find(el => el.title === action.payload) && action.payload) {
        state.list.push({
          title: action.payload.trim(),
          completed: false
        });
        state.input = '';
      } else {
        state.isInListStatus = true;
      }
    },
    hideMessage: (state) => { state.isInListStatus = false },
    toggleTodoStatus: (state, action: PayloadAction<string>) => {
      const toggledTodo = state.list.find(todo => todo.title === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      };
    },
    clearCompleted: (state) => {
      state.list.map(el => el.completed = false);
    }
  },
});


// название action генерится само от поля name и методов из полей reducers
// например counter/increment или counter/decrement
export const { addTodo, setInput, hideMessage, toggleTodoStatus, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;
