import React from "react";

import ViewMark from "../screens/markScreens/viewMark";
import ViewMark1 from "../screens/markScreens/viewMark1";
import ViewMark2 from "../screens/markScreens/viewMark2";
import HeaderBar from "../components/headerBar";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";
const TopTab = createMaterialTopTabNavigator();

const TobTab = () => {
    return (
        <TopTab.Navigator
            tabBarOptions={{
                labelStyle: {
                    color: "white",
                    fontSize: 13,
                    textTransform: "capitalize",
                },
                style: { backgroundColor: "#0084fb" },
                indicatorStyle: { backgroundColor: "#fff" },
            }}
        >
            <TopTab.Screen
                name={"ViewMark"}
                component={ViewMark}
                options={{ title: "Tổng Quan" }}
            />
            <TopTab.Screen
                name={"ViewMar"}
                component={ViewMark1}
                options={{ title: "Tổng Kết học kì" }}
            />
            <TopTab.Screen
                name={"ViewMarv"}
                component={ViewMark2}
                options={{ title: "Chi tiết" }}
            />
        </TopTab.Navigator>
    );
};
export default function MarkNavigator({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <HeaderBar title="Kết quả học tập" navigation={navigation} />
            <TobTab />
        </View>
    );
}
