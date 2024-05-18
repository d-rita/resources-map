import React, { useCallback, useEffect, useRef } from "react";
import Map from "ol/Map.js";
import TileLayer from "ol/layer/Tile.js";
import { OSM } from "ol/source";
import View from "ol/View.js";
import "ol/ol.css";
import {
  BoundariesTileLayer,
  CoalVectorLayer,
  CopperVectorLayer,
  MineralDepositsVectorLayer,
  PotashVectorLayer,
} from "./layers";
import LayerGroup from "ol/layer/Group";
import VectorLayer from "ol/layer/Vector";

const ZOOMLEVEL = 3.75;
const PROJ = "EPSG:4326";

const MapComponent = (props) => {
  const { resourceLayers, setInfo } = props;
  const mapRef = useRef(null);

  const setVisibility = useCallback(
    (layer) => {
      resourceLayers.forEach((l) => {
        if (l.layer === layer) {
          layer.setVisible(l.visible);
        }
      });
    },
    [resourceLayers]
  );

  useEffect(() => {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        BoundariesTileLayer,
        new LayerGroup({
          layers: [
            CoalVectorLayer,
            CopperVectorLayer,
            MineralDepositsVectorLayer,
            PotashVectorLayer,
          ],
        }),
      ],
      target: "map",
      view: new View({
        center: [20.0, 2.0],
        zoom: ZOOMLEVEL,
        projection: PROJ,
      }),
    });

    map
      .getLayerGroup()
      .getLayersArray()
      .forEach((layer) => {
        if (layer instanceof VectorLayer) {
          setVisibility(layer);
        }
      });

    map.on("singleclick", (event) => {
      let features = map.getFeaturesAtPixel(event.pixel);
      setInfo(features);
    });

    return () => {
      map.setTarget(null);
    };
  }, [setInfo, setVisibility]);

  return (
    <>
      <div
        id="map"
        ref={mapRef}
        style={{
          width: "80%",
          height: "83vh",
          margin: "0.5em",
          border: "1px",
          borderRadius: "50%",
        }}
      />
    </>
  );
};

export default MapComponent;
