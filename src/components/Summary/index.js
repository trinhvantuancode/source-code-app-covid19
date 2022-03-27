import { Grid } from "@material-ui/core";
import LightChart from "../Charts/LightChart";
// import HighMaps from "../Charts/HighMaps";
import React, { useState, useEffect } from "react";

export default function Summary({ report, selectedCountryId }) {
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    if (selectedCountryId) {
      import(`@highcharts/map-collection/countries/vn/vn-all.geo.json`).then(
        (res) => console.log(res)
      );
    }
  }, [selectedCountryId]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <LightChart report={report} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <HighMaps mapData={mapData} />
        </Grid>
      </Grid>
    </>
  );
}
