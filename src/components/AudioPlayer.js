import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const PlayButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 10px;
`;

const TrackInfo = styled.span`
  flex-grow: 1;
`;




const AudioPlayer = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(track.audio));

  useEffect(() => {
    console.log("Audio source:", track.audio);
    audioRef.current.addEventListener('error', (e) => {
      console.error("Audio error:", e);
    });
  }, [track.audio]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Playback failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <PlayerContainer>
      <PlayButton onClick={togglePlay}>
        {isPlaying ? '❚❚' : '▶'}
      </PlayButton>
      <TrackInfo>
        {track.title} - {track.duration}
      </TrackInfo>
    </PlayerContainer>
  );
};

export default AudioPlayer;