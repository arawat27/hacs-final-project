import React from "react";
import PlacesAutocomplete, {
    geocodeByAddress,
    getGeocode,
    getLatLng,
} from "react-places-autocomplete";


function Search({ setOffice }) {
    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null,
    });

    //Receives address of selection they selected
    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const {lat, lng} = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates({lat, lng});

        setOffice({lat, lng});
    };

    return (
        <div>
            <PlacesAutocomplete
                value = {address}
                onChange = {setAddress}
                onSelect = {handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <p>Lattitude: {coordinates.lat} </p>
                        <p>Longitude: {coordinates.lng} </p>
                        
                        <input {...getInputProps( {placeholder: "Type address"})} />

                        <div>
                            {loading ? <div>...loading</div> : null}

                            {/** Mapping suggestions to show them to the user */}
                            {suggestions.map((suggestion) => {
                                {/** Customize how it's displayed based on whether it's selected */}
                                const style = {
                                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                };

                                return (
                                <div {...getSuggestionItemProps(suggestion, { style })}>
                                    {suggestion.description}
                                </div>
                                );
                            })}
                        </div>
                    </div>)}
            </PlacesAutocomplete>
        </div>
    );
}

export default Search;