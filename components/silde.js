import React from "react";
import { View, ScrollView, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function Slide() {
  const image = [
    require("../assets/slide1.png"),
    require("../assets/slide2.png"),
    require("../assets/slide3.png"),
  ];

  return (
    <View
      style={{
        backgroundColor: "#f6f7f9",
        height: 175,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}>
        {image.map((item, index) => {
          return (
            <Image
              source={item}
              key={index}
              style={{
                resizeMode: "contain",
                width,
                height: 175,
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
