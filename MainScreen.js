import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { useContext, useState } from "react";
import { ShopContext } from "./context/ShopContext";
import { BurgerProvider } from "./context/BurgerContext";
import { Burger } from "./context/BurgerContext";

const MainScreen = (item) => {
  const { itemsData, setCartData, cartData, loading } = useContext(ShopContext);
  const [showMessage, setShowMessage] = useState(false);

  const onCartPress = (item) => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
    setCartData((prev) => [...prev, item]);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.picture}
          source={{
            uri: item.image,
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.flex}>
          <Text style={styles.price}>{item.price}$</Text>
          <Pressable style={styles.cartContainer} onPress={()=>onCartPress(item)}>
            <Image style={styles.cart} source={require("./images/cart.png")} />
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Burger />
      <FlatList
        data={itemsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {showMessage && (
        <View style={styles.message}>
          <Text style={styles.messageText}>
            The product has been added to the cart
          </Text>
          <Image
            style={styles.messageImg}
            source={require("./images/successfully.png")}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f3e6",
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 280,
    height: 400,
    marginVertical: 10,
    shadowColor: "#000",
    elevation: 3,
    borderRadius: 15,
    backgroundColor: "white",
  },
  picture: {
    width: 190,
    height: 270,
    resizeMode: "contain",
  },
  title: {
    marginVertical: 10,
    textAlign: "center",
    width: 240,
    fontWeight: 500,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 80,
  },
  price: {
    fontWeight: 600,
    color: "#c72020",
    fontSize: 22,
  },
  cartContainer: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
  },
  cart: {
    width: 27,
    height: 27,
    margin: 3,
  },

  message: {
    position: "absolute",
    top: 80,
    backgroundColor: "white",
    padding: 10,
    height:50,
    borderRadius: 5,
    shadowColor: "#000",
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  messageText: {
    marginRight: 10,
    fontWeight:700
  },
  messageImg: {
    width: 20,
    height: 20,
  },
});

export default MainScreen;
