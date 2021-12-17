import React from 'react';
import {Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';


const iconPerson = new L.Icon({
    iconUrl: require('./pin.svg'),
    iconRetinaUrl: require('./pin.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

const Location =({locationDetail})=> {
        const position = [locationDetail.latitude, locationDetail.longitude];
        return (
            <Map style={{width:'100%', height:'400px'}} center={position} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={position} icon={iconPerson}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </Map>
        );
}

export default Location;