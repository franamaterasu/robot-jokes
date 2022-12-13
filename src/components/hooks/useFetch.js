import { useState } from "react";

const useFetch = () => {
  const [jokes, setJokes] = useState([]);
  const [user, setUser] = useState([]);
  const [randomNumber, setRandomNumber] = useState();

  const urlJokes =
    "https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json";
  const urlUsers = "https://random-data-api.com/api/v2/users";

  const getJokes = () => {
    setRandomNumber(Math.floor(Math.random() * 400) + 1);
    fetch(urlJokes).then((res) =>
      res.json().then((res) => {
        setJokes(res);
      })
    );
    fetch(urlUsers).then((res) =>
      res.json().then((res) => {
        setUser(res);
      })
    );
  };

  return { user, jokes, randomNumber, getJokes };
};

export default useFetch;
