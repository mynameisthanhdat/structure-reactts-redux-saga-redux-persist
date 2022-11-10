import { AnyAction } from 'redux'
import { REQUEST_GET_USER, GET_USER_SUCCESS, GET_USER_FAIL } from './actionTypes'

//USER
export const requestGetUserById = (value: number): AnyAction => {
  return {
    type: REQUEST_GET_USER,
    payload: value,
  }
}

export const getUserByIdSuccess = (value: object | any): AnyAction => {
  return {
    type: GET_USER_SUCCESS,
    payload: value,
  }
}

export const getUserByIdFail = (value: any): AnyAction => {
  return {
    type: GET_USER_FAIL,
    payload: value,
  }
}
