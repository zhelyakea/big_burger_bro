import {
  COUNT_MINUS,
  BLOCK_DELETE,
  COUNT_PLUS,
  TOGGLE_SELECTED
} from '../constants/Page'

export const blockDelete = id => ({
  type: BLOCK_DELETE,
  id
})
export const countMinus = id => ({
  type: COUNT_MINUS,
  id
})
export const countPlus = id => ({
  type: COUNT_PLUS,
  id
})
export const toggleSelected = id => ({
  type: TOGGLE_SELECTED,
  id
})
