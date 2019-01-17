import React from 'react';
import { View, Text } from 'react-native';

const StoreCard = ({ storeInfo }) => (
  <View>
    <Text>{storeInfo.title}</Text>
    <Text>
      {storeInfo.distance}
      {' '}
metres from you
    </Text>
    <Text>{storeInfo.vicinity.replace(/(<([^>]+)>)/gi, ', ')}</Text>
  </View>
);

export default StoreCard;
