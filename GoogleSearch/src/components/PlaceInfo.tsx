import React from 'react';
import {Text, View} from 'react-native';
import {useAppSelector} from '../hooks';

const PlaceInfo = () => {
  const place = useAppSelector(state => state.search.selectedPlace);

  if (!place) return null;

  return (
    <View style={{padding: 10}}>
      <Text style={{fontWeight: 'bold'}}>{place.name}</Text>
      <Text>{place.address}</Text>
    </View>
  );
};

export default PlaceInfo;
