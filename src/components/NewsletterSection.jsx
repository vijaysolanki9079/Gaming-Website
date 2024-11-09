import React from 'react';
import styled from 'styled-components';
import newsletterImg from '../assets/fantasy-group-adventurers.jpg';

const NewsletterWrapper = styled.section`
  background-color: #fff;
  padding: 112px 64px;
  @media (max-width: 991px) {
    padding: 100px 20px;
  }
`;

const NewsletterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const NewsletterInfo = styled.div`
  flex: 1;
  max-width: 616px;
`;

const NewsletterTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 24px;
`;

const NewsletterDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 32px;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 16px;
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #000;
  font: 400 16px Roboto, sans-serif;
`;

const SubscribeButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 12px 24px;
  border: none;
  font: 400 16px Roboto, sans-serif;
  cursor: pointer;
`;

const TermsText = styled.p`
  font-size: 12px;
  margin-top: 16px;
`;

const NewsletterImage = styled.img`
  flex: 1;
  max-width: 100%;
  height: auto;
`;

const NewsletterSection = () => {
  return (
    <NewsletterWrapper>
      <NewsletterContent>
        <NewsletterInfo>
          <NewsletterTitle>Stay Updated with Our News</NewsletterTitle>
          <NewsletterDescription>
            Join our newsletter for the latest game updates, news, and exclusive features delivered to you.
          </NewsletterDescription>
          <NewsletterForm onSubmit={(e) => e.preventDefault()}>
            <EmailInput type="email" placeholder="Your Email Here" aria-label="Email address" required />
            <SubscribeButton type="submit">Join Now</SubscribeButton>
          </NewsletterForm>
          <TermsText>
            By clicking Join Now, you agree to our Terms and Conditions.
          </TermsText>
        </NewsletterInfo>
        <NewsletterImage src={newsletterImg} alt="Gaming Newsletter" />
      </NewsletterContent>
    </NewsletterWrapper>
  );
};

export default NewsletterSection;
