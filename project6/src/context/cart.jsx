import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart";
// utilizar los proveiders solo en los lugares necesarios
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext =  createContext()

// use reducer nos permite manejar el estado de una manera escalable
// use reducer nos deja separar lo logica del componente fuera de el para no necesitar de renderizarlo para testearlo
// se usa cuando el mismo estado esta en varias funciones

function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({type: 'CLEAR_CART'})

    return {state, addToCart, removeFromCart, clearCart}
}

export function CartProvider({children}) {
    const {state, addToCart, removeFromCart, clearCart} = useCartReducer()

    return(
        <CartContext.Provider
        value={{
            cart: state, addToCart, clearCart ,removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}