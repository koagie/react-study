import styled from "styled-components";
export const StyledComponents = () => {
  return (
    // Sをつけて、styleがついているcomponentなのかついていないものなのかを
    // 把握している
    <SContainer>
      <STitle>styled componens</STitle>
      <SButton>fight!</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px #392fff;
  padding: 8px;
  border-radius: 40px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`
const SButton = styled.button`
  background-color: #46cdcf;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }

`