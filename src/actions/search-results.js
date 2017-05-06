export const SET_RADIUS = 'SET_RADIUS'
export const SET_CATEGORY = 'SET_CATEGORY'
export const REQUEST_STATE = 'REQUEST_STATE'
export const RECEIVE_STATES = 'RECEIVE_STATES'
export const RECEIVE_CATEGORY_ERROR = 'RECEIVE_CATEGORY_ERROR'

export function setRadius(radius) {
	return {
		type: SET_RADIUS,
		payload: {radius},
	}
}


export function setCategory(category) {
	return {
		type: SET_CATEGORY,
		payload: {category}
	}
}

export function requestState(category, state) {
	return {
		type: REQUEST_STATE,
		payload: {category, state}
	}
}

export function receiveState(data) {
	return {
		type: RECEIVE_STATES,
		payload: {data},
	}
}

export function setState(state) {
	return {
		type: RECEIVE_STATES,
		payload: {state}
	}
}

export function receiveCategoriesError() {
	return {
		type: RECEIVE_CATEGORY_ERROR,
	}
}
