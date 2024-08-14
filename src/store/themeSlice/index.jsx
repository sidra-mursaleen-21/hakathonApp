import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState :{
    theme: "light"
  },
  reducers:{
    Toggle:(state, action)=>{
      state.theme = action.payload
    }
  }
})

export const {Toggle} = themeSlice.actions

export default themeSlice.reducer