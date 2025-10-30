import { configureStore } from '@reduxjs/toolkit'

// 创建空的 reducer 来消除警告
const rootReducer = {
  dummy: (state = {}) => state
}

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch