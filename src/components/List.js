import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default class List extends Component {
	render() {
    const { children } = this.props
		return (
			<div>
				<div className=" flex-container justify_center width_100">
					<div className="logo pageTextDiv flex-item flex_grow_2">
						<h1 className="appText">Big Burger Bro</h1>
					</div>
				</div>
				<br/>
				<br/>
				<div>
					{children}
				</div>
			</div>
		)
	}
}
