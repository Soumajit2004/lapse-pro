import {BottomNavigation, useTheme} from "react-native-paper";
import {CommonActions} from "@react-navigation/native";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs/src/types";
import React from "react";

const CustomBottomTabBar = ({navigation, state, descriptors, insets}: BottomTabBarProps) => {
  return <BottomNavigation.Bar
    navigationState={state}
    safeAreaInsets={insets}
    onTabPress={({route, preventDefault}) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (event.defaultPrevented) {
        preventDefault();
      } else {
        navigation.dispatch({
          ...CommonActions.navigate(route.name, route.params),
          target: state.key,
        });
      }
    }}
    renderIcon={({route, focused, color}) => {
      const {options} = descriptors[route.key];
      if (options.tabBarIcon) {
        return options.tabBarIcon({focused, color, size: 24});
      }

      return null;
    }}
    getLabelText={({route}) => {
      const {options} = descriptors[route.key];
      return options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
          ? options.title
          // @ts-ignore
          : route.title;
    }}
  />
}

export default CustomBottomTabBar