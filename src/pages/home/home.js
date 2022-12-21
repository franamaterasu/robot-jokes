import Counter from "../../components/counter";
import Card from "../../components/card";
import styled from "styled-components";
import { GrRobot } from "react-icons/gr";
import { Link } from "react-router-dom";

const Home = ({
  joke,
  user,
  handleClickFavourite,
  getJokes,
  favoriteList,
  setShowError,
  showError,
}) => {
  const Container = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const ErrorMessage = styled.p`
    margin-top: 15px;
    font-family: "Lora", sans-serif;
    background-color: #0000;
    width: 100%;
    color: #ffff;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
  `;

  const Intro = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const IconContainer = styled(Link)`
    margin-bottom: 20px;
    text-decoration: none;
    color: #000;
  `;

  const Icon = styled(GrRobot)`
    font-size: 120px;
    margin-bottom: 30px;
  `;

  const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const ButtonText = styled.span`
    position: relative;
    z-index: 2;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 20px;
    transition: color 0.5s ease-in-out;
  `;

  const Button = styled.button`
    background-color: #fff;
    padding: 10px 15px;
    position: relative;
    overflow: hidden;
    border: 1px solid #000;

    &::before {
      content: "";
      display: block;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -48px;
      height: 100%;
      background-color: #000;
      border: 1px solid #000;
      transition: bottom 0.5s ease-in-out;
    }

    &:hover {
      cursor: pointer;

      &::before {
        bottom: 0;
      }
    }

    &:hover ${ButtonText} {
      color: #fff;
    }
  `;

  return (
    <Container>
      {joke && (
        <CardContainer>
          <IconContainer to="/jokes">
            <Counter favoriteList={favoriteList} />
          </IconContainer>
          <Card
            user={user}
            joke={joke}
            getJokes={getJokes}
            handleClickFavourite={handleClickFavourite}
            setShowError={setShowError}
          />
          {showError && (
            <ErrorMessage>
              This joke has added to the list previously
            </ErrorMessage>
          )}
        </CardContainer>
      )}
      {!joke && (
        <Intro>
          <Icon />
          <Button onClick={() => getJokes()}>
            <ButtonText>Show first joke!</ButtonText>
          </Button>
        </Intro>
      )}
    </Container>
  );
};

export default Home;
