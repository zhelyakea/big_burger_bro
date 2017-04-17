import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants/Data'
import fetch_post from '../services/fetch'
import {toggleSelected} from '../actions/PageAction'

export function getData() {
  return {
    type: FETCHING_DATA
  }
}
export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  }
}
export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}
export function fetchData(id) {
  return (dispatch) => {
    dispatch(getData())
    fetch_post(id, 'toggle')
      .then((data) => {
        dispatch(getDataSuccess(data))
        dispatch(toggleSelected(id))
      })
      .catch((err) => console.log('err:', err))
  }
}
