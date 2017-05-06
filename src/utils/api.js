import {Observable} from 'rxjs'
import R from 'ramda'
import {API_BASE_URL} from '../constants'

function ajax$(config) {
	return Observable.ajax({
		url: `${API_BASE_URL}${config.url}`,
		...R.dissoc('url', config),
		dataType: 'jsonp',
		responseType: 'json',
		headers: {'Content-Type': 'application/json'},
		timeout: 5 * 1000,
	})
}

function getAjax$(url) {
	return ajax$({method: 'GET', url})
}

function postAjax$(url) {
	return ajax$({method: 'POST', url})
}

export function getCategories$(state, city, category) {
	const query = []
	if (state) query.push(`state=${state}`)
	if (city) query.push(`city=${city}`)
	if (category) query.push(`category=${category}`)
	return getAjax$(`/places?${query.join('&')}`)
}
