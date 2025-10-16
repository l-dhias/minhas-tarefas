import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reducers/tarefas'
import PayloadAction from './reducers/filtros'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: PayloadAction
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
