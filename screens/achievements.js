import React from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    RefreshControl,
} from "react-native";

import HeaderBar from "../components/headerBar";
import { AntDesign } from "@expo/vector-icons";
import ModalBox from "../components/modalbox";

export default function Achievements({ navigation }) {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const [mark, setMark] = React.useState([]);
    const [hk, setHk] = React.useState("Chọn học kì");
    const wait = (time) =>
        new Promise((resolve) => {
            setTimeout(resolve, time);
        });

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1200).then(() => setRefreshing(false));
    }, []);

    React.useEffect(() => {
        setModalVisible(true);
    }, []);
    return (
        <View>
            <HeaderBar title="Thành tích" navigation={navigation} />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    activeOpacity={0.9}
                    style={{
                        height: 30,
                        borderRadius: 15,
                        borderColor: "#ccc",
                        borderWidth: 1,
                        padding: 20,
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginVertical: 10,
                        flexDirection: "row",
                    }}
                >
                    <Text style={{ marginRight: 20 }}>{hk}</Text>
                    <AntDesign name="down" size={20} color={"grey"} />
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection: "row",
                        width: "60%",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            width: "60%",
                            justifyContent: "flex-start",
                            alignItems: "center",
                        }}
                    >
                        <View
                            style={{
                                height: 10,
                                width: 10,
                                backgroundColor: "gold",
                                marginRight: 5,
                                borderRadius: 5,
                            }}
                        />
                        <Text>Điểm TB của lớp</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            width: "60%",
                            justifyContent: "flex-start",
                            alignItems: "center",
                        }}
                    >
                        <View
                            style={{
                                height: 10,
                                width: 10,
                                backgroundColor: "coral",
                                marginRight: 5,
                                borderRadius: 5,
                            }}
                        />
                        <Text>Điểm của bạn</Text>
                    </View>
                </View>
            </View>

            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                contentContainerStyle={{
                    marginHorizontal: 20,
                }}
            >
                {mark.map((item) => {
                    return (
                        <View key={item.id}>
                            <View
                                style={{ flexDirection: "row", marginTop: 30 }}
                            >
                                <View
                                    style={{
                                        justifyContent: "center",
                                        width: 70,
                                    }}
                                >
                                    <Text style={{ width: 70, fontSize: 12 }}>
                                        {item.name}
                                    </Text>
                                </View>
                                <View style={{ width: "100%" }}>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}
                                    >
                                        <View
                                            style={{
                                                width:
                                                    item.myPoint * 10 -
                                                    20 +
                                                    "%",
                                                height: 35,
                                                backgroundColor: "coral",
                                            }}
                                        />

                                        <View
                                            style={{
                                                width: 25,
                                                height: 20,
                                                marginLeft: 5,
                                                backgroundColor: "coral",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Text style={{ color: "#fff" }}>
                                                {item.myPoint}
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}
                                    >
                                        <View
                                            style={{
                                                width:
                                                    item.classPoint * 10 -
                                                    20 +
                                                    "%",
                                                height: 35,
                                                backgroundColor: "gold",
                                            }}
                                        />
                                        <View
                                            style={{
                                                width: 25,
                                                height: 20,
                                                backgroundColor: "gold",
                                                alignItems: "center",
                                                marginLeft: 5,
                                            }}
                                        >
                                            <Text style={{ color: "#000" }}>
                                                {item.classPoint}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
            <ModalBox
                visble={modalVisible}
                refreshing={refreshing}
                setModalVisible={setModalVisible}
                setHk={setHk}
                onRefresh={onRefresh}
                setMark={setMark}
            />
        </View>
    );
}
