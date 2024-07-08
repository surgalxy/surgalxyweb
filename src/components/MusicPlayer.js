import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const PlayerContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  padding: 20px;
  color: white;
  width: 300px;
  text-align: center;
`;

const SongTitle = styled.h3`
  margin: 0 0 10px 0;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin: 0 10px;
`;

const ProgressBar = styled.input`
  width: 100%;
  margin-top: 20px;
`;

const MusicPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio(song.url));

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (e) => {
    const newTime = (audioRef.current.duration / 100) * e.target.value;
    audioRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  return (
    <PlayerContainer>
      <SongTitle>{song.title}</SongTitle>
      <Controls>
        <Button onClick={togglePlay}>{isPlaying ? '❚❚' : '▶'}</Button>
      </Controls>
      <ProgressBar
        type="range"
        value={progress}
        onChange={handleProgress}
        min="0"
        max="100"
      />
    </PlayerContainer>
  );
};

export default MusicPlayer;