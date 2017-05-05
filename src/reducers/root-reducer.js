import {combineReducers} from 'redux'
import {category, INIT_CATEGORY} from './category'

export const rootReducer = combineReducers({
	category,
})

export function getInitialState() {
	return ({
		category: INIT_CATEGORY,
	})
}

