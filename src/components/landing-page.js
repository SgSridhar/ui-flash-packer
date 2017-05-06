import React from 'react'
import R from 'ramda'

import Header from './header'
import flashpacker from '../assets/icons/flashpacker.png'
import flashpackerTransparent from '../assets/icons/flashpacker-transparent.png'

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
								<button className="pt-button pt-large near-me">Near me</button>
								<button className="pt-button pt-large">Within India</button>
								<button className="pt-button pt-large">Take me places!</button>
							</div>
						</div>
						<div className="search-bar pt-input-group">
							<span className="pt-icon pt-icon-search"></span>
							<input className="pt-input" type="search" placeholder="I want to go to .." dir="auto" />
						</div>
						<div className="default-categories">
							<div className="hill-stations"><div>Hill Stations</div></div>
							<div className="beaches"><div>Beaches</div></div>
							<div className="historical"><div>Historical</div></div>
						</div>
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
