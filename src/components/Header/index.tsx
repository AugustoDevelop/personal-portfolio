import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Container } from './style';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <p><a href="#home">&lsaquo;AD/&rsaquo;</a></p>
      <div>
        <ul data-menu="list" id="menu">
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#sobre">
            <li>Sobre</li>
          </a>
          <a href="#experiencia">
            <li>Experience</li>
          </a>
          <a href="#projetos">
            <li>Projetos</li>
          </a>
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