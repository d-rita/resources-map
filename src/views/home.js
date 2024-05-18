import React, { useState } from "react";
import MapComponent from "../components/mapComponent";
import { Container, Stack } from "@mui/material";
import { SidePanel } from "../components/sidePanel";
import { LAYERS } from "../components/layers";

const Home = () => {
  const [state, setState] = useState(LAYERS);

  const [info, setInfo] = useState([]);
  // on page load: add layer group
  // option to deselect all? removes all layers except political boundaries
  // when a person clicks on a layer, it removes all and replaces with the selected layer
  // https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html

  // map controls: https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html
  return (
    <Container maxWidth={false}>
      <header style={{ textAlign: "center" }}>
        <h1>Africa Resources Map</h1>
      </header>
      <section>
        <Stack direction={"row"} spacing={2}>
          <MapComponent resourceLayers={state} setInfo={setInfo} />
          <SidePanel resources={state} setResources={setState} details={info} />
        </Stack>
      </section>
      <footer style={{ textAlign: "center" }}>
        <p >
          This work is done by <span style={{ fontWeight: 'bold' }}>D'rita</span> under the WiG+ Legacy Project (2024)
        </p>
      </footer>
    </Container>
  );
};

export default Home;
