// import storage from 'redux-persist/lib/storage'
// import { persistReducer } from 'redux-persist'
import { AnyAction } from 'redux'
import { REHYDRATE } from 'redux-persist/lib/constants'
import { REQUEST_GET_USER, GET_USER_SUCCESS, GET_USER_FAIL } from '../actions/actionTypes'

interface IUser {
  loading: boolean
  data: object
  error: boolean
}

const initialState: IUser = {
  loading: false,
  data: [],
  error: false,
}

const userReducers = (state = initialState, action: AnyAction) => {
  const { payload, type } = action
  if (state === undefined) {
    return initialState
  }
  switch (type) {
    case REHYDRATE:
      return { ...state, persistedState: action.payload }
    case REQUEST_GET_USER:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: false,
      }
    case GET_USER_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        error: true,
      }
    default:
      return state
  }
}

export default userReducers

// just using persist to save the data on storage for a few cases

// const persistConfig = {
//   key: 'auth',
//   storage: storage,
//   whiteList: ['data'],
//   blacklist: [],
// }

// export default persistReducer(persistConfig, userReducers)
