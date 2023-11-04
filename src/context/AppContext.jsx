/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import { createContext, useEffect } from "react";
import { useState } from "react"
import { useLocation } from 'react-router-dom';
export const Context = createContext();

function Appcontext({ children }) {
    const [isHiddenEdit, setisHiddenEdit] = useState(false);
    const [isHiddenPreview, setisHiddenPreview] = useState(false);
 










    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [categorytitle, setcategorytitle] = useState();
    const [categoryid, setCategoryid] = useState();
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCarCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])


    useEffect(() => {

        let cartCount = 0;
        cartItems.map(item => cartCount += item.quantity)
        setTimeout(() => {
            setCarCount(cartCount);
        }, 2000);

        let subTotal = 0;
        cartItems.map(item => subTotal += item.price * item.quantity)
        setCartSubTotal(subTotal);

    }, [cartItems]);


    const handleAddToCart = (product, quantity, productTitle) => {
        let items = [...cartItems];
        let index = items.findIndex(product => product.title === productTitle)
        console.log('ITEMS INDEX : ', index);
        if (index !== -1) {
            items[index].quantity += quantity;
            console.log('ITEMS THAT ARE ALREADY PRESENT : ', index);
        } else {
            product.quantity = quantity;
            items = [...items, product];
            console.log('ITEMS THAT ARE NEWLY ADDED : ', index);
        }
        setCartItems(items);
    };


    //working
    const handleRemoveFromCart = (product, productTitle) => {
        let items = [...cartItems];
        items = items.filter(product => product.title !== productTitle)
        setCartItems(items);
    }
    //working
    const handleCartProductQuantity = (type, product, productTitle) => {
        let items = [...cartItems];
        let index = items.findIndex(product => product.title === productTitle)
        if (type === "inc") {
            items[index].quantity += 1;
        } else if (type === "dec") {
            if (items[index].quantity === 1) {
                return;
            }
            else {
                items[index].quantity -= 1;
            }
        }
        setCartItems(items);
    }



    return (

        <Context.Provider value={{
            categories, setCategories,
            products, setProducts,
            categorytitle, setcategorytitle,
            categoryid, setCategoryid,
            cartItems, setCartItems,
            cartCount, setCarCount,
            cartSubTotal, setCartSubTotal,
            handleAddToCart, handleRemoveFromCart, handleCartProductQuantity,
            isHiddenEdit, setisHiddenEdit,
            isHiddenPreview, setisHiddenPreview,
        }}
        >
            {children}
        </Context.Provider>
    );
}

export default Appcontext;