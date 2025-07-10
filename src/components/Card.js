import { CARD_URL } from "../utils/constants";
const Card = (props) => {
  const { name, cuisines, locality, avgRating, cloudinaryImageId } =
    props?.data.info;

  return (
    <div className="card">
      <div className="food-logo">
        <img
          alt="food logo "
          className="food"
          src={`${CARD_URL}${cloudinaryImageId}`}
        ></img>
      </div>
      <h3>{name}</h3> <h4>{locality}</h4> <h4>{cuisines.join(",")}</h4>
      <h5>{avgRating} star</h5>{" "}
    </div>
  );
};
export default Card;
