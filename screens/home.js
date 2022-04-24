import React from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Slide from "../components/silde";
import ListItem from "../components/listItem";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor="#005597" />
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1.0 }}
                locations={[0, 0.5, 0.7]}
                colors={["#0084fc", "#0091fc", "#00a6fa"]}
                style={{
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                }}
            >
                <View
                    style={{
                        height: 80,
                        alignItems: "flex-start",
                        paddingLeft: 20,
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Text
                        style={{ color: "#fff", fontSize: 16, marginTop: 20 }}
                    >
                        Xin chào, Nguyễn Ngọc Hải
                    </Text>
                    <View style={{ marginTop: 20, marginRight: 15 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Remind")}
                        >
                            <Feather name="bell" size={24} color="white" />
                            <View
                                style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 10,
                                    backgroundColor: "red",
                                    position: "relative",
                                    top: -35,
                                    left: 10,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    opacity: 0.8,
                                }}
                            >
                                <Text style={{ color: "#fff", fontSize: 10 }}>
                                    9+
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
            <View
                style={{
                    flexDirection: "row",
                    position: "relative",
                    backgroundColor: "#fff",
                    height: 80,
                    marginHorizontal: 15,
                    justifyContent: "space-around",
                    borderRadius: 20,
                    marginTop: -20,
                    padding: 5,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }}
            >
                <View
                    style={{
                        alignItems: "center",
                        flexDirection: "row",
                    }}
                >
                    <View
                        style={{
                            borderRadius: 45 / 2,
                            backgroundColor: "#e5f9ff",
                            width: 45,
                            height: 45,
                            position: "relative",
                            top: 0,
                            left: -10,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <AntDesign name="calendar" size={24} color="#0c91fd" />
                    </View>
                    <TouchableOpacity>
                        <Text>Xem lịch</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        borderRightColor: "#eaeaea",
                        borderRightWidth: 2,
                        height: 65,
                        marginVertical: 2.5,
                    }}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("ViewMark")}
                    activeOpacity={0.9}
                    style={{ alignItems: "center", flexDirection: "row" }}
                >
                    <View
                        style={{
                            borderRadius: 45 / 2,
                            backgroundColor: "#e5f9ff",
                            width: 45,
                            height: 45,
                            position: "relative",
                            top: 0,
                            left: -10,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <FontAwesome
                            name="calendar"
                            size={24}
                            color="#0c91fd"
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ViewMark")}
                        activeOpacity={0.7}
                    >
                        <Text>Xem điểm</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <ListItem navigation={navigation} />
            <Slide />
        </View>
    );
};
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
