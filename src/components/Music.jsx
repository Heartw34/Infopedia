import { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Music = () => {
  const location = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // 0.5 = 50% громкости
  const audioRef = useRef(null);

  const getTrackPath = () => {
    const path = location.pathname.replace('/', '') || 'home';
    const trackMap = {
    'home': '/music/Laetha-chosic.com_.mp3',
    'animals': '/music/animals.mp3',
    'biology': '/music/biology.mp3',
    'history': '/music/history.mp3',
    'toc': '/music/Laetha-chosic.com_.mp3',
    'rodents': '/music/sb_adriftamonginfinitestars(chosic.com).mp3',
    'predators': '/music/Powerful(chosic.com).mp3',
    'birds': '/music/birds.mp3',
    'inwater': '/music/.mp3',
    'artiodactyls': '/music/.mp3',
    'cells': '/music/.mp3',
    'genetics': '/music/AtTheEndOfAllThings-chosic.com_.mp3',
    'ecology': '/music/AtTheEndOfAllThings-chosic.com_.mp3',
    'archaea': '/music/MANTRON(chosic.com).mp3',
    'catharheus': '/music/MANTRON(chosic.com).mp3',
    'mesozoic': '/music/maxkomusic-heroism(chosic.com)',
    'modern': '/music/maxkomusic-heroism(chosic.com)',
    'about': '/music/maxkomusic-heroism(chosic.com).mp3',
    'links': '/music/alex-productions-cinematic-piano-lights(chosic.com).mp3',
    'other/anim': '/music/animals.mp3', 
    'other/biol': '/music/The-Inspiration-mp3(chosic.com).mp3',
    'other/hist': '/music/Convergence-chosic.com_.mp3',
    };
    return trackMap[path] || '/music/alex-productions-epic-cinematic-trailer-elite(chosic.com).mp3';
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = getTrackPath();
      audioRef.current.load();
      
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [location.pathname, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
      background: 'rgba(0,0,0,0.8)',
      padding: '10px 15px',
      borderRadius: '30px',
      border: '1px solid #58a6ff',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      <audio ref={audioRef} loop />
      
      <button 
        onClick={togglePlay}
        style={{
          background: 'none',
          border: 'none',
          color: '#fff',
          fontSize: '20px',
          cursor: 'pointer'
        }}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>
      
{/* {Volume} */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', width: '80px' }}>
        <span style={{ color: '#aaa', fontSize: '12px' }}>📢</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          style={{
            width: '100%',
            accentColor: '#58a6ff',
            background: 'transparent'
          }}
        />
      </div>
      
      <span style={{ color: '#aaa', fontSize: '12px' }}>
        {location.pathname.replace('/', '') || 'Главная'}
      </span>
    </div>
  );
};

export default Music;