import { createContext, useState, useEffect } from "react";

export const ShopContext=createContext();

export const ShopProvider=({children})=>{
    const [itemsData, setItemsData]=useState([]);
    const [cartData, setCartData]=useState([]);
    const [loading, setLoading]=useState(true);
    
    const fetchData= async()=>{
        try{
            const responce = await fetch("https://fakestoreapi.com/products")
            const data = await responce.json();
            setItemsData(data)
        }catch(err){
            console.error(err);
        } finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        void fetchData()
    }, []);

    return(
        <ShopContext.Provider value={{itemsData, setCartData, cartData, loading}}>
            {children}
        </ShopContext.Provider>
    )
}
