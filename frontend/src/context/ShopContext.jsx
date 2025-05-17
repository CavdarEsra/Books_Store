import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {books} from '../assets/data'

// Not: Bu kodda bir React Context oluşturuluyor. Uygulamadaki bazı verileri (books, currency, navigate, token, setToken)
//Birçok farklı component içinden kolayca erişmek için merkezi bir "global state" gibi hazırlanıyor.
//Klasik props ile aşağı doğru veri taşımak yerine, Context kullanarak, ağaca istediğin yerden doğrudan ulaşabiliyorsun
//Uygulamada bu provider ile çevrelediğin component'ler, bu context değerlerine ulaşabilecek.
//ShopContext.Provider sayesinde, alt komponentlere bu değerleri otomatik sağlıyorsun.
//const {books} = useContext(ShopContext) diğer componentlerde böyle çağırıp kullanırsın

export const ShopContext = createContext()

function ShopContextProvider(props) {

    const currency = '$'
    const delivery_charges = 5
    const navigate = useNavigate()
    const [token, setToken] = useState("")
    const [cartItems, setCartItems] = useState({})

    //Adding items to cart
    const addToCart = async (itemId)=>{
      const cartData = {...cartItems}

      if(cartData[itemId]){
        cartData[itemId] += 1
      }else {
        cartData[itemId] = 1
      }
      setCartItems(cartData)
    }

    //Getting total cart items
    const getCartCount = ()=> {
      let totalCount = 0
      for(const item in cartItems){
        try {
          if(cartItems[item] > 0){
            totalCount += cartItems[item]
          }
        } catch (error) {
          console.log(error)
        }
      }
      return totalCount;
    }

    //Getting total cart amount
    const getCartAmount = () => {
      let totalAmount = 0
      for (const item in cartItems){
        if(cartItems[item] > 0){
          let itemInfo = books.find((book)=> book._id === item)
          if(itemInfo){
            totalAmount += itemInfo.price * cartItems[item]
          }
        }
      }
      return totalAmount
    }

    //Updating the Quantity
    const updateQuantity = async (itemId, quantity) => {
      const cartData = {...cartItems}
      cartData[itemId] = quantity
      setCartItems(cartData)
    }

    const contextValue = {books, currency, navigate, token, setToken, cartItems, setCartItems, addToCart, getCartCount, getCartAmount, updateQuantity, delivery_charges}

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider