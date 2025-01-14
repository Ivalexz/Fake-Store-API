import { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";

export const BurgerContext=createContext();

export const BurgerProvider=({ children, onBurgerPress })=>{
    return(
        <BurgerContext.Provider value={{ onBurgerPress }}>
            {children}
        </BurgerContext.Provider>
    )
}

export const Burger = ()=>{
    const { onBurgerPress } = useContext(BurgerContext);
    return(
        <View style={styles.flex}>
      <Pressable style={styles.btnWrap} onPress={onBurgerPress}>
        <Image
          style={styles.burgerBtn}
          source={require("../images/burger.webp")}
        />
      </Pressable>
      <Text style={styles.mainText}>Fake Store API</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 15,
    gap: 100,
  },
  mainText: {
    fontSize: 25,
    fontWeight: 700,
  },
  btnWrap: {
    width: 30,
    height: 30,
  },
  burgerBtn: {
    width: 30,
    height: 30,
  },
});