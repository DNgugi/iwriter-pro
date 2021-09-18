import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p className="center">
        iWriter Pro &copy; {new Date().getFullYear()}. A{" "}
        <a href="https://teambidii.co.ke" target="_blank" rel="noreferrer">
          Team Bidii Consulting
        </a>{" "}
        project.
      </p>
    </footer>
  );
};

export default Footer;