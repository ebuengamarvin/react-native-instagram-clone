import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStackScreen from "./home.routes";
import DiscoveryScreen from "../screens/DiscoveryScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { Foundation, Ionicons, Feather, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          return <Foundation name="home" size={size} color={color} />;
        }
        if (route.name === "Discovery") {
          return <Ionicons name="search" size={size} color={color} />;
        }
        if (route.name === "Post") {
          return <Feather name="plus-square" size={size} color={color} />;
        }
        if (route.name === "Notifications") {
          iconName = focused ? "heart" : "hearto";
          return <AntDesign name={iconName} size={size} color={color} />;
        }
        if (route.name === "Profile") {
          return (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          );
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: "#000",
      inactiveTintColor: "gray",
      showLabel: false,
    }}
  >
    <Tab.Screen name="Home" component={HomeStackScreen} />
    <Tab.Screen name="Discovery" component={DiscoveryScreen} />
    <Tab.Screen name="Post" component={CreatePostScreen} />
    <Tab.Screen name="Notifications" component={NotificationsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default BottomHomeNavigator;
