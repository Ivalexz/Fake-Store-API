import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import MainScreen from "./MainScreen";
import CartScreen from "./CartScreen";
import { ShopProvider } from "./context/ShopContext";
import { BurgerProvider } from "./context/BurgerContext";

export default function App() {
  const [mainScreen, setMainScreen] = useState(true);

  return (
    <ShopProvider>
      <BurgerProvider onBurgerPress={() => setMainScreen(!mainScreen)}>
      {mainScreen ? <MainScreen /> : <CartScreen />}
      </BurgerProvider>
      <StatusBar style="auto" />
    </ShopProvider>
  );
}

const styles = StyleSheet.create({});
