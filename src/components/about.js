import React from 'react'
import R from 'ramda'

import Header from './header'

class About extends React.Component {
	render() {
		return(
			<div className="about-page-container">
				<Header/>
				<div className="content-wrapper">
					<div className="content">
						<div className="about-heading">About Us</div>
						<div className="about-content">
							<p>
								Human beings run on emotions. The frenetic pace of city life might make you want to escape into the
								valleys in search of peace and quiet or you may rather imagine yourself on a beach all summer instead of
								commuting to work in the heat.  Flashpacker is an app which makes achieving this easier and more
								reliable for you. Instead of trying to plan hurried vacations to the first average tourist spot that
								attracts you only to find yourself a part of a different type of crowd and confusion, we help you make
								an informed decision by considering many factors such as
							</p>
							<p> - Nearest to your current location/ Easy Accessibility </p>
							<p> - The average tourist influx rate at that vacation spot to avoid overbooked hotels, extreme prices
								and massive crowd which might spoil your vacation</p>
							<p> - A database composing of a variety of options near you based on what kind of a vacation you are
								looking for. This includes many vacation spots which are not widely known within the general population
								making them an excellent retreat.
							</p>
							<p> - Rating and reviews about the place from experts and travellers from leading travel websites </p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default About
