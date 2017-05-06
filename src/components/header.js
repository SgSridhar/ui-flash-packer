import React from 'react'
import R from 'ramda'

import flashpacker from '../assets/icons/flashpacker.png'

class Header extends React.Component {
	render() {
		return(
				<div className="header">
					<div className="logo"><a href="/"><img className="flashpacker-logo" src={flashpacker} width={200} height={70} alt="flashpacker" /></a></div>
					<div className="action-buttons-container">
						<div className="about"><a href="/#/about">About</a></div>
						<div className="my-location">
							<span className="pt-icon pt-icon-map-marker"></span>
							<div>Chennai</div>
						</div>
					</div>
				</div>
		)
	}
}

export default Header
