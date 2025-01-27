import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ShopProvider } from "./context/ShopContext";

import MainScreen from "./MainScreen";
import CartScreen from "./CartScreen";
import ProductScreen from "./ProductScreen"

const Stack = createStackNavigator();

const BurgerButton = ({ navigation }) => (
  <Pressable onPress={() => navigation.navigate("CartScreen")} style={styles.btnWrap}>
    <Image
      style={styles.burgerBtn}
      source={require("./images/burger.webp")}
    />
  </Pressable>
);

export default function App() {
  return (
    <ShopProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={({ navigation }) => ({
              title: "Products",
              headerRight: () => <BurgerButton navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="CartScreen"
            component={CartScreen}
            options={{
              title: "Your Cart",
            }}
          />
          <Stack.Screen
            name="ProductScreen"
            component={ProductScreen}
            options={{
              title: "Product Details",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ShopProvider>
  );
}

const styles = StyleSheet.create({
  btnWrap: {
    marginRight: 15,
  },
  burgerBtn: {
    width: 30,
    height: 30,
  },
});
