import { useEffect, useState } from "react";
import resObj from "../utils/mock";
import Card from "./Card";
import { Link } from "react-router-dom";
const RestaurantContainer = () => {
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [alReadyfilter, setAlReady] = useState([]);
  useEffect(() => {
    // fetchData();
    setFilter(resObj);
    setAlReady(resObj);
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    console.log("ressss", res);
  };
  if (filter.length === 0) {
    return <h1>loading.........</h1>;
  }

  return (
    <>
      <div className="filter">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              console.log("searched-data", search);
            }}
          ></input>
          <button
            className="search-button"
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
        <div className="search-bar">
          <button
            className="search-button"
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
      <div className="RestaurantContainer">
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
