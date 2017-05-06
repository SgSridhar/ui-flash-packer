import {getAjax$} from './api'

const api_key = 'AIzaSyBN8HDf7Ua-fdjECRtlQ3ziKuQJKQgZEKw'

export default function fetchPhoto(photoId) {
	const baseUri = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&'
	const url = `${baseUri}photoreference=${photoId}&key=${api_key}`
	return getAjax$(url)
}
