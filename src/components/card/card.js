import { useState } from "react";
import styled from "styled-components";
import { LightTheme } from "../themes";

const Card = ({ user, joke, getJokes, handleClickFavourite, setShowError }) => {
  const { id, type, setup, punchline } = joke;
  const { avatar, first_name, last_name } = user;
  const [showPunchLine, setShowPunchLine] = useState(false);

  const handleClickShowPunchLine = () => {
    setShowPunchLine(!showPunchLine);
  };

  const handleClick = () => {
    getJokes();
    setShowError(false);
    setShowPunchLine(false);
  };

  const Card = styled.article`
    background-color: ${LightTheme.color.white};
    border-radius: 5px;
    max-width: 320px;
    border: 2px solid ${LightTheme.color.black};
  `;

  const ContainerImage = styled.div`
    position: relative;
    font-size: 0;
    min-height: 320px;
    background-color: ${LightTheme.color.white};
  `;

  const Image = styled.img`
    width: 100%;
    height: auto;
  `;

  const Name = styled.p`
    position: absolute;
    bottom: 27px;
    background-color: ${LightTheme.color.black};
    color: ${LightTheme.color.white};
    padding: 10px 35px;
    font-family: ${LightTheme.fonts.secondary};
    font-weight: ${LightTheme.fonts.big};
    font-size: 18px;
  `;

  const TagStyles = styled.span`
    background-color: ${LightTheme.color.yellow};
    font-family: ${LightTheme.fonts.primary};
    padding: 5px 20px;
    font-size: 14px;
    position: absolute;
  `;

  const Id = styled(TagStyles)`
    bottom: 65px;
    left: 0;
  `;

  const Type = styled(TagStyles)`
    top: 15px;
    right: 0;
  `;

  const ContainerInfo = styled.div`
    background: ${LightTheme.color.black};
    text-align: center;
  `;

  const Joke = styled.p`
    font-family: ${LightTheme.fonts.secondary};
    font-weight: ${LightTheme.fonts.big};
    line-height: 23px;
    color: ${LightTheme.color.white};
    padding: 15px 20px;
  `;

  const PunchLine = styled.p`
    text-align: center;
    font-family: ${LightTheme.fonts.primary};
    padding: 15px 20px;
    font-size: 14px;
    line-height: 20px;
    background-color: ${LightTheme.color.white};
  `;

  const Footer = styled.footer`
    display: flex;
  `;

  const FooterButtonText = styled.span`
    font-family: ${LightTheme.fonts.secondary};
    font-weight: ${LightTheme.fonts.big};
    transition: color 0.5s ease-in-out;
    color: ${LightTheme.color.white};
    position: relative;
    z-index: 2;
  `;

  const FooterButton = styled.button`
    background-color: ${LightTheme.color.darkYellow};
    border: 0;
    padding: 10px;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      display: block;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -58px;
      height: 100%;
      background-color: ${LightTheme.color.black};
      border: 1px solid ${LightTheme.color.black};
      transition: bottom 0.5s ease-in-out;
    }

    &:nth-child(2) {
      border-left: 1px solid ${LightTheme.color.black};
      border-right: 1px solid ${LightTheme.color.black};
    }

    &:hover {
      cursor: pointer;

      ${FooterButtonText} {
        color: ${LightTheme.color.white};
      }

      &::before {
        bottom: 0;
      }
    }
  `;

  return (
    <Card>
      <ContainerImage>
        <Image src={avatar} alt={first_name} />
        <Name>{`${first_name} ${last_name}`}</Name>
        <Id>Joke nº: {id}</Id>
        <Type>{type}</Type>
      </ContainerImage>
      <ContainerInfo>
        <Joke>{setup}</Joke>
        {showPunchLine && joke ? <PunchLine>{punchline}</PunchLine> : null}
      </ContainerInfo>
      <Footer>
        <FooterButton onClick={handleClickShowPunchLine}>
          <FooterButtonText>
            {showPunchLine ? "Hide punchline" : "Show punchline"}
          </FooterButtonText>
        </FooterButton>
        <FooterButton onClick={() => handleClickFavourite(joke, user)}>
          <FooterButtonText>Add to favourite's list</FooterButtonText>
        </FooterButton>
        <FooterButton onClick={handleClick}>
          <FooterButtonText>Show new Joke</FooterButtonText>
        </FooterButton>
      </Footer>
    </Card>
  );
};

export default Card;
