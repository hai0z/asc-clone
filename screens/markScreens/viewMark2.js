import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import data from "../../data/mark";

export default function ViewMark2() {
    const [listData, setListData] = useState(data);

    const expandList = (id) => {
        setListData((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, expand: !item.expand } : item
            )
        );
    };
    const subExpand = (id) => {
        setListData(
            listData.map((dataItem) => ({
                ...dataItem,
                sub: dataItem.sub.map((subItem) => ({
                    ...subItem,
                    all: subItem.all.map((item) =>
                        item.id === id
                            ? { ...item, expand: !item.expand }
                            : item
                    ),
                })),
            }))
        );
    };

    const MarkView = ({ item }) => {
        return (
            <View key={item.name}>
                {item.sub.map((item, index) => {
                    return (
                        <View key={index}>
                            <TouchableOpacity
                                onPress={() => subExpand(item.all[0].id)}
                                style={{
                                    marginVertical: 10,
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        marginHorizontal: 10,
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            color:
                                                item.mark < 4 ? "red" : "black",
                                            width: "15%",
                                        }}
                                    >
                                        {item.id}
                                    </Text>
                                    <Text
                                        style={{
                                            color:
                                                item.mark < 4 ? "red" : "black",
                                            width: "50%",
                                        }}
                                    >
                                        {item.name}
                                    </Text>

                                    <Text
                                        style={{
                                            color:
                                                item.mark < 4 ? "red" : "black",
                                            width: "10%",
                                        }}
                                    >
                                        {item.tc}
                                    </Text>
                                    <Text
                                        style={{
                                            color:
                                                item.mark < 4 ? "red" : "black",
                                        }}
                                    >
                                        {item.mark.toFixed(2)}
                                    </Text>
                                    {item.all[0].expand ? (
                                        <AntDesign
                                            name="up"
                                            size={10}
                                            color="grey"
                                            style={{
                                                marginLeft: 10,
                                                justifyContent: "center",
                                            }}
                                        />
                                    ) : (
                                        <AntDesign
                                            name="down"
                                            size={10}
                                            color="grey"
                                            style={{
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        />
                                    )}
                                </View>
                            </TouchableOpacity>
                            {item.all.map((item) => {
                                return (
                                    <View
                                        key={Math.floor(Math.random() * 1000)}
                                    >
                                        {item.expand && (
                                            <View
                                                style={{
                                                    backgroundColor: "#e4f1f7",
                                                    height: 45,
                                                    justifyContent: "center",
                                                    borderRadius: 10,
                                                    marginHorizontal: 5,
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "space-between",
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            ...styles.txt,
                                                            width: `${
                                                                100 / 6
                                                            }%`,
                                                        }}
                                                    >
                                                        Tiểu Luận
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            ...styles.txt,
                                                            width: `${
                                                                100 / 6
                                                            }%`,
                                                        }}
                                                    >
                                                        Thg Kỳ
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            ...styles.txt,
                                                            width: `${
                                                                100 / 6
                                                            }%`,
                                                        }}
                                                    >
                                                        Thực Hành
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            ...styles.txt,
                                                            width: `${
                                                                100 / 6
                                                            }%`,
                                                        }}
                                                    >
                                                        Điểm thi
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            ...styles.txt,
                                                            width: `${
                                                                100 / 6
                                                            }%`,
                                                        }}
                                                    >
                                                        Điểm Chữ
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            ...styles.txt,
                                                            width: `${
                                                                100 / 6
                                                            }%`,
                                                        }}
                                                    >
                                                        Xếp loại
                                                    </Text>
                                                </View>
                                                <View>
                                                    <View
                                                        key={Math.random()}
                                                        style={{
                                                            flexDirection:
                                                                "row",
                                                            justifyContent:
                                                                "space-between",
                                                            alignItems:
                                                                "center",
                                                        }}
                                                    >
                                                        <Text
                                                            style={{
                                                                ...styles.allTxt,
                                                                width: `${
                                                                    100 / 6
                                                                }%`,
                                                            }}
                                                        >
                                                            {item.tl}
                                                        </Text>
                                                        <Text
                                                            style={{
                                                                ...styles.allTxt,
                                                                width: `${
                                                                    100 / 6
                                                                }%`,
                                                            }}
                                                        >
                                                            {item.tk}
                                                        </Text>
                                                        <Text
                                                            style={{
                                                                ...styles.allTxt,
                                                                width: `${
                                                                    100 / 6
                                                                }%`,
                                                            }}
                                                        >
                                                            {item.th}
                                                        </Text>
                                                        <Text
                                                            style={{
                                                                ...styles.allTxt,
                                                                width: `${
                                                                    100 / 6
                                                                }%`,
                                                            }}
                                                        >
                                                            {item.dt}
                                                        </Text>
                                                        <Text
                                                            style={{
                                                                ...styles.allTxt,
                                                                width: `${
                                                                    100 / 6
                                                                }%`,
                                                            }}
                                                        >
                                                            {item.dc}
                                                        </Text>
                                                        <Text
                                                            style={{
                                                                ...styles.allTxt,
                                                                width: `${
                                                                    100 / 6
                                                                }%`,
                                                            }}
                                                        >
                                                            {item.xl}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        )}
                                    </View>
                                );
                            })}
                        </View>
                    );
                })}
            </View>
        );
    };

    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <ScrollView>
                {listData.map((item, index) => {
                    return (
                        <View key={index}>
                            <TouchableOpacity
                                onPress={() => {
                                    expandList(item.id);
                                }}
                                key={item.name}
                                style={{
                                    backgroundColor: "#f9f9f9",
                                    marginHorizontal: 3,
                                    minHeight: 40,
                                    justifyContent: "center",
                                    marginBottom: 3,
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Text
                                        style={{
                                            marginLeft: 10,
                                            color: "steelblue",
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                    {item.expand ? (
                                        <AntDesign
                                            name="up"
                                            size={15}
                                            color="black"
                                            style={{ marginRight: 5 }}
                                        />
                                    ) : (
                                        <AntDesign
                                            name="down"
                                            size={15}
                                            color="black"
                                            style={{ marginRight: 5 }}
                                        />
                                    )}
                                </View>
                            </TouchableOpacity>
                            {item.expand && (
                                <View
                                    style={{
                                        flexDirection: "column",
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            padding: 5,
                                            marginHorizontal: 10,
                                            borderBottomWidth: 2,
                                            borderBottomColor: "#ccc",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                ...styles.thead,
                                                width: "15%",
                                            }}
                                        >
                                            Mã môn
                                        </Text>
                                        <Text
                                            style={{
                                                ...styles.thead,
                                                width: "50%",
                                                textAlign: "left",
                                                marginLeft: 15,
                                            }}
                                        >
                                            Môn học
                                        </Text>

                                        <Text
                                            style={{
                                                ...styles.thead,
                                                width: "10%",
                                            }}
                                        >
                                            TC
                                        </Text>
                                        <Text
                                            style={{
                                                ...styles.thead,
                                                width: "25%",
                                            }}
                                        >
                                            Điểm TB
                                        </Text>
                                    </View>
                                    <MarkView item={item} />
                                </View>
                            )}
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    allTxt: {
        fontSize: 13,
        textAlign: "center",
    },
    txt: {
        fontSize: 12,
        textAlign: "center",
    },
    thead: {
        color: "#0098db",
        textAlign: "center",
    },
});
