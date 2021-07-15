import { Link } from 'react-router-dom';
import { UserContext } from '../user';
import { useContext } from 'react';

const Nav = () => {
  const { user } = useContext(UserContext);
  return (
    <div className='nav '>
      <div className='container nav-container'>
        <Link to='/' className='nav-link home-link'>
          Home
        </Link>

        <Link to='/users' className='nav-link'>
          LOGIN {user.username}
        </Link>
      </div>
    </div>
  );
};

export default Nav;
