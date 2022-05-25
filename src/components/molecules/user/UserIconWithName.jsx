import { useContext } from "react";
import styled from "@emotion/styled";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
  // imageとnameのみ使用
  const { image, name } = props;
  //どのcontextかを（）内で判別する
  const context = useContext(UserContext);
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>EDIT</SEdit>}
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
  color: #40514e;
`
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`