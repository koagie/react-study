//userのcontextを作成
import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState(null);
  return (
    //contextはproviderというのを持っている
    //このUserContext内のvalueを返せる
    //valueに値を渡すとglovalにさんしょうができる
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {/* どんなものでも囲えるようにchildrenを使用 */}
      {children}
    </UserContext.Provider>
  );
};