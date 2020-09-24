import React, {Component} from 'react';
import {Map, Marker, Popup, TileLayer } from 'react-leaflet';
// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet
class Location extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: this.props.lat,
            lng: this.props.lng,
            zoom: 13
        }
    }
    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <Map style={{width:'100%', height:'400px'}} center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </Map>
        );
    }
}

export default Location;