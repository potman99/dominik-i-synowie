// GoogleMap.js
import React from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";


function GoogleMapContainer() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API,
  });
  const center = useMemo(() => ({ lat: 50.94336448156067, lng: 21.37904255767238 }), []);

    const markerProps = {
        lat:  50.94342194249619, // Latitude of the marker
        lng: 21.379010371168977, // Longitude of the marker
      };

  return (
    <div className="h-full w-full" >
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          center={center}
          zoom={17}
          mapContainerStyle={{width: "100%", height: "100%"}}
        >
        <Marker position={{ lat: markerProps.lat, lng: markerProps.lng }}  />
        </GoogleMap>
        )}
    </div>
  );
}

export default GoogleMapContainer;
