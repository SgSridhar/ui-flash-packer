import {
	default as React,
	Component,
} from "react"

import {connect} from 'react-redux'

import {
	withGoogleMap,
	GoogleMap,
	InfoWindow,
	Marker,
} from 'react-google-maps'

const mapStateToProps = ((state) => ({
	data: state.category && state.category.data ? state.category.data.filter((d) => (
		!(d.location[0] === 0 && d.location[1] === 0)
	)) : []
}))

const PopUpInfoWindowExampleGoogleMap = withGoogleMap(props => {
	console.log(props)
	return(
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
		)
})

@connect(mapStateToProps)
export default class PopUpInfoWindowExample extends Component {

	constructor(props) {
		super(props)

		this.state = {
			center: {
				lat: 13.0827,
				lng: 80.2707,
			},
			selected: '',
			// array of objects of markers
			markers: this.props.data.map((place) => ({
				position: {
					lat: place.location[1],
					lng: place.location[0]
				},
				showInfo: false,
				infoContent: (
					<div>place.name</div>
				)
			})),
		}

		this.handleMarkerClick = this.handleMarkerClick.bind(this)
		this.handleMarkerClose = this.handleMarkerClose.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (this.props !== nextProps) {
			this.setState({...this.state,
				markers: nextProps.data.map((place) => ({
					position: {
						lat: place.location[1],
						lng: place.location[0]
					},
					showInfo: false,
					infoContent: (
						<div>{place.name}</div>
					)
				})),
			})
		}
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
