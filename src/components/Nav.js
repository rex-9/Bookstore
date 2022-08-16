import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <div id="menu">
      <header>BookStore CMS</header>
      <ul>
        <li><Link style={{ textDecoration: 'none' }} to="/">Books</Link></li>
        <li><Link style={{ textDecoration: 'none' }} to="/categories">Categories</Link></li>
      </ul>
    </div>
    <div>User Logo</div>
  </nav>
);
export default Nav;
