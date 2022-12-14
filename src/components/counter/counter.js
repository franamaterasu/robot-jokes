import { GrRobot } from "react-icons/gr";
import "./counter.scss";

const Counter = ({ favoriteList }) => {
  return (
    <div className="counter">
      <GrRobot className="counter__icon" />
      <span className="counter__number">{favoriteList.length}</span>
    </div>
  );
};

export default Counter;
