export const GET_PLACES = 'GET_PLACES'

export function getPlaces(category) {
	console.log(`Getting places for the category --> ${category}`)
	return {
		type: GET_PLACES,
	}
}
