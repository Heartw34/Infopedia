import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Other, serif' }}>
    <div className="content-container animate-in">
      <div className="home-card">
        <div className="home-header">Животные</div>
        <p>Животные Ростовской области, которые могут вас удивить и вдохновить.</p>
        <Link to="/other/anim" className="btn-read">Читать</Link>
      </div>

      <div className="home-card">
        <div className="home-header">Биология</div>
        <p>Интересные факты о строении животных, растений и микробов.</p>
        <Link to="/other/biol" className="btn-read">Читать</Link>
      </div>

      <div className="home-card">
        <div className="home-header">История</div>
        <p>Увлекательные истории о людях, событиях и местах.</p>
        <Link to="/other/hist" className="btn-read">Читать</Link>
      </div>
    </div>
    </div>
  );
};
export default Home;