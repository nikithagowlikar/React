import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const data = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const { resId } = data;
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const res = await data.json();
    console.log("res!", res);
    setResInfo(res.data);
  };
  if (resInfo.length == 0) {
    return (
      <>
        <h1>loading!!!!!!</h1>
      </>
    );
  }

  const { name, cuisines } = resInfo?.cards?.[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card;

  console.log("jh", data);

  return (
    <>
      <div className="restaurant-menu">
        <h1>{name}</h1>
        <h5>Menu Items</h5>
        <ul>
          {itemCards?.map((item, i) => {
            return <li key={i}>{item?.card?.info?.name}</li>;
          })}
          {/* <li>{itemCards?.[0]?.card?.info?.name}</li>
          <li>{itemCards?.[1]?.card?.info?.name}</li> */}
        </ul>
      </div>
    </>
  );
};
export default RestaurantMenu;
