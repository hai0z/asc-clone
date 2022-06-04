import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
export default function HeaderBar({ title, iconName, navigation, to }) {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1.0 }}
            locations={[0, 0.5, 0.6]}
            colors={["#0084fb", "#0091fc", "#00a6fa"]}
            style={{
                height: 75,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={() => navigation.navigate(to || "Home")}
                >
                    <AntDesign name="left" size={24} color="#fff" />
                </TouchableOpacity>
                <Text
                    style={{
                        color: "#fff",
                        fontSize: 15,
                        fontWeight: "bold",
                        marginLeft: 15,
                    }}
                >
                    {title}
                </Text>
            </View>
            <View style={{ marginRight: 10, marginLeft: "auto" }}>
                <AntDesign name={iconName} size={30} color="#fff" />
            </View>
        </LinearGradient>
    );
}
