import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Card, List, ListItemText } from "@mui/material";

function CheckboxesGroup(props) {
  const { resources, setResources } = props;

  const handleChange = (event) => {
    const nextResources = resources.map((resource) => {
      if (resource.label !== event.target.name) {
        return resource;
      } else {
        return {
          ...resource,
          visible: event.target.checked,
        };
      }
    });
    setResources(nextResources);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Mineral Resource Map Layers</FormLabel>
        <FormGroup>
          {resources.map((resource, i) => {
            const { label, visible } = resource;
            return (
              <FormControlLabel
                key={`${label}${i}`}
                control={
                  <Checkbox
                    checked={visible}
                    onChange={handleChange}
                    name={label}
                  />
                }
                label={label}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </Box>
  );
}

const checkValidity = (property) => {
  return property !== null && property !== "Not assessed";
};

const ViewDetailsSection = (props) => {
  return (
    <>
      {props.details.length ? (
        <h4 style={{ textAlign: "center" }}>
          Details About the Place You Clicked
        </h4>
      ) : null}

      {props.details.map((info, i) => {
        let properties = info.getProperties();
        let minerals = [];
        return (
          <List
            key={`resources-list${i}`}
            style={{
              border: "0.5px solid black",
              margin: "0.5rem",
              padding: "0.25rem",
            }}
          >
            {Object.entries(properties).map((property, index) => {
              const country = property[0] === "country" &&
                checkValidity(property[1]) && (
                  <ListItemText key={`${property[0]}${index}`}>
                    <span style={{ fontWeight: "bold" }}>
                      Country/Countries:
                    </span>{" "}
                    {property[1]}
                  </ListItemText>
                );
              const sites = property[0] === "featurenam" &&
                checkValidity(property[1]) && (
                  <ListItemText key={`${property[0]}${index}`}>
                    <span style={{ fontWeight: "bold" }}>Site/Sites:</span>{" "}
                    {property[1]}
                  </ListItemText>
                );
              const towns = property[0] === "towns" &&
                checkValidity(property[1]) && (
                  <ListItemText key={`${property[0]}${index}`}>
                    <span style={{ fontWeight: "bold" }}>Town/Towns:</span>{" "}
                    {property[1]}
                  </ListItemText>
                );
              const source = property[0] === "infsource1" &&
                checkValidity(property[1]) && (
                  <ListItemText key={`${property[0]}${index}`}>
                    <span style={{ fontWeight: "bold" }}>Source:</span>{" "}
                    <cite>{property[1]}</cite>
                  </ListItemText>
                );

              if (
                property[0] === "name" ||
                ["dsgattr01", "dsgattr02", "dsgattr03", "dsgattr04"].includes(
                  property[0]
                )
              ) {
                if (checkValidity(property[1])) {
                  minerals.push(property[1]);
                }
              }

              return (
                <>
                  {country}
                  {sites}
                  {towns}
                  {source}
                </>
              );
            })}
            <ListItemText key={`minerals${i}`}>
              <span style={{ fontWeight: "bold" }}>Minerals:</span>{" "}
              {minerals.join(", ")}
            </ListItemText>
          </List>
        );
      })}
    </>
  );
};

export const SidePanel = (props) => {
  return (
    <Card style={{ width: "40%", height: "83vh", overflowY: "auto" }}>
      <section style={{ margin: "1rem" }}>
        <h3 style={{ textAlign: "center" }}>Information Section</h3>
        <p>
          This map shows the distribution of mineral resources across various
          African countries.
        </p>
        <p>
          The information used here is from the work of the U.S. Geological
          Survey, and more can be found{" "}
          <a
            href="https://www.sciencebase.gov/catalog/item/607611a9d34e018b3201cbbf"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
      </section>
      <section>
        <CheckboxesGroup {...props} />
      </section>
      <p style={{ margin: "1rem" }}>
          You can choose which layers to show in the map. When you click on an
          area with a resource, the details will render below
        </p>

      <section style={{ margin: "0 0.5rem" }}>
      
        <ViewDetailsSection {...props} />
      </section>
    </Card>
  );
};
