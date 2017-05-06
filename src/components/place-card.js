import React from 'react'
import R from 'ramda'

import {NEAR_ME} from '../constants'
import yercaud from '../assets/icons/yercaud.png'

class PlaceCard extends React.Component {
	render() {
		return(
			<div className="place-card">
				<div className="place-picture">
					<img src={yercaud} width={150} height={150} alt="Yercaud" />
				</div>
				<div className="place-information">
					<div className="name-rating">
						<div className="place-name">{this.props.info.name}</div>
						<div className="place-rating">
							<span className="pt-icon-large pt-icon-star"></span>
							<div>{this.props.radius === NEAR_ME ?
								this.props.info.reviewStateRate : this.props.info.reviewCountryRate}</div>
						</div>
					</div>
					<div className="distance">6.5 hours away</div>
					<div className="tourist-influx">
						<div className="label">Tourist Influx Level : </div>
						<div>{this.props.info.stateInflux}</div>
					</div>
				</div>
			</div>
		)
	}
}

PlaceCard.propTypes = {
	info: PropTypes.shape.isRequired,
	radius: PropTypes.string.isRequired,
}

export default PlaceCard