import { createSlice } from '@reduxjs/toolkit'

const roomIdSlice = createSlice({
  name: 'rooId',
  initialState: {
    value: '',
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
  },
})

export default roomIdSlice
