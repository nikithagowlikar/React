import { useContext, useEffect, useState } from "react";
import resObj from "../utils/mock";
import Card from "./Card";
import { Link } from "react-router-dom";
import { GoodRatingCard } from "./Body";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const RestaurantContainer = () => {
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [alReadyfilter, setAlReady] = useState([]);
  const EnhancedCard = GoodRatingCard(Card);
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();

    const abc =
      res?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setFilter(abc);
    setAlReady(abc);
  };
  if (!onlineStatus) {
    return <>You're offline. Please check your internet connection.</>;
  }

  if (!filter || filter?.length === 0) {
    return <h1>loading.........</h1>;
  }

  const { setUserName, loggedInUser } = data;

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
              const filterData = filter.filter((i) => {
                return i?.info?.avgRating >= 4.3;
              });
              setFilter(filterData);
            }}
          >
            Filter top rated restaurants
          </button>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            className="border-2 border-black"
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 m-4">
        {alReadyfilter.map((item) => {
          return (
            <Link to={"/restaurant/" + item?.info?.id} key={item?.info?.id}>
              {item?.info?.avgRating > 4.3 ? (
                <Card data={item} />
              ) : (
                <EnhancedCard data={item} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default RestaurantContainer;
