import React from "react";
import logo from "../../assets/Logo.png";

const Logo = () => {
  return (
    <>
      <div className="lg:fixed block top-6 left-8">
        <a href="/">
          <img src={logo} alt="Logo" className="w-14 h-14" />
        </a>
      </div>
    </>
  );
};

export default Logo;
