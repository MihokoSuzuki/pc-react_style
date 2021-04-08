/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const contanerStyle = css`
    border: 1px solid #999;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
  `;
  const titleStyle = css`
    font-weight: bold;
    color: blue;
  `;

  return (
    <div css={contanerStyle}>
      <p css={titleStyle}>Emotion</p>
      <SButton>Fight</SButton>
    </div>
  );
};

const SButton = styled.button`
  background: #ccc;
  border: none;
  padding: 10px;
`;
