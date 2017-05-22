import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default class List extends Component {
	render() {
    const { children } = this.props
		return (
			<div className="width_100 height_100 flex-container-col ">
				<div className="absolute_logo width_100 flex_container_col">
					<div className="logo z_index_2 pageTextDiv">
						<h1 className="appText">Big Burger Bro</h1>
					</div>
		      <div className="pageTextDiv z_index_1 flex-item flex_grow_1">
	          <h2 className="pageText">Список услуг</h2>
					</div>
				</div>
				<div className="width_100 flex_container_col justify_center height_90 margin_auto">
					{children}
				</div>
			</div>
		)
	}
}
