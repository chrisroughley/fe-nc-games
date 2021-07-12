import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className='component '>
      <div className='container nav'>
        <h2 className='nav-heading'>Nav</h2>
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
};

export default Nav;
