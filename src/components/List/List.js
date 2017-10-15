import React, { PropTypes, Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router";

import block from "bem-cn";
const b = block("list");
import "./List.scss";

export default class List extends Component {
	render() {
    const { children, page, location } = this.props
    const sum = Object.keys(page).reduce((result, id) => {
      return result + page[id].cost * page[id].count;
    }, 0);
		return (
			<div className={b}>
				<div className={b('header-wrapper')}>
					<div className={b('logo')}>
						<h1 className={b('text')}>Big Burger Bro</h1>
					</div>
		      <div className={b('second-text-div')}>
	          <h2 className={b('second-text')}>Список услуг</h2>
					</div>
				</div>
				<div className={b('content')}>
					{children}
				</div>
        <div className={b('bottom-wrapper')}>
          {
            location === '/services'
            ?
            <div className={b('bottom-second-div')}>
              <Link className={b('to-index')} to="/" >
                  Выбрать
      	      </Link>
            </div>
            : <div className={b('bottom-block')}>
                <div className={b('bottom-first-div')}>
                  <span className={b('total-text')}>Итого: {sum} р</span>
                </div>
                <div className={b('bottom-second-div')}>
                  <Link className={b('to-services')} to="/services" >
                      Добавить услуги
                  </Link>
                </div>
              </div>
          }
        </div>
			</div>
		)
	}
}
List.propTypes = {
  page: PropTypes.object.isRequired
};
export default connect(({ page, routing }) => ({
  page,
  location: routing.locationBeforeTransitions.pathname
}))(List);
