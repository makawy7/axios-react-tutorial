import axios from "axios";
import { useCallback, useState } from "react";

const url = "https://icanhazdadjoke.com/";
function DadJokes() {
  const [joke, setJoke] = useState("random dad joke");
  const fetchDadJoke = useCallback(async () => {
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      setJoke(data.joke);
    } catch (error) {
      console.log(error.response);
    }
  }, []);

  return (
    <section className="section text-center">
      <button className="btn" onClick={fetchDadJoke}>
        random dad joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  );
}

export default DadJokes;
