import { FlatList, StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "./context/ShopContext";

const CartScreen = () => {
  const { setCartData, cartData } = useContext(ShopContext);
   const [showMessage, setShowMessage] = useState(false);

   const [countOfProducts, setCountOfProducts]=useState(0)
   const [sum, setSum]=useState(0)

   useEffect(() => {
    let newSum = 0;

  cartData.forEach((item) => {
    newSum += item.price
  });

  setSum((prev) => newSum);
  setCountOfProducts(cartData.length);
}, [cartData]);

  const onRemoveItem  = (index) => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
    setCartData((prev) => prev.filter((_, idx) => idx !== index));
  };

  const renderItem = ({ item, index }) => {
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
                 <Pressable style={styles.btnContainer} onPress={() => onRemoveItem(index)}>
                   <Text style={styles.btnText}>Delete</Text>
                 </Pressable>
               </View>
             </View>
      );
    };

  return (
    <View style={styles.container}>
      <View style={styles.flexScores}>
        <View style={styles.scoreContainer}>
      <Text style={styles.scoreText}>Number of products: {countOfProducts}</Text>
      </View>
      <View style={styles.scoreContainer}>
      <Text style={styles.scoreText}>Total price: {sum} $</Text>
      </View>
      </View>
      <FlatList
        data={cartData}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.title}-${item.price}-${index}`} 
      />

       {showMessage && (
              <View style={styles.message}>
                <Text style={styles.messageText}>
                The product has been removed from the cart
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
export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f3e6",
  },
  mainText: {
    fontSize: 20,
    fontWeight: 900,
  },
  flexScores:{
    flexDirection:"row",
    gap:20
  },
  scoreContainer:{
    marginVertical:10,
    height:50,
    width:150,
    borderWidth:1.3,
    borderColor:"black",
    borderRadius:10,
    backgroundColor:"white"
  },
  scoreText:{
    width:90,
    fontSize:14,
    marginTop:6,
    marginLeft:25,
    textAlign:"center",
    fontWeight:500,
    color:"#c72020"
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
  flex:{
    flexDirection:"row",
    alignItems:"center",
    gap:70
  },
  price: {
    fontWeight: 600,
    color: "#c72020",
    fontSize: 22,
  },
  btnContainer:{
    width:90,
    height:30,
    backgroundColor:"#c72020",
    borderRadius:8,
  },
  btnText:{
    color:"white",
    fontWeight:700,
    textAlign:"center",
    padding:5
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
