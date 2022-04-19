import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabOneScreen from '~/screens/TabOneScreen';
import TabTwoScreen from '~/screens/TabTwoScreen';
import WasaNormal from '~/assets/wasa-normal.png';
import WasaActive from '~/assets/wasa-active.png';

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
  },
  iconRight: {
    transform: [{
      scaleX: -1
    }]
  }
});

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image style={styles.icon} source={focused ? WasaActive : WasaNormal} />
          ),
        }}
      />
      <Tab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image style={[styles.icon, styles.iconRight]} source={focused ? WasaActive : WasaNormal} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;