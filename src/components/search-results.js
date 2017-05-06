import React from 'react'
import R from 'ramda'

import Header from './header'
import PopUpInfoWindowExample from './google-map'
import yercaud from '../assets/icons/yercaud.png'
import ooty from '../assets/icons/ooty.png'
import kolli from '../assets/icons/kolli.png'
import kodaikanal from '../assets/icons/kodaikanal.png'

import {connect} from 'react-redux'
import PlaceCard from './place-card'
import {requestState} from '../actions/search-results'
import {NEAR_ME, HILL_STATION} from '../constants'

const mapStateToProps = ((state) => {
	return ({
		category: state.category.category,
		radius: state.category.radius,
		data: state.category.data,
	})
})

const mapDispatchToProps = ((dispatch) => ({
	onComponentWillMount: ((category, state) => dispatch(requestState(category, state)))
}))

@connect(mapStateToProps, mapDispatchToProps)
class SearchResults extends React.Component {
	componentWillMount() {
		this.props.onComponentWillMount(this.props.category, this.props.radius === NEAR_ME ? 'Tamil Nadu' : '')
	}
	render() {
		console.log('data', this.props.data)
		const sortedPlaces = this.props.data ?
			R.sort(R.prop('reviewStateRate'), this.props.data) : []
		console.log('sorted data', sortedPlaces)
		const cards = (() => {
			if(this.props.data) {
				return R.map((d) => {
					return (
						<PlaceCard info={d} radius="{this.props.radius}"/>
					)
				})(sortedPlaces)
			}
			return null
		})()

		const desc2 = this.props.radius === NEAR_ME ? 'Exploring spots near me ...': 'Exploring spots within India ...'

		return(
			<div className="search-results-page-container">
				<Header/>
				<div className="search-results">
					<div className="places">
						<div className="search-description">
							{desc2}
						</div>
						<div className="filters-group pt-button-group">
							<button className="pt-button recommended">Flashpacker Recommendations</button>
							<button className="pt-button">Nearest</button>
							<button className="pt-button">Best Rated</button>
						</div>
						<div className="places-list">
							{cards}
						</div>
					</div>
					<div className="map-view"><PopUpInfoWindowExample/></div>
				</div>
			</div>
		)
	}
}

export default SearchResults
