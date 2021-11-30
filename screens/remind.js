import React from "react";
import { View, Text, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import HeaderBar from "../components/headerBar";

const ListItem = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        height: 115,
        marginTop: 5,
        marginHorizontal: 7,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 7,
        borderRadius: 7,
        marginBottom: 7,
      }}>
      <View
        style={{
          height: 50,
          width: 50,
          backgroundColor: "#f2f7ff",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          marginHorizontal: 10,
        }}>
        <Text style={{ color: "#1794fd", fontWeight: "bold" }}>25</Text>
        <Text style={{ color: "#1794fd", fontWeight: "bold", fontSize: 10 }}>
          tháng 3
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <Text style={{ fontWeight: "bold" }}>PMT - EMS Lịch học thay đổi</Text>
        <Text>Trường đại học Kinh tế Kỹ thuật Công nghiệp</Text>
        <View
          style={{
            marginTop: 20,
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            backgroundColor: "#fff",
          }}>
          <Text style={{ color: "#ffcb6c" }}>01/06/2021 - 01/06/2021</Text>
        </View>
      </View>
    </View>
  );
};
export default function Remind({ navigation }) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <StatusBar barStyle='light-content' backgroundColor='#005597' />
      <HeaderBar
        title={"Nhắc nhở"}
        iconName={"filter"}
        navigation={navigation}
      />
      <ScrollView>
        {arr.map((_, index) => (
          <ListItem key={index} />
        ))}
      </ScrollView>
    </View>
  );
}
