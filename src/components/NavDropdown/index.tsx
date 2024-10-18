import { FC } from 'react';
import NavMenuItems from '../NavMenuItems';
import { NavDrop } from './style';
import { NavDropdownProps } from '../../types/NavDropdownProps';

const NavDropdown: FC<NavDropdownProps> = ({ submenus, dropdown, depthLevel, onClick, toggleTheme }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';

  const handleSubmenuClick = (value: string) => {
    onClick && onClick(value);
  };

  return (
    <NavDrop>
      <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`} >
        {submenus.map((submenu, index) => (
          <NavMenuItems
            items={submenu}
            key={index}
            depthLevel={depthLevel}
            onClick={handleSubmenuClick}
            toggleTheme={toggleTheme}
          />
        ))}
      </ul>
    </NavDrop>
  );
};

export default NavDropdown;
