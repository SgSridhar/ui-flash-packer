import React from 'react'
import ReactDOM from 'react-dom'
import {Spinner, Intent} from '@blueprintjs/core'

import './less/app.main.less'

import '../node_modules/@blueprintjs/core/dist/blueprint.css'
import '../node_modules/@blueprintjs/datetime/dist/blueprint-datetime.css'

const App  = () => (
	<Spinner intent={Intent.PRIMARY} />
)

ReactDOM.render(<App />, document.getElementById('app'))
