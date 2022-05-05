import { css } from "@emotion/react";

export const Emotion =() => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 15px;
  `;
  return (
    <div css={containerStyle}>
      <p>- emotion!!! -</p>
      <button>えもーしょん。。</button>
    </div>
  );
};
