import React from "react";
import { View, Image, TextInput, StyleSheet, ScrollView } from "react-native";
import HeaderBar from "../components/headerBar";
import logo from "../assets/changepass.jpg";
import Button from "../components/button";
export default function ChangePassword({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <HeaderBar title='Đổi mật khẩu' navigation={navigation} />
      <ScrollView style={{ backgroundColor: "#fff", height: "50%" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 250,
          }}>
          <Image source={logo} style={{ transform: [{ scale: 0.4 }] }} />
        </View>
        <View>
          <TextInput
            style={styles.textInp}
            placeholderTextColor='#4b6889'
            placeholder='Mật khẩu cũ'
          />
          <TextInput
            style={styles.textInp}
            placeholderTextColor='#4b6889'
            placeholder='Mật khẩu mới'
          />
          <TextInput
            style={styles.textInp}
            placeholderTextColor='#4b6889'
            placeholder='Nhập lại mật khẩu mới'
          />
        </View>
      </ScrollView>
      <View
        style={{
          justifyContent: "flex-end",
          backgroundColor: "#fff",
        }}>
        <View style={{ marginVertical: 15 }}>
          <Button title='Xác nhận' />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textInp: {
    height: 50,
    backgroundColor: "#f6f7f9",
    marginHorizontal: 20,
    marginVertical: 7,
    padding: 5,
  },
});
