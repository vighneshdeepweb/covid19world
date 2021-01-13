import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidmlnaG5lc2hkZWVwMjAiLCJhIjoiY2s4ajU3OTR5MDJzNDNocjd0eG9vcG02MCJ9.fpfraPMqhDGWgskVdTn2oQ"
          attribution='&copy; <a href="https://www.openstreetmap.org/about/">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
