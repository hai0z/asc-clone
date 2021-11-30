import React from "react";
import { View, Text } from "react-native";
import HeaderBar from "../components/headerBar";
export default function Ad({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <HeaderBar title='Quảng cáo' navigation={navigation} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",

          flex: 1,
        }}>
        <Text style={{ color: "steelblue", fontWeight: "bold" }}>
          Không có dữ liệu
        </Text>
      </View>
    </View>
  );
}
