import React from 'react';

import { Responsive, Menu, Image } from 'semantic-ui-react';
import VisitorDropdown from '../Partials/VisitorDropdown';
import VisitorMenu from '../Partials/VisitorMenu';

import logo from '../../assets/images/logo.png';
import './styles.scss';

const Header = () => (
  // == Icon and burger menu for mobile navbar, using Semantic-UI-React
  <>
    {/* Menu display for mobile screens  */}
    <Responsive maxWidth={499}>
      <Menu fixed="top">
        <Menu.Item href="https://www.facebook.com" target="_blank" icon="facebook f" />
        <Menu.Item href="https://twitter.com" target="_blank" icon="twitter" />
        <Menu.Item href="https://www.youtube.com" target="_blank" icon="youtube" />
        {/* <Menu.Item position="right" icon="bars" /> */}
        <Menu.Item position="right">
          <VisitorDropdown />
        </Menu.Item>
      </Menu>
      <div className="header__container">
        <Image className="header__logo__mobile" src={logo} centered size="small" />
      </div>
    </Responsive>

    {/* Menu display for tablet and desktop screens */}
    <Responsive minWidth={500}>
      {/* INSERT MENU  */}
      <VisitorMenu />
    </Responsive>
  </>
);

export default Header;
