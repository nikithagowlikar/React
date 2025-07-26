import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);

  return (
    <>
      <div className="user-card">
        <h1>count1-{count}</h1>

        <div>{props.name}</div>
        <div>{props.course}</div>
        <div>platform-Namaste-React</div>
      </div>
    </>
  );
};
export default User;
