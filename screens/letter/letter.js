import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import HeaderBar from "../../components/headerBar";
import { AntDesign } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopTab = createMaterialTopTabNavigator();

const Main = ({ navigation }) => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#f9f9f9" }}>
        <TextInput
          style={{
            backgroundColor: "#f9f9f9",
            height: 45,
            fontSize: 20,
            marginHorizontal: 20,
          }}
          placeholder='Tìm kiếm...'
          placeholderTextColor='#000'
        />
      </View>
      <ScrollView>
        {arr.map((_, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail")}
            activeOpacity={0.9}
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
              backgroundColor: "#f9f9f9",
              padding: 10,
              maxHeight: 200,
            }}>
            <View
              style={{
                width: "60%",
                justifyContent: "space-evenly",
                marginHorizontal: 20,
              }}>
              <Text style={{ fontWeight: "bold", color: "steelblue" }}>
                Các mẫu đơn xin việc phổ biến
              </Text>
              <Text style={{ overflow: "hidden" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign
                  name='calendar'
                  size={15}
                  style={{ marginRight: 5 }}
                />
                <Text>13/06/2020</Text>
                <AntDesign
                  name='eye'
                  size={15}
                  style={{ marginLeft: 10, marginRight: 5 }}
                  color='red'
                />
                <Text>5626</Text>
              </View>
            </View>
            <View style={{ marginVertical: 10 }}>
              <Image
                style={{ width: 80, height: 80, resizeMode: "contain" }}
                source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
const Tab = () => {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        labelStyle: {
          color: "white",
          fontSize: 13,
          textTransform: "capitalize",
          fontWeight: "700",
        },
        style: { backgroundColor: "#0084fb" },
        indicatorStyle: { backgroundColor: "#fff" },
      }}>
      <TopTab.Screen
        name={"screen1"}
        component={Main}
        options={{ title: "Mới nhất" }}
      />
      <TopTab.Screen
        name={"screen2"}
        component={Main}
        options={{ title: "Tải nhiều" }}
      />
    </TopTab.Navigator>
  );
};
const MainScreen = ({ navigation }) => {
  return (
    <>
      <HeaderBar title='Mẫu đơn' navigation={navigation} iconName='filter' />
      <Tab />
    </>
  );
};
export default function Letter({ navigation }) {
  return <MainScreen navigation={navigation} />;
}
