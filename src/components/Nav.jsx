import { Link } from 'react-router-dom';
import { UserContext } from '../user';
import { useContext } from 'react';

const Nav = () => {
  const { user } = useContext(UserContext);
  return (
    <div className='component '>
      <div className='container nav'>
        <Link to='/'>Home</Link>
        <h2 className='nav-heading'>Nav</h2>
        <Link to='/users'>User: {user.username}</Link>
      </div>
    </div>
  );
};

export default Nav;
