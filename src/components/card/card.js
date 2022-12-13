import { useState } from "react";

const Card = ({ user, joke }) => {
  const { id, type, setup, punchline } = joke;
  const { avatar, first_name, last_name } = user;
  const [showPunchLine, setShowPunchLine] = useState(false);

  const handleClickShowPunchLine = () => {
    setShowPunchLine(!showPunchLine);
  };

  return (
    <article className="card">
      <div className="card__picture">
        <img src={avatar} alt={first_name} />
        <p className="card__name">{`${first_name} ${last_name}`}</p>
      </div>
      <span>{id}</span>
      <p>
        {setup} - {type}
      </p>
      {showPunchLine && <p>{punchline}</p>}
      <button onClick={handleClickShowPunchLine}>Show punchline</button>
    </article>
  );
};

export default Card;
