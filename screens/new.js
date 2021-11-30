import React from "react";
import { View, Text } from "react-native";
import HeaderBar from "../components/headerBar";
export default function New({ navigation }) {
  return (
    <View>
      <HeaderBar title='Tin tức' navigation={navigation} iconName='search1' />
      <View
        style={{
          backgroundColor: "#ccc",
          height: 70,
          justifyContent: "center",
        }}>
        <View
          style={{
            width: "50%",
            backgroundColor: "#f9f9f9",
            height: 45,
            borderRadius: 7,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
          }}>
          <Text>Không tìm thấy chuyên mục</Text>
        </View>
      </View>
    </View>
  );
}
