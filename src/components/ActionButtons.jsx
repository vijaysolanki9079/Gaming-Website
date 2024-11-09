import React from 'react';
import styled from 'styled-components';

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const Button = styled.button`
  padding: 8px 20px;
  border: 1px solid #000;
  font: 400 16px Roboto, sans-serif;
  cursor: pointer;
`;

const JoinButton = styled(Button)`
  background-color: transparent;
  color: #000;
  transition : all 0.3s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }

`;

const GoButton = styled(Button)`
  background-color: #000;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const ActionButtons = () => {
  return (
    <ButtonsWrapper>
      <JoinButton>Join</JoinButton>
      <GoButton>Go</GoButton>
    </ButtonsWrapper>
  );
};

export default ActionButtons;