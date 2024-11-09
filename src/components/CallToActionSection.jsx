import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../assets/fantasy-group-adventurers.jpg';

const CTAWrapper = styled.section`
  background-image: url(${backgroundImg});
  color: #fff;
  padding: 112px 64px;
  @media (max-width: 991px) {
    padding: 100px 20px;
  }
`;

const CTAContent = styled.div`
  max-width: 768px;
  margin: 0 auto;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const CTADescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 32px;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const CTAButton = styled.button`
  padding: 12px 24px;
  border: 1px solid #fff;
  font: 400 16px Roboto, sans-serif;
  cursor: pointer;
`;

const SignUpButton = styled(CTAButton)`
  background-color: #fff;
  color: #000;
`;

const DownloadButton = styled(CTAButton)`
  background-color: transparent;
  color: #fff;
`;

const CallToActionSection = () => {
  return (
    <CTAWrapper>
      <CTAContent>
        <CTATitle>Join the Gaming Revolution Today</CTATitle>
        <CTADescription>
          Sign up now to unlock exclusive features and elevate your gaming experience to the next level!
        </CTADescription>
        <CTAButtons>
          <SignUpButton>Sign Up</SignUpButton>
          <DownloadButton>Download</DownloadButton>
        </CTAButtons>
      </CTAContent>
    </CTAWrapper>
  );
};

export default CallToActionSection;