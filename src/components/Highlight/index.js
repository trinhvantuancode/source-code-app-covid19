import { Grid } from "@material-ui/core";
import React from "react";
import HighlightCard from "./HighlightCard";

export default function Highlight({ report }) {
  const data = report && report.length ? report[report.length - 1] : [];
  const summary = [
    {
      titile: "Số ca nhiễm",
      count: data.Confirmed,
      type: "confirmed",
    },
    {
      titile: "Số ca khỏi",
      count: data.Recovered,
      type: "recovered",
    },
    {
      titile: "Số ca tử vong",
      count: data.Deaths,
      type: "deaths",
    },
  ];

  return (
    <Grid container spacing={3}>
      {summary.map((item) => (
        <HighlightCard
          key={item.type}
          titile={item.titile}
          count={item.count}
          type={item.type}
        />
      ))}
    </Grid>
  );
}
