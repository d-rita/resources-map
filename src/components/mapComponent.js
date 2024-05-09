import React, { useEffect } from "react";
import Map from "ol/Map.js";
import TileLayer from "ol/layer/Tile.js";
import { OSM } from "ol/source";
import View from "ol/View.js";
import "ol/ol.css";
import {
  BoundariesVectorLayer,
  CoalVectorLayer,
  CopperVectorLayer,
  MineralDepositsVectorLayer,
  PotashVectorLayer,
} from "./layers";
import LayerGroup from "ol/layer/Group";

const ZOOMLEVEL = 3.9;
const PROJ = "EPSG:4326";

const MapComponent = () => {
  useEffect(() => {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        BoundariesVectorLayer,
        new LayerGroup({
          layers: [
            CoalVectorLayer,
        CopperVectorLayer,
        PotashVectorLayer,
        MineralDepositsVectorLayer
          ]
        })
        
      ],
      target: "map",
      view: new View({
        center: [20.0, 2.0],
        zoom: ZOOMLEVEL,
        projection: PROJ,
      }),
    });

    return () => map.setTarget(null);
  });
  return <div id="map" style={{ width: "100%", height: "90vh", margin: '0.5em', border: "1px", borderRadius: "50%"}} />;
};

export default MapComponent;
