import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onelineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    addEventListener("online", () => {
      setOnlineStatus(true);
    });
    addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);
  return onelineStatus;
};
export default useOnlineStatus;
