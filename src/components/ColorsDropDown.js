import { useState, useEffect } from 'react';
import dropTriangle from '../images/drop-triangle.svg';
import { motion } from 'framer-motion';
import { dropForm } from '../models/animate';
import '../styles/ColorsDropDown.css';

const ColorsDropDown = (props) => {
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState([]);

  // updates all colors in array except current color
  useEffect(() => {
    const colors = [
      'linear-gradient(90deg, #de4146, #fcb045',
      'linear-gradient(90deg, #417ADE, #1df8fd)',
      'linear-gradient(90deg, #3baa22, #89f440)',
    ];

    const filteredColors = colors.filter(
      (color) => color !== props.currentColor
    );

    setColors(filteredColors);
  }, [props.currentColor]);

  // Click handlers
  const handleClick = () => {
    setOpen(!open);
  };

  const handleColorClick = (e) => {
    const target = e.target.closest('.drop-color');
    props.setCurrentColor(target.id);
    setOpen(!open);
  };

  return (
    <div className='colors-drop-down'>
      <div className='color-current' onClick={handleClick}>
        <div
          className='colorbox'
          style={{ background: props.currentColor }}
        ></div>
        <span>
          <img
            src={dropTriangle}
            alt='triangle'
            className={open ? 'drop-opened' : 'drop-closed'}
          />
        </span>
      </div>
      <motion.ul
        className='color-list'
        style={{ originY: 0 }}
        variants={dropForm}
        initial='initial'
        animate={open ? 'animate' : 'initial'}
      >
        {colors.map((color) => (
          <li
            className='drop-color'
            id={color}
            key={color}
            onClick={handleColorClick}
          >
            <div className='colorbox' style={{ background: color }}></div>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ColorsDropDown;
