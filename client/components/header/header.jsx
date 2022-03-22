import React from "react"
import HeaderTitle from './headerTitle'
import HeaderSocial from './headerSocial'
import './header.scss'

const Header = () => {
  return(
    <header className="header">
      <HeaderTitle />
      <HeaderSocial />
    </header>
  );
};

Header.propTypes = {};

export default Header;