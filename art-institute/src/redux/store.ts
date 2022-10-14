import {configureStore, combineReducers} from '@reduxjs/toolkit'
import artReducer from './artDataSlice'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }
  
const userReducer = combineReducers({
    arts : artReducer
})
  const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch