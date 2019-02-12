import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const style = {
    width: '100%',
    height: '100%'
};

export class Maps extends Component {

    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={style}
                initialCenter={{ lat: -1.2884, lng: 36.8233 } }
                >
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Kenyatta International Convention Centre'}
                    />
                    <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                    >
                    <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                    </InfoWindow>
                    </Map>
                    );
                }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDQFwKqgXTJM4b6oLQV9O3QiyiD6YxKP0o'
})(Maps);
