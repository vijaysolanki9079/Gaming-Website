import React from 'react';
import styled from 'styled-components';

const CreditsWrapper = styled.div`
  border-top: 1px solid #000;
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const CopyrightInfo = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CopyrightText = styled.p`
  font-size: 14px;
`;

const LegalLink = styled.a`
  color: #000;
  text-decoration: underline;
  font-size: 14px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const socialIcons = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b374903b3b58f19a20b6f17412e6ef64138924ca84fc6958d2fc69c6506b998f?placeholderIfAbsent=true&apiKey=ae3b29e07af44a789a926a9147396556", alt: "Facebook" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/973ae2f4bac06b359363caa91c8fe840470c8c5a065f3d76266dc2c16e296983?placeholderIfAbsent=true&apiKey=ae3b29e07af44a789a926a9147396556", alt: "Twitter" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed46b9abb949e8a22ffc48b3d7a136e1ac7e46ec75a01a045e5cdf8f55d5534c?placeholderIfAbsent=true&apiKey=ae3b29e07af44a789a926a9147396556", alt: "Instagram" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/13a02d80b8bb97dfdba0b258be17959dd7ae5710974b47563f547fe30fd24d95?placeholderIfAbsent=true&apiKey=ae3b29e07af44a789a926a9147396556", alt: "LinkedIn" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/92db77ede5b8b25fa17af00a2b96b87b735f758e9b74eaead787aa5d31b0821c?placeholderIfAbsent=true&apiKey=ae3b29e07af44a789a926a9147396556", alt: "YouTube" }
];

const FooterCredits = () => {
  return (
    <CreditsWrapper>
      <CopyrightInfo>
        <CopyrightText>© 2024 Relume. All rights reserved.</CopyrightText>
        <LegalLink href="#">Privacy Policy</LegalLink>
        <LegalLink href="#">Terms of Service</LegalLink>
        <LegalLink href="#">Cookies Settings</LegalLink>
      </CopyrightInfo>
      <SocialLinks>
        {socialIcons.map((icon, index) => (
          <SocialIcon key={index} href="#" aria-label={icon.alt}>
            <img src={icon.src} alt={icon.alt} width="24" height="24" />
          </SocialIcon>
        ))}
      </SocialLinks>
    </CreditsWrapper>
  );
};

export default FooterCredits;