import React from "react";
import styled from "styled-components";
import FeatureCard from "./FeatureCard";

const FeaturesWrapper = styled.section`
  background-color: #fff;
  padding: 70px 64px;
  @media (max-width: 991px) {
    padding: 40px 20px;
  }
`;

const FeaturesContent = styled.div`
  max-width: 1312px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const SectionDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 80px;
  @media (max-width: 991px) {
    margin-bottom: 40px;
  }
`;

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 48px;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    gap: 40px;
  }
`;

const featuresData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/66c16b92949d59d79aced3296891f2af4259a1d93694acd1ce8a203fb7e1964c?placeholderIfAbsent=true&apiKey=ae3b29e07af44a789a926a9147396556",
    title: "Extensive Game Library at Your Fingertips",
    description:
      "Browse and filter through a vast selection of games tailored to your preferences.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e65662e17c0b705e46cc764bcb84fdb53a8dfb27815cd8257365ab16bd880a81?placeholderIfAbsent=true&apiKey=ae3b29e07af44a789a926a9147396556",
    title: "Personalized User Profiles for Every Gamer",
    description:
      "Create and customize your profile to showcase achievements and connect with friends.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/531ca16726074da8c6be01ea01b69819a2a19b5656d6000ede488d788d5d6165?placeholderIfAbsent=true&apiKey=ae3b29e07af44a789a926a9147396556",
    title: "Join Our Thriving Community Forum",
    description:
      "Engage with fellow gamers, share tips, and participate in discussions.",
  },
];

const FeaturesSection = () => {
  return (
    <FeaturesWrapper>
      <FeaturesContent>
        <SectionTitle>Discover the Ultimate Gaming Experience</SectionTitle>
        <SectionDescription>
          Our platform offers a comprehensive game library, user-friendly
          profiles, and an engaging community forum. Dive into a world where
          gamers connect, compete, and thrive.
        </SectionDescription>
        <FeaturesGrid>
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </FeaturesGrid>
      </FeaturesContent>
    </FeaturesWrapper>
  );
};

export default FeaturesSection;
