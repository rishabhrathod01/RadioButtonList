import React from 'react';
import { Button, Text, View, LayoutAnimation, StyleSheet } from 'react-native';

const Second = ({ navigation }) => {
  const [dimension, setDimension] = React.useState({ w: 0, h: 0 });

  const onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    setDimension({ w: dimension.w - 15, h: dimension.h - 15 });
  };

  return (
    <View style={styles.container}>
      <Text> This is Second Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <View style={[styles.box, { width: dimension.w, height: dimension.h }]} />
      <Button title="Box ++ " onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  box: {
    backgroundColor: 'red',
  },
});

export default Second;
