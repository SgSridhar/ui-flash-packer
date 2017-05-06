import {Observable} from 'rxjs'
import {STATUS_LOADING, STATUS_LOADED} from '../constants'
import {REQUEST_STATE, RECEIVE_STATES, receiveState, receiveCategoriesError} from '../actions/search-results'

import {getCategories$} from '../utils/api'

export const INIT_CATEGORY = {
	status: STATUS_LOADING,
	category: null,
}

export function category(state = INIT_CATEGORY, action) {
	switch(action.type) {
	case RECEIVE_STATES:
		return {...state, status: STATUS_LOADED, category: action.payload.data}
	default:
		return state
	}
}

export function categoryEpic(action$) {
	return action$
		.ofType(REQUEST_STATE)
		.switchMap((action) =>
			getCategories$(action.payload.state)
				.map(({response}) => receiveState(response))
				.catch((err) => {
					return Observable.of(receiveCategoriesError(err))
				})
		)
}
