import React from 'react';
import { menuItems } from '../../utils/NavMenuItens';
import NavMenuItems from '../NavMenuItems';
import { Nav, Container } from './style';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'

interface Props {
  toggleTheme(themeValue: string): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

 return (
  <Container>
    <Link to="/" className="logo">
      <h1>AUGUSTO<span>SOUZA</span></h1>
    </Link>    
    <Nav>
      <ul className="menus menu">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <NavMenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
              toggleTheme={toggleTheme}
            />
          );
        })}
      </ul>
    </Nav>
  </Container>
  
  );
};

export default Header;