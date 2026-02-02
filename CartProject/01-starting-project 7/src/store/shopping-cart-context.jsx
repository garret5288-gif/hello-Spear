import { createContext, useState, useReducer  } from "react";

import { DUMMY_PRODUCTS } from "../dummy-products.js";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

function shoppingCartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = [...state.items];
      
      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload);

      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingItem) {
        updatedItems[existingIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
      } else {
        const product = DUMMY_PRODUCTS.find((p) => p.id === action.payload);
        if (!product) return prev;
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return { items: updatedItems };
    }

    if (action.type === 'UPDATE_ITEM') {
      const updatedItems = [
        ...state.items];
      const updatedItemIndex = updatedItems.findIndex((item) => item.id === action.payload.productId);
      if (updatedItemIndex === -1) return prev;

      const updatedItem = { ...updatedItems[updatedItemIndex] };
      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return { items: updatedItems };  
    }
    return state;
}

export default function CartContextProvider({ children }) {
  const [ shoppingCartState, shoppingCartDispatch ] = useReducer(
    shoppingCartReducer,
    { items: [] }
  );

  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
        type: 'ADD_ITEM',
        payload: id 
    });

  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
        type: 'UPDATE_ITEM',
        payload: { 
            productId, 
            amount 
        }
    });
  }

  const contextValue = {
    cart: shoppingCart,
    addItem: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

const ctxValue = {
  items: shoppingCartState.items,
  addItemToCart: handleAddItemToCart,
  updateItemQuantity: handleUpdateCartItemQuantity,
};

return <CartContext.Provider value={ctxValue}>
  {children}
</CartContext.Provider>
}
