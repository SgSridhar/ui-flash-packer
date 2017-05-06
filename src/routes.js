import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import LandingPage from './components/landing-page'

const history = createHistory()

import RootApp from './components/root'
import Category from './components/category'
import SearchResults from './components/search-results'

const AppRoute = (() => (
	<Router history={history}>
		<div className="inner-app">
			<Route exact path="/" component={LandingPage} />
			<Route path="/places" component={SearchResults} />
			<Route path="/category" component={Category} />
		</div>
	</Router>
))

export default AppRoute
