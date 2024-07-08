import React from 'react';
import styled, { keyframes } from 'styled-components';
import PageTransition from '../components/PageTransition';

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

const EventsContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(45deg, #1a0b2e, #5b0e91);
  color: white;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CosmicBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/assets/images/cosmic_background.png');
  background-size: cover;
  opacity: 0.2;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const Message = styled.h2`
  font-size: 2rem;
  margin-top: 20px;
  animation: ${pulse} 2s infinite;
`;

const Events = () => {
  return (
    <PageTransition>
      <EventsContainer>
        <CosmicBackground />
        <div>
          <Title>Upcoming Events</Title>
          <Message>Coming Soon</Message>
        </div>
      </EventsContainer>
    </PageTransition>
  );
};

export default Events;
