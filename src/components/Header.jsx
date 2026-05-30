import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header animate-in">
      <Link to="/" className="logo-link" title="На главную">
        <img src="" alt="" />
      </Link>
    </header>
  );
};

export default Header;