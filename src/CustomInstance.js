import axios from "axios";
import { useEffect } from "react";
import authFetch from "./axios/custom";

const randomUserUrl = "https://randomuser.me/api";
function CustomInstance() {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch("/react-store-products");
      console.log(resp1.data);
      const resp2 = await axios.get(randomUserUrl);
      console.log(resp2.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
}

export default CustomInstance;
