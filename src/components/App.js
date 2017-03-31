import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Block from '../components/Block'
import * as deleteAction from '../actions/DeleteAction'
import * as pageAction from '../actions/PageAction'
import { Link, browserHistory } from 'react-router'

class App extends Component {
	render() {
		const { page } = this.props
	 	const { fetchData } = this.props.deleteAction
	 	const { countMinus, countPlus } = this.props.pageAction

		const sum = Object.keys(page).reduce(function (result, id) {
		  return result + page[id].cost * page[id].count;
		}, 0);

		const container = Object.keys(page).map((id) => {
				switch(page[id].selected){
					case true:
						return (
							<Block key = { id }
								value = { page[id] }
							 	fetchData = { fetchData }
							 	countMinus = { countMinus }
							 	countPlus = { countPlus }
							/>
						)
						break;
				}
			}
		)
		return (
			<div className="app width_80 padding_15">
				<div className="width_100">
					<br/>
					<br/>
					<div className="flex-container justify_center width_100">
			      <div className="pageTextDiv flex-item flex_grow_1">
		          <h2 className="pageText">Выбор услуг</h2>
						</div>
					</div>
					<br/><br/>
					<div>
						{container}
					</div>
					<br/>
					<div className=" flex-container justify_center width_100">
			      <div className="addServiceStyle flex-item flex_grow_1">
		          <h4 className="block_text pageText">Итого: {sum} р</h4>
						</div>
					</div>
					<br/>
				</div>
	      <div className="flex-container justify_center margin_5_0 width_100">
					<header>
						<Link to='/services'/>
					</header>
		      <div className="flex-item flex_grow_1">
						<div onClick={() => browserHistory.push('/services')}
						className="pressed block_text nextStyle shadow_box">Добавить услуги</div>
						<br/>
							<br/>
					</div>
				</div>
			</div>
		)
	}
}
App.propTypes = {
  page: PropTypes.object.isRequired
}
function mapStateToProps (state) {
	return {
		page: state.page
	}
}
function mapDispatchToProps(dispatch) {
  return {
    deleteAction: bindActionCreators(deleteAction, dispatch),
    pageAction: bindActionCreators(pageAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
