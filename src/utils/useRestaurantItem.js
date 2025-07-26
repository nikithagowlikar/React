import { useEffect, useState } from "react";
import { MENU_ITEM } from "../utils/constants";
const useRestaurantItem = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      MENU_ITEM + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const resIn = await res.json();
    console.log("resIn.data!!11", resIn);
    setResInfo(resIn.data);
  };
  return resInfo;
};
export default useRestaurantItem;
