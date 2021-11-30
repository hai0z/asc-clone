import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function Button(props) {
  const { title, onPress } = props;
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1.0 }}
      locations={[0, 0.5, 0.6]}
      colors={["#0084fc", "#0091fc", "#00a6fa"]}
      style={{ marginHorizontal: 15, borderRadius: 7 }}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.textTitle}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  textTitle: {
    color: "#fff",
    fontSize: 18,
  },
});
