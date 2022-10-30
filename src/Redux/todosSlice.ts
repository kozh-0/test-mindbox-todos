import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Itodos {
  input: string;
  list: {
    title: string;
    status: boolean;
    id: string;
  }[]
}

const initialState = {
  input: '',
  list: [{}]
} as Itodos;

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<any>) => {
      state.input = action.payload;
    },

  },
});

// название action генерится само от поля name и методов из полей reducers
// например counter/increment или counter/decrement
export const { setInput } = todosSlice.actions;
export default todosSlice.reducer;
