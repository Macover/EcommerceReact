import React, { createContext, useReducer } from 'react';
import { cartReducer, cartInitialState } from '../Reducers/cartReducer';


export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {


    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    });

    const increaseQuantity = product => dispatch({
        type: 'INCREASE_QUANTITY_ITEM',
        payload: product
    });

    const decreaseQuantity = product => dispatch({
        type: 'DECREASE_QUANTITY_ITEM',
        payload: product
    });

    const removeItem = product => dispatch({
        type: 'REMOVE_ITEM_FROM_CART',
        payload: product
    });

    const cleanCart = () => dispatch({
        type: 'CLEAN__CART',
        payload: {}
    })

    return (

        <CartContext.Provider
            value={{
                state,
                subTotal : state.subTotal,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeItem,
                cleanCart
            }}
        >
            {children}
        </CartContext.Provider>
    )

}