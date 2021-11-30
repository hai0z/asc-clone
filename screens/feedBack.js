import React from "react";
import { Text, View, ScrollView, TextInput } from "react-native";

import Button from "../components/button";
import HeaderBar from "../components/headerBar";

export default function FeedBack({ navigation }) {
  const send = () => {
    alert("seen");
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderBar title={"Góp ý phản hồi"} iconName="" navigation={navigation} />
      <View
        style={{
          height: 70,
          backgroundColor: "#f6f7f9",
          marginTop: 5,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text>
          Mọi thông tin đóng góp ý kiến phản hồi vui lòng nhập vào các thông tin
          bên dưới <Text style={{ color: "#0098db" }}>Tìm hiểu thêm</Text>
        </Text>
      </View>
      <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
        <Text>
          Tên trường <Text style={{ color: "tomato" }}>(*)</Text>
        </Text>
        <TextInput
          editable={false}
          placeholderTextColor="#ccc"
          placeholder="Trường Đại học Kinh tế - Kỹ thuật Công nghiệp"
          style={{
            height: 55,
            borderColor: "#eee",
            borderWidth: 1,
            backgroundColor: "#f6f7f9",
            marginTop: 5,
            padding: 10,
            borderRadius: 3,
          }}
        />
      </View>
      <View style={{ marginHorizontal: 15, marginBottom: 15 }}>
        <Text>
          Họ tên <Text style={{ color: "tomato" }}>(*)</Text>
        </Text>
        <TextInput
          editable={false}
          placeholder="Nguyễn Ngọc Hải"
          placeholderTextColor="#ccc"
          style={{
            height: 55,
            borderColor: "#eee",
            borderWidth: 1,
            backgroundColor: "#f6f7f9",
            marginTop: 5,
            padding: 10,
            borderRadius: 3,
          }}
        />
      </View>
      <View style={{ marginHorizontal: 15 }}>
        <Text>
          Số điện thoại <Text style={{ color: "tomato" }}>(*)</Text>
        </Text>
        <TextInput
          placeholder="Nhập số điện thoại"
          placeholderTextColor="#4b6889"
          style={{
            height: 55,
            borderColor: "#eee",
            borderWidth: 1,
            backgroundColor: "#f6f7f9",
            marginTop: 5,
            padding: 10,
            borderRadius: 3,
          }}
        />
      </View>
      <View style={{ marginHorizontal: 15, marginTop: 15 }}>
        <Text>
          Email <Text style={{ color: "tomato" }}>(*)</Text>
        </Text>
        <TextInput
          placeholder="Nhập email"
          placeholderTextColor="#4b6889"
          style={{
            height: 55,
            borderColor: "#eee",
            borderWidth: 1,
            backgroundColor: "#f6f7f9",
            marginTop: 5,
            padding: 10,
            borderRadius: 3,
          }}
        />
      </View>
      <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
        <Text>
          Nội dung <Text style={{ color: "tomato" }}>(*)</Text>
        </Text>
        <TextInput
          placeholder="Nhập nội dung"
          placeholderTextColor="#4b6889"
          style={{
            height: 80,
            borderColor: "#eee",
            borderWidth: 1,
            backgroundColor: "#f6f7f9",
            marginTop: 5,
            padding: 10,
            borderRadius: 3,
          }}
        />
      </View>
      <Button title="Gửi" onPress={() => send()} />
    </ScrollView>
  );
}
