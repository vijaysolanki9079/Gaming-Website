import React from 'react';
import styled from 'styled-components';
import FooterNewsletter from './FooterNewsletter';
import FooterLinks from './FooterLinks';
import FooterCredits from './FooterCredits';

const FooterWrapper = styled.footer`
  background-color: #fff;
  padding: 80px 64px;
  @media (max-width: 991px) {
    padding: 40px 20px;
  }
`;

const FooterContent = styled.div`
  max-width: 1312px;
  margin: 0 auto;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterNewsletter />
        <FooterLinks />
        <FooterCredits />
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;