import styled from "styled-components";

export const StyledComponent = () => {
  return (
    <SContainer>
      <STitle> StyledComponent </STitle>
      <button>Fight</button>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: 1px solid #999;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`;
const STitle = styled.polyline`
  font-weight: bold;
  color: pink;
`;
