import EmptyState from "../../components/emptyState";
import { GrTrash, GrLinkPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./jokeList.scss";

const JokesList = ({ setFavoriteList, favoriteList }) => {
  const handleDelete = ({ item }) => {
    setFavoriteList(favoriteList.filter((joke) => joke.id !== item.id));
  };

  return (
    <section className="list">
      {favoriteList.length !== 0 ? (
        <div className="list__container">
          <table className="list__table">
            <thead>
              <tr>
                <th className="list__table-header">Avatar</th>
                <th className="list__table-header">Name</th>
                <th className="list__table-header">Setup</th>
                <th className="list__table-header">Punchline</th>
                <th className="list__table-header">Type</th>
                <th className="list__table-header">Actions</th>
              </tr>
            </thead>
            <tbody>
              {favoriteList.map((item, index) => {
                const { avatar, name, last_name, setup, punchline, type } =
                  item;
                return (
                  <tr className="list__table-line" key={index}>
                    <td className="list__table-body">
                      <img src={avatar} alt={name} width="80" />
                    </td>
                    <td className="list__table-body">{`${name} ${last_name}`}</td>
                    <td className="list__table-body">{setup}</td>
                    <td className="list__table-body">{punchline}</td>
                    <td className="list__table-body">{type}</td>
                    <td className="list__table-body">
                      <GrTrash
                        onClick={() => handleDelete({ item })}
                        className="list__table-icon"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyState />
      )}

      <Link to="/">
        <GrLinkPrevious className="list__icon" />
      </Link>
    </section>
  );
};

export default JokesList;
