import axios from 'axios';
import Config from 'react-native-config';

export const getPlaceDetails = async (placeId: string) => {
  const response = await axios.get(
    `https://places.googleapis.com/v1/places/GyuEmsRBfy61i59si0?fields=addressComponents&key=`,
    {
      params: {
        place_id: placeId,
        key: Config.API_KEY,
      },
    },
  );
  return response.data.result;
};
