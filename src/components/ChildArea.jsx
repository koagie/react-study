import { memo } from 'react';
const style = {
  width: '100%',
  height: '30%',
  background: 'khaki',
};
// arrow関数をmemoで囲っている
// 今後肥大化が予想されるcomponentについてはmemoで囲っていかないとレンダリングが子cpmponentでも起こってしまう！
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("childAreaがレンダリングされた！")

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  console.log(data);
  
  return (
    <>
    {open ? (
      <div style={style}>
      <p>子コンポーネント</p>
      <button onClick={onClickClose}>閉じる</button>
    </div>
      ) : null }
    </>
  );
});