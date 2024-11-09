import React from 'react';
import styled from 'styled-components';

const TestimonialWrapper = styled.section`
  background-color: #fff;
  padding: 112px 64px;
  @media (max-width: 991px) {
    padding: 100px 20px;
  }
`;

const TestimonialContent = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const VideoPlaceholder = styled.div`
  background-color: #000;
  flex: 1;
  aspect-ratio: 16 / 9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 128px;
  height: 102px;
`;

const TestimonialQuote = styled.div`
  flex: 1;
  max-width: 616px;
`;

const Stars = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 32px;
`;

const StarIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const Quote = styled.blockquote`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 32px;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  font-weight: 600;
`;

const AuthorTitle = styled.span`
  font-weight: 400;
`;

const AuthorImage = styled.img`
  width: 120px;
  height: 48px;
  object-fit: cover;
`;

const TestimonialSection = () => {
  return (
    <TestimonialWrapper>
      <TestimonialContent>
        <VideoPlaceholder>
          <PlayButton aria-label="Play testimonial video">
            {/* Add play icon here */}
          </PlayButton>
        </VideoPlaceholder>
        <TestimonialQuote>
          <Stars>
            {[...Array(5)].map((_, index) => (
              <StarIcon key={index} src="https://cdn.builder.io/api/v1/image/assets/TEMP/5047c4025c17f40d5b2ee8a240dcea112908686fa8eea863c9fbe08ef60590bd?placeholderIfAbsent=true&apiKey=ae3b29e07af44a789a926a9147396556" alt="" />
            ))}
          </Stars>
          <Quote>
            "This platform has transformed my gaming experience! The sleek design and user-friendly features keep me coming back for more."
          </Quote>
          <Author>
            <AuthorInfo>
              <AuthorName>Alex Johnson</AuthorName>
              <AuthorTitle>Gamer, Influencer</AuthorTitle>
            </AuthorInfo>
            <AuthorImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/aba331a9899041f3e065a79c94fd70fbc1747dac410ab7d9da135623220e1a93?placeholderIfAbsent=true&apiKey=ae3b29e07af44a789a926a9147396556" alt="Alex Johnson" />
          </Author>
        </TestimonialQuote>
      </TestimonialContent>
    </TestimonialWrapper>
  );
};

export default TestimonialSection;