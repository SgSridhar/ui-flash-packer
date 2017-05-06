import {
	default as React,
	Component,
} from "react"

import {
	withGoogleMap,
	GoogleMap,
	InfoWindow,
	Marker,
} from 'react-google-maps'

const PopUpInfoWindowExampleGoogleMap = withGoogleMap(props => (
	<GoogleMap
		defaultZoom={7}
		center={props.center}
	>
		{props.markers.map((marker, index) => (
			<Marker
				key={index}
				position={marker.position}
				onClick={() => props.onMarkerClick(marker)}
			>
				{/*
				 Show info window only if the 'showInfo' key of the marker is true.
				 That is, when the Marker pin has been clicked and 'onCloseClick' has been
				 Successfully fired.
				 */}
				{marker.showInfo && (
					<InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
						<div>{marker.infoContent}</div>
					</InfoWindow>
				)}
			</Marker>
		))}
	</GoogleMap>
))

export default class PopUpInfoWindowExample extends Component {

	constructor(props) {
		super(props)
		this.state = {
			center: {
				lat: 13.0827,
				lng: 80.2707,
			},

			// array of objects of markers
			markers: [
				{
					position: new google.maps.LatLng(11.7667, 78.2333),
					showInfo: false,
					infoContent: (
						<div>Yercaud</div>
					),
				},
				{
					position: new google.maps.LatLng(11.4064, 76.6932),
					showInfo: false,
					infoContent: (
						<div>Ooty</div>
					),
				},
				{
					position: new google.maps.LatLng(11.2485, 78.3387),
					showInfo: false,
					infoContent: (
						<div>Kolli Hills</div>
					),
				},
				{
					position: new google.maps.LatLng(10.2381, 77.4892),
					showInfo: false,
					infoContent: (
						<div>Kodaikanal</div>
					),
				},
			],
		}

		this.handleMarkerClick = this.handleMarkerClick.bind(this)
		this.handleMarkerClose = this.handleMarkerClose.bind(this)
	}

	// Toggle to 'true' to show InfoWindow and re-renders component
	handleMarkerClick(targetMarker) {
		this.setState({
			markers: this.state.markers.map(marker => {
				if (marker === targetMarker) {
					return {
						...marker,
						showInfo: true,
					}
				}
				return marker
			}),
		})
	}

	handleMarkerClose(targetMarker) {
		this.setState({
			markers: this.state.markers.map(marker => {
				if (marker === targetMarker) {
					return {
						...marker,
						showInfo: false,
					}
				}
				return marker
			}),
		})
	}

	render() {
		return (
			<PopUpInfoWindowExampleGoogleMap
				containerElement={
					<div style={{ height: `100%` }} />
				}
				mapElement={
					<div style={{ height: `100%` }} />
				}
				center={this.state.center}
				markers={this.state.markers}
				onMarkerClick={this.handleMarkerClick}
				onMarkerClose={this.handleMarkerClose}
			/>
		)
	}
}
