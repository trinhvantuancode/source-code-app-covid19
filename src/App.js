import { Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import CountrySelector from "./components/CountrySelector";
import { getCountries, getReportByCountry } from "./apis";
import { sortBy } from "lodash";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      setCountries(sortBy(res.data, "Country"));
      setSelectedCountryId("vn");
    });
  }, []);

  const handleOnChange = (e) => {
    // call api
    setSelectedCountryId(e.target.value);
  };

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );
      getReportByCountry(Slug).then((res) => {
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryId]);

  return (
    <div className="App">
      <Grid container>
        <Grid container className="Item">
          <Typography variant="h2" component="h2">
            Số liệu COVID-19
          </Typography>
        </Grid>
        <Grid container className="Item">
          <CountrySelector
            value={selectedCountryId}
            countries={countries}
            handleOnChange={handleOnChange}
          />
        </Grid>
        <Grid container className="Item">
          <Highlight report={report} />
        </Grid>
        <Grid container className="Item">
          <Summary report={report} selectedCountryId={selectedCountryId} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
