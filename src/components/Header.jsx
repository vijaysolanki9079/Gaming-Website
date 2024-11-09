import React from "react";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";
import HeroSection from "./HeroSection";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <NavigationBar />
      <HeroSection />
    </HeaderWrapper>
  );
};

export default Header;
