import React, { useState, useRef, useEffect } from 'react';
import { PiPlay, PiPause } from "react-icons/pi";
import { HiOutlineMicrophone } from "react-icons/hi2";
// import AudioFile from '../../../../../../../../../Deen/Quran Audio/Mishary Rashid Alafasy/002.mp3'

const StoryCardAudioView = ({ post }) => {
  const Audio = post.primaryMedia.url;

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current.duration);
      });

      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current.currentTime);
      });

      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentTime(0); // Reset time when audio ends
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('loadedmetadata', () => { });
        audioRef.current.removeEventListener('timeupdate', () => { });
        audioRef.current.removeEventListener('ended', () => { });
      }
    }
  }, [Audio]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleProgressChange = (e) => {
    if (audioRef.current) {
      audioRef.current.currentTime = e.target.value;
      setCurrentTime(e.target.value)
    }
  }

  return (
    <div className="h-32 w-full rounded-lg bg-gray-100 p-4 flex flex-col">
      <div className="h-2/3 flex items-center justify-center text-gray-400 text-6xl">
        <HiOutlineMicrophone />
      </div>
      <div className="h-1/3 flex items-center gap-2 pt-2 border-t border-gray-200">
        <button onClick={togglePlay} className="text-gray-600 hover:text-gray-800">
          {isPlaying ? <PiPause /> : <PiPlay />}
        </button>
        <span className="text-xs text-gray-600">{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleProgressChange}
          className="flex-1 appearance-none bg-gray-300 rounded-full h-1 cursor-pointer"
        />
        <span className="text-xs text-gray-600">{formatTime(duration)}</span>
      </div>
      <audio ref={audioRef} src={Audio} preload="metadata" />
    </div>
  );
};

export default StoryCardAudioView;