import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import page from './page'
import data from './data'

export default combineReducers({
	page,
	data,
  routing: routerReducer
})
