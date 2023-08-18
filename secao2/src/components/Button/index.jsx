import { Component } from 'react';
import './styles.css';

export const Button = ({onClick, disabled, text}) => {
  return (
      <button
          className='button'
          onClick={onClick}
          disabled={disabled}
      >
        {text}
      </button>
  );
}

