import { useEffect, useState } from "react";
import resObj from "../utils/mock";
import Card from "./Card";

const RestaurantContainer = () => {
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [alReadyfilter, setAlReady] = useState([]);
  useEffect(() => {
    setFilter(resObj);
    setAlReady(resObj);
  }, []);
  if (filter.length === 0) {
    return <h1>loading.........</h1>;
  }
  console.log("resto component render");

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
          return <Card key={item?.info?.id} data={item} />;
        })}
      </div>
    </>
  );
};
export default RestaurantContainer;
