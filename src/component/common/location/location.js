import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
class Location extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 13
        }
    }
    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <Map center={position} zoom={this.state.zoom}>
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