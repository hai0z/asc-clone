import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import HeaderBar from "../components/headerBar";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function Program({ navigation }) {
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const onRefresh = React.useCallback(() => {
    setData([]);
    setRefreshing(true);
    wait(800).then(() => {
      setRefreshing(false);
      setData(fakeData);
    });
  }, []);
  React.useEffect(() => {
    wait(800).then(() => {
      setData(fakeData);
      setLoading(false);
    });
  }, []);
  const fakeData = [
    {
      id: 1,
      expand: true,
      name: "Học kỳ 1",
      subjects: [
        {
          id: "00584",
          name: "Logic học",
          tc: 2,
          status: 1,
        },
        {
          id: "00584",
          name: "Pháp luật đại cương",
          tc: 2,
          status: 1,
        },
        {
          id: "00582",
          name: "Vật lí",
          tc: 4,
          status: 1,
        },
        {
          id: "00534",
          name: "Tin cơ sở",
          tc: 4,
          status: 1,
        },
        {
          id: "00534",
          name: "Cơ sở dữ liệu",
          tc: 4,
          status: 1,
        },
        {
          id: "00534",
          name: "Xử lí số tín hiệu",
          tc: 4,
          status: 1,
        },
      ],
    },
    {
      id: 2,
      expand: true,
      name: "Học kỳ 2",
      subjects: [
        {
          id: "00584",
          name: "Logic học",
          tc: 2,
          status: 1,
        },
        {
          id: "00584",
          name: "Pháp luật đại cương",
          tc: 2,
          status: 1,
        },
        {
          id: "00582",
          name: "Vật lí",
          tc: 4,
          status: 1,
        },
        {
          id: "00534",
          name: "Tin cơ sở",
          tc: 4,
          status: 1,
        },
      ],
    },
    {
      id: 3,
      expand: true,
      name: "Học kỳ 3",
      subjects: [
        {
          id: "00584",
          name: "Logic học",
          tc: 2,
          status: 1,
        },
        {
          id: "00584",
          name: "Pháp luật đại cương",
          tc: 2,
          status: 1,
        },
        {
          id: "00582",
          name: "Vật lí",
          tc: 4,
          status: 1,
        },
        {
          id: "00534",
          name: "Tin cơ sở",
          tc: 4,
          status: 1,
        },
      ],
    },
    {
      id: 4,
      expand: true,
      name: "Học kỳ 4",
      subjects: [
        {
          id: "00584",
          name: "Logic học",
          tc: 2,
          status: 1,
        },
        {
          id: "00584",
          name: "Pháp luật đại cương",
          tc: 2,
          status: 1,
        },
        {
          id: "00582",
          name: "Vật lí",
          tc: 4,
          status: 1,
        },
        {
          id: "00534",
          name: "Tin cơ sở",
          tc: 4,
          status: 1,
        },
        {
          id: "00534",
          name: "Lập trình hướng đối tượng",
          tc: 3,
          status: 1,
        },
      ],
    },
  ];
  const sumTc = (arr) => {
    let tc = 0;
    for (let item of arr) {
      tc += item.tc;
    }
    return tc;
  };

  const expandList = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, expand: !item.expand } : item
      )
    );
  };
  return (
    <View style={{ flex: 1, marginBottom: 15 }}>
      <HeaderBar title='Chương trình khung' navigation={navigation} />
      {loading ? (
        <ActivityIndicator
          color='black'
          size='large'
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {data.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => expandList(item.id)}
                  key={index}
                  style={{
                    backgroundColor: "#f9f9f9",
                    flexDirection: "row",
                    height: 50,
                    alignItems: "center",
                    marginVertical: 3,
                  }}>
                  <Text style={{ marginHorizontal: 10 }}>{item.name}</Text>
                  <Text
                    style={{
                      marginLeft: "auto",
                    }}>{`--  (TC: ${sumTc(item.subjects)})`}</Text>
                  {item.expand ? (
                    <AntDesign
                      name='up'
                      color='black'
                      size={15}
                      style={{ marginHorizontal: 10 }}
                    />
                  ) : (
                    <AntDesign
                      name='down'
                      color='black'
                      size={15}
                      style={{ marginHorizontal: 10 }}
                    />
                  )}
                </TouchableOpacity>
                {item.expand && (
                  <View>
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                        backgroundColor: "#2E76C1",
                        alignItems: "center",
                        marginHorizontal: 10,
                        justifyContent: "space-between",
                        height: 40,
                      }}>
                      <Text
                        style={{ ...styles.txt, color: "#fff", width: "15%" }}>
                        Mã Môn
                      </Text>
                      <Text
                        style={{
                          ...styles.txt,
                          color: "#fff",
                          width: "55%",
                        }}>
                        Tên Môn Học
                      </Text>
                      <Text
                        style={{ ...styles.txt, color: "#fff", width: "10%" }}>
                        TC
                      </Text>
                      <Text
                        style={{ ...styles.txt, color: "#fff", width: "20%" }}>
                        Trạng Thái
                      </Text>
                    </View>
                    {item.subjects.map((item, index) => {
                      return (
                        <View
                          key={index}
                          style={{
                            flexDirection: "row",
                            alignItems: "center",

                            marginHorizontal: 10,
                            backgroundColor:
                              index % 2 === 0 ? "white" : "#e4f1f7",
                            borderBottomColor: "#ccc",
                            borderBottomWidth: 0.5,
                            justifyContent: "space-between",
                            minHeight: 40,
                          }}>
                          <Text
                            style={{
                              ...styles.txt,
                              width: "15%",
                            }}>
                            {item.id}
                          </Text>
                          <Text
                            style={{
                              ...styles.txt,
                              width: "55%",
                            }}>
                            {item.name}
                          </Text>
                          <Text style={{ ...styles.txt, width: "10%" }}>
                            {item.tc}
                          </Text>
                          <Text style={{ ...styles.txt, width: "20%" }}>
                            {item.status === 1 ? "Đạt" : "Chưa Đạt"}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                )}
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  txt: {
    textAlign: "center",
    borderRightColor: "#ccc",
    borderRightWidth: 0.5,
    color: "#000",
    fontSize: 13,
    lineHeight: 40,
  },
});
