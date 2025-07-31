import { CARD_URL } from "../utils/constants";
const Card = (props) => {
  const { name, cuisines, locality, avgRating, cloudinaryImageId } =
    props?.data.info;

  return (
    <div className="w-72 border-2 border-gray-600 rounded-md p-3 bg-blue-100">
      <div className="">
        <img
          alt="food"
          className="rounded-lg"
          src={`${CARD_URL}${cloudinaryImageId}`}
        ></img>
      </div>
      <h3 className="font-bold my-2">{name}</h3> <h4>{locality}</h4>{" "}
      <h4 className="break-words">{cuisines.join(",")}</h4>
      <h5>{avgRating} star</h5>{" "}
    </div>
  );
};
export default Card;
