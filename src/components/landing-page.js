import React from 'react'
import {connect} from 'react-redux'
import R from 'ramda'
import {Link} from 'react-router-dom'

import Header from './header'
import flashpacker from '../assets/icons/flashpacker.png'
import hill from '../assets/icons/hill.png'
import beach from '../assets/icons/beach.png'
import historical from '../assets/icons/historical.png'
import romantic from '../assets/icons/romantic.png'
import spiritual from '../assets/icons/spiritual.png'
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

						{/*<div className="search-bar pt-input-group">*/}
						{/*<span className="pt-icon pt-icon-search"></span>*/}
						{/*<input className="pt-input" type="search" placeholder="I want to go to .." dir="auto" />*/}
						{/*</div>*/}
						<div className="default-categories">
							<div className={`hill-stations pt-button  ${this.props.category === HILL_STATION ? 'active' : ''}`}
									 onClick={() => this.props.onCategoryButtonClick(HILL_STATION)}>
								<div><img src={hill} width={50} height={50} alt={hill} /></div>
								<div>Hills</div>
							</div>
							<div className={`beaches pt-button  ${this.props.category === BEACH ? 'active' : ''}`}
									 onClick={() => this.props.onCategoryButtonClick(BEACH)}>
								<div><img src={beach} width={50} height={50} alt={beach} /></div>
								<div>Beaches</div>
							</div>
						</div>
						<div className="radius-selector">
							<div className="pt-button-group">
								<button
									className={`pt-button near-me ${this.props.radius === NEAR_ME ? 'active' : ''}`}
									onClick={() => this.props.onRadiusButtonClick(NEAR_ME)}>
									Near me
								</button>
								<button
									className={`pt-button ${this.props.radius === WITHIN_INDIA ? 'active' : ''}`}
									onClick={() => this.props.onRadiusButtonClick(WITHIN_INDIA)}
								>
									Within India
								</button>
							</div>
						</div>
						<Link to="/places"><button className="pt-button pt-large go">Go</button></Link>
					</div>
				</div>
			</div>
		)
	}
}

export default LandingPage
