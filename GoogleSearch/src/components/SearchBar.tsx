// @ts-nocheck
import React from 'react';
import {View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Config from 'react-native-config';
import {useAppDispatch} from '../hooks';
import {addPlaceToHistory, selectPlace} from '../store/slices/searchSlice';

const SearchBar = () => {
const dispatch = useAppDispatch();

//get detail from the searched data  dispatch it to store.
// selected Pace will store for both search history and show place
  const handlePlaceSelect = (data, details) => {
    const selectedPlace = {
      name: details.name,
      address: details.formatted_address,
      lat: details.geometry.location.lat,
      lng: details.geometry.location.lng,
    };
    dispatch(selectPlace(selectedPlace));
    dispatch(addPlaceToHistory(selectedPlace));
  };

  return (
    <View style={{flex: 1, padding: 10}}>
      <GooglePlacesAutocomplete
        placeholder="Search places"
        fetchDetails={true}
        query={{
          key: Config.GOOGLE_MAPS_API_KEY, // API key from .env
          language: 'en',
        }}
        onPress={(data, details = null) => handlePlaceSelect(data, details)}
        onFail={error =>
          console.error('Google Places Autocomplete failed:', error)
        }
        debounce={300}
        styles={{
          textInputContainer: {
            width: '100%',
            backgroundColor: 'white',
          },
          textInput: {
            height: 38,
            borderRadius: 5,
            borderColor: '#ddd',
            borderWidth: 1,
            paddingLeft: 10,
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      />
    </View>
  );
};

export default SearchBar;
