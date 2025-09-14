import { useDispatch, useSelector } from "react-redux";
import {clearItems} from '../utils/cartSlice'
import AccordianList from "./AccordianList";
const Cart = () => {
  const cartData = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearItems());
  };
  return (
    <>
      <div className="items-center">
        <h3 className=" font-bold text-center">Cart</h3>

        <div
          className="bg-black text-white rounded-md my-3 w-[120px]"
          onClick={handleClear}
        >
          Clear cart
        </div>
        <div className="w-6/12 ">
          {" "}
          {cartData &&
            cartData?.map((item, index) => {
              return (
                <div key={index}>
                  <AccordianList listData={item} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Cart;
