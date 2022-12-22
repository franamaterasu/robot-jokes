import { useState, useEffect } from "react";
import useFetch from "../../components/hooks/useFetch";
import Home from "../../pages/home";
import JokesList from "../../pages/jokesList";
import { Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "../themes";

const App = () => {
  const [favoriteJoke, setFavoriteJoke] = useState({});
  const [favoriteList, setFavoriteList] = useState([]);
  const [showError, setShowError] = useState(false);
  const { jokes, user, randomNumber, getJokes } = useFetch();
  const joke = jokes[randomNumber];

  const Container = styled.section`
    background-color: ${LightTheme.color.yellow};
    height: 100vh;
  `;

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
      const repeatedJoke = favoriteList.some(
        (joke) => joke.name === favoriteJoke.name
      );

      if (!repeatedJoke) {
        setFavoriteList([...favoriteList, favoriteJoke]);
      } else {
        setShowError(true);
      }

      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  }, [favoriteJoke, favoriteList]);

  return (
    <ThemeProvider theme={LightTheme}>
      <Container>
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
                setShowError={setShowError}
                showError={showError}
              />
            }
          />
          <Route
            path="/jokes"
            element={
              <JokesList
                setFavoriteList={setFavoriteList}
                favoriteList={favoriteList}
              />
            }
          />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
