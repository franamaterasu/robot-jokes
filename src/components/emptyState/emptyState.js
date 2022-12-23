import { GrSatellite } from "react-icons/gr";
import styled from "styled-components";
import { Base, LightTheme } from "../../themes";

const theme = { ...Base, ...LightTheme };

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
  font-weight: ${theme.fonts.big};
  font-family: ${theme.fonts.secondary};
`;

const EmptyState = () => {
  return (
    <Container>
      <Icon />
      <Message>The joke's list is empty</Message>
    </Container>
  );
};

export default EmptyState;
