import React, { useContext } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

import { ThemeContext } from 'styled-components';
import { Container } from './style';
import { Link } from 'react-scroll'
import { FaSun, FaMoon } from 'react-icons/fa';

import Logo from '../../assets/logo.png'

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  const menuItems = [
    {
      id: 1,
      title: "home"
    },
    {
      id: 2,
      title: "home"
    },
    {
      id: 3,
      title: "home"
    },
    {
      id: 4,
      title: "home"
    },    
  ]

  return (
    <Container>
      <Link to="/"><img id="logo-image" alt="Augusto Develop" src={Logo} style={{ height: "60px" }} /></Link>
      <div>
        <ul data-menu="list" id="menu">
          {menuItems.map((menu) => (
            <li key={menu.id} >
              <Link 
                to={menu.title} 
                smooth={true} 
                offset={-450} 
                duration={500} 
                delay={100}>
                  {menu.title}
              </Link>
            </li>
          ))}
        </ul>

        <Toggle
          checked={title === 'dark'}
          icons={{
            checked: <FaMoon />,
            unchecked: <FaSun />,
          }}
          onChange={toggleTheme}
          className="custom-toggle"
        />

      </div>
    </Container>
  );
};

export default Header;