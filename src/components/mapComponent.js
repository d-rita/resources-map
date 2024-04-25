import React, { useEffect } from "react";
import Map from "ol/Map.js";
import TileLayer from "ol/layer/Tile.js";
import { OSM } from "ol/source";
import View from "ol/View.js";
import "ol/ol.css";

const MapComponent = () => {
  useEffect(() => {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: "map",
      view: new View({
        center: [20, 2.0],
        zoom: 3.7,
        projection: "EPSG:4326",
      }),
    });

    return () => map.setTarget(null);
  });
  return <div id="map" style={{ width: "100%", height: "100vh" }} />;
};

export default MapComponent;
