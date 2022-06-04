import React, { useState } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";
import HeaderBar from "../components/headerBar";
export default function Training({ navigation }) {
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const wait = (timeout) => {
        return new Promise((resolve) => setTimeout(resolve, timeout));
    };
    const onRefresh = React.useCallback(() => {
        setData([]);
        setRefreshing(true);
        wait(800).then(() => {
            setData([
                {
                    name: "2 (2020 - 2021)",
                    point: 75,
                },
                {
                    name: "1 (2020 - 2021)",
                    point: 67,
                },
                {
                    name: "2 (2019 - 2020)",
                    point: 67,
                },
                {
                    name: "1 (2019 - 2020)",
                    point: 78,
                },
            ]);
            setRefreshing(false);
        });
    }, []);
    React.useEffect(() => {
        onRefresh();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <HeaderBar title="Đánh giá rèn luyện" navigation={navigation} />
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                contentContainerStyle={{
                    marginVertical: 10,
                    marginHorizontal: 20,
                    width: "100%",
                }}
            >
                {data.map((item, index) => {
                    return (
                        <View
                            key={index}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 30,
                            }}
                        >
                            <Text style={{ width: 35, fontSize: 9 }}>
                                {item.name}
                            </Text>
                            <View
                                style={{
                                    height: 120,
                                    backgroundColor: "#0ACFFE",
                                    width: item.point + "%",
                                    justifyContent: "center",
                                    alignItems: "flex-end",
                                    marginLeft: 10,
                                }}
                            >
                                <Text style={{ color: "#fff" }}>
                                    {item.point.toFixed(2)}
                                    {item.point > 60 ? " - Khá" : " - TB"}
                                </Text>
                            </View>
                        </View>
                    );
                })}
                {data.length > 0 && (
                    <View
                        style={{
                            flexDirection: "row",
                            marginLeft: 40,
                            marginTop: 20,
                            justifyContent: "space-evenly",
                            alignItems: "flex-end",
                            flex: 1,
                            height: 70,
                        }}
                    >
                        <Text style={{ width: "10%" }}>0</Text>
                        <Text style={{ width: "10%" }}>10</Text>
                        <Text style={{ width: "10%" }}>20</Text>
                        <Text style={{ width: "10%" }}>30</Text>
                        <Text style={{ width: "10%" }}>40</Text>
                        <Text style={{ width: "10%" }}>50</Text>
                        <Text style={{ width: "10%" }}>60</Text>
                        <Text style={{ width: "10%" }}>70</Text>
                        <Text style={{ width: "10%" }}>80</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}
