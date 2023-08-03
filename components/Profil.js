import { View, Text, Image, TouchableOpacity } from "react-native";
import WebView from "react-native-webview";

export default function Profil() {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        marginTop: 20,
      }}
    >
      <WebView
        source={{
          uri: "http://127.0.0.1:3000",
        }}
        onMessage={(event) => {
          alert("Nous avons reçu ce message : " + event.nativeEvent.data);
        }}
      ></WebView>
    </View>
  );
}
