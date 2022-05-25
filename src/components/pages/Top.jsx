import styled from "@emotion/styled";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { Center, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";


export const Top = () => {
  const navigation = useNavigate();
  const {setUserInfo} = useContext(UserContext);
  //navigatite()は、第一引数に遷移するパス、第二変数にstateをオブジェクトで渡す
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigation("/users")
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigation("/users")
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