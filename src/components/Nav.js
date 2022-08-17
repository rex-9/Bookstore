import { Link } from 'react-router-dom';
import { useState } from 'react';

const style = {
  textDecoration: 'none', fontFamily: 'Montserrat', color: '#A7A7A7', letterSpacing: '1.9px',
};

const hoverStyle = {
  textDecoration: 'none', fontFamily: 'Montserrat', color: '#121212', letterSpacing: '1.9px',
};

const Nav = () => {
  const [bookHover, setBookHover] = useState(false);
  const [cateHover, setCateHover] = useState(false);

  const bookEnter = () => {
    setBookHover(true);
  };

  const bookLeave = () => {
    setBookHover(false);
  };

  const cateEnter = () => {
    setCateHover(true);
  };

  const cateLeave = () => {
    setCateHover(false);
  };

  return (
    <nav>
      <div id="menu">
        <header>BookStore CMS</header>
        <ul>
          <li onMouseEnter={bookEnter} onMouseLeave={bookLeave}>
            <Link
              style={bookHover ? hoverStyle : style}
              to="/"
            >
              Books
            </Link>
          </li>
          <li onMouseEnter={cateEnter} onMouseLeave={cateLeave}>
            <Link
              style={cateHover ? hoverStyle : style}
              to="/categories"
            >
              Categories
            </Link>
          </li>
        </ul>
      </div>
      <div>User Logo</div>
    </nav>
  );
};
export default Nav;
