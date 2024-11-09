import React from 'react';
import styled from 'styled-components';

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 80px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
`;

const LinkColumn = styled.div`
  flex: 1;
  min-width: 150px;
`;

const ColumnTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 8px;
`;

const Link = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const footerLinks = [
  {
    title: 'Quick Links',
    links: ['About Us', 'Contact Support', 'Game Library', 'Community Forum', 'Latest News']
  },
  {
    title: 'Resources',
    links: ['Help Center', 'FAQs', 'Game Updates', 'User Profiles', 'Leaderboards']
  },
  {
    title: 'Connect',
    links: ['Social Media', 'Join Us', 'Events', 'Newsletters', 'Game Reviews']
  },
  {
    title: 'Follow Us',
    links: ['YouTube Channel', 'Twitch Streams', 'Discord Server', 'Game Merchandise', 'Support Us']
  },
  {
    title: 'Legal',
    links: ['Affiliate Program', 'Press Inquiries', 'Advertise With Us', 'Feedback Form', 'Community Guidelines']
  }
];

const FooterLinks = () => {
  return (
    <LinksWrapper>
      {footerLinks.map((column, index) => (
        <LinkColumn key={index}>
          <ColumnTitle>{column.title}</ColumnTitle>
          <LinkList>
            {column.links.map((link, linkIndex) => (
              <LinkItem key={linkIndex}>
                <Link href="#">{link}</Link>
              </LinkItem>
            ))}
          </LinkList>
        </LinkColumn>
      ))}
    </LinksWrapper>
  );
};

export default FooterLinks;