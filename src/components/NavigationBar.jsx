import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ActionButtons from "./ActionButtons";

const NavbarWrapper = styled.nav`
  background-color: #fff;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 64px;
  min-height: 72px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const NavigationBar = () => {
  return (
    <NavbarWrapper>
      <Logo />
      <NavLinks />
      <ActionButtons />
    </NavbarWrapper>
  );
};

export default NavigationBar;
