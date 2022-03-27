import HighchartsReact from "highcharts-react-official";
import Highchart from "highcharts";
import React, { useState, useEffect } from "react";
import { generateOptions } from "./ConfigLightChart";
import { Button, ButtonGroup, Grid } from "@material-ui/core";

export default function LightChart({ report }) {
  const [options, setOptions] = useState({});
  const [reportType, setReportType] = useState("all");

  useEffect(() => {
    let customData = [];
    switch (reportType) {
      case "all":
        customData = report;
        break;
      case "30":
        customData = report.slice(report.length - 30);
        break;
      case "7":
        customData = report.slice(report.length - 7);
        break;
      default:
        customData = report;
        break;
    }
    setOptions(generateOptions(customData));
  }, [report, reportType]);

  return (
    <>
      <Grid>
        <ButtonGroup
          size="small"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            color={reportType === "all" ? "secondary" : ""}
            onClick={() => setReportType("all")}
          >
            Tất cả
          </Button>
          <Button
            color={reportType === "30" ? "secondary" : ""}
            onClick={() => setReportType("30")}
          >
            30 ngày
          </Button>
          <Button
            color={reportType === "7" ? "secondary" : ""}
            onClick={() => setReportType("7")}
          >
            7 ngày
          </Button>
        </ButtonGroup>
        <HighchartsReact highcharts={Highchart} options={options} />
      </Grid>
    </>
  );
}
