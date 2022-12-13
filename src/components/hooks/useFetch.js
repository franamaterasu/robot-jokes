import { useState } from "react";

const useFetch = () => {
  const [jokes, setJokes] = useState([]);
  const [randomNumber, setRandomNumber] = useState();

  const url =
    "https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json";

  const getJokes = () => {
    setRandomNumber(Math.floor(Math.random() * 400) + 1);
    fetch(url).then((res) =>
      res.json().then((res) => {
        setJokes(res);
      })
    );
  };

  return { jokes, randomNumber, getJokes };
};

export default useFetch;
