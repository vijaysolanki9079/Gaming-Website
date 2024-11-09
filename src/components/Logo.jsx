import React from 'react';
import styled from 'styled-components';
import newsletterImg from '../assets/64_game_crush.jpg';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  aspect-ratio: 2.33;
  object-fit: contain;
  width: 184px;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImage src={newsletterImg} alt="Gaming Platform Logo" />
    </LogoWrapper>
  );
};

export default Logo;