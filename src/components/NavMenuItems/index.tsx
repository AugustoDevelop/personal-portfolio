import { useState, useEffect, useRef, FC } from 'react';
import { Link } from 'react-router-dom';
import i18next from 'i18next';

import Dropdown from '../NavDropdown';
import { NavItems } from './style';

export interface SubMenuItem {
  type: string;
  title: string;
  value: string;
}

export interface MenuItem {
  title: string;
  url?: string;
  submenu?: SubMenuItem[];
}

interface MenuItemsProps {
  items: MenuItem;
  depthLevel: number;
  onClick?: (value: string) => void;
  toggleTheme(themeValue: string): void;
}

const MenuItems: FC<MenuItemsProps> = ({ items, depthLevel, onClick, toggleTheme }) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  let ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (dropdown && ref.current && !ref.current.contains(event.target as Node)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };
  
  const handleMenuItemClick = (value: any) => {
    if (value.type === 'language') {
      i18next.changeLanguage(value.value);
    } else if (value.type === 'theme') {
      console.log("so faltao tu", value.value);
      toggleTheme(value.value);
    }

    onClick && onClick(value);
    closeDropdown();
  };

  return (
    <NavItems>
      <li
        className="menu-items"
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={closeDropdown}
      >
        {items.url && items.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? 'true' : 'false'}
              onClick={() => setDropdown((prev) => !prev)}
            >
              {window.innerWidth < 960 && depthLevel === 0 ? (
                items.title
              ) : (
                <Link to={items.url} onClick={() => {
                  console.log("on que sera qu etme aqui", items.submenu);
                }}>{items.title}</Link>
              )}

              {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel > 0 && window.innerWidth > 960 ? (
                <span>&raquo;</span>
              ) : (
                <span className="arrow" />
              )}
            </button>
           
            <Dropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
              onClick={handleMenuItemClick}
              toggleTheme={toggleTheme}
            />
          </>
        ) : !items.url && items.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? 'true' : 'false'}
              onClick={() => setDropdown((prev) => !prev)}
            >
              {items.title}{' '}
              {depthLevel > 0 ? (
                <span>&raquo;</span>
              ) : (
                <span className="arrow" />
              )}
            </button>
            <Dropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
              onClick={handleMenuItemClick}
              toggleTheme={toggleTheme}
            />
          </>
        ) : (
          <Link to="/" onClick={() => {
            handleMenuItemClick(items)
          }}>{items.title}</Link>
        )}
      </li>
    </NavItems>
  );
};

export default MenuItems;