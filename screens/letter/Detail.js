import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HeaderBar from "../../components/headerBar";
export default function Detail({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <HeaderBar title='Mẫu đơn' navigation={navigation} to='Letter' />
      <View>
        <Text
          style={{
            height: 50,
            lineHeight: 50,
            fontSize: 16,
            fontWeight: "500",
            marginHorizontal: 15,
          }}>
          Các mẫu đơn xin việc phổ biến
        </Text>
        <Text
          style={{
            borderBottomColor: "#ccc",
            borderBottomWidth: 0.5,
            marginTop: -10,
          }}></Text>
        <Text style={{ fontSize: 13, marginVertical: 5, marginHorizontal: 15 }}>
          Mô tả chi tiết
        </Text>
        <Text style={{ marginHorizontal: 15 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          consequatur provident eveniet deserunt laudantium reprehenderit ullam,
          similique harum sint sapiente, corrupti culpa. Assumenda similique
          ullam et eligendi minima architecto doloremque.
        </Text>
      </View>
      <View
        style={{
          justifyContent: "flex-end",
          flex: 1,
          alignItems: "center",
        }}>
        <TouchableOpacity
          style={{
            width: "90%",
            backgroundColor: "coral",
            height: 45,
            borderRadius: 7,
            marginVertical: 30,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Tải về</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
