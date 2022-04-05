import { React } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <ul>
        <li><Link to="/search"> Search Page </Link></li>
        <li>
          <a href="/logout"> Logout </a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Nav;
