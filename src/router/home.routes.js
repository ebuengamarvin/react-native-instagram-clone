import React from "react";
import { Image, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeSreen/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../../assets/images/logoDark.png";

const HomeStack = createStackNavigator();

const HomeRoutes = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Instagram",
        headerRightContainerStyle: {
          marginRight: 15,
        },
        headerTitleContainerStyle: {
          left: 10,
        },
        headerRight: () => (
          <Ionicons name="paper-plane-outline" size={24} color="black" />
        ),
        headerTitle: () => (
          <Image
            source={Logo}
            style={{ width: 135, height: 35 }}
            resizeMode="contain"
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

export default HomeRoutes;
