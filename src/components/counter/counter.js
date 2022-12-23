import { GrRobot } from "react-icons/gr";
import styled from "styled-components";
import { Base, LightTheme } from "../../themes";

const Counter = ({ favoriteList }) => {
  const theme = { ...Base, ...LightTheme };

  const Container = styled.div`
    display: flex;
    align-items: center;
  `;

  const Icon = styled(GrRobot)`
    font-size: 40px;
  `;

  const Number = styled.span`
    font-family: ${theme.fonts.secondary};
    font-weight: ${theme.fonts.big};
  `;

  return (
    <Container>
      <Icon />
      <Number>{favoriteList.length}</Number>
    </Container>
  );
};

export default Counter;
