import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants/Data'
import fetch_post from '../services/fetch'
import {blockDelete} from '../actions/PageAction'

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
    fetch_post(id, 'delete')
      .then((data) => {
        dispatch(getDataSuccess(data))
        dispatch(blockDelete(id))
        console.log('sccss:', data)
      })
      .catch((err) => console.log('err:', err))
  }
}
