import React from 'react';
import { toggleHidden } from "./Header";

const MainNav = () => {
  return (
    <aside id="main-nav" className="hidden">
      <a href="#welcome" onClick={toggleHidden}>
        Welcome
      </a>
      <a href="#services" onClick={toggleHidden}>
        Services
      </a>
      <a href="#support" onClick={toggleHidden}>
        Support{" "}
      </a>
      {/* <a
          href="https://teambidii.co.ke"
          target="_blank"
          onClick={toggleHidden}
        >
          Log In
        </a> */}
    </aside>
  );
};

export default MainNav;