import React, { Component } from "react";
import { compose } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
    Polyline
} from "react-google-maps";
import axios from 'axios';

const decodePolyline = require('decode-google-map-polyline');

var listOfDecodedSegments = new Array();
var listOfSegmentsByIndex = new Array();
var segmentArrayLength = [];

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

            {props.buses.map(bus => {
                return (
                    <Marker
                        key={bus.vehicle_id}
                        position={{ lat: parseFloat(bus.location.lat), lng: parseFloat(bus.location.lng)}}
                        icon={
                            {
                                url: './bus-marker.png'
                            }
                        }
                    >
                    </Marker>
                )
            })}

            {props.segmentArrayLength[4012660].map(polyline=> {

                return (
                    <Polyline
                        path={polyline}
                        options={{
                            strokeColor: '#00ffff',
                            strokeOpacity: 1,
                            strokeWeight: 2
                        }}
                        >
                    </Polyline>
                )
            })}


        </GoogleMap>

    )
})

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busStops: [],
            busSegment: [],
            vehicles: [],
            routes: [],
            selectedMarker: false,
        }
    }


    componentDidMount(){
        this.getStopLocation();
        this.getVechileLocation();
        this.getSegment();
    }

    getStopLocation(){

        var listOfDecodedSegments = new Array();
        var listOfSegmentsByIndex = new Array();
        var segmentArrayLength = [];

        fetch('https://test-my.rutgers.edu/myr-widget-service/public/getVehicleByRoute?routeId')
            .then(r => r.json())
            .then(data => {
                this.setState({ busStops: data.stops, busSegment: data.segments})
                    // console.log(this.state.busStops);
                    // console.log(this.state.busSegment)
            })
    }

    getSegment(){



        axios.get("https://transloc-api-1-2.p.rapidapi.com/routes.json?agencies=1323", { headers: {'X-RapidAPI-Key': 'ri3d6FVEqPmshh2yOdwBPXY2GMIPp1ruryvjsnOzJpKAGBwCDY'}  })
            .then(res => {
                // var routeNumbers = [2, 3, 4, 6, 7, 8, 9, 10, 19, 20, 24]
                var routes = res.data.data[1323];
                /*
                for (var i = 0; i < routeNumbers.length; i++) {
                    routes.push(res.data.data[1323][routeNumbers[i]]);
                }
                */
                this.setState({
                    routes: routes
                });
                // console.log(this.state.routes);
                // console.log(res);
                console.log(this.state.routes);



                for (let p = 0; p < this.state.routes.length; p++) {
                    listOfSegmentsByIndex[p] = new Array();
                    for (let x = 0; x < this.state.routes[p].segments.length; x++) {
                        listOfSegmentsByIndex[p].push(this.state.routes[p].segments[x][0])

                    }

                }
                console.log(listOfSegmentsByIndex);

                axios.get("https://transloc-api-1-2.p.rapidapi.com/segments.json?agencies=1323", { headers: {'X-RapidAPI-Key': 'ri3d6FVEqPmshh2yOdwBPXY2GMIPp1ruryvjsnOzJpKAGBwCDY'}  })
                    .then(res => {
                        // console.log(res.data.data);

                        for (let p = 0; p < this.state.routes.length; p++) {
                            listOfDecodedSegments[p] = new Array();
                            for (let x = 0; x < listOfSegmentsByIndex[p].length; x++) {
                                listOfDecodedSegments[p].push(decodePolyline(res.data.data[listOfSegmentsByIndex[p][x]]));

                            }
                        }

                        console.log(listOfDecodedSegments);

                        for (let i = 0; i < listOfDecodedSegments.length; i++) {

                            segmentArrayLength.push(this.state.routes[i].route_id);
                            segmentArrayLength[this.state.routes[i].route_id] = new Array();

                            for (let k = 0; k < listOfSegmentsByIndex[i].length; k++) {
                                segmentArrayLength[this.state.routes[i].route_id].push(listOfDecodedSegments[i][k]);
                            }

                        }
                        console.log(segmentArrayLength[4012628]);



                    });

            });
    }


    getVechileLocation(){
        setTimeout(() => {
            axios.get("https://transloc-api-1-2.p.rapidapi.com/vehicles.json?agencies=1323", { headers: {'X-RapidAPI-Key': 'ri3d6FVEqPmshh2yOdwBPXY2GMIPp1ruryvjsnOzJpKAGBwCDY'} })
                .then(res => {
                    var vehicles = res.data.data[1323];
                    this.setState({
                        vehicles: vehicles
                    });
                    console.log(this.state.vehicles);
                })
        },2000)
    }

    handleClick = (marker, event) => {
        console.log({ marker });
        this.setState({ selectedMarker: marker })
    };



    render() {
        return (
            <MapWithAMarker
                selectedMarker={this.state.selectedMarker}
                markers={this.state.busStops}
                polylines={this.state.routes}
                buses={this.state.vehicles}
                segmentArrayLength = {segmentArrayLength}
                onClick={this.handleClick}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQFwKqgXTJM4b6oLQV9O3QiyiD6YxKP0o&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `700px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}
