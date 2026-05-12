import React from 'react';
import HeaderLogo from "../../assets/images/img.svg"

const Header = () => {
  return (
    <header className="header">
        <img
          className="header__logo"
          src={HeaderLogo}
          alt="Alrededor de los EE.UU._logo"
        />
      </header>
  )
}

export default Header;

