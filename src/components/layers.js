import GeoJSON from "ol/format/GeoJSON.js";
import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import {
  BOUNDARIES_WFS_URL,
  BOUNDARIES_WMS_URL,
  COAL_WFS_URL,
  COPPER_WFS_URL,
  MINERALS_WFS_URL,
  POTASH_WFS_URL,
} from "../config";
import TileLayer from "ol/layer/Tile";
import { TileWMS } from "ol/source";

export const CoalVectorLayer = new VectorLayer({
  source: new VectorSource({
    url: COAL_WFS_URL,
    format: new GeoJSON(),
  }),
  style: {
    "stroke-width": 0.5,
    "stroke-color": "#737473",
    "fill-color": "#737473",
  },
});

export const CopperVectorLayer = new VectorLayer({
  source: new VectorSource({
    url: COPPER_WFS_URL,
    format: new GeoJSON(),
  }),
  style: {
    "stroke-width": 0.5,
    "stroke-color": "#B87333",
    "fill-color": "#B87333",
  },
});

export const PotashVectorLayer = new VectorLayer({
  source: new VectorSource({
    url: POTASH_WFS_URL,
    format: new GeoJSON(),
  }),
  style: {
    "stroke-color": "#e07757",
    "stroke-width": 0.5,
    "fill-color": "#e07757",
  },
});

export const MineralDepositsVectorLayer = new VectorLayer({
  source: new VectorSource({
    url: MINERALS_WFS_URL,
    format: new GeoJSON(),
  }),
});

export const BoundariesVectorLayer = new VectorLayer({
  source: new VectorSource({
    url: BOUNDARIES_WFS_URL,
    format: new GeoJSON(),
  }),
  style: {
    // 'stroke-color': '#000000',
    "stroke-width": 0.75,
    "stroke-color": "black",
    "fill-color": "rgba(100,100,100,0.25)",
  },
});

export const BoundariesTileLayer = new TileLayer({
  source: new TileWMS({
    url: BOUNDARIES_WMS_URL,
    serverType: "geoserver",
    transition: 0,
  }),
});

export const LAYERS = [
  {
    label: "Potassium",
    layer: PotashVectorLayer,
    visible: true,
  },
  {
    label: "Mineral Deposits",
    layer: MineralDepositsVectorLayer,
    visible: true,
  },
  {
    label: "Copper",
    layer: CopperVectorLayer, 
    visible: true,
  },
  {
    label: "Coal",
    layer: CoalVectorLayer,
    visible: true,
  },
];
