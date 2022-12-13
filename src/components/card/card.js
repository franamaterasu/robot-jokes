import { useState } from "react";

const Card = ({ joke }) => {
  const { id, setup, punchline } = joke;
  const [showPunchLine, setShowPunchLine] = useState(false);

  const handleClickShowPunchLine = () => {
    setShowPunchLine(!showPunchLine);
  };

  return (
    <article className="card">
      <span>{id}</span>
      <p>{setup}</p>
      {showPunchLine && <p>{punchline}</p>}
      <button onClick={handleClickShowPunchLine}>Show punchline</button>
    </article>
  );
};

export default Card;
