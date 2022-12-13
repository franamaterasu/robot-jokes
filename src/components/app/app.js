import Card from "../card";
import useFetch from "../hooks/useFetch";
import "./app.scss";

const App = () => {
  const { jokes, user, randomNumber, getJokes } = useFetch();
  const joke = jokes[randomNumber];

  return (
    <section className="app">
      {joke && <Card user={user} joke={joke} getJokes={getJokes} />}
      {!joke && <button onClick={() => getJokes()}>Show first joke!</button>}
    </section>
  );
};

export default App;
