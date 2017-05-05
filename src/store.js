import {createStore} from 'redux'
import {rootReducer, getInitialState} from './reducers/root-reducer'

let store

export default function getStore() {
	if (!store) {
		store = createStore(
			rootReducer,
			getInitialState()
		)
	}

	window.store = store

	return store
}
