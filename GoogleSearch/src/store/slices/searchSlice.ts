import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Place {
  name: string;
  address: string;
  lat: number;
  lng: number;
}

interface SearchState {
  history: Place[];
  selectedPlace: Place | null;
}

const initialState: SearchState = {
  history: [],
  selectedPlace: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addPlaceToHistory(state, action: PayloadAction<Place>) {
      const exists = state.history.find(p => p.name === action.payload.name);
      if (!exists) state.history.unshift(action.payload);
    },
    selectPlace(state, action: PayloadAction<Place>) {
      state.selectedPlace = action.payload;
    },
  },
});

export const {addPlaceToHistory, selectPlace} = searchSlice.actions;
export default searchSlice.reducer;
