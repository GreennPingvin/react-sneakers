import { AppContext } from "app/context/AppContext";
import { sneakers } from "app/data/sneakers";
import { useContext } from "react";

export const useFilteredItems = () => {
  const { filteredItems, setFilteredItems } = useContext(AppContext);

  const filterItems = (searchString: string) => {
    const newFilteredItems = sneakers.filter((item) =>
      item.title.match(new RegExp(`${searchString}`, "gi")),
    );
    setFilteredItems(newFilteredItems);
  };

  return {
    filteredItems,
    filterItems,
  };
};
