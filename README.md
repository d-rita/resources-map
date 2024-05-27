# Resources Map

[![Netlify Status](https://api.netlify.com/api/v1/badges/ca727c11-8407-4ef0-ac22-99afeb655c8b/deploy-status)](https://app.netlify.com/sites/africa-resources/deploys)

<img width="1505" alt="all layers" src="https://github.com/d-rita/resources-map/assets/31903212/ab7d2c6d-b03c-468b-8f66-a6e407c782c3">

## About

This is a map showing the distribution of mineral resources in Africa. The information used here is from the work of the U.S. Geological Survey, and details can be found in this [geodatabase](https://www.sciencebase.gov/catalog/item/607611a9d34e018b3201cbbf). This website is built as a Legacy Project for the Women in Geospatial Mentorship Programme 2024.

This frontend is supported by a backend system comprising of:
- a Postgis database holding the spatial information about the countries and resources. 
- Geoserver, that exposes the data from the database as [WFS](https://www.ogc.org/standard/wfs/) layers used here


## Tools and Libraries
- Node (16+)
- Yarn/NPM
- [Open Layers](https://www.npmjs.com/package/ol)

## Get Started:
To get this project working locally, clone the repo onto your local machine. 

### Steps:
- Change into project directory
- Install dependencies using ```yarn```
- Start server using ```yarn start```
- Go to ```http://localhost:3000``` to see the app

## Author

- [Diana Nanyanzi](https://github.com/d-rita/)



