import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Modal,
    RefreshControl,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBar from "../components/headerBar";
import { AntDesign } from "@expo/vector-icons";
import DATA from "../data/debt";
const ModalBox = ({ visble, setModalVisible, setHk, onRefresh }) => {
    const modalData = [
        "Tất cả",
        "Hockyphu (2020 -2021)",
        "2 (2020 - 2021)",
        "1 (2020 - 2021)",
        "2 (2019 - 2020)",
        "1 (2019 - 2020)",
    ];
    return (
        <View style={styles.centeredView}>
            <Modal animationType="fade" transparent={true} visible={visble}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Chọn học kì</Text>
                        <ScrollView style={{ width: "100%", height: "25%" }}>
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
                                        }}
                                    >
                                        <TouchableOpacity
                                            activeOpacity={0.7}
                                            onPress={() => {
                                                setHk(item);
                                                setModalVisible(false);
                                                onRefresh();
                                            }}
                                        >
                                            <Text style={{ color: "grey" }}>
                                                {item}
                                            </Text>
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
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                            >
                                <Text>Hủy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
export default function Debt({ navigation }) {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [hk, setHk] = React.useState("Chọn học kì");
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

    return (
        <View>
            <HeaderBar
                title="Công nợ"
                iconName="solution1"
                navigation={navigation}
            />
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                locations={[0.1, 0.5, 0.6]}
                colors={["#0084fc", "#0091fc", "#00a6fa"]}
            >
                <View
                    style={{
                        height: 60,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setModalVisible(true)}
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            height: 35,
                            borderRadius: 15,
                            alignItems: "center",
                            backgroundColor: "transparent",
                            borderColor: "#fff",
                            borderWidth: 0.5,
                        }}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 16,
                                padding: 10,
                            }}
                        >
                            {hk}
                        </Text>
                        <AntDesign
                            name="down"
                            color={"white"}
                            size={20}
                            style={{ padding: 10 }}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={styles.txt}>Mức học phí</Text>
                    <Text style={styles.txt}>Đã nộp</Text>
                    <Text style={styles.txt}>Khấu trừ</Text>
                    <Text style={styles.txt}>Công nợ</Text>
                </View>
            </LinearGradient>

            <ScrollView
                style={{ height: "75%" }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {data.map((item) => {
                    return (
                        <View key={item.id} style={{ marginHorizontal: 10 }}>
                            <Text style={{ fontWeight: "bold" }}>
                                {item.name}
                            </Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    height: 45,
                                    borderBottomColor: "#ccc",
                                    borderBottomWidth: 0.5,
                                    marginTop: 5,
                                }}
                            >
                                <Text style={{ color: "coral" }}>
                                    {item.hp}
                                </Text>
                                <Text style={{ color: "blue" }}>{item.dn}</Text>
                                <Text style={{ color: "#d5d5d5" }}>
                                    {item.kt}
                                </Text>
                                <Text style={{ color: "#d5d5d5" }}>
                                    {item.cn}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
            <View
                style={{
                    justifyContent: "space-between",
                    marginHorizontal: 15,
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                    Tổng công nợ
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "500" }}>0</Text>
            </View>
            <ModalBox
                visble={modalVisible}
                setModalVisible={setModalVisible}
                setHk={setHk}
                onRefresh={onRefresh}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    txt: {
        color: "#fff",
        marginHorizontal: 10,
        fontSize: 15,
        fontWeight: "300",
    },
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
