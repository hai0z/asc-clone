import React from "react";

import Home from "../screens/home";
import Remind from "../screens/remind";
import Profile from "../screens/profile";
import FeedBack from "../screens/feedBack";

import { Entypo } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name={"Home"} component={Home} />
      <Stack.Screen name={"Remind"} component={Remind} />
    </Stack.Navigator>
  );
};

export default function HomeNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Remind") {
            iconName = focused ? "bell" : "bell";
          } else if (route.name === "Feedback") {
            iconName = "message";
          } else if (route.name === "Account") {
            iconName = focused ? "user" : "user";
          }

          return <Entypo name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#038cfc",
        inactiveTintColor: "#939797",
      }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: "Trang chủ" }}
      />
      <Tab.Screen
        name='Remind'
        component={Remind}
        options={{ title: "Nhắc nhở" }}
      />
      <Tab.Screen
        name='Feedback'
        component={FeedBack}
        options={{ title: "Góp ý" }}
      />

      <Tab.Screen
        name='Account'
        component={Profile}
        options={{ title: "Tài khoản" }}
      />
    </Tab.Navigator>
  );
}
