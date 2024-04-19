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
    const [ContextCartTotal, setContextCartTotal] = useState(0);
    const [categoryproductlength, setcategoryproductlength] = useState();
    const [Thankyou, setThankyou] = useState(false)
    const [Token, setToken] = useState()
    const location = useLocation();
    const [searchText, setSearchText] = useState('');
    const [isReviewload, setReviewload] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])


    return (

        <Context.Provider value={{
            isHiddenEdit, setisHiddenEdit,
            isHiddenPreview, setisHiddenPreview,
            ContextCartTotal, setContextCartTotal,
            categoryproductlength, setcategoryproductlength,
            Thankyou, setThankyou,
            Token, setToken,
            searchText, setSearchText,
            isReviewload, setReviewload
        }}
        >
            {children}
        </Context.Provider>
    );
}

export default Appcontext;