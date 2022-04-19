import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import DrawerNavigation from '~/navigation/DrawerNavigation';

const WasaTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#C2D3A5",
    background: "#C2D3A5",
    card: "#56733E",
    text: "#56733E",
  },
};

function App() {
  return (
    <NavigationContainer theme={WasaTheme}>
      <DrawerNavigation />
    </NavigationContainer>
  );
}

export default App;