import EmptyState from "../../components/emptyState";
import { GrTrash, GrLinkPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Base, LightTheme } from "../../themes";

const JokesList = ({ setFavoriteList, favoriteList }) => {
  const theme = { ...Base, ...LightTheme };

  const handleDelete = ({ item }) => {
    setFavoriteList(favoriteList.filter((joke) => joke.id !== item.id));
  };

  const List = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    padding: 0 40px;
  `;

  const Container = styled.div`
    width: 100%;
    overflow-x: auto;
    margin-bottom: 50px;
  `;

  const Table = styled.table`
    width: 90%;
    margin: 0 auto;
    max-width: 1200px;
  `;

  const TableHeader = styled.th`
    background-color: ${theme.color.black};
    color: ${theme.color.white};
    font-family: ${theme.fonts.secondary};
    font-weight: ${theme.fonts.big};
    padding: 10px 20px;

    &:first-of-type {
      border-top-left-radius: 5px;
    }

    &:last-of-type {
      border-top-right-radius: 5px;
    }
  `;

  const TableLine = styled.tr`
    background-color: ${theme.color.white};

    &:hover {
      background-color: ${theme.color.darkYellow};
    }
  `;

  const TableBody = styled.td`
    vertical-align: middle;
    text-align: center;
    padding: 10px 20px;
    font-family: ${theme.fonts.primary};
    border: 1px solid ${theme.color.black};

    &:last-of-type {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  `;

  const TableIconTrash = styled(GrTrash)`
    font-size: 25px;

    &:hover {
      cursor: pointer;
    }
  `;

  const TableIconArrow = styled(GrLinkPrevious)`
    font-size: 30px;
  `;

  return (
    <List>
      {favoriteList.length !== 0 ? (
        <Container>
          <Table>
            <thead>
              <tr>
                <TableHeader>Avatar</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Setup</TableHeader>
                <TableHeader>Punchline</TableHeader>
                <TableHeader>Type</TableHeader>
                <TableHeader>Actions</TableHeader>
              </tr>
            </thead>
            <tbody>
              {favoriteList.map((item, index) => {
                const { avatar, name, last_name, setup, punchline, type } =
                  item;
                return (
                  <TableLine key={index}>
                    <TableBody>
                      <img src={avatar} alt={name} width="80" />
                    </TableBody>
                    <TableBody>{`${name} ${last_name}`}</TableBody>
                    <TableBody>{setup}</TableBody>
                    <TableBody>{punchline}</TableBody>
                    <TableBody>{type}</TableBody>
                    <TableBody>
                      <TableIconTrash onClick={() => handleDelete({ item })} />
                    </TableBody>
                  </TableLine>
                );
              })}
            </tbody>
          </Table>
        </Container>
      ) : (
        <EmptyState />
      )}

      <Link to="/">
        <TableIconArrow />
      </Link>
    </List>
  );
};

export default JokesList;
