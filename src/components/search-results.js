import React from 'react'
import R from 'ramda'

import Header from './header'
import flashpacker from '../assets/icons/flashpacker.png'

class SearchResults extends React.Component {
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
								<div className="place-picture">Pic</div>
								<div className="place-information">
									<div className="name-rating">
										<div className="place-name">Yercaud</div>
										<div className="place-rating">3.5</div>
									</div>
									<div className="distance">8.5 hours away</div>
									<div className="tourist-influx">LOW</div>
								</div>
							</div>
						</div>
					</div>
					<div className="map-view">mapview</div>
				</div>
			</div>
		)
	}
}

export default SearchResults
