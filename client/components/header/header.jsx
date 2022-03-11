import React from "react"
import HeaderTitle from './headerTitle'
import HeaderSocial from './headerSocial'
import './header.scss'

const Header = () => {
  return(
    <div className="header">
      <HeaderTitle />
      <HeaderSocial />
    </div>
  );
};

Header.propTypes = {};

export default Header;