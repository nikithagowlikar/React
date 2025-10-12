import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantItem from "../utils/useRestaurantItem";
import Accordian from "./Accordian";

const RestaurantMenu = () => {
  const [showAccordian, setShowAccordian] = useState(null);
  const data = useParams();
  const { resId } = data;
  const resInfo = useRestaurantItem(resId);

  if (resInfo === null) {
    return (
      <>
        <h1>loading!!!!!!</h1>
      </>
    );
  }

  // const { name, cuisines } = resInfo?.cards?.[2]?.card?.card?.info;
  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
  //     ?.card;
  const accordianData =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const accordianFilter = accordianData?.filter((item) => {
    return (
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  console.log("resInfo@@@@@@", resInfo);
  return (
    <>
      {/* <div className="">
        <h1>{name}</h1>
        <h5>Menu Items</h5>
        <ul>
          {itemCards?.map((item, i) => {
            return <li key={i}>{item?.card?.info?.name}000</li>;
          })}
        </ul>
      </div> */}
      {accordianFilter &&
        accordianFilter?.map((item, index) => {
          return (
            <div key={index} className="my-2.5 ">
              <Accordian
                data={item}
                show={index === showAccordian ? true : false}
                setShowAccordian={() => {
                  setShowAccordian(index);
                }}
              />
            </div>
          );
        })}
    </>
  );
};
export default RestaurantMenu;
