import React, { useEffect, useState } from 'react';
import { Badge, Box, Grid, Heading } from "@chakra-ui/react";
import './App.css';
import axios from 'axios';
import { Map, Marker } from "google-maps-react";
import MapContainer from './MapContainer';
import CardContainer from './CardContainer';


function App() {
  let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"
  const [data, setData] = useState([])

  async function fetchEarthquakes() {
    const response = await axios.get(url);
    setData(response.data.features)
    console.log(data);
}



  useEffect(() => {
    fetchEarthquakes()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Heading as="h2" size="lg" >ACME Tools</Heading>
        <Heading as="h2" size="lg" >Menu</Heading>
      </header>
      <div className="Quake-container">
        <Heading as="h2" size="2xl">Earthquake Tracker</Heading>
        <Heading as="h4" size="md" fontWeight="300" paddingTop="0.5em">Made with Live USGS Data</Heading>
        <Heading as="h3" size="xl" paddingTop="1.5em" paddingBottom="1em" isTruncated>Recent Quakes </Heading>
        <CardContainer data={data} />
        <Heading as="h2" size="xl" paddingBottom="0.5em" paddingTop="1.5em" isTruncated>Quake Map</Heading>
        <MapContainer data={data} />
      </div>
      <footer className="App-footer">
        <Heading as="h2" size="lg" color="white" paddingBottom="1em" paddingTop="1.5em" isTruncated>© 2021 ACME Corporation</Heading>
      </footer>
    </div>
  );
}

export default App;
