import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublic from "../useAxiosPublic";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // const todaysOffered = menu.filter((items) => items.category === "offered");
  // const dessert = menu.filter((items) => items.category === "dessert");
  // const pizza = menu.filter((items) => items.category === "pizza");
  // const salad = menu.filter((items) => items.category === "salad");
  // const soup = menu.filter((items) => items.category === "soup");
  // const drinks = menu.filter((items) => items.category === "drinks");

  // useEffect(() => {
  //   // setIsLoading(true);
  //   fetch("http://localhost:5000/api/v1/menu_item")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       // setIsLoading(false);
  //     });
  // }, []);

  const {
    data: menu = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic("/menu_item");
      return res.data;
    },
  });

  return [menu, isLoading, refetch];
};

export default useMenu;
