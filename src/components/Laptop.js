import { useState } from "react";

const Laptop = () => {
  const [data, setData] = useState(0);
  const slowFactorial = (num) => {
    console.log("Calculating factorial...");
    let result = 1;
    for (let i = 1; i <= num; i++) {
      // Simulate heavy task
      for (let j = 0; j < 100000000; j++) {} // artificial delay
      result *= i;
    }
    return result;
  };
  return (
    <>
      <div className="border-2 border-blue-800 p-10">
        <input
          type="number"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        ></input>
      </div>
    </>
  );
};
export default Laptop;
