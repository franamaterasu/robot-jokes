import { GrSatellite } from "react-icons/gr";
import styled from "styled-components";
import { LightTheme } from "../themes";

const EmptyState = () => {
  const Container = styled.section`
    margin-bottom: 25px;
    text-align: center;
  `;

  const Icon = styled(GrSatellite)`
    font-size: 70px;
    margin-bottom: 15px;
  `;

  const Message = styled.p`
    font-size: 21px;
    font-weight: ${LightTheme.fonts.big};
    font-family: ${LightTheme.fonts.secondary};
  `;

  return (
    <Container>
      <Icon />
      <Message>The joke's list is empty</Message>
    </Container>
  );
};

export default EmptyState;
