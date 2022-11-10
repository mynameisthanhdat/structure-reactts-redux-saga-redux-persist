import { put, takeLatest, call } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { ResponseGenerator } from '../network'
import * as actions from '../redux/actions/users'
import { REQUEST_GET_USER } from '../redux/actions/actionTypes'
import { API_ENDPOINTS } from '../services'
import axiosService from '../services/axiosServices'

function* getUserById(action: AnyAction) {
  const payload = action.payload
  const url = API_ENDPOINTS.users.getUserById
  try {
    const response: ResponseGenerator = yield call(axiosService.getById, payload, url)
    yield put(actions.getUserByIdSuccess(response.data))
  } catch (error) {
    yield put(actions.getUserByIdFail(error))
  }
}

export default function* userSagas() {
  yield takeLatest(REQUEST_GET_USER, getUserById)
}
