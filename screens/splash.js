import React from "react";
import { View, Text, ImageBackground, StatusBar } from "react-native";
import img from "../assets/splash.jpg";
import Loading from "./loading";
import AsyncStorage from "@react-native-community/async-storage";
export default function Splash({ navigation }) {
  const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));
  const [version, setVersion] = React.useState("");
  const [visible, setVisble] = React.useState(false);

  React.useEffect(() => {
    const auth = async () => {
      const data = await AsyncStorage.getItem("Auth");
      if (data) {
        wait(3500).then(() => {
          navigation.replace("Home");
        });
      } else {
        wait(3500).then(() => {
          navigation.replace("Login");
        });
      }
    };
    wait(2000).then(() => {
      setVersion("v2.6.2");
    });
    wait(800).then(() => setVisble(true));
    auth();
  }, []);
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <StatusBar backgroundColor='#005597' />
      <ImageBackground
        source={img}
        resizeMode='cover'
        style={{ flex: 1, justifyContent: "center" }}
      />
      <View style={{ position: "absolute", bottom: 20, right: 20 }}>
        <Text style={{ color: "cyan", fontSize: 16, fontWeight: "bold" }}>
          {version}
        </Text>
      </View>
      <Loading visible={visible} />
    </View>
  );
}
