import {combineReducers} from 'redux'
import 'rxjs'
import {combineEpics} from 'redux-observable'
import {category, INIT_CATEGORY, categoryEpic} from './category'

export const rootReducer = combineReducers({
	category,
})

export const rootEpic = combineEpics(
	categoryEpic
)

export function getInitialState() {
	return ({
		category: INIT_CATEGORY,
	})
}

