import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerContainer = styled.span`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1;
`;

const Spinner = styled.span`
  margin-top: 50vh;
  width: 45px;
  height: 45px;
  display: inline-block;
  border: 5px solid green;
  border-left-color: green;
  border-top-color: gray;
  border-radius: 50%;
  animation: ${rotate} 1s infinite linear;
`;

export const Loading = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};
