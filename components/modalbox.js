import React from "react";
import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";

export default function ModalBox({
  visble,
  setModalVisible,
  setHk,
  onRefresh,
  setMark,
}) {
  const data = [
    {
      id: 1,
      name: "Xác xuất thống kê",
      classPoint: 5.6,
      myPoint: 7.4,
    },
    {
      id: 2,
      name: "Toán rời rạc",
      classPoint: 6.8,
      myPoint: 8.8,
    },
    {
      id: 3,
      name: "Nguyên lí cơ bản của chủ nghĩa Mác- lenin 2",
      classPoint: 6.9,
      myPoint: 7.3,
    },
    {
      id: 4,
      name: "Giáo dục thể chất 3",
      classPoint: 5.3,
      myPoint: 5.4,
    },
    {
      id: 5,
      name: "Giáo dục thể chất 2",
      classPoint: 6.4,
      myPoint: 7.1,
    },
    {
      id: 6,
      name: "Cơ sở dữ liệu",
      classPoint: 7.4,
      myPoint: 8.7,
    },
  ];
  const wait = (time) =>
    new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  const [refreshing, setRefreshing] = React.useState(true);
  const [modalData, setModalData] = React.useState([]);
  const onModalRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1200).then(() => setRefreshing(false));
  }, []);
  React.useEffect(() => {
    onModalRefresh();
    wait(700).then(() =>
      setModalData([
        "Tất cả",
        "Hockyphu (2020 -2021)",
        "2 (2020 - 2021)",
        "1 (2020 - 2021)",
        "2 (2019 - 2020)",
        "1 (2019 - 2020)",
      ])
    );
  }, []);

  return (
    <View style={styles.centeredView}>
      <Modal animationType='fade' transparent={true} visible={visble}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Chọn học kì</Text>
            <ScrollView
              style={{ width: "100%", height: "25%" }}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onModalRefresh}
                />
              }>
              {modalData.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      borderBottomWidth: 0.5,
                      borderBottomColor: "#ccc",
                    }}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => {
                        setHk(item);
                        setModalVisible(false);
                        onRefresh();
                        setMark(data);
                      }}>
                      <Text style={{ color: "grey" }}>{item}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                marginLeft: "80%",
                marginTop: 10,
              }}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text>Hủy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
