import {
  COUNT_MINUS,
  BLOCK_DELETE,
  COUNT_PLUS,
  TOGGLE_SELECTED
} from '../constants/Page'

export function blockDelete(id) {
  return {
    type: BLOCK_DELETE,
    payload: id
  }
}
export function countMinus(id) {
  return {
    type: COUNT_MINUS,
    payload: id
  }
}
export function countPlus(id) {
  return {
    type: COUNT_PLUS,
    payload: id
  }
}
export function toggleSelected(id) {
  return {
    type: TOGGLE_SELECTED,
    payload: id
  }
}
