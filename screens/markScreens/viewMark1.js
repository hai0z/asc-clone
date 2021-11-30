import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";

export default function ViewMark1() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1500);
    }, []);
    return (
        <View
            style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {isLoading ? (
                <ActivityIndicator size={"large"} color={"black"} />
            ) : (
                <Text>Không có dữ liệu</Text>
            )}
        </View>
    );
}
