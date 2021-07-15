import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Button } from "@chakra-ui/react";

const center = {
  lat: 38.5075,
  lng: -119.4998333
};

const MapContainer = ({ data }) => {

  const mapStyles = () => {
      return {
        marginTop: "10px",
        marginBottom: "60px",
        marginLeft: "auto",
        marginRight: "auto",
        height: "80vh",
        width: "60%",
        borderRadius: "10px",
      }
    }

     return (
    <>
      <LoadScript
        id="script-loader"
        googleMapsApiKey='AIzaSyDIrnzXxTpkpUpqVagW4TLsMSjVyUQTmfY'
      >
      <h1>Earthquake Tracker</h1>
        <GoogleMap
          id='example-map'
          mapContainerStyle={mapStyles()}
          draggable={true}
          zoom={8}
          center={center}
        >
          {
            data.map((quake, index) => {
              return (
                <Marker 
                  key={index}
                  title={quake.properties.place}
                  name={quake.properties.place}
                  position={{
                    lat: quake.geometry.coordinates[1],
                    lng: quake.geometry.coordinates[0]
                  }}
              />
              )
            })
          }
        </GoogleMap>
      </LoadScript>
    </>
     )
  }

export default MapContainer;