import React from "react";
import styled from "styled-components";
import Header from "./Header";
import FeaturesSection from "./FeaturesSection";
import TestimonialSection from "./TestimonialSection";
import CallToActionSection from "./CallToActionSection";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

const GamingLandingPage = () => {
  return (
    <PageWrapper>
      <Header />
      <FeaturesSection />
      <TestimonialSection />
      <CallToActionSection />
      <NewsletterSection />
      <Footer />
    </PageWrapper>
  );
};

export default GamingLandingPage;
