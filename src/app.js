import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Spinner, Intent} from '@blueprintjs/core'
import getStore from './store'

const store = getStore()

import './less/app.main.less'

import '../node_modules/@blueprintjs/core/dist/blueprint.css'
import '../node_modules/@blueprintjs/datetime/dist/blueprint-datetime.css'

const App  = () => (
	<Spinner intent={Intent.PRIMARY} />
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))
