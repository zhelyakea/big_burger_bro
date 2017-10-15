import {
  COUNT_MINUS,
  BLOCK_DELETE,
  COUNT_PLUS,
  TOGGLE_SELECTED
} from '../constants/Page'

import { page } from '../page'

const initialState = page

export default function count(state, action) {
	const newstate = {...state}
	const id = action.id

	switch (action.type) {

		case BLOCK_DELETE:
      newstate[id].selected = false
      newstate[id].count = 0
			return newstate

		case COUNT_MINUS:
      if(newstate[id].count > 0) {
        newstate[id].count = newstate[id].count - 1
      }
			return newstate

		case COUNT_PLUS:
			newstate[id].count = newstate[id].count + 1
			return newstate

		case TOGGLE_SELECTED:
			newstate[id].selected = !newstate[id].selected
      switch (newstate[id].selected) {
        case true:
  			   newstate[id].count = 1
          break;
        case false:
  			   newstate[id].count = 0
          break;
      }
			return newstate
		default:
			return initialState
	}
}
