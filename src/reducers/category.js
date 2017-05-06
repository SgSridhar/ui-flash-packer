import {Observable} from 'rxjs'
import {STATUS_LOADING, STATUS_LOADED, NEAR_ME} from '../constants'
import {SET_RADIUS, REQUEST_STATE, RECEIVE_STATES, SET_CATEGORY, receiveState, receiveCategoriesError} from '../actions/search-results'

import {getCategories$} from '../utils/api'
import addDistanceData from '../utils/addDistanceData'

export const INIT_CATEGORY = {
	status: STATUS_LOADING,
	data: null,
	radius: NEAR_ME,
	category: '',
}

export function category(state = INIT_CATEGORY, action) {
	switch(action.type) {
	case SET_RADIUS:
		return {...state, radius: action.payload.radius}
	case SET_CATEGORY:
		return {...state, category: action.payload.category}
	case RECEIVE_STATES:
		return {...state, status: STATUS_LOADED, data: action.payload.data}
	default:
		return state
	}
}

export function categoryEpic(action$, store) {
	return action$
		.ofType(REQUEST_STATE)
		.switchMap((action) =>
			getCategories$(action.payload.state, '', store.getState().category.category)
				.map(({response}) => {
					const res = addDistanceData(response)
					return receiveState(res)
				})
				.catch((err) => {
					return Observable.of(receiveCategoriesError(err))
				})
		)
}
