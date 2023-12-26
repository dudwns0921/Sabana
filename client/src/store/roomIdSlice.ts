import { createSlice } from '@reduxjs/toolkit'
import { type RootState } from '.'

interface roomIdState {
  value: string
}

const initialState: roomIdState = {
  value: '',
}

const roomIdSlice = createSlice({
  name: 'rooId',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { set } = roomIdSlice.actions

export const selectRoomId = (state: RootState) => state.roomId.value

export default roomIdSlice.reducer
