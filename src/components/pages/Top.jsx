import styled from "@emotion/styled";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { Center, Button } from "@chakra-ui/react";

const onClickAdmin = () => alert('admin!');
const onClickGeneral = () => alert('general!');

export const Top = () => {
  return (
    <>
    <SContainer>
      <h2>This is top page.</h2>
      <SecondaryButton onClick={onClickAdmin}>admin</SecondaryButton>
      <SecondaryButton onClick={onClickGeneral}>user</SecondaryButton>
    </SContainer>
      <Center>
        <Button mt={16}>
          chakra-button
        </Button>
      </Center>
    </>
    
  );
};

const SContainer = styled.div`
  text-align: center;
`