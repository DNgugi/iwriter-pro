import React from 'react';

const Header = () => {
    

  return (
    <header>
      <h2 className="brand">iWriter Pro</h2>
      <span className="material-icons" onClick={toggleHidden}>
        menu
      </span>
    </header>
  );
};

export const toggleHidden = () => {
  document.getElementById("main-nav").classList.toggle("hidden");
};

export default Header;