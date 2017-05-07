import geolib from 'geolib'

export default function addDistanceData(data) {
	const updatedData = data.map((d) => {
		return ({
			...d,
			distance : geolib.getDistance(
				{latitude: 13.0827, longitude: 80.2707},
				{latitude: d.location[1], longitude: d.location[0]}
			)/(60*1000)
		})
	})

	return updatedData
}
