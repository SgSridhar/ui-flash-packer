import geolib from 'geolib'

export default function addDistanceData(data) {
	console.log(geolib.getDistance(
		{latitude: 51.5103, longitude: 7.49347},
		{latitude: 51.31, longitude: 7.28}
	))
	const updatedData = data.map((d) => ({
		...d,
		distance : geolib.getDistance(
			{latitude: 13.0827, longitude: 80.2707},
			{latitude: d.location[1], longitude: d.location[0]}
		)/(60*1000)
	}))
	return updatedData
}
