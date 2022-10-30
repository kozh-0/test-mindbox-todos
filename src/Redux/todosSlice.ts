import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Itodos {
  input: string,
  isInListStatus: boolean,
  list: {
    title: string;
    status: boolean;
  }[]
}

const initialState = {
  input: '',
  isInListStatus: false,
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
      if (!state.list.find(el => el.title === action.payload)) {
        state.list.push({
          title: action.payload.trim(),
          status: false
        });
        state.input = '';
      } else {
        state.isInListStatus = true;
      }
    },
    hideMessage: (state) => { state.isInListStatus = false },
    toggleTodoStatus: (state, action: PayloadAction<string>) => {
      const toggledTodo = state.list.find(todo => todo.title === action.payload)
      if (toggledTodo) {
        toggledTodo.status = !toggledTodo.status
      };
    },
  },
});


// название action генерится само от поля name и методов из полей reducers
// например counter/increment или counter/decrement
export const { addTodo, setInput, hideMessage, toggleTodoStatus } = todosSlice.actions;
export default todosSlice.reducer;
