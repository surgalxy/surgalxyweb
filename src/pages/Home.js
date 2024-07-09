import React from 'react';
import styled from 'styled-components';
import PageTransition from '../components/PageTransition';

const HomeContainer = styled.div`
  height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const VideoBackground = styled.video`
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
`;

const Logo = styled.img`
  max-width: 300px;
  margin-bottom: 2rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  text-align: center;
  line-height: 1.6;
`;

const Home = () => {
  return (
    <PageTransition>
      <HomeContainer>
        <VideoBackground autoPlay loop muted>
          <source src={`${process.env.PUBLIC_URL}/assets/videos/space_journey.mp4`} type="video/mp4" />
        </VideoBackground>
        <Logo src={`${process.env.PUBLIC_URL}/assets/images/surgalxy_logo.png`} alt="Surgalaxy" />
        <Subtitle>Embark on a cosmic journey through sound and space</Subtitle>
      </HomeContainer>
    </PageTransition>
  );
};

export default Home;
