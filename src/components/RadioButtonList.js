import React, { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

const RadioButtonList = ({
  children,
  initialSelectedItemId,
  onSelectionChange,
  // selectedId
}) => {
  const [selectedItemId, setSelectedItemId] = React.useState(
    initialSelectedItemId,
  );

  useEffect(() => {
    onSelectionChange(selectedItemId);
  }, [selectedItemId, onSelectionChange]);

  return (
    <ScrollView>
      {children.map((element, index) => {
        return React.cloneElement(element, {
          id: index.toString(),
          selected: selectedItemId === index.toString(),
          selectItem: () => setSelectedItemId(index.toString()),
        });
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    minHeight: 50,
    padding: 10,
  },
});

export default RadioButtonList;
