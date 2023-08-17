import React from "react";
import { createContext, useReducer } from "react";

export const CartContext = createContext();
const initialState = {
  items: [],
  totalAmount: 0,
};

const reducerCart = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      let updatedItems = [...state.items];
      let existingCartIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingCartIndex !== -1) {
        updatedItems[existingCartIndex] = {
          ...state.items[existingCartIndex],
          amount: state.items[existingCartIndex].amount + action.payload.amount,
        };
      } else {
        updatedItems = [...state.items, action.payload];
      }

      return {
        items: updatedItems,
        totalAmount:
          state.totalAmount + action.payload.price * action.payload.amount,
      };
    case "REMOVE_ITEM":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );
      return {
        items: filteredItems,
        totalAmount:
          state.totalAmount - itemToRemove.price * itemToRemove.amount,
      };
    case "CLEAR_ITEM":
      return initialState;

    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [stateCart, dispatch] = useReducer(reducerCart, initialState);
  const cartState = {
    items: stateCart.items,
    totalAmount: stateCart.totalAmount,
    addItem: (item) => {
      dispatch({ type: "ADD_ITEM", payload: item });
    },
    removeItem: (id) => {
      console.log(id);
      dispatch({ type: "REMOVE_ITEM", payload: id });
    },
    clearItem: () => {
      dispatch({ type: "CLEAR_ITEM" });
    },
  };
  return (
    <CartContext.Provider value={cartState}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
