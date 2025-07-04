import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "Hello" },
//   "Hello World from React"
// );
//jsx
// const heading1=<h1>Hello World from React</h1>

const Title = () => {
  return (
    <>
      <h1>This is the Title component</h1>
    </>
  );
};
const SubComponent = () => {
  return <h1>HI!!!!</h1>;
};
const HeadingComponent = () => {
  return (
    <>
      <SubComponent />
      {Title()}
      <h1>Hello Heading component</h1>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
