import React from 'react';
import styled from 'styled-components';

const NewsletterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 40px;
  margin-bottom: 80px;
  @media (max-width: 991px) {
    flex-direction: column;
    margin-bottom: 40px;
  }
`;

const NewsletterInfo = styled.div`
  max-width: 537px;
`;

const NewsletterTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  @media (max-width: 640px) {
    margin-left: 180px;
  }
`;

const NewsletterDescription = styled.p`
  font-size: 16px;
  @media (max-width: 640px) {
    margin-left: 80px;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 16px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
  @media (max-width: 640px) {
    margin-left: 120px;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  min-width: 240px;
  padding: 12px;
  border: 1px solid #000;
  font: 400 16px Roboto, sans-serif;
`;

const SubscribeButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 12px 24px;
  border: 1px solid #000;
  font: 400 16px Roboto, sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
  background-color: #000;
  color: #fff;
}
`;

const TermsText = styled.p`
  font-size: 12px;
  margin-top: 16px;
  @media (max-width: 640px) {
    margin-left: 140px;
  }
`;

const FooterNewsletter = () => {
  return (
    <NewsletterWrapper>
      <NewsletterInfo>
        <NewsletterTitle>Subscribe to updates</NewsletterTitle>
        <NewsletterDescription>
          Stay informed with our latest gaming news and offers.
        </NewsletterDescription>
      </NewsletterInfo>
      <div>
        <NewsletterForm onSubmit={(e) => e.preventDefault()}>
          <EmailInput type="email" placeholder="Your email here" aria-label="Email address" required />
          <SubscribeButton type="submit">Join</SubscribeButton>
        </NewsletterForm>
        <TermsText>
          By subscribing, you accept our Privacy Policy.
        </TermsText>
      </div>
    </NewsletterWrapper>
  );
};

export default FooterNewsletter;