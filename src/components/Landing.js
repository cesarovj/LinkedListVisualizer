import { Link } from 'react-router-dom';
import '../styles/Landing.css';

const Landing = () => {
  return (
    <div className='landing'>
      <div className='text'>
        <h3 className='main-text'>
          A linked list is a collection of nodes that represent a sequence.
          <br /> Each item has a value and next property.{' '}
        </h3>

        <p className='methods-text'>
          <strong>Insert:</strong> adds new item at given index.
        </p>
        <p className='methods-text'>
          <strong>Pop:</strong> removes the last item of an array.
        </p>
        <p className='methods-text'>
          <strong>Push:</strong> adds new item to the end of an array.{' '}
        </p>
        <p className='methods-text'>
          <strong>Remove:</strong> removes item at given index.
        </p>
        <p className='methods-text'>
          <strong>Reverse:</strong> reverses the order of the items in the
          array.
        </p>
        <p className='methods-text'>
          <strong>Set:</strong> updates item at given index.
        </p>
        <p className='methods-text'>
          <strong>Shift:</strong> removes the first item of an array.
        </p>
        <p className='methods-text'>
          <strong>Unshift:</strong> adds new item to the beginning of an array.
        </p>
      </div>

      <Link to='linked_list' className='landing-btn'>
        LEARN
      </Link>

      <div className='edu-text'>
        <h2>Learn the methods of a linked list through visualization!</h2>
      </div>
    </div>
  );
};

export default Landing;
