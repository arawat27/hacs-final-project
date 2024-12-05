import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Circle,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import mapStyles from "./mapStyles";
import Geocoding from "./Geocoding.js";
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
  
  const [office, setOffice] = React.useState();
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [geocode, setGeocode] = React.useState();

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

        <Search 
          setOffice = {(position) => {
            setOffice(position);
            mapRef.current?.panTo(position);
          }}
        />

        <Geocoding 
          setGeocode = {(value) => {
            setGeocode(value);
            mapRef.current?.panTo(value);
          }}
        />

        <GoogleMap 
            mapContainerStyle={mapContainerStyle}
            zoom = {15}
            center = {center}
            options = {options}
            onClick = {onMapClick}
            onLoad = {onMapLoad}
        >

            {geocode && (
              <div>
                <Marker position = {geocode}/>
              </div>
            )}

          {/* Like an if statement; only renders marker when office is not null */}
            {office && (
              <div>
                <Marker 
                  position = {office}
                  icon = {{
                    url: "/penguin.svg",
                    //Size of the penguin marker
                    scaledSize: new window.google.maps.Size(30,30),
                    //Place the penguin in the middle of the cursor
                    origin: new window.google.maps.Point(0,0),
                    //Half "Size" values position in the middle
                    anchor: new window.google.maps.Point(15,15),
                  }}
                />

                {/* Radius takes meters. So x1000 for kilometers */}
                <Circle center = {office} radius = {10000} options={closeOptions}/>
                <Circle center = {office} radius = {15000} options={middleOptions}/>
                <Circle center = {office} radius = {20000} options={farOptions}/>
              </div>
            )}


            {/* Show a marker component with every click
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
            ))} */}

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


const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};

const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};

const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};

const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FE5252",
  fillColor: "#FE5252",
};

export default Googlemap;
