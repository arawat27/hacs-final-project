//Necessary import for geolocation feature
import React, { useState } from 'react';

function Geocoding({setGeocode}) {
  //Geolocation methods
  const [userLocation, setUserLocation] = useState();
  
  //get user's geolocation and update userLocation
  const getUserLocation = () => {
    
    //check whether geolocation feature is supported
    if (navigator.geolocation) {
      
      //retrieve user location
      navigator.geolocation.getCurrentPosition(
        (position) => {

          //access coords in the position variable
          const { latitude, longitude } = position.coords;

          //update userLocation
          setUserLocation({ latitude, longitude });
          setGeocode({ lat: latitude, lng: longitude });

          /**Add panTo() function here if want to pan to geolocation */

        },
        (error) => {
          
          //display an error message if not supported
          console.log("Error getting user location: ", error);
        }
      );

    }
    else {
      //display an error message if not supported
      console.log("Geolocation is not supported by this browser.");
    }
  };
  
  return (
    <div className="Geolocation">
      <p>Hello World</p>
      
      {/* Button to get user geolocation */}
      <button onClick = { getUserLocation }>Get User geolocation</button>

      {/* Display user location is userLocation is not NULL */}
      {
        userLocation && (
          <div>
            <h2>User Location</h2>
            <p>Latitude: {userLocation.latitude}</p>
            <p>Longitude: {userLocation.longitude}</p>

            
          </div>
        
      )}
    </div>
  );
}

export default Geocoding;