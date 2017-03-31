import {
  COUNT_MINUS,
  BLOCK_DELETE,
  COUNT_PLUS,
  TOGGLE_SELECTED
} from '../constants/Page'

export function blockDelete(id) {
  return (dispatch) => {
    dispatch({
      type: BLOCK_DELETE,
      payload: id
    })
  }
}
export function countMinus(id) {
  return (dispatch) => {
    dispatch({
      type: COUNT_MINUS,
      payload: id
    })
  }
}
export function countPlus(id) {
  return (dispatch) => {
    dispatch({
      type: COUNT_PLUS,
      payload: id
    })
  }
}
export function toggleSelected(id) {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_SELECTED,
      payload: id
    })
  }
}
