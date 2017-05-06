import React from 'react'
import R from 'ramda'

import Header from './header'
import PopUpInfoWindowExample from './google-map'
import yercaud from '../assets/icons/yercaud.png'
import ooty from '../assets/icons/ooty.png'
import kolli from '../assets/icons/kolli.png'
import kodaikanal from '../assets/icons/kodaikanal.png'

import {connect} from 'react-redux'

import {requestState} from '../actions/search-results'

const mapDispatchToProps = ((dispatch) => ({
	onComponentWillMount: ((state) => dispatch(requestState(state)))
}))

@connect(null, mapDispatchToProps)
class SearchResults extends React.Component {
	componentWillMount() {
		this.props.onComponentWillMount('Tamil Nadu')
	}
	render() {
		return(
			<div className="search-results-page-container">
				<Header/>
				<div className="search-results">
					<div className="places">
						<div className="search-description">
							Hill Stations near Chennai ..
						</div>
						<div className="filters-group pt-button-group">
							<button className="pt-button recommended">Flashpacker Recommendations</button>
							<button className="pt-button">Nearest</button>
							<button className="pt-button">Best Rated</button>
						</div>
						<div className="places-list">
							<div className="place-card">
								<div className="place-picture">
									<img src={yercaud} width={200} height={200} alt="Yercaud" />
								</div>
								<div className="place-information">
									<div className="name-rating">
										<div className="place-name">Yercaud</div>
										<div className="place-rating">
											<span className="pt-icon-large pt-icon-star"></span>
											<div>4.5</div>
										</div>
									</div>
									<div className="distance">6.5 hours away</div>
									<div className="tourist-influx">
										<div className="label">Tourist Influx Level : </div>
										<div>LOW</div>
									</div>
								</div>
							</div>

							<div className="place-card">
								<div className="place-picture">
									<img src={kolli} width={200} height={200} alt="Kolli" />
								</div>
								<div className="place-information">
									<div className="name-rating">
										<div className="place-name">Kolli Hills</div>
										<div className="place-rating">
											<span className="pt-icon-large pt-icon-star"></span>
											<div>4.0</div>
										</div>
									</div>
									<div className="distance">6.5 hours away</div>
									<div className="tourist-influx">
										<div className="label">Tourist Influx Level : </div>
										<div>MEDIUM</div>
									</div>
								</div>
							</div>
							<div className="place-card">
								<div className="place-picture">
									<img src={ooty} width={200} height={200} alt="Ooty" />
								</div>
								<div className="place-information">
									<div className="name-rating">
										<div className="place-name">Ooty</div>
										<div className="place-rating">
											<span className="pt-icon-large pt-icon-star"></span>
											<div>3.5</div>
										</div>
									</div>
									<div className="distance">10 hours away</div>
									<div className="tourist-influx">
										<div className="label">Tourist Influx Level : </div>
										<div>HIGH</div>
									</div>
								</div>
							</div>
							<div className="place-card">
								<div className="place-picture">
									<img src={kodaikanal} width={200} height={200} alt="kodaikanal" />
								</div>
								<div className="place-information">
									<div className="name-rating">
										<div className="place-name">Kodaikanal</div>
										<div className="place-rating">
											<span className="pt-icon-large pt-icon-star"></span>
											<div>3.0</div>
										</div>
									</div>
									<div className="distance">9.5 hours away</div>
									<div className="tourist-influx">
										<div className="label">Tourist Influx Level : </div>
										<div>HIGH</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="map-view"><PopUpInfoWindowExample/></div>
				</div>
			</div>
		)
	}
}

export default SearchResults
