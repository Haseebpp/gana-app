import { configureStore } from '@reduxjs/toolkit'

/**
 * Empty root reducer for now.
 * Add slices (e.g. authSlice) in `reducer: { auth: authSlice }`
 * as they are created.
 */
export const store = configureStore({
  reducer: {},
})

/* ——— Typed helpers (safe to delete in JS-only projects) ——— */
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
