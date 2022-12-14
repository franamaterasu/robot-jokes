import Counter from "../../components/counter";
import Card from "../../components/card";
import { GrRobot } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./home.scss";

const Home = ({
  joke,
  user,
  handleClickFavourite,
  getJokes,
  favoriteList,
  setShowError,
  showError,
}) => {
  return (
    <section className="home">
      {joke && (
        <section className="home__cards">
          <Link to="/jokes" className="home__link">
            <Counter favoriteList={favoriteList} />
          </Link>
          <Card
            user={user}
            joke={joke}
            getJokes={getJokes}
            handleClickFavourite={handleClickFavourite}
            setShowError={setShowError}
          />
          {showError && (
            <p className="home__error">
              This joke has added to the list previously
            </p>
          )}
        </section>
      )}
      {!joke && (
        <section className="home__intro">
          <GrRobot className="home__intro-icon" />
          <button className="home__intro-button" onClick={() => getJokes()}>
            <span className="home__intro-button-text">Show first joke!</span>
          </button>
        </section>
      )}
    </section>
  );
};

export default Home;
