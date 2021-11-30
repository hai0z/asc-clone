import React from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";
import HeaderBar from "../components/headerBar";
import DATA from "../data/recipt";
export default function Receipt({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = React.useState([]);
  const wait = (time) =>
    new Promise((resolve) => {
      setTimeout(resolve, time);
    });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1200).then(() => setRefreshing(false));
  }, []);
  React.useEffect(() => {
    onRefresh();
    wait(700).then(() => setData(DATA));
  }, []);
  const ListItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: "#fff",
          marginVertical: 10,
          marginHorizontal: 10,
          minHeight: 100,
          padding: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          elevation: 7,
          borderRadius: 7,
        }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <View>
            <Text
              style={{
                color: "#5d5d5d",
                fontWeight: "bold",
                fontSize: 16,
              }}>
              Số phiếu: {item.code}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#5d5d5d",
                fontWeight: "bold",
                fontSize: 16,
                marginRight: 10,
              }}>
              {item.date}
            </Text>
            <Text
              style={{
                color: "#5d5d5d",
                fontWeight: "bold",
                fontSize: 16,
              }}>
              {item.time}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              color: "#d5d5d5",
              fontWeight: "bold",
              fontSize: 16,
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
            }}></Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}>
          <Text
            style={{
              color: "#d5d5d5",
              fontWeight: "bold",
              fontSize: 16,
            }}>
            Số tiền:
          </Text>
          <Text
            style={{
              color: "#ffcb6c",
              fontWeight: "bold",
              fontSize: 16,
            }}>
            {item.total} VNĐ
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{ height: "100%" }}>
      <HeaderBar title='Phiếu thu tổng hợp' navigation={navigation} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {data.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </ScrollView>
    </View>
  );
}
