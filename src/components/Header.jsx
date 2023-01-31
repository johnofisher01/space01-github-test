import React from "react";
import mainLogo from "./media/space.png";


function Header({ textColor }) {
  const headerStyles = {
    backgroundColor:'#011929' ,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <img className="logo" src={mainLogo} />
    </header>
  );
}

export default Header;
