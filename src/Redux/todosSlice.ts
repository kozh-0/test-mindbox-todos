import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Itodos {
  input: string,
  isInListStatus: boolean,
  list: {
    title: string;
    status: boolean;
    id: string;
  }[]
}

const initialState = {
  input: '',
  isInListStatus: true,
  list: [
    {
      title: 'Next.js',
      status: true,
      id: new Date().toString()
    },
    {
      title: 'Angular',
      status: false,
      id: 'asdfasfgasf'
    },
  ]
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
          status: false,
          id: new Date().toString()
        });
        state.input = '';
      } else {
        state.isInListStatus = true;
      }
    },
    hideMessage: (state) => { state.isInListStatus = false }
    // changeCheckedStatusById: (state, action: PayloadAction<any>) => {
    //   state.input = action.payload;
    // },

  },
});


// название action генерится само от поля name и методов из полей reducers
// например counter/increment или counter/decrement
export const { addTodo, setInput, hideMessage } = todosSlice.actions;
export default todosSlice.reducer;
