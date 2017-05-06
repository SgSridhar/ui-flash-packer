import React from 'react'
import {connect} from 'react-redux'
import R from 'ramda'
import {Link} from 'react-router-dom'

import Header from './header'
import flashpacker from '../assets/icons/flashpacker.png'
import flashpackerTransparent from '../assets/icons/flashpacker-transparent.png'

import {setRadius, setCategory, requestState} from '../actions/search-results'
import {NEAR_ME,
	TAKE_ME_PLACES,
	HILL_STATION,
	BEACH,
	WITHIN_INDIA} from '../constants'

const mapStateToProps = (state) => ({
	radius: state.category.radius,
	category: state.category.category,
})

const mapDispathToProps = (dispatch) => ({
	onRadiusButtonClick: ((radius) => dispatch(setRadius(radius))),
	onCategoryButtonClick: ((category) => dispatch(setCategory(category))),
	onGoButtonClick: (() => dispatch(requestState())),

})

@connect(mapStateToProps, mapDispathToProps)
class LandingPage extends React.Component {

	render() {
		return(
			<div className="landing-page-container">
				<Header/>
				<div className="search-container">
					<div className="search-wrapper">
						<div className="second-logo"><img className="flashpacker-second-logo" src={flashpackerTransparent} width={200} height={70} alt="flashpacker" /></div>
						<div className="introduction-text">Let us help you decide where you vacation this year!</div>
						<div className="radius-selector">
							<div className="pt-button-group">
								<button
									className={`pt-button pt-large near-me ${this.props.radius === NEAR_ME ? 'active' : ''}`}
									onClick={() => this.props.onRadiusButtonClick(NEAR_ME)}>
									Near me
								</button>
								<button
									className={`pt-button pt-large  ${this.props.radius === WITHIN_INDIA ? 'active' : ''}`}
									onClick={() => this.props.onRadiusButtonClick(WITHIN_INDIA)}
								>
									Within India
								</button>
								<button
									className={`pt-button pt-large  ${this.props.radius === TAKE_ME_PLACES ? 'active' : ''}`}
									onClick={() => this.props.onRadiusButtonClick(TAKE_ME_PLACES)}
								>
									Take me places!
								</button>
							</div>
						</div>
						{/*<div className="search-bar pt-input-group">*/}
						{/*<span className="pt-icon pt-icon-search"></span>*/}
						{/*<input className="pt-input" type="search" placeholder="I want to go to .." dir="auto" />*/}
						{/*</div>*/}
						<div className="default-categories">
							<div className={`hill-stations pt-button pt-large  ${this.props.category === HILL_STATION ? 'active' : ''}`}
									 onClick={() => this.props.onCategoryButtonClick(HILL_STATION)}><div>Hill Stations</div></div>
							<div className={`beaches pt-button pt-large  ${this.props.category === BEACH ? 'active' : ''}`}
									 onClick={() => this.props.onCategoryButtonClick(BEACH)}><div>Beaches</div></div>
						</div>
						<Link to="/places">Go</Link>
						<div className="my-location">
							<span className="pt-icon pt-icon-map-marker"></span>
							<div>Chennai</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default LandingPage
