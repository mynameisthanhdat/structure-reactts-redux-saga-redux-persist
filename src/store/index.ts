import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from '../redux/reducers'
import rootSaga from '../sagas/rootSagas'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers)
const sagaMiddleware = createSagaMiddleware()
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
export type RootState = ReturnType<typeof rootReducers>
