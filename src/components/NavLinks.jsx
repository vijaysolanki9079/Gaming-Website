import React from 'react';
import styled from 'styled-components';

const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  color: #000;
  font: 400 16px Roboto, sans-serif;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const NavLinkDropdown = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const DropdownIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 24px;
`;

const NavLinks = () => {
  return (
    <NavLinksWrapper>
      <NavLink href="#game-library">Game Library</NavLink>
      <NavLink href="#leaderboards">Leaderboards</NavLink>
      <NavLink href="#community-forum">Community Forum</NavLink>
      <NavLinkDropdown href="#game-news">
        Game News
        <DropdownIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/fee1f4da4fbc0ac2471ce1f6c2ea6132c2a43490c7dcf7518142e53de96c1a55?placeholderIfAbsent=true&apiKey=ae3b29e07af44a789a926a9147396556" alt="" />
      </NavLinkDropdown>
    </NavLinksWrapper>
  );
};

export default NavLinks;