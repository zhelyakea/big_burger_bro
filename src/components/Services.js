import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, hashHistory } from 'react-router'
import Service from '../components/Service'
import * as pageAction from '../actions/PageAction'
const { map } = Array.prototype

export default class Services extends Component {
		render() {
		const {page} = this.props
    const { toggleSelected } = this.props.pageAction
		const container = Object.keys(page)::map((index) =>
			<Service
				key = {index}
				value = {page[index]}
        toggleSelected = { toggleSelected }/>
		)
		return (
      <div className="app flex_item_column flex_container_col width_80">
				<div className="flex_item_column justify_center scroll_height width_100 height_100">
					<div className="scroll_height_inside width_100">
						{container}
					</div>
				</div>
	      <div className="flex_item_column flex-container justify_center">
					<header>
						<Link to='/'/>
					</header>
		      <div className="flex-item flex_grow_1">
		  			<div
							onClick={() => hashHistory.push('/')}
							className="pressed button_nav nextStyle shadow_box">Выбрать</div>
					</div>
	      </div>
      </div>
		)
	}
}
Services.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Services)
