// src/components/SoundButton.jsx
import { useRef } from 'react';

const SoundButton = ({ children, onClick, ...props }) => {
  const audioRef = useRef(null);

  const handleClick = (e) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
    if (onClick) onClick(e);
  };

  return (
    <>
      <audio ref={audioRef} src="/sounds/click.mp3" />
      <button onClick={handleClick} {...props}>
        {children}
      </button>
    </>
  );
};

export default SoundButton;