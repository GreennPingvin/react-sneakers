import { AppContext } from "app/context/AppContext";
import { SetItems } from "app/context/AppContext/AppContext";
import { sneakers } from "app/data/sneakers";
import { Item } from "app/data/types";
import { useContext } from "react";
import {
  ITEMS_ADDED_TO_CART,
  ITEMS_ADDED_TO_FAVS,
  PURCHASED_ITEMS,
  saveItems,
} from "../lib/shopItems/localStorage";

export const useItems = () => {
  const {
    cards: {
      items,
      setItems,
      addedToCartItems,
      setAddedToCartItems,
      addedToFavsItems,
      setAddedToFavsItems,
      purchasedItems,
      setPurchasedItems,
    },
  } = useContext(AppContext);

  const findItemIndex = (item: Item, items: Item[]) => {
    return items.findIndex((i) => i.id === item.id);
  };

  const findItem = (item: Item, items: Item[]): null | Item => {
    const index = findItemIndex(item, items);
    return index === -1 ? null : items[index];
  };

  const appendItem = (item: Item | Item[], items: Item[]): Item[] => {
    if (Array.isArray(item)) {
      return [...items, ...item];
    } else {
      return [...items, item];
    }
  };

  const toggleItemById = (item: Item, items: Item[]): Item[] => {
    const foundItemIndex = findItemIndex(item, items);
    let newItems;
    if (foundItemIndex !== -1) {
      newItems = [...items];
      newItems.splice(foundItemIndex, 1);
    } else {
      newItems = appendItem(item, items);
    }
    return newItems;
  };

  const updateState = (
    item: Item,
    items: Item[],
    changeStateFunc: (item: Item, items: Item[]) => Item[],
    setStateFunc: SetItems<Item[]>,
    localStorageKey: string,
  ) => {
    setStateFunc((oldVal: Item[]) => {
      const newItems = changeStateFunc(item, oldVal);
      saveItems(newItems, localStorageKey);
      return newItems;
    });
  };

  const toggleAddToCart = (item: Item) => {
    updateState(
      item,
      addedToCartItems,
      toggleItemById,
      setAddedToCartItems,
      ITEMS_ADDED_TO_CART,
    );
  };

  const isItemInCart = (item: Item): boolean => {
    return findItem(item, addedToCartItems) !== null;
  };

  const getItemsInCartTotal = (): number => {
    return addedToCartItems.reduce((acc, i) => acc + i.price, 0);
  };

  const clearCart = () => {
    updateState(null, [], () => [], setAddedToCartItems, ITEMS_ADDED_TO_CART);
  };

  const filterItems = (searchString: string) => {
    const newFilteredItems = sneakers.filter((item) =>
      item.title.match(new RegExp(`${searchString}`, "gi")),
    );
    setItems(newFilteredItems);
  };

  const toggleAddToFavorites = (item: Item) => {
    updateState(
      item,
      addedToFavsItems,
      toggleItemById,
      setAddedToFavsItems,
      ITEMS_ADDED_TO_FAVS,
    );
  };

  const isItemInFavorites = (item: Item): boolean => {
    return findItem(item, addedToFavsItems) !== null;
  };

  const addToPurchased = (items: Item[]) => {
    items.forEach((item) =>
      updateState(
        item,
        purchasedItems,
        appendItem,
        setPurchasedItems,
        PURCHASED_ITEMS,
      ),
    );
  };

  const getItemsAddedToCart = () => {
    return addedToCartItems;
  };

  const getFavoriteItems = () => {
    return addedToFavsItems;
  };

  const getPurchasedItems = () => {
    return purchasedItems;
  };

  return {
    items,
    getItemsAddedToCart,
    getFavoriteItems,
    getPurchasedItems,
    toggleAddToCart,
    toggleAddToFavorites,
    isItemInCart,
    isItemInFavorites,
    getItemsInCartTotal,
    clearCart,
    filterItems,
    addToPurchased,
  };
};
