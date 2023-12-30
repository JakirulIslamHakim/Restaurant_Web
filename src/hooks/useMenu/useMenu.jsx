import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const todaysOffered = menu.filter((items) => items.category === "offered");
  const dessert = menu.filter((items) => items.category === "dessert");
  const pizza = menu.filter((items) => items.category === "pizza");
  const salad = menu.filter((items) => items.category === "salad");
  const soup = menu.filter((items) => items.category === "soup");
  const drinks = menu.filter((items) => items.category === "drinks");

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/menu_item")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setIsLoading(false);
      });
  }, []);

  return [menu, isLoading, todaysOffered, dessert, pizza, salad, soup, drinks];
};

export default useMenu;
