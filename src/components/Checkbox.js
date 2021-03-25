import React from 'react';
import { View } from 'react-native';

const CheckBox = ({ selected }) => {
  return (
    <View
      style={{
        height: 10,
        width: 10,
        borderRadius: 5,
        padding: 10,
        margin: 10,
        backgroundColor: selected ? 'red' : 'blue',
      }}
    />
  );
};

export default CheckBox;
