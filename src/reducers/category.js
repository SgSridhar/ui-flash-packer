import {STATUS_LOADING} from '../constants'

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
