import React, { PropTypes, Component } from 'react'


export default class Block extends Component {
  render() {
    const { index, value, fetchData, countMinus, countPlus } = this.props
    const id = value.id
    const count = value.count
    const color = value.color
    const cost = value.cost
    const name = value.name
    return (
  		<div className="flex-container justify_space_between">
        <div className="flex-item margin_5_2 shadow_box width_5">
      		<div className={'smallIcon ' + name + (count > 0 ? ' activeIcon' : ' block')} ></div>
    		</div>
        <div className="flex-item margin_5_2 shadow_box">
      		<p className={ 'block_text block ' + (count > 0 ? 'selectedName' : 'name')} >{name}</p>
    		</div>
        <div className="flex-item margin_5_2 shadow_box">
      		<p className={ 'block_text block ' + (count > 0 ? 'selectedCost' : 'cost')}>{cost} р</p>
    		</div>
        <div className="flex-item margin_5_2 shadow_box">
      		<p className={ 'block_text block ' + (count > 0 ? 'selectedCount' : 'count')}>{count} шт</p>
    		</div>
        <div className="flex-item margin_5_2 shadow_box">
      		<p className={ 'block_text block ' + (count > 0 ? 'selectedSumm' : 'summ')}>{cost * count} р</p>
    		</div>

        <div className="flex-item margin_5_2 flex-container justify_space_between">
          <div className="flex-item">
        		<div
              className="pressed block_text minus shadow_box"
              onClick={() => countMinus(id)}>
              -</div>
      		</div>
          <div className="flex-item">
        		<div
              className="pressed block_text plus shadow_box"
              onClick={() => countPlus(id)}>
              +</div>
      		</div>
          <div className="flex-item">
        		<div
              className="pressed block_text delete shadow_box"
              onClick={() => fetchData(id)}>
              x</div>
      		</div>
    		</div>
  		</div>
  	)
  }
}
