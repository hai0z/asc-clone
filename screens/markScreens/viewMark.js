import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import Loading from "../loading";
export default function ViewMark({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, [navigation]);
  const data = [
    {
      key: "Sinh viên năm: ",
      value: 1,
    },
    {
      key: "Niên khóa:",
      value: "2019 - 2023",
    },
    {
      key: "Thời gian đào tạo:",
      value: "4.0 năm",
    },
    {
      key: "GVCN:",
      value: "",
    },
    {
      key: "Liên hệ GVCN:",
      value: "",
    },
    {
      key: "CVHT:",
      value: "",
    },
    {
      key: "Liên hệ CVHT:",
      value: "",
    },
    {
      key: "TBC tích lũy(4):",
      value: "3.24",
    },
    {
      key: "TBC tích lũy(10):",
      value: "7.84",
    },
    {
      key: "TC nợ (Điểm F -tỉ lệ %):",
      value: "- %",
    },
    {
      key: "TC đã đăng kí:",
      value: "61",
    },
    {
      key: "TC tích lũy:",
      value: "51",
    },
    {
      key: "TC phải tích lũy:",
      value: "63",
    },
    {
      key: "TC nợ:",
      value: "",
    },
  ];
  return (
    <ScrollView
      contentContainerStyle={{
        marginVertical: 10,

        marginHorizontal: 10,
      }}>
      {isLoading && <Loading />}
      {data.map((item) => {
        return (
          <View
            key={item.key}
            style={{
              flexDirection: "row",
              marginVertical: 5,
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              marginHorizontal: 10,
              padding: 5,
            }}>
            <Text style={{ minWidth: 200 }}>{item.key}</Text>
            {!isLoading && (
              <Text style={{ color: "#0074ff" }}>{item.value}</Text>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}
