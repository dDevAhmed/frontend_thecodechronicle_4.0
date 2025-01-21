import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpandArrowsAlt, FaCompressArrowsAlt } from 'react-icons/fa';
import Video from '../../../assets/other_media/web3.mp4'

const StoryCardVideoView = ({ post }) => {
  // const VideoFile = post.primaryMedia.url;

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // Volume between 0 and 1
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadedmetadata', () => setDuration(video.duration));
      video.addEventListener('timeupdate', () => setCurrentTime(video.currentTime));
      video.addEventListener('ended', () => setIsPlaying(false));
      video.addEventListener('volumechange', () => setVolume(video.volume));

      const handleMouseMovement = () => {
        setShowControls(true);
        clearTimeout(controlsRef.current);
        controlsRef.current = setTimeout(() => setShowControls(false), 3000);
      };

      video.addEventListener('mousemove', handleMouseMovement);
      video.addEventListener('touchmove', handleMouseMovement);
      video.addEventListener('touchstart', () => setShowControls(true));

      return () => {
        video.removeEventListener('loadedmetadata', () => { });
        video.removeEventListener('timeupdate', () => { });
        video.removeEventListener('ended', () => { });
        video.removeEventListener('volumechange', () => { });
        video.removeEventListener('mousemove', handleMouseMovement);
        video.removeEventListener('touchmove', handleMouseMovement);
        video.removeEventListener('touchstart', () => { });

      };
    }
  }, [Video]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      isPlaying ? video.pause() : video.play();
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleProgressChange = (e) => {
    if (videoRef.current) {
      videoRef.current.currentTime = e.target.value;
      setCurrentTime(e.target.value);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="relative w-full h-[25vh] lg:h-[35vh] bg-black group" onMouseLeave={() => setShowControls(false)}>

      {/* //todo - video tag or iframe */}
      {/* <iframe
      className={`w-full h-[25vh] lg:h-[35vh] rounded-lg`}
      src="https://www.youtube.com/embed/XEzRZ35urlk?si=OdEdj0hfZkmhQ8YA"
      title="The Code Chronicle video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen>
    </iframe> */}

      <video
        ref={videoRef}
        src={Video}
        className="w-full h-full object-cover cursor-pointer"
        onClick={togglePlay}
        muted={isMuted}
      />

      <div className={`absolute inset-x-0 bottom-0 h-3/10 bg-gradient-to-t from-black to-transparent p-4 flex items-center transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <button onClick={togglePlay} className="text-white mr-2">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <span className="text-xs text-white mr-2">{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleProgressChange}
          className="flex-1 appearance-none bg-gray-300 rounded-full h-1 cursor-pointer mr-2"
        />
        <span className="text-xs text-white mr-2">{formatTime(duration)}</span>

        <button onClick={toggleMute} className="text-white mr-2">
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <button onClick={toggleFullscreen} className="text-white">
          {isFullscreen ? <FaCompressArrowsAlt/> : <FaExpandArrowsAlt />}
        </button>
      </div>
    </div>
  );
};

export default StoryCardVideoView;