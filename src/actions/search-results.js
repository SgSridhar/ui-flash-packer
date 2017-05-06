export const SET_CATEGORY = 'SET_CATEGORY'
export const REQUEST_STATE = 'REQUEST_STATE'
export const RECEIVE_STATES = 'RECEIVE_STATES'
export const RECEIVE_CATEGORY_ERROR = 'RECEIVE_CATEGORY_ERROR'

export function setCategory(category) {
	return {
		type: SET_CATEGORY,
		payload: {category}
	}
}

export function requestState(state) {
	return {
		type: REQUEST_STATE,
		payload: {state}
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
