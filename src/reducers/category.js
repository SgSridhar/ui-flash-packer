import {STATUS_LOADING} from '../constants'
import {SET_CATEGORY} from '../actions/category'
import {getPlaces} from '../actions/places'

export const INIT_CATEGORY = {
	status: STATUS_LOADING,
	category: {
		type: '',
		places: [],
		recommendations: []
	},
}

export function category(state = INIT_CATEGORY, action) {
	switch(action.type) {
	default:
		return state
	}
}

export function categoryEpic(action$) {
	return action$
		.ofType(SET_CATEGORY)
		.map((action) => getPlaces(action.payload.category))
}
