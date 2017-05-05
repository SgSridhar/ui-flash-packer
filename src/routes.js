import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'
import createHistory from 'history/createHashHistory'

const history = createHistory()

import RootApp from './components/root'
import Category from './components/category'
import Places from './components/places'

const AppRoute = (() => (
	<Router history={history}>
		<div>
			<Route exact path="/" component={RootApp} />
			<Route path="/places" component={Places} />
			<Route path="/category" component={Category} />
		</div>
	</Router>
))

export default AppRoute
