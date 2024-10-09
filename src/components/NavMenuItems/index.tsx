import { useState, useEffect, useRef, FC } from 'react';
import { Link } from 'react-router-dom';
import i18next from 'i18next';

import Dropdown from '../NavDropdown';
import { NavItems } from './style';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  useEffect(() => {
    const savedLanguage = sessionStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      i18next.changeLanguage(savedLanguage);
    }

    const handler = (event: MouseEvent | TouchEvent) => {
      if (dropdown && ref.current && !ref.current.contains(event.target as Node)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
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
      i18next.changeLanguage(value.value).then(() => {  
        sessionStorage.setItem('selectedLanguage', value.value);
        window.location.reload()
      })

    } else if (value.type === 'theme') {
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
                t(items.title)
              ) : (
                <Link to={items.url} >{t(items.title)}</Link>
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
              {t(items.title)}{' '}
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
          <Link to={items.url} onClick={() => {
            handleMenuItemClick(items)
          }}>{t(items.title)}</Link>
        )}
      </li>
    </NavItems>
  );
};

export default MenuItems;