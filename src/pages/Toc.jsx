import { Link } from 'react-router-dom';

const Toc = () => {
  return (
    <div style={{ fontFamily: 'Male2, serif' }}>
    <div className="content-container animate-in">
      <h1>Оглавление</h1>

      <div className="toc-block">
        <h2>1. Животные</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <Link to="/predators" className="toc-btn">Хищники</Link>
          <Link to="/artiodactyls" className="toc-btn">Парнокопытные</Link>
          <Link to="/birds" className="toc-btn">Птицы</Link>
          <Link to="/rodents" className="toc-btn">Грызуны</Link>
          <Link to="/inwater" className="toc-btn">Водные обитатели</Link>
        </div>
      </div>

      <div className="toc-block">
        <h2>2. Биология</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <Link to="/cells" className="toc-btn">Клетки</Link>
          <Link to="/genetics" className="toc-btn">Генетика</Link>
          <Link to="/ecology" className="toc-btn">Экология</Link>
        </div>
      </div>

      <div className="toc-block">
        <h2>3. История</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <Link to="/сatharheus" className="toc-btn">Катархей</Link>
          <Link to="/archaea" className="toc-btn">Архей</Link>
          <Link to="/proterozoic" className="toc-btn">Протерозой</Link>
          <Link to="/paleozoic" className="toc-btn">Палеозой</Link>
          <Link to="/mesozoic" className="toc-btn">Мезозой</Link>
          <Link to="/cenozoic" className="toc-btn">Кайнозой</Link>
          
        </div>
      </div>
    </div>
    </div>
  );
};
export default Toc;