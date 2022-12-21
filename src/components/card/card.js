import { useState } from "react";
import styled from "styled-components";

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
    background-color: #fff;
    border-radius: 5px;
    max-width: 320px;
    border: 2px solid #000;
  `;

  const ContainerImage = styled.div`
    position: relative;
    font-size: 0;
    min-height: 320px;
    background-color: #fff;
  `;

  const Image = styled.img`
    width: 100%;
    height: auto;
  `;

  const Name = styled.p`
    position: absolute;
    bottom: 27px;
    background-color: #000;
    color: #fff;
    padding: 10px 35px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 18px;
  `;

  const TagStyles = styled.span`
    background-color: #fdc500;
    font-family: "Lora", sans-serif;
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
    background: #000;
    text-align: center;
  `;

  const Joke = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    line-height: 23px;
    color: #fff;
    padding: 15px 20px;
  `;

  const PunchLine = styled.p`
    text-align: center;
    font-family: "Lora", sans-serif;
    padding: 15px 20px;
    font-size: 14px;
    line-height: 20px;
    background-color: #fff;
  `;

  const Footer = styled.footer`
    display: flex;
  `;

  const FooterButtonText = styled.span`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    transition: color 0.5s ease-in-out;
    color: #fff;
    position: relative;
    z-index: 2;
  `;

  const FooterButton = styled.button`
    background-color: #d7b22c;
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
      background-color: #000;
      border: 1px solid #000;
      transition: bottom 0.5s ease-in-out;
    }

    &:nth-child(2) {
      border-left: 1px solid #000;
      border-right: 1px solid #000;
    }

    &:hover {
      cursor: pointer;

      ${FooterButtonText} {
        color: #fff;
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
