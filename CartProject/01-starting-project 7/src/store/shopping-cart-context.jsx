import { createContext, useState, useReducer  } from "react";

import { DUMMY_PRODUCTS } from "../dummy-products.js";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

function shoppingCartReducer(state, action) {
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
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      
      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id);

      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingItem) {
        updatedItems[existingIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
      } else {
        const product = DUMMY_PRODUCTS.find((p) => p.id === id);
        if (!product) return prev;
        updatedItems.push({
          id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return { items: updatedItems };
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prev) => {
      const updatedItems = [...prev.items];
      const idx = updatedItems.findIndex((item) => item.id === productId);
      if (idx === -1) return prev;

      const updatedItem = { ...updatedItems[idx] };
      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(idx, 1);
      } else {
        updatedItems[idx] = updatedItem;
      }

      return { items: updatedItems };
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
