import React, { Component } from "react"
import { compose } from "recompose"
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
    Polyline
} from "react-google-maps"

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {


    return (
        <GoogleMap defaultZoom={13} defaultCenter={{ lat: 40.5235, lng: -74.4556 }}>
            {props.markers.map(marker => {
                const onClick = props.onClick.bind(this, marker)
                return (
                    <Marker
                        key={marker.stop_id}
                        onClick={onClick}
                        position={{ lat: parseFloat(marker.location.lat), lng: parseFloat(marker.location.lng) }}
                    >
                        {props.selectedMarker === marker &&
                        <InfoWindow>
                            <div>
                                {marker.name}
                            </div>
                        </InfoWindow>}
                        }
                    </Marker>

                )
            })}
        </GoogleMap>
    )
})

export default class ShelterMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stops: [],
            route: [],
            selectedMarker: false
        }
    }
    componentDidMount() {

        let markerURL = "https://test-my.rutgers.edu/myr-widget-service/public/getVehicleByRoute?routeId";
        let busURL = "https://my.rutgers.edu/myr-widget-service/public/refreshVehicleStatus?routeId=";

        fetch(markerURL)
            .then(r => r.json())
            .then(data => {
                this.setState({ stops: data.stops })
            })
    }

    handleClick = (marker, event) => {
        // console.log({ marker })
        this.setState({ selectedMarker: marker })
    }
    render() {
        return (
            <MapWithAMarker
                selectedMarker={this.state.selectedMarker}
                markers={this.state.stops}
                onClick={this.handleClick}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQFwKqgXTJM4b6oLQV9O3QiyiD6YxKP0o&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}
