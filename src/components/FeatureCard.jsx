import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 240px;
`;

const IconWrapper = styled.div`
  margin-bottom: 24px;
`;

const Icon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 48px;
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const FeatureCard = ({ icon, title, description }) => {
  return (
    <CardWrapper>
      <IconWrapper>
        <Icon src={icon} alt="" />
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardWrapper>
  );
};

export default FeatureCard;