import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import CheckBox from './Checkbox';
const OptionItem = ({
  children,
  label,
  color,
  selected,
  selectItem = () => null,
}) => (
  <TouchableWithoutFeedback key="" onPress={selectItem}>
    <View>
      <CheckBox selected={selected} />
      <Text style={{ color }}>{label}</Text>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

export default OptionItem;
