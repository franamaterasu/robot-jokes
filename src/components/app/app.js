import { useState, useEffect } from "react";
import Card from "../card";
import useFetch from "../hooks/useFetch";
import { GrRobot } from "react-icons/gr";
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

  return (
    <section className="app">
      {joke && (
        <>
          <Card
            user={user}
            joke={joke}
            getJokes={getJokes}
            handleClickFavourite={handleClickFavourite}
          />
          <p>{favoriteList.length}</p>
        </>
      )}
      {!joke && (
        <section className="app__intro">
          <GrRobot className="app__intro-icon" />
          <button className="app__intro-button" onClick={() => getJokes()}>
            <span className="app__intro-button-text">Show first joke!</span>
          </button>
        </section>
      )}
    </section>
  );
};

export default App;
