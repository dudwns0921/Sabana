import { configureStore } from '@reduxjs/toolkit'
import roomIdSlice from './roomIdSlice'

export const store = configureStore({
  reducer: {
    roomId: roomIdSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
