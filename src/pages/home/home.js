import Counter from "../../components/counter";
import Card from "../../components/card";
import styled from "styled-components";
import { GrRobot } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Base, LightTheme } from "../../themes";

const Home = ({
  joke,
  user,
  handleClickFavourite,
  getJokes,
  favoriteList,
  setShowError,
  showError,
}) => {
  const theme = { ...Base, ...LightTheme };

  const Container = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const ErrorMessage = styled.p`
    margin-top: 15px;
    font-family: ${theme.fonts.primary};
    background-color: ${theme.color.black};
    width: 100%;
    color: ${theme.color.white};
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
    color: ${theme.color.black};
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
    font-family: ${theme.fonts.secondary};
    font-weight: ${theme.fonts.big};
    font-size: 20px;
    transition: color 0.5s ease-in-out;
  `;

  const Button = styled.button`
    background-color: ${theme.color.white};
    padding: 10px 15px;
    position: relative;
    overflow: hidden;
    border: 1px solid ${theme.color.black};

    &::before {
      content: "";
      display: block;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -48px;
      height: 100%;
      background-color: ${theme.color.black};
      border: 1px solid ${theme.color.black};
      transition: bottom 0.5s ease-in-out;
    }

    &:hover {
      cursor: pointer;

      &::before {
        bottom: 0;
      }
    }

    &:hover ${ButtonText} {
      color: ${theme.color.white};
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
