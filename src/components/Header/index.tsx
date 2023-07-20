import React from 'react';
import { menuItems } from '../../utils/NavMenuItens';
import NavMenuItems from '../NavMenuItems';
import { Nav } from './style';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'

interface Props {
  toggleTheme(themeValue: string): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

 return (
  <div>
    <Link to="/">
      <img id="logo-image" alt="Augusto Develop" src={Logo} style={{ height: '60px' }} />
    </Link>    
    <Nav>
      <ul className="menus">
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
  </div>
  
  );
};

export default Header;