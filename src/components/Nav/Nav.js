import React from 'react';

function Nav() {
  return (
    <nav style={navStyle}>
      <p className="f3 link dim black underline pa3 pointer">Sign Out</p>
    </nav>
  );
}

const navStyle = { display: 'flex', justifyContent: 'flex-end' };

export default Nav;
