import { GrRobot } from "react-icons/gr";
import styled from "styled-components";

const Counter = ({ favoriteList }) => {
  const Container = styled.div`
    display: flex;
    align-items: center;
  `;

  const Icon = styled(GrRobot)`
    font-size: 40px;
  `;

  const Number = styled.span`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
  `;

  return (
    <Container>
      <Icon />
      <Number>{favoriteList.length}</Number>
    </Container>
  );
};

export default Counter;
