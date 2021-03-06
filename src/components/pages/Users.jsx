import React from "react";
import styled from "@emotion/styled";
import { SearchInput } from "../../components/molecules/SearchInput";
import { UserCard } from "../Organisms/user/UserCard";
import { useLocation } from "react-router-dom";
import { SecondaryButton } from "../../components/atoms/button/SecondaryButton";
// import { UserContext } from "../../providers/UserProvider";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map(((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/6W4F62sN_yI",
    name: `kogi${val}`,
    email: "11111@mail.com",
    phone: "111-1111-111",
    company: {
      name: "the local",
    },
    website: "https://kogiblo.com"
  }
}))

export const Users = () => {
  const location = useLocation(); // URL path や パラメータなど。JSのlocationと同じ

  // const { userInfo, setUserInfo } = useContext(UserContext);
  //今のuseInfoの値の反対の値（!isAdmin）でisAdminを更新
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin});

  const [ userInfo, setUserInfo ] = useRecoilState(userState);

  console.log(location.state)
  // location.state でわたせるようになる
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: center;
  paddding: 24px;
`;

const SUserArea =styled.div`
  pading-top: 40px;
  width: 100%;
  display: grid;
  grid-template-colums: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;