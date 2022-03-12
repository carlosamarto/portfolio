import React from "react";
import logo from "../../assets/Logo.png";

const Logo = () => {
  return (
    <>
      <div className="fixed top-6 left-11">
        <img src={logo} alt="Logo" className="w-16 h-16" />
      </div>
    </>
  );
};

export default Logo;
