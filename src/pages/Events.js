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
  position: relative;
  overflow: hidden;
`;

const CosmicBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    url('/assets/images/cosmic_background.png');
  background-size: cover;
  opacity: 0.2;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  position: relative;
`;

const EventCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const EventTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const EventDate = styled.p`
  font-size: 1.1rem;
  color: #ffd700;
  margin-bottom: 10px;
`;

const EventLocation = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;
`;

const EventDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
`;

const PulsingDot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #ffd700;
  border-radius: 50%;
  margin-right: 10px;
  animation: ${pulse} 2s infinite;
`;

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Cosmic Soundscape Festival",
      date: "August 15, 2024",
      location: "Starlight Arena, Los Angeles",
      description: "Join us for a night of ethereal beats and interstellar rhythms. Featuring a lineup of the best electronic artists in the galaxy."
    },
    {
      id: 2,
      title: "Nebula Nights Club Show",
      date: "September 3, 2024",
      location: "Event Horizon Club, New York",
      description: "An intimate club show showcasing tracks from the upcoming album. Limited tickets available."
    },
    {
      id: 3,
      title: "Galactic Groove World Tour Kick-off",
      date: "October 1, 2024",
      location: "Quantum Stadium, Tokyo",
      description: "The first stop on the Galactic Groove World Tour. Prepare for an audio-visual journey across the cosmos."
    }
  ];

  return (
    <PageTransition>
      <EventsContainer>
        <CosmicBackground />
        <Title>Upcoming Events</Title>
        <EventGrid>
          {events.map((event) => (
            <EventCard key={event.id}>
              <EventTitle><PulsingDot />{event.title}</EventTitle>
              <EventDate>{event.date}</EventDate>
              <EventLocation>{event.location}</EventLocation>
              <EventDescription>{event.description}</EventDescription>
            </EventCard>
          ))}
        </EventGrid>
      </EventsContainer>
    </PageTransition>
  );
};

export default Events;