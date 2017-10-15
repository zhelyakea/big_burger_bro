import React, { PropTypes, Component } from 'react'
import Service from '../../components/Service'

import block from "bem-cn";
const b = block("services");
import "./Services.scss";

export default class Services extends Component {
		render() {
		const { page, toggleSelected } = this.props
		const container = Object.keys(page).map((index) =>
			<Service
				key = {index}
				value = {page[index]}
        toggleSelected = { toggleSelected }
      />
		)
		return (
      <div className={b}>
				<div className={b('wrapper')}>
					<div className={b('scroll')}>
						{container}
					</div>
				</div>
      </div>
		)
	}
}
// Services.propTypes = {
//   page: PropTypes.object.isRequired
// }
// export default connect(
// ({ page }) => ({ page }), { toggleSelected })(Services)
