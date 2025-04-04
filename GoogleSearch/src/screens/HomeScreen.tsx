import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import SearchBar from '../components/SearchBar';
import HistoryList from '../components/HistoryList';
import PlaceInfo from '../components/PlaceInfo';
import {useAppSelector} from '../hooks';

const HomeScreen = () => {
  const place = useAppSelector(state => state.search.selectedPlace);

  return (
    <View style={styles.container}>
      <SearchBar />
      <PlaceInfo />
      <MapView
        provider="google"
        style={styles.map}
        region={
          place
            ? {
                latitude: place.lat,
                longitude: place.lng,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }
            : {
                latitude: 4.2105, // Malaysia's latitude
                longitude: 101.9758, // Malaysia's longitude
                latitudeDelta: 0.0922, // Default zoom level for the whole country
                longitudeDelta: 0.0421,
              }
        }>
        {place && (
          <Marker
            coordinate={{latitude: place.lat, longitude: place.lng}}
            title={place.name}
          />
        )}
      </MapView>
      <HistoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  map: {
    width: Dimensions.get('window').width,
    height: 300,
  },
});

export default HomeScreen;
