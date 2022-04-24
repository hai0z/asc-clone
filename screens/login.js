import React, { useState } from "react";
import axios from "axios";
import md5 from "md5";
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Alert,
} from "react-native";
import Loading from "../screens/loading";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
const wait = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
};

const login = ({ navigation }) => {
    const [userName, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    const [loadingVisible, setLoadingVisible] = useState(false);
    const login = async () => {
        // const URL = `http://192.168.1.4:5000/api/user?username=${userName}`;
        // // try {
        // // const data = await (await axios.get(URL)).data;
        // if ("19103100153" === userName && "1111" === password) {
        //   await AsyncStorage.setItem("Auth", "1");
        //   setLoadingVisible(true);
        //   wait(1500).then(() => navigation.replace("Home"));
        // } else {
        //   setLoadingVisible(true);
        //   wait(1500).then(() => {
        //     wait(1500).then(() => {
        //       setLoadingVisible(false);
        //       Alert.alert("Thông báo", "Sai tên đăng nhập hoặc mật khẩu");
        //     });
        //   });
        // }
        // } catch (err) {
        //   console.log(err);
        //   setLoadingVisible(true);
        //   wait(1500).then(() => {
        //     setLoadingVisible(false);
        //     Alert.alert("Thông báo", "Sai tên đăng nhập hoặc mật khẩu");
        //   });
        //
        setLoadingVisible(true);
        wait(1500).then(() => navigation.replace("Home"));
    };

    const {
        textTitle,
        body,
        banner,
        choseSchool,
        loginForm,
        input,
        loginBtn,
        foodter,
        textFooter,
    } = styles;

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor="#005597" />
            <View style={body}>
                <View style={banner}>
                    <Image source={require("../assets/logo.png")} />
                    <Text style={{ color: "#4b6889", fontSize: 16 }}>
                        Vui lòng đăng nhập tài khoản
                    </Text>
                </View>
                <View style={choseSchool}>
                    <FontAwesome5 name="house-damage" size={24} color="#4b6889" />
                    <View>
                        <Text style={textTitle}>Trường Đại học Kinh tế</Text>
                        <Text style={textTitle}>- Kỹ thuật Công nghiệp</Text>
                    </View>
                    <SimpleLineIcons name="options-vertical" size={24} color="#4b6889" />
                </View>
                <Loading visible={loadingVisible} />
                <View style={loginForm}>
                    <TextInput
                        placeholder="Nhập tài khoản"
                        style={input}
                        placeholderTextColor="#4b6889"
                        value={userName}
                        onChangeText={(value) => setUserName(value)}
                    />
                    <TextInput
                        placeholder="Nhập mật khẩu "
                        style={input}
                        placeholderTextColor="#4b6889"
                        value={password}
                        onChangeText={(value) => setPassWord(value)}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity style={loginBtn} onPress={() => login()}>
                        <Text style={{ color: "#fff", fontSize: 16 }}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={foodter}>
                <Text style={textFooter}>Điều khoản sử dụng và chính sách ASC</Text>
                <Text style={{ ...textFooter, fontWeight: "bold", fontSize: 18 }}>
                    ascvn.com.vn
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0076fe",
        flex: 1,
    },
    body: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flex: 1,
        marginTop: 10,
    },
    banner: {
        marginTop: 25,
        alignItems: "center",
    },
    choseSchool: {
        marginTop: 20,
        flexDirection: "row",
        backgroundColor: "#fff",
        height: 80,
        marginHorizontal: 15,
        alignItems: "center",
        borderColor: "#ddd",
        borderRadius: 8,
        borderWidth: 1,
        paddingHorizontal: 10,
        justifyContent: "space-around",
        paddingVertical: 8,
    },
    textTitle: {
        color: "#4b6889",
        fontSize: 20,
        fontWeight: "bold",
    },
    loginForm: {
        marginTop: 25,
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        marginHorizontal: 15,
        marginVertical: 8,
        borderRadius: 3,
        height: 50,
        paddingHorizontal: 20,
    },
    loginBtn: {
        marginTop: 25,
        backgroundColor: "#0074ff",
        height: 55,
        marginHorizontal: 15,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    foodter: {
        backgroundColor: "#fff",
        alignItems: "center",
        position: "relative",
        height: 70,
    },
    textFooter: {
        color: "#4b6889",
        fontSize: 16,
    },
});
export default login;
