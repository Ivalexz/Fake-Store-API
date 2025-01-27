import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Pressable
  } from "react-native";

const ProductScreen=({route})=>{
    const {product}=route.params;

    return(
        <ScrollView horizontal={false} style={styles.scroll}>
            <View style={styles.container}>
            <Text style={styles.title}>{product.title}</Text>
             <Image
                      style={styles.picture}
                      source={{
                        uri: product.image,
                      }}
                    />
                     <Text style={styles.price}>{product.price}$</Text>
            <Text style={styles.descr}>{product.description}</Text>
            <Text style={styles.text}>Category: {product.category}</Text>
            <View style={styles.flex}>
            <Text style={styles.text}>Number of stars: {product.rating.rate}</Text>
            <Image
                      style={styles.star}
                      source={require("./images/star.png")}
                    />
            </View>
            <Text style={styles.text}>Number of reviews: {product.rating.count}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        paddingVertical: 20,
      },
      scroll:{
        flex: 1,  
        height:"100%",
        backgroundColor: "white",
      },
      title:{
        fontSize:20,
        fontWeight:700,
        width:300,
        textAlign:"center",
        marginBottom:20
      },
      descr:{
        fontSize:17,
        width:300,
        textAlign:"center",
        marginBottom:10
      },
    text:{
        fontSize:17,
        fontWeight:500,
    },
    picture: {
        width: 190,
        height: 270,
        resizeMode: "contain",
        marginBottom:20
      },
      flex:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:10
      },
      star:{
        width:30,
        height:30
      },
    price: {
        fontWeight: 600,
        color: "#c72020",
        fontSize: 22,
        marginBottom:10
      },
});

export default ProductScreen;