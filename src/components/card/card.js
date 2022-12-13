import { useState } from "react";

const Card = ({ user, joke, getJokes }) => {
  const { id, type, setup, punchline } = joke;
  const { avatar, first_name, last_name } = user;
  const [showPunchLine, setShowPunchLine] = useState(false);

  const handleClickShowPunchLine = () => {
    setShowPunchLine(!showPunchLine);
  };

  const handleClick = () => {
    getJokes();
    setShowPunchLine(false);
  };

  return (
    <article className="card">
      <div className="card__picture">
        <img src={avatar} alt={first_name} />
        <p className="card__name">{`${first_name} ${last_name}`}</p>
        <span>{id}</span>
      </div>
      <div className="card__info">
        <p>
          {setup} - {type}
        </p>
        {showPunchLine && joke ? <p>{punchline}</p> : null}
      </div>
      <footer className="card__footer">
        <button
          className="card__footer-button"
          onClick={handleClickShowPunchLine}
        >
          {showPunchLine ? "Hide punchline" : "Show punchline"}
        </button>
        <button className="card__footer-button">Add to favourite's list</button>
        <button onClick={handleClick}>Show new Joke</button>
      </footer>
    </article>
  );
};

export default Card;
