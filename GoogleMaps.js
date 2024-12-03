import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import mapStyles from "./mapStyles";
import Search from "./AutoSearch.js";

//Variable to load libraries
const libraries = ["places"];

//Map dimensions
const mapContainerStyle = {
  width: '100vw',
  height: "100vh",
}

//Default Center of the Map
const center = {
  lat: 33.4484, 
  lng: -112.0740
}

//Map Style
const options = {
    styles: mapStyles,

    //Disable features of the map
    disableDefaultUI: true,

    //Renable features
    zoomControl: true,

}

function Googlemap() {  
  //Load the map
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: "AIzaSyBde_VAyKK0WQ9XUAxLk5BrBQD3CV-uGCg",
    libraries,
  });
  
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((event) => {
    console.log(event);

    setMarkers(current => [
        ...current, 
        {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date(),
        },
    ]);
  }, []);

  //Access the map anywhere in the code with a reference to the map
  //useRef => retain state without causing re-renders
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  
  return (
    <div>
        <h1>
            Animal Rescue Wilderness Sightings
            {/* To use emojis, wrap in span with attributes */}
            <span role="img" aria-label="monkey">🐒</span>
        </h1>

        <Search />

        <GoogleMap 
            mapContainerStyle={mapContainerStyle}
            zoom = {8}
            center = {center}
            options = {options}
            onClick = {onMapClick}
            onLoad = {onMapLoad}
        >
            {/* Show a marker component with every click*/}
            {markers.map(marker => (
                <Marker 
                    key = {marker.time.toISOString()}
                    position = {{lat: marker.lat, lng: marker.lng}}
                    //Overide red marker icon
                    icon = {{
                        url: "/penguin.svg",
                        //Size of the penguin marker
                        scaledSize: new window.google.maps.Size(30,30),
                        //Place the penguin in the middle of the cursor
                        origin: new window.google.maps.Point(0,0),
                        //Half "Size" values position in the middle
                        anchor: new window.google.maps.Point(15,15),
                    }}
                    //Info window display when clicked
                    onClick={() => {
                        setSelected(marker);
                    }}
                />
            ))}

            {/* Checks to see if selected has a value, otherwise return null */}
            {selected ? (
                <InfoWindow 
                    //Position window above the marker
                    position = {{lat: selected.lat, lng: selected.lng}}
                    //Set selected back to null when closed
                    onCloseClick = {() => {
                        setSelected(null)
                    }}
                >
                    <div>
                        <h2>Animal Report!</h2>
                        <p>Time Spotted: {formatRelative(selected.time, new Date())}</p>
                    </div>
                </InfoWindow>
            ) : null}
        </GoogleMap>
    </div>
  );
}

export default Googlemap;
