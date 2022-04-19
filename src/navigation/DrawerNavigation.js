import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from '~/navigation/TabNavigation';
import ListingScreen from '~/screens/ListingScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: "#FFFFFF",
        drawerActiveBackgroundColor: "#56733E",
        drawerStyle: {
          backgroundColor: "#C2D3A5",
        },
        headerTintColor: "#FFFFFF",
        headerStyle: {
          backgroundColor: "#56733E",
        },
      }}
    >
      <Drawer.Screen name="Wasabi" component={TabNavigation} />
      <Drawer.Screen name="Sashimi" component={ListingScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;