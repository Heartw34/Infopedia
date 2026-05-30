import { Link } from 'react-router-dom';
import { useRef } from 'react';

const TopNav = () => {
  return (
    <>
      <Link to="/" className="logo-container-fixed" title="На главную">
        <img className='glow-border'  src="/icon.png" alt="Главная" />
      </Link>
  <div style={{ fontFamily: 'Other, serif' }}>
    <div className="content-container animate-in"></div>
      <div className="top-panel">
        <h1 className="welcome-text">Добро пожаловать на наш сайт!</h1>
        <div className="nav-bar">
          <Link to="/toc" className="nav-btn">Оглавление</Link>
          <Link to="/animals" className="nav-btn">Животные</Link>
          <Link to="/biology" className="nav-btn">Биология</Link>
          <Link to="/history" className="nav-btn">История</Link>
          <Link to="/about" className="nav-btn">О нас</Link>
        </div>
      </div>
      </div>
    </>
  );
};

// const audioRef = useRef(null);

//   const playSound = () => {
//     if (audioRef.current) {
//       audioRef.current.currentTime = 0;
//       audioRef.current.play().catch(() => {});
//     }
//   };

//   return (
//     <>
//       <audio ref={audioRef} src="/sounds/click.mp3" />
//       <button onClick={playSound} className="nav-btn">
//         Кнопка со звуком
//       </button>
//     </>
//   );

export default TopNav;