import Card from "../card";
import useFetch from "../hooks/useFetch";

const App = () => {
  const { jokes, randomNumber, getJokes } = useFetch();
  const joke = jokes[randomNumber];

  return (
    <section>
      {joke && <Card joke={joke} />}
      <button onClick={() => getJokes()}>
        {!joke ? <span>Show first joke</span> : <span>Show new Joke</span>}
      </button>
    </section>
  );
};

export default App;
