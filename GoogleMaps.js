import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Circle,
  InfoWindow,
  MarkerClusterer,
  DirectionsService,
  DirectionsRenderer,
  DistanceMatrixService,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import mapStyles from "./mapStyles";
import Geocoding from "./Geocoding.js";
// import Search from "./AutoSearch.js";


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
  const [directions, setDirections] = React.useState();

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

  const centers = React.useMemo(() => generateCenters());

  const fetchDirections = (center) => {
    if (!geocode) return;

    //Create new instance of DirectionsService
    const directionService = new DirectionsService();
    
    //Route from user location to selected Marker
    directionService.route(
      {
        origin: geocode,
        destination: center,
        travelMode: "DRIVING",
      }
    );
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  
  return (
    <div>
        <h1>
            Animal Rescue Wilderness Sightings
            {/* To use emojis, wrap in span with attributes */}
            <span role="img" aria-label="monkey">🐒</span>
        </h1>

        {/* <Search 
          setOffice = {(position) => {
            setOffice(position);
            mapRef.current?.panTo(position);
          }}
        /> */}

        <Geocoding 
          setGeocode = {(value) => {
            setGeocode(value);
            mapRef.current?.panTo(value);
          }}
        />

        <GoogleMap 
            mapContainerStyle={mapContainerStyle}
            zoom = {9}
            center = {center}
            options = {options}
            onClick = {onMapClick}
            onLoad = {onMapLoad}
        >

            {directions && <DirectionsRenderer directions = {directions}/>}

            {geocode && (
              <div>
                <Marker position = {geocode}/>
              </div>
            )}

          {/* Like an if statement; only renders marker when office is not null */}
            {geocode && (
              <div>
                <Marker 
                  position = {geocode}
                />

                <MarkerClusterer>
                  {clusterer => (
                    centers.map(center => (
                      <Marker 
                        key = {center.key} 
                        position = {center}
                        clusterer = {clusterer}
                        onClick = {() => {
                          fetchDirections({lat: center.lat, lng: center.lng});
                        }}
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
                    ))
                  )}
                </MarkerClusterer>

                {/* Radius takes meters. So x1000 for kilometers */}
                <Circle center = {geocode} radius = {10000} options={closeOptions}/>
                <Circle center = {geocode} radius = {15000} options={middleOptions}/>
                <Circle center = {geocode} radius = {20000} options={farOptions}/>
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

const generateCenters = () => {
  const centers = [
    {key: "Wild At Heart", lat: 33.776189217972444, lng: -111.98514312599812},
    {key: "Liberty Wildlife", lat: 33.41637679623698, lng: -112.02528001218086},
    {key: "Southwest Wildlife Conservation Center", lat: 33.7338598253034, lng: -111.74629194852704},
    {key: "Fallen Feathers", lat: 33.702751770754126, lng: -112.26533198990042},
    {key: "US Fish & Wildlife Services", lat: 33.57731569886941, lng: -112.12732390007805},
    {key: "US Wildlife Services", lat: 33.587462860648685, lng: -112.1062846319471},
  ];
  
  return centers;
};


export default Googlemap;
