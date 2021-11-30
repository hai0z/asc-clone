import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import HeaderBar from "../components/headerBar";
import { AntDesign } from "@expo/vector-icons";
import Loading from "../screens/loading";
import DATA from "../data/attendance";
 
export default function Attendance({ navigation }) {
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  const expand = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, expand: !item.expand } : item
      )
    );
  };

  React.useEffect(() => {
    wait(1000).then(() => {
      setLoading(false);
      setData(DATA);
    });
  }, []);
  
  return (
    <View>
      <HeaderBar title='Thống kê điểm danh ' navigation={navigation} />
      {loading && <Loading />}
      <View>
        {!loading && (
          <View style={styles.header}>
            <Text style={{ ...styles.txt, width: "15%" }}>Mã môn</Text>
            <Text style={{ ...styles.txt, width: "50%" }}>Tên môn</Text>
            <Text style={{ ...styles.txt, width: "15%" }}>DVHT</Text>
            <Text style={{ ...styles.txt, width: "10%" }}>CP</Text>
            <Text style={{ ...styles.txt, width: "10%" }}>KP</Text>
          </View>
        )}
        {data.map((item) => {
          return (
            <ScrollView key={item.name}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.menuItem}
                onPress={() => expand(item.id)}>
                <Text
                  style={{
                    color: "#1e5871",
                    marginHorizontal: 10,
                    fontWeight: "bold",
                  }}>
                  {item.name}
                </Text>
                {item.expand ? (
                  <AntDesign
                    name='up'
                    size={20}
                    color={"grey"}
                    style={{
                      marginHorizontal: 10,
                    }}
                  />
                ) : (
                  <AntDesign
                    name='down'
                    size={20}
                    color={"grey"}
                    style={{
                      marginHorizontal: 10,
                    }}
                  />
                )}
              </TouchableOpacity>
              {item.expand && (
                <View>
                  {item.subjects.map((item, index) => {
                    return (
                      <View
                        key={item.name}
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          backgroundColor:
                            index % 2 === 0 ? "white" : "#e4f1f7",

                          height: 35,
                          alignItems: "center",
                          borderBottomColor: "#ccc",
                          borderBottomWidth: 1,
                        }}>
                        <Text
                          style={{
                            ...styles.txtSubmenu,
                            width: "15%",
                          }}>
                          {item.id}
                        </Text>
                        <Text
                          style={{
                            ...styles.txtSubmenu,
                            width: "50%",
                          }}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            ...styles.txtSubmenu,
                            width: "15%",
                          }}>
                          {item.tc}
                        </Text>
                        <Text
                          style={{
                            ...styles.txtSubmenu,
                            width: "10%",
                          }}>
                          {item.cp}
                        </Text>
                        <Text
                          style={{
                            ...styles.txtSubmenu,
                            width: "10%",
                          }}>
                          {item.kp}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              )}
            </ScrollView>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  txt: {
    color: "white",
    borderRightColor: "#4b84c0",
    borderRightWidth: 1,
    lineHeight: 35,
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#2E76C1",
    height: 40,
    alignItems: "center",
    marginTop: 1,
    justifyContent: "space-between",
  },
  menuItem: {
    flexDirection: "row",
    backgroundColor: "#bcddff",
    height: 35,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#d5d5d5",
    borderBottomWidth: 1,
  },
  txtSubmenu: {
    color: "black",
    borderRightWidth: 1,
    borderRightColor: "#ccc",
    textAlign: "center",
    lineHeight: 35,
  },
});
