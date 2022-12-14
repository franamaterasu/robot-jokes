import { GrSatellite } from "react-icons/gr";
import "./emptyState.scss";

const EmptyState = () => {
  return (
    <section className="empty-state">
      <GrSatellite className="empty-state__icon" />
      <p className="empty-state__message">The joke's list is empty</p>
    </section>
  );
};

export default EmptyState;
