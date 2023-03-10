import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const url = "https://course-api.com/react-store-products";

function FirstRequest() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = useCallback(async () => {
    try {
      console.log("fetching");
      const response = await axios(url);
      const data = response.data;
      setProduct(data);
    } catch (error) {
      setError(error.response);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!loading && error) {
    return (
      <section>
        <h1 style={{ color: "red" }}>{error.data}</h1>
        <p style={{ color: "red" }}>{error.status}</p>
      </section>
    );
  }
  return (
    <section>
      {loading ||
        products.map(({ id, name, price, image, description }) => (
          <div key={id}>
            <h1>{name}</h1>
            <h4>{price}</h4>
            <img src={image} alt={price} />
            <p>{description}</p>
          </div>
        ))}
    </section>
  );
}

export default FirstRequest;
