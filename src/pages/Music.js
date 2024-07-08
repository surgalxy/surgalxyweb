import React from 'react';
import styled from 'styled-components';
import AudioPlayer from '../components/AudioPlayer';
import PageTransition from '../components/PageTransition';

const MusicContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(45deg, #1a0b2e, #5b0e91);
  color: white;
  padding: 50px;
  position: relative;
  overflow: hidden;
`;

const StarryBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
    radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
    radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px);
  background-size: 550px 550px, 350px 350px, 250px 250px;
  background-position: 0 0, 40px 60px, 130px 270px;
  animation: twinkle 10s ease-in-out infinite alternate;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  justify-items: center;
  position: relative;
`;

const Album = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const AlbumCover = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const AlbumTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const AlbumInfo = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const TrackList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: left;
`;

const TrackItem = styled.li`
  margin-bottom: 5px;
`;

const albums = [
  {
    id: 1,
    title: 'We Are the Light - EP',
    artist: 'surgalxy',
    cover: '/assets/images/we-are-the-light-cover.jpg',
    releaseYear: 2024,
    genre: 'House',
    tracks: [
      { title: 'We Are the Light', duration: '2:45', audio: '/assets/audio/we-are-the-light.wav' },
      { title: 'Electronic Dreams', duration: '4:00', audio: '/assets/audio/electronic-dreams.mp3' },
      { title: 'Lost In the Beat', duration: '3:59', audio: '/assets/audio/lost-in-the-beat.mp3' },
      { title: 'Euphoric Nights', duration: '1:53', audio: '/assets/audio/euphoric-nights.mp3' },
      { title: 'Dream Flight', duration: '2:29', audio: '/assets/audio/dream-flight.mp3' },
      { title: 'Lost In the Night', duration: '1:55', audio: '/assets/audio/lost-in-the-night.mp3' }
    ]
  }
];



const Music = () => {
  return (
    <PageTransition>
      <MusicContainer>
        <StarryBackground />
        <Title>My Music</Title>
        <AlbumGrid>
          {albums.map((album) => (
            <Album key={album.id}>
              <AlbumCover src={album.cover} alt={album.title} />
              <AlbumTitle>{album.title}</AlbumTitle>
              <AlbumInfo>{album.artist} • {album.genre} • {album.releaseYear}</AlbumInfo>
              <TrackList>
                {album.tracks.map((track, index) => (
                  <TrackItem key={index}>
                    <AudioPlayer track={track} />
                  </TrackItem>
                ))}
              </TrackList>
            </Album>
          ))}
        </AlbumGrid>
      </MusicContainer>
    </PageTransition>
  );
};

export default Music;
 