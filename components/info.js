import React from "react";

import { Text, View } from "react-native";

export default function Info({ keyy, value }) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 15,
        marginVertical: 8,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        padding: 6,
      }}
    >
      <View>
        <Text style={{ width: 90 }}>{keyy}</Text>
      </View>
      <View style={{ marginLeft: 60 }}>
        <Text>{value}</Text>
      </View>
    </View>
  );
}
