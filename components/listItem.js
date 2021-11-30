import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from "react-native";

import screensName from "../data/screensName";

let { width } = Dimensions.get("window");

width > 300 ? (width /= 5) : (width /= 6);

const ListItem = ({ navigation }) => {
  const [listItem] = useState(screensName);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        backgroundColor: "#fff",
      }}>
      <FlatList
        numColumns={4}
        data={listItem}
        renderItem={({ item, index }) => {
          return (
            <View
              key={index}
              style={{
                width,
                marginVertical: 10,
                marginHorizontal: 5,
                alignItems: "center",
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate(item.screensName)}>
                <Image
                  source={{
                    uri: item.img,
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "#fff",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate(item.screensName)}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 80,
                  padding: 3,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    textAlign: "center",
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ListItem;
