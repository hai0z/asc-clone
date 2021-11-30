import React from "react";
import { Modal, StyleSheet, View, ActivityIndicator } from "react-native";

export default function Loading({ visible }) {
  return (
    <View
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        flex: 1,
      }}>
      <Modal animationType='fade' transparent={true} visible={visible}>
        <View style={styles.modalView} />
        <View style={styles.loading}>
          <ActivityIndicator size={"large"} color={"white"} />
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "black",
    opacity: 0.2,
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
