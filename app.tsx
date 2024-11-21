/**
 * Copyright 2024 Google LLC
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *    https://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

import React, {useEffect, useState, useRef, useCallback} from 'react';
import { createRoot } from "react-dom/client";
import { AdvancedMarker, 
         APIProvider, 
         Map, 
         MapCameraChangedEvent,
         useMap,
         Pin
    } from '@vis.gl/react-google-maps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import type {Marker} from '@googlemaps/markerclusterer';

type Animal = {
    key: string;
    location: google.maps.LatLngLiteral
};

const locations: Animal[] = [
    {key: "Panda", location: {lat: 33.5, lng: -112.5740}},
    {key: "Dolphin", location: {lat: 33.48, lng: -111.5740}},
    {key: "Dog", location: {lat: 33, lng: -112.50}},
    {key: "Cat", location: {lat: 33.5432, lng: -112.4280}},
    {key: "Deer", location: {lat: 33.382, lng: -112.5}},
];

const App = () => (
    <APIProvider apiKey={'AIzaSyBde_VAyKK0WQ9XUAxLk5BrBQD3CV-uGCg'} onLoad = {() => console.log('Maps API has loaded')}>
        <h1>Hello, world!</h1>
        <Map
        defaultZoom = {13}
        defaultCenter = { {lat: 33.4484, lng: -112.0740} }
        mapId = '634c4cb09c881acd'
        onCameraChanged = { (ev: MapCameraChangedEvent) =>
            console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
        }>
            <AnimalMarkers animals={ locations }/>
        </Map>
    </APIProvider>
);

const AnimalMarkers = (props: {animals: Animal[]}) => {
    const map = useMap();
    const [markers, setMarkers] = useState<{[key: string]: Marker}>({});
    const clusterer = useRef<MarkerClusterer | null>(null);

    //Initialize MarkerClusterer, if the map has changed
    useEffect(() => {
        if (!map) return;
        if (!clusterer.current) {
            clusterer.current = new MarkerClusterer({map});
        }
    }, [map]);

    //Update markers, if the markers array has changed
    useEffect(() => {
        clusterer.current?.clearMarkers();
        clusterer.current?.addMarkers(Object.values(markers));
    }, [markers]);

    const setMarkerRef = (marker: Marker | null, key: string) => {
        if (marker && markers[key]) return;
        if (!marker && !markers[key]) return;
    
        setMarkers(prev => {
            if (marker) {
                return {...prev, [key]: marker};
            } else {
                const newMarkers = {...prev};
                delete newMarkers[key];
                return newMarkers;
            }
        });
    };

    const handleClick = useCallback((ev: google.maps.MapMouseEvent) => {
        if (!map) return;
        if (!ev.latLng) return;
        console.log('marker clicked:', ev.latLng.toString());
        map.panTo(ev.latLng);
    });

    return (
        <div>
            {props.animals.map( (animal: Animal) => (
                <AdvancedMarker
                key = {animal.key}
                position = {animal.location}
                ref = {marker => setMarkerRef(marker, animal.key)}
                clickable={true}
                onClick={handleClick}
                >
                    <Pin 
                    background = {'#FBBC04'}
                    glyphColor = {'#000'}
                    borderColor = {'#000'} 
                    />
                </AdvancedMarker>
            ))}
        </div>
    );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);

export default App;