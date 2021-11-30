import React from "react";

import { View, Text, Image, Dimensions, ScrollView, Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Info from "../components/info";
import data from "../data/info";

import Button from "../components/button";
import { LinearGradient } from "expo-linear-gradient";
const { width } = Dimensions.get("window");
const height = width * 0.4;

export default function Profile({ navigation }) {
    const logout = () => {
        Alert.alert(
            "Thông báo",
            "Bạn có muốn đăng xuất không?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: async () => {
                        await AsyncStorage.removeItem("Auth");
                        navigation.replace("Login");
                    },
                },
            ],
            { cancelable: true }
        );
    };
    return (
        <ScrollView style={{ flexDirection: "column", flex: 1 }}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1.0 }}
                locations={[0, 0.5, 0.6]}
                colors={["#0084fc", "#0091fc", "#00a6fa"]}
                style={{
                    height: 75,
                    alignItems: "center",
                    height,
                }}
            >
                <View
                    style={{
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: 20, color: "#fff" }}>
                        Thông tin sinh viên
                    </Text>
                    <Image
                        source={require("../assets/avatar.png")}
                        style={{ width: 90, height: 90, borderRadius: 90 / 2 }}
                    />
                    <Text style={{ fontSize: 18, color: "#fff" }}>
                        Nguyễn Ngọc Hải
                    </Text>
                </View>
            </LinearGradient>

            {data.map((item, index) => {
                return <Info key={index} keyy={item.keyy} value={item.value} />;
            })}
            <Button title={"Đăng xuất"} onPress={() => logout()} />
        </ScrollView>
    );
}
