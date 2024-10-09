import { FC } from 'react';
import NavMenuItems, { MenuItem } from '../NavMenuItems';
import { NavDrop } from './style';

interface NavDropdownProps {
  submenus: MenuItem[];
  dropdown: boolean;
  depthLevel: number;
  onClick?: (value: string) => void;
  toggleTheme(themeValue: string): void;
}

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
