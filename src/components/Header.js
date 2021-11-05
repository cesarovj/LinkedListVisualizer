import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <Link to='/' className='header-text'>
      Linked List Visualizer
    </Link>
  );
};

export default Header;
