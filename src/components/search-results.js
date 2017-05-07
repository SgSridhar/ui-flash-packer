import React from 'react'
import R from 'ramda'

import {Spinner, Intent, Button} from '@blueprintjs/core'

import Header from './header'
import PopUpInfoWindowExample from './google-map'
import yercaud from '../assets/icons/yercaud.png'
import ooty from '../assets/icons/ooty.png'
import kolli from '../assets/icons/kolli.png'
import kodaikanal from '../assets/icons/kodaikanal.png'

import {connect} from 'react-redux'
import PlaceCard from './place-card'
import {requestState} from '../actions/search-results'
import {NEAR_ME, HILL_STATION, STATUS_LOADING} from '../constants'

const mapStateToProps = ((state) => {
	return ({
		status: state.category.status,
		category: state.category.category,
		radius: state.category.radius,
		data: state.category.data,
	})
})

const mapDispatchToProps = ((dispatch) => ({
	onComponentWillMount: ((category, state) => dispatch(requestState(category, state)))
}))

const RECCOMENDATION = 'RECCOMENDATION'
const NEAREST = 'NEAREST'
const BEST_RATED = 'BEST_RATED'

@connect(mapStateToProps, mapDispatchToProps)
class SearchResults extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			selectedFilter: RECCOMENDATION,
		}

		this.handleFilter = this.handleFilter.bind(this)
	}

	componentWillMount() {
		this.props.onComponentWillMount(this.props.category, this.props.radius === NEAR_ME ? 'Tamil Nadu' : '')
	}

	handleFilter(filter) {
		this.setState({
			selectedFilter: filter,
		})
	}

	render() {
		const sortedPlaces = this.props.data ? (() => {
			if (this.state.selectedFilter === NEAREST) {
				return R.sortBy(R.prop('distance'), this.props.data)
			}

			if (this.state.selectedFilter === BEST_RATED) {
				return R.sortBy(R.prop('rating'), this.props.data)
			}

			return R.sortBy(this.props.radius === NEAR_ME ? R.prop('reviewStateRate') : R.prop('reviewCountryRate'), this.props.data)
		})() : []

		const cards = (() => {
			if(this.props.status === STATUS_LOADING) {
				return (
					<div className="spin">
						<Spinner intent={Intent.PRIMARY} />
					</div>
				)
			}

			if(this.props.data) {
				return R.map((d) => {
					return (
						<PlaceCard info={d} radius={this.props.radius} category={this.props.category} />
					)
				})(this.state.selectedFilter !== NEAREST ? R.reverse(sortedPlaces) : sortedPlaces)
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
							<Button
								intent={this.state.selectedFilter === RECCOMENDATION ? Intent.PRIMARY : Intent.NONE}
								onClick={() => this.handleFilter(RECCOMENDATION)}
							>
								FP Recommendations
							</Button>
							<Button
								intent={this.state.selectedFilter === NEAREST ? Intent.PRIMARY : Intent.NONE}
								onClick={() => this.handleFilter(NEAREST)}
							>
								Nearest
							</Button>
							<Button
								intent={this.state.selectedFilter === BEST_RATED ? Intent.PRIMARY : Intent.NONE}
								onClick={() => this.handleFilter(BEST_RATED)}>
								Best Rated
							</Button>
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
