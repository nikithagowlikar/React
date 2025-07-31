import { useEffect, useState } from "react";
import resObj from "../utils/mock";
import Card from "./Card";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const RestaurantContainer = () => {
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [alReadyfilter, setAlReady] = useState([]);
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    // fetchData();
    setFilter(resObj);
    setAlReady(resObj);
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    console.log(
      "ressss",
      res?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
    );
  };
  if (!onlineStatus) {
    return <>You're offline. Please check your internet connection.</>;
  }
  if (filter.length === 0) {
    return <h1>loading.........</h1>;
  }

  return (
    <>
      <div className="flex m-4 gap-4">
        <div className="flex">
          <input
            type="text"
            className="mr-8 border-2 border-gray-400 rounded-md w-[100%]"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              console.log("searched-data", search);
            }}
          ></input>
          <button
            className="bg-blue-300 m-3 p-2 rounded-md"
            onClick={() => {
              const filterData = filter.filter((i) => {
                return i?.info?.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              });
              setAlReady(filterData);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className=" bg-green-300 rounded-md p-1"
            onClick={() => {
              const filterData = resObj.filter((i) => {
                return i?.info?.avgRating >= 4.3;
              });
              setFilter(filterData);
            }}
          >
            Filter top rated restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 m-4">
        {alReadyfilter.map((item) => {
          return (
            <Link to={"/restaurant/" + item?.info?.id} key={item?.info?.id}>
              <Card data={item} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default RestaurantContainer;
