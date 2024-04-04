import { useState } from "react";
import { useLocation } from "../context/location";

const useFetchLocation = () => {
  const setData = useLocation((state) => state.setData);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  const api =
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_3vmuT7PhDeTstAsP1GfUGJ0nOSQgM&";

  const fetchData = async (newIp?: string) => {
    try {
      setIsLoading(true);
      let resp;
      if (newIp) {
        resp = await fetch(
          `${api}${
            checkIpAddress.test(newIp)
              ? `ipAddress=${newIp}`
              : checkDomain.test(newIp)
              ? `domain=${newIp}`
              : null
          }`
        );
      } else {
        resp = await fetch(api);
      }

      const data = await resp.json();
      setData(data);
    } catch (err: any) {
      setError("Invalid IP Address or Domain");
    } finally {
      setIsLoading(false);
    }
  };

  return { error, isLoading, fetchData };
};

export default useFetchLocation;
