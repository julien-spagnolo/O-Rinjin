// == Import npm
import React from 'react';
// == Import components that we need to use from Semantic-UI-React
import {
  Menu, Image, Responsive, Icon, Button, Dropdown,
} from 'semantic-ui-react';
// == Import Link from react-router-dom
import { Link } from 'react-router-dom';

// == Import styles and assets
import './styles.scss';
import logo from '../../assets/images/logo.png';

// == Header component for menu bar display
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
          <Dropdown direction="left" text="Menu">
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/" text="Accueil" />
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/login" text="Connexion" />
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/register" text="Inscription" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
      <div className="header__container">
        <Image className="header__logo__mobile" src={logo} centered size="small" />
      </div>
    </Responsive>

    {/* Menu display for tablet and desktop screens */}
    <Responsive minWidth={500}>
      <div className="header__container__desktop">
        <Button as={Link} to="/login" className="desktop__header__button" size="small" animated>
          <Button.Content visible>Connexion</Button.Content>
          <Button.Content hidden>
            <Icon name="user" />
          </Button.Content>
        </Button>
        <div className="header__logo__desktop">
          <Image as={Link} to="/" className="header__logo" src={logo} centered size="small" />
        </div>
        <Button as={Link} to="/register" className="desktop__header__button" animated>
          <Button.Content visible>Inscription</Button.Content>
          <Button.Content hidden>
            <Icon name="sign-in" />
          </Button.Content>
        </Button>
      </div>
    </Responsive>
  </>
);

// == Export
export default Header;
