import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position = [36.59783708008768, 53.06466164759884];

const MapLeafLet = () => {
  return (
    <MapContainer
      className="w-full h-full"
      center={position}
      zoom={13}
      scrollWheelZoom={true}>
      <TileLayer
        attribution="&copy; "
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>آکادمی بحر</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapLeafLet;
