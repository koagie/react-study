import styled from "@emotion/styled";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { Center, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"


export const Top = () => {
  const navigation = useNavigate();
  //navigatite()は、第一引数に遷移するパス、第二変数にstateをオブジェクトで渡す
  const onClickAdmin = () => {
    navigation(
      "/users",
      {state: {isAdmin: true}}
    )
  };
  const onClickGeneral = () => {
    navigation(
      "/users",
      {state: { isAdmin: false}}
    )
  };
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