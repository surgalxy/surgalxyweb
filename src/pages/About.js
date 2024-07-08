import React from 'react';
import styled from 'styled-components';
import PageTransition from '../components/PageTransition';

const AboutContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(45deg, #1a0b2e, #5b0e91);
  color: white;
  padding: 50px;
  position: relative;
  overflow: hidden;
`;

const StarField = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
  background-repeat: repeat;
  background-size: 200px 200px;
  animation: twinkle 5s ease-in-out infinite alternate;
  opacity: 0.3;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 40px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ArtistImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: block;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
`;

const About = () => {
  return (
    <PageTransition>
      <AboutContainer>
        <StarField />
        <Content>
          <Title>About surgalxy</Title>
          <ArtistImage src="/assets/images/artist_IMAGE.png" alt="surgalxy" />
          <Paragraph>
					Exploring the cosmos with generative ai. For me music is the answer. It's what makes life worth living
          </Paragraph>
          <Paragraph>
					Humilty is also an answer as we chart unknown territories and grow as individuals and as a collective
          </Paragraph>
          <Paragraph>
					surgalxy is the expression of i have consumed and influenced by the many great mind of the world past and present
          </Paragraph>
          <Paragraph>
            To me the possibilities are infinite and I hope we all get the chance to explore those possibilities
          </Paragraph>
          <Paragraph>
			Lets look after eachother and this planet. Lets thrive together
			</Paragraph>
          <Paragraph>
		  Much love to all, sur
		  </Paragraph>
        </Content>
      </AboutContainer>
    </PageTransition>
  );
};

export default About;