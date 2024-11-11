import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import cafeData from "./data/locations.json"
import { Icon } from "leaflet";

import L from "leaflet";
delete L.Icon.Default.prototype.getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});




const Map = () => {
  const position = [55.86639, -4.24919];
const icon = new Icon({
  iconUrl: "./markerIcon.svg",
  iconSize: [30, 30]



  
});

const initialMarker = [55.86639, -4.24919]
  const [activeCafe, setActiveCafe] = useState(initialMarker);

  const markerClicked = (position) => {   
    setActiveCafe(position)
}


  return (
    <>
    <MapContainer
      center={position}
      zoom={9}
      scrollWheelZoom={true}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

{cafeData.features.map((cafe) => (
        <Marker
          key={cafe.properties.cafe_id}
          position={[
            cafe.geometry.coordinates[0],
            cafe.geometry.coordinates[1],
          ]}
          icon={icon}
          eventHandlers={{ click: () => markerClicked(cafe.geometry.coordinates) }}  
        >
          <Popup>
            Here is the location of the {cafe.properties.name} cafe. <br/>
            {cafe.properties.desc}<br/>
          </Popup>
        </Marker>
      ))}



      {/* <Marker position={position}>
        <Popup>
          GCU
        </Popup>
      </Marker> */}

    </MapContainer>
    <div className="info">The cafe you have currently selected is located at latitude:{activeCafe[0]} longitude:{activeCafe[1]}.</div> 
    </>

  );
};
export default Map;
