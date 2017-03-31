import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, browserHistory } from 'react-router'
import Service from '../components/Service'
import * as dataAction from '../actions/DataAction'

export default class Services extends Component {
		render() {
		const {page} = this.props
    const { fetchData } = this.props.dataAction
		const container = Object.keys(page).map((index) =>
			<Service
				key = {index}
				value = {page[index]}
        fetchData = { fetchData }/>
		)
		return (
      <div className="app width_80 padding_15 ">
	      <div className="width_100 ">
					<br/>
					<br/>
					<div className="flex-container justify_center width_100">
			      <div className="pageTextDiv flex-item flex_grow_1">
		          <h2 className="pageText">Список услуг</h2>
						</div>
					</div>
					<br/>
					<br/>
					<div>
						{container}
		      </div>
	      </div>
	      <div className="flex-container justify_center margin_5_0 width_100">
					<header>
						<Link to='/'/>
					</header>
		      <div className="flex-item flex_grow_1">
          <br/>
		  			<div
							onClick={() => browserHistory.push('/')}
							className="pressed block_text nextStyle shadow_box">Выбрать</div>
						<br/>
						<br/>
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
    dataAction: bindActionCreators(dataAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Services)
