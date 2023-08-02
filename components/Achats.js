import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

export default function Achats(props) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.products);
        setIsLoading(false);
      });
  }, []);

  function renderProducts() {
    return products.map((product) => {
      return (
        <TouchableOpacity
          onPress={() => {
            props.setPage("accueil");
          }}
        >
          <View
            style={{
              margin: 20,
              borderRadius: 10,
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "lightgrey",
            }}
          >
            <Image
              source={{ uri: product.thumbnail }}
              style={{ width: 150, height: 150, borderRadius: 10 }}
            />
            <View style={{ padding: 5 }}>
              <Text>{product.brand}</Text>
              <Text>{product.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {renderProducts()}
      </View>
    </ScrollView>
  );
}
