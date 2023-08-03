import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import Accueil from "./components/Accueil";
import Achats from "./components/Achats";
import Profil from "./components/Profil";
import { useState } from "react";

// Flexbox

function LoggedInApp(props) {
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
        <Button
          title="🔐 Se déconnecter"
          onPress={() => props.setLoggedIn(false)}
        />
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

function AuthApp(props) {
  const [email, setEmail] = useState("jmroyer@origian.com");
  const [password, setPassword] = useState("123456");

  function logIn() {
    fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        alert(JSON.stringify(data));
        const jwt = data.token;
        props.setLoggedIn(true);

        // 1. Stocker le token dans le téléphone
        // 2. Lire le token dans le téléphone
      });
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Text>AuthApp</Text> -> iOS UIText placeholder -> Android TextView plchder */}
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Connexion
      </Text>
      <TextInput
        placeholder="Email"
        style={inputStyle}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Mot de passe"
        style={inputStyle}
        autoComplete="password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="🔐 Se connecter" onPress={logIn} />
    </View>
  );
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function showPage() {
    if (loggedIn) {
      return <LoggedInApp setLoggedIn={setLoggedIn} />;
    } else {
      return <AuthApp setLoggedIn={setLoggedIn} />;
    }
  }
  return <View style={{ flex: 1 }}>{showPage()}</View>;
}

const inputStyle = {
  borderWidth: 1,
  borderColor: "lightgray",
  width: 200,
  padding: 10,
  marginBottom: 10,
  borderRadius: 10,
};
