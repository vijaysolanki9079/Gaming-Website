import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../assets/dark-fantasy-scene.jpg';

const HeroWrapper = styled.section`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 847px;
  padding: 0 64px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const HeroContent = styled.div`
  max-width: 768px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 1.35;
  }
`;

const HeroDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 32px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border: 1px solid #fff;
  font: 400 16px Roboto, sans-serif;
  cursor: pointer;
`;

const PlayButton = styled(Button)`
  background-color: #fff;
  color: #000;
`;

const JoinButton = styled(Button)`
  background-color: transparent;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <HeroTitle>Unleash Your Gaming Potential Today!</HeroTitle>
        <HeroDescription>
          Dive into the ultimate gaming experience with our cutting-edge platform. Explore the latest titles, connect with fellow gamers, and rise to the top of the leaderboards.
        </HeroDescription>
        <ButtonGroup>
          <PlayButton>Play</PlayButton>
          <JoinButton>Join</JoinButton>
        </ButtonGroup>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HeroSection;
