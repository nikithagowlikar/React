import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
 
  return <>Error Page</>;
};
export default Error;
