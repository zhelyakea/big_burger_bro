import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


export default class Service extends Component {
  render() {
    const { index, value, toggleSelected } = this.props
    const id = value.id
    const selected = value.selected
    const color = value.color
    const cost = value.cost
    const name = value.name
    return (
  		<div
      onTouchEnd={() => toggleSelected(id)}
      className={'service margin_5 width_100'}>

        <div className={name + ' shadow_box biglIcon ' + (selected ? "activeIcon" : '')}>
        </div>

          <div className="flex-container margin_5_0 width_100 shadow_box">
      		  <div className={'flex-item service_text flex_grow_2 ' + (selected ? "service_name_active" : 'service_text_unactive')}>{name}</div>

      		  <div className={'flex-item service_text  flex_grow_2 ' + (selected ? "service_cost_active" : 'service_text_unactive')}>{cost} р</div>
	        </div>
  		</div>
  	)
  }
}
