import RestaurantContainer from "./RestaurantContainer";
export const GoodRatingCard = (ChildComponent) => {
  return (props) => {
    return (
      <>
        <div>
          <label className="bg-[black] text-white absolute py-2">
            star rating
          </label>
          <ChildComponent {...props} />
        </div>
      </>
    );
  };
};
const Body = () => {
  return (
    <>
      <RestaurantContainer />{" "}
    </>
  );
};
export default Body;
