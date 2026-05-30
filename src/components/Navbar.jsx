import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-links">
          <Link to="/" className="nav-item">Главная страница</Link>
          <Link to="/toc" className="nav-item">Оглавление</Link>
          <Link to="/category/animals" className="nav-item">Животные</Link>
          <Link to="/category/biology" className="nav-item">Биология</Link>
          <Link to="/category/history" className="nav-item">История</Link>
          <Link to="/about" className="nav-item">О нас</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;