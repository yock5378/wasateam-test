import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import WasaNormal from '~/assets/wasa-normal.png';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 300,
    transform: [{
      scaleX: -1
    }]
  }
});

const TabTwoScreen = () => {
  return (
    <View style={styles.content}>
      <Image style={styles.image} source={WasaNormal} />
    </View>
  );
};
export default TabTwoScreen;