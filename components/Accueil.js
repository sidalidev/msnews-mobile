import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Accueil() {
  return (
    <>
      <Text
        style={{
          fontSize: 30,
        }}
      >
        🏡
      </Text>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{ width: 50, height: 50 }}
      />
    </>
  );
}
