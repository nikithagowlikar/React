import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const AccordianList = ({ listData }) => {
  const { price, name, imageId } = listData?.card?.info;
  const dispatch=useDispatch()
const handleClick=(item)=>{
dispatch(addItem(item))
}
  return (
    <>
      <div className="border-b-4 border-gray-200  bg-white px-8 py-4 flex">
        <div className="flex flex-col w-8/12">
          <span className="font-bold">{name}</span>
          <span>{price}</span>
          <p>
            Pizza topped with our herb-infused signature pan sauce and 100%
            mozzarella cheese. A classic treat for all cheese lovers out there!
            (PAN Per/Med-292 Kcal/100g | TnC-293 Kcal/100g | Stuffed Crust Add :
            Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing
            Gluten (Wheat), Soya and Milk & Milk Products.
          </p>
        </div>
        <div className="w-4/12 relative">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
          ></img>
          <div className="absolute top-0 text-white w-[70px] text-center cursor-pointer font-bold bg-black" onClick={()=>{handleClick(listData)}}>
            Add +
          </div>
        </div>
      </div>
    </>
  );
};
export default AccordianList;
