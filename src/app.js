import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import getStore from './store'

import AppRoute from './routes'

const store = getStore()

import './less/app.main.less'

import '../node_modules/@blueprintjs/core/dist/blueprint.css'
import '../node_modules/@blueprintjs/datetime/dist/blueprint-datetime.css'

const App = (() => (
	<Provider store={store}>
		<AppRoute />
	</Provider>
))

ReactDOM.render(<App />, document.getElementById('app'))
