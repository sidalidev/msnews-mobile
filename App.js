import { View, Text, Image, TouchableOpacity } from "react-native";
import Accueil from "./components/Accueil";
import Achats from "./components/Achats";
import Profil from "./components/Profil";
import { useState } from "react";

// Flexbox

export default function App() {
  const [page, setPage] = useState("accueil");

  function goAchats() {
    setPage("achats");
  }

  function goAccueil() {
    setPage("accueil");
  }

  function goProfil() {
    setPage("profil");
  }

  function showPage() {
    if (page === "accueil") {
      return <Accueil />;
    } else if (page === "achats") {
      return <Achats setPage={setPage} />;
    } else if (page === "profil") {
      return <Profil />;
    }
  }

  return (
    <View
      style={{
        flexGrow: 1,
        flexDirection: "column", // default
        // flexDirection: "row",
        // justifyContent: "space-around",
        // justifyContent: "space-evenly",
        justifyContent: "space-between",
        // justifyContent: "center",
        // justifyContent: "flex-start",
        // justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          flex: 1,
          paddingTop: 50,
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "lightblue",
        }}
      >
        {showPage()}
      </View>
      <View
        style={{
          padding: 20,
          borderColor: "lightgray",
          height: 100,
          borderRadius: 10,
          borderWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={goAccueil}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text>🏠</Text>
            <Text>Accueil</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={goAchats}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text>💰</Text>
            <Text>Achats</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={goProfil}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text>🤦‍♀️</Text>
            <Text>Profil</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
