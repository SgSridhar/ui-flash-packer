import {Observable} from 'rxjs'
import {STATUS_LOADING} from '../constants'
import {SET_CATEGORY, receiveCategoriesError} from '../actions/category'
import {getPlaces} from '../actions/places'

import {getCategories$} from '../utils/api'

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
		.switchMap((action) =>
			getCategories$()
				.map(() => getPlaces(action.payload.category))
				.catch((err) => {
					return Observable.of(receiveCategoriesError(err))
				})
		)
}
