import axios from "axios";
import { useEffect } from "react";

const productsUrl = "https://course-api.com/react-store-products";
function GlobalInstance() {
  const fetchData = async () => {
    const { data } = await axios.get(productsUrl);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
}

export default GlobalInstance;
