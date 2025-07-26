import { useParams } from "react-router-dom";
import useRestaurantItem from "../utils/useRestaurantItem";
const RestaurantMenu = () => {
  const data = useParams();
  const { resId } = data;
  const resInfo = useRestaurantItem(resId);
  console.log("resInfo", resInfo);
  if (resInfo === null) {
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
