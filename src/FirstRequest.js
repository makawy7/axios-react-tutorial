import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const url = "https://course-api.com/react-store-products";

function FirstRequest() {
  const [products, setProduct] = useState([]);

  const FetchData = useCallback(async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      setProduct(data);
    } catch (error) {
      console.log(error.response);
    }
  }, []);

  useEffect(() => {
    FetchData();
  }, [FetchData]);

  console.log(products);
}

export default FirstRequest;
