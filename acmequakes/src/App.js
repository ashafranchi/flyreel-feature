import React, { useEffect, useState } from 'react';
import { Badge, Box, Grid } from "@chakra-ui/react";
import './App.css';
import axios from 'axios';
import { Map, Marker } from "google-maps-react";
import MapContainer from './MapContainer';


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
        <div className="quakeContainer">
        <h1>Earthquakes from the past month: </h1>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {data.map((e) => (
      <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Recent
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {e.properties.alert}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
        >
          {e.properties.title}
        </Box>

        <Box>
          {e.properties.felt}
          <Box className="Felt" as="span" color="blue.600" fontSize="md">
            people felt
          </Box>
        </Box>
      </Box>
    </Box>
    ))}
    </Grid>
    <MapContainer data={data}/>
  </div>
      </header>
    </div>
  );
}

export default App;
