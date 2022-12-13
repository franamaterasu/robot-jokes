import { useState } from "react";
import "./card.scss";

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
        <img className="card__image" src={avatar} alt={first_name} />
        <p className="card__name">{`${first_name} ${last_name}`}</p>
        <span className="card__id">Joke nº: {id}</span>
        <span className="card__type">{type}</span>
      </div>
      <div className="card__info">
        <p className="card__joke">{setup}</p>
        {showPunchLine && joke ? (
          <p className="card__punchline">{punchline}</p>
        ) : null}
      </div>
      <footer className="card__footer">
        <button
          className="card__footer-button"
          onClick={handleClickShowPunchLine}
        >
          {showPunchLine ? "Hide punchline" : "Show punchline"}
        </button>
        <button className="card__footer-button">Add to favourite's list</button>
        <button className="card__footer-button" onClick={handleClick}>
          Show new Joke
        </button>
      </footer>
    </article>
  );
};

export default Card;
