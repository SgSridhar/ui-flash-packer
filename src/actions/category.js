export const SET_CATEGORY = 'SET_CATEGORY'
export const RECEIVE_CATEGORY_ERROR = 'RECEIVE_CATEGORY_ERROR'

export function setCategory(category) {
	return {
		type: SET_CATEGORY,
		payload: {category}
	}
}

export function receiveCategoriesError() {
	return {
		type: RECEIVE_CATEGORY_ERROR,
	}
}
