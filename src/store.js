import {createStore, applyMiddleware} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import {rootReducer, rootEpic, getInitialState} from './reducers/root-reducer'

let store

export default function getStore() {
	if (!store) {
		store = createStore(
			rootReducer,
			getInitialState(),
			applyMiddleware(createEpicMiddleware(rootEpic))
		)
	}

	window.store = store

	return store
}
