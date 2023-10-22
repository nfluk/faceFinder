import React from 'react';
import Tilt from 'react-parallax-tilt';
import './logo.css';
import logo from './face.png';

function Logo() {
  return (
    <div className="ma4 mt0 flex justify-center">
      <Tilt className="tilt pa4 shadow-2 br-100">
        <div
          style={{
            height: '150px',
            width: '150px',
            padding: '2.5rem',
          }}
        >
          <img src={logo} alt="logo of a face recognition scanner" />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
