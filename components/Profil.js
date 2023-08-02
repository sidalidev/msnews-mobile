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
        backgroundColor: "grey",
      }}
    >
      <WebView
        source={{
          uri: "https://www.sidali.dev",
        }}
      ></WebView>
    </View>
  );
}
