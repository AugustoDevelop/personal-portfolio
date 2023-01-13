import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Container } from './style';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png'

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Link to="/"><img alt="Augusto Develop" src={Logo} style={{height: "60px"}} /></Link>
      <div>
        <ul data-menu="list" id="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Experience">Experience</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
        </ul>

        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor={colors.secundary}
        />
        
      </div>
    </Container>
  );
};

export default Header;