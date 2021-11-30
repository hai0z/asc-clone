import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/login";
import New from "../screens/new";
import ChangePassword from "../screens/changePassword";
import Receipt from "../screens/receipt";
import Attendance from "../screens/attendance";
import Debt from "../screens/debt";
import Splash from "../screens/splash";
import Achievements from "../screens/achievements";
import Training from "../screens/training";
import Program from "../screens/program";
import Letter from "../screens/letter/letter";
import Detail from "../screens/letter/Detail";
import Survey from "../screens/survey";
import Ad from "../screens/ad";

import HomeNavigator from "./homeNavigator";
import MarkNavigator from "./markNavigator";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false} initialRouteName='Splash'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={HomeNavigator} />
        <Stack.Screen name='News' component={New} />
        <Stack.Screen name='ChangePassword' component={ChangePassword} />
        <Stack.Screen name='ViewMark' component={MarkNavigator} />
        <Stack.Screen name='Receipt' component={Receipt} />
        <Stack.Screen name='Attendance' component={Attendance} />
        <Stack.Screen name='Debt' component={Debt} />
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Achievements' component={Achievements} />
        <Stack.Screen name='TrainingPoint' component={Training} />
        <Stack.Screen name='Program' component={Program} />
        <Stack.Screen name='Letter' component={Letter} />
        <Stack.Screen name='Detail' component={Detail} />
        <Stack.Screen name='Survey' component={Survey} />
        <Stack.Screen name='Ad' component={Ad} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
