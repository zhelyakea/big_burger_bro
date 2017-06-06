import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Block from '../components/Block'
import * as pageAction from '../actions/PageAction'
import { Link, hashHistory } from 'react-router'
const { map, reduce } = Array.prototype

class App extends Component {
	render() {
		const { page } = this.props
	 	const { ...pageFoo } = this.props.pageAction

		const sum = Object.keys(page)::reduce(function (result, id) {
		  return result + page[id].cost * page[id].count;
		}, 0);

		const container = Object.keys(page)::map((id) => {
				switch(page[id].selected){
					case true:
						return (
							<Block key = { id }
								value = { page[id] }
							 	{ ...pageFoo }
							/>
						)
						break;
				}
			}
		)
		return (
			<div className="app flex_item_column flex_container_col width_80">
				<div className="flex_item_column justify_center scroll_height width_100 height_100">
					<div className="scroll_height_inside width_100 padding_5">
						{container}
					</div>
				</div>
				<div className="flex_item_column flex-container justify_center  padding_5">
		      <div className="addServiceStyle flex-item flex_grow_1">
	          <h4 className="block_text pageText">Итого: {sum} р</h4>
					</div>
				</div>
	      <div className="flex_item_column flex-container justify_center">
					<header>
						<Link to='/services'/>
					</header>
		      <div className="flex-item flex_grow_1 padding_5">
						<div
							onClick={() => hashHistory.push('/services')}
							className="pressed button_nav nextStyle shadow_box">
							Добавить услуги
						</div>
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
    pageAction: bindActionCreators(pageAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
