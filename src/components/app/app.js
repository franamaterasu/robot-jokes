import { GrRobot } from "react-icons/gr";
import Card from "../card";
import useFetch from "../hooks/useFetch";
import "./app.scss";

const App = () => {
  const { jokes, user, randomNumber, getJokes } = useFetch();
  const joke = jokes[randomNumber];

  return (
    <section className="app">
      {joke && <Card user={user} joke={joke} getJokes={getJokes} />}
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
