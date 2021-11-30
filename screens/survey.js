import React from "react";
import { View, Text } from "react-native";
import HeaderBar from "../components/headerBar";
export default function Survey({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <HeaderBar title='Khảo sát' navigation={navigation} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",

          flex: 1,
        }}>
        <Text style={{ color: "steelblue", fontWeight: "bold" }}>
          Không có khảo sát
        </Text>
      </View>
    </View>
  );
}
