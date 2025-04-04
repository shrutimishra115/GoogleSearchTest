import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {useAppDispatch, useAppSelector} from '../hooks';
import {selectPlace} from '../store/slices/searchSlice';

const HistoryList = () => {
  const dispatch = useAppDispatch();
  const history = useAppSelector(state => state.search.history);

  return (
    <FlatList
      data={history}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => dispatch(selectPlace(item))}>
          <Text style={{padding: 8}}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default HistoryList;
