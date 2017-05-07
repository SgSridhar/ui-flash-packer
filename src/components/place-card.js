import React from 'react'

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
								this.props.info.reviewStateRate.toFixed(1)
								: this.props.info.reviewCountryRate.toFixed(1)}</div>
						</div>
					</div>
					<div className="distance">{this.props.info.distance.toFixed(2)} hours away</div>
					<div className="tourist-influx">
						<div className="label">Tourist Influx Level </div>
						<div className={`flux-state ${this.props.info.stateInflux}`}>{this.props.info.stateInflux}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default PlaceCard
