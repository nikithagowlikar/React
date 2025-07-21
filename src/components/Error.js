import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log("lksk", err);
  return <>Error Page</>;
};
export default Error;
