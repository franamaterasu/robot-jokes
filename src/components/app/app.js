import { useState, useEffect } from "react";
import useFetch from "../../components/hooks/useFetch";
import Home from "../../pages/home";
import JokesList from "../../pages/jokesList";
import { Route, Routes } from "react-router-dom";
import "./app.scss";

const App = () => {
  const [favoriteJoke, setFavoriteJoke] = useState({});
  const [favoriteList, setFavoriteList] = useState([]);
  const { jokes, user, randomNumber, getJokes } = useFetch();
  const joke = jokes[randomNumber];

  const handleClickFavourite = (joke, user) => {
    const { id, type, setup, punchline } = joke;
    const { avatar, first_name, last_name } = user;

    setFavoriteJoke({
      id: id,
      avatar: avatar,
      name: first_name,
      last_name: last_name,
      type: type,
      setup: setup,
      punchline: punchline,
    });
  };

  useEffect(() => {
    if (Object.keys(favoriteJoke).length !== 0) {
      setFavoriteList([...favoriteList, favoriteJoke]);
    }
  }, [favoriteJoke]);

  console.log(favoriteList);

  return (
    <section className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              joke={joke}
              user={user}
              handleClickFavourite={handleClickFavourite}
              getJokes={getJokes}
              favoriteList={favoriteList}
            />
          }
        />
        <Route path="/jokes" element={<JokesList />} />
      </Routes>
    </section>
  );
};

export default App;
