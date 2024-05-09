import React from "react";
import MapComponent from "../components/mapComponent";
import { Container, Stack } from "@mui/material";

const Home = () => {

  // on page load: add layer group
  // option to deselect all? removes all layers except political boundaries
  // when a person clicks on a layer, it removes all and replaces with the selected layer
  // https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html 


  // map controls: https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html 
  return (
    <Container maxWidth={false}>
      <header className="">
        <h1>Africa Resources Map</h1>
      </header>
      <section>
        <Stack direction={"row"} spacing={2}>
        <MapComponent />

        </Stack>
        
      </section>
    </Container>
  );
};

export default Home;
