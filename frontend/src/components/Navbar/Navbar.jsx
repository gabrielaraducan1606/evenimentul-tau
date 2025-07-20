import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './Navbar.module.css';
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
  FaPowerOff,
  FaKey
} from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';
import { useAppContext } from '../Context/AppContext';

const menuData = {
  Servicii: {
    Nuntă: [
      { label: 'Invitații personalizate', link: '/nunta/invitatii' },
      { label: 'Invitații tip site', link: '/nunta/site-invitatii' },
      { label: 'Mărturii', link: '/nunta/marturii' },
      { label: 'Tăvițe', link: '/nunta/tavite' },
      { label: 'Decor nuntă', link: '/nunta/decor' }
    ],
    Botez: [
      { label: 'Invitații Botez', link: '/botez/invitatii' },
      { label: 'Trusouri', link: '/botez/trusouri' },
      { label: 'Tăviță moț', link: '/botez/tavita' },
      { label: 'Set băiță', link: '/botez/baita' },
      { label: 'Mărturii botez', link: '/botez/marturii' },
      { label: 'Decor bebe', link: '/botez/decor' }
    ],
    Planificare: [
      { label: '🪑 Mese invitați', link: '/creeaza-cont', locked: true }
    ]
  },
  Portofoliu: [
    { label: 'Nuntă Andreea & Vlad', link: '/portofoliu/nunta' },
    { label: 'Botez Luca', link: '/portofoliu/botez' }
  ],
  Recenzii: [
    { label: '★★★★★ de la clienți fericiți', link: '/recenzii' },
    { label: 'Feedback real', link: '/recenzii' }
  ],
  Contact: [
    { label: 'contact@evenimentultau.ro', link: '/contact' },
    { label: '0722 123 456', link: '/contact' }
  ]
};

const Navbar = () => {
  const [activeMain, setActiveMain] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const { favorites, cart } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
      try {
        const decoded = jwtDecode(token);
        setUserEmail(decoded.email || '');
      } catch (err) {
        console.error('Eroare la decodarea tokenului:', err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerBar}>
        <div className={styles.logoHeader}>
          <Logo />
        </div>

        <nav className={styles.nav}>
          {Object.entries(menuData).map(([label, value]) => (
            <div
              key={label}
              className={styles.navItem}
              onMouseEnter={() => setActiveMain(label)}
              onMouseLeave={() => {
                setActiveMain(null);
                setActiveSub(null);
              }}
            >
              <span className={styles.anav}>{label}</span>

              {label === 'Servicii' && activeMain === 'Servicii' && (
                <div
                  className={styles.dropdownWrapper}
                  onMouseEnter={() => setActiveMain('Servicii')}
                  onMouseLeave={() => {
                    setActiveMain(null);
                    setActiveSub(null);
                  }}
                >
                  <div className={styles.dropdownColumns}>
                    {Object.entries(value).map(([sub, items]) => (
                      <div
                        key={sub}
                        className={styles.dropdownItem}
                        onMouseEnter={() => setActiveSub(sub)}
                      >
                        <div className={styles.dropdownTitle}>{sub}</div>
                        {activeSub === sub && (
                          <div className={styles.subDropdown}>
                            {items.map((item, i) => (
                              <Link
                                to={item.link}
                                key={i}
                                className={styles.dropdownSubItem}
                              >
                                {item.label} {item.locked && '🔒'}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {label !== 'Servicii' &&
                activeMain === label &&
                Array.isArray(value) && (
                  <div className={styles.dropdownWrapper}>
                    {value.map((item, i) => (
                      <Link
                        key={i}
                        to={item.link}
                        className={styles.dropdownItem}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </nav>

        <div className={styles.iconGroup}>
          <Link to="/favorite" className={styles.iconButton}>
            <FaHeart />
            {favorites.length > 0 && (
              <span className={styles.badge}>{favorites.length}</span>
            )}
          </Link>

          <Link to="/cos" className={styles.iconButton}>
            <FaShoppingCart />
            {cart.reduce((acc, item) => acc + item.quantity, 0) > 0 && (
  <span className={styles.badge}>
    {cart.reduce((acc, item) => acc + item.quantity, 0)}
  </span>
)}
          </Link>

          {isAuthenticated ? (
            <div className={styles.accountMenu}>
              <button
                className={styles.menuToggle}
                onClick={() =>
                  setActiveMain(activeMain === 'account' ? null : 'account')
                }
              >
                ☰
              </button>
              {activeMain === 'account' && (
                <div className={styles.dropdownMenu}>
                  <div className={styles.dropdownItem}>
                    <FaUserCircle className={styles.dropdownIcon} />
                    <div>
                      <strong>Profilul meu</strong>
                      <div className={styles.emailText}>{userEmail}</div>
                    </div>
                  </div>
                  <Link to="/schimba-parola" className={styles.dropdownItem}>
                    <FaKey className={styles.dropdownIcon} />
                    Schimbă parola
                  </Link>
                  <button
                    onClick={handleLogout}
                    className={styles.dropdownItem}
                  >
                    <FaPowerOff className={styles.dropdownIcon} />
                    Deconectare
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/creeaza-cont" className={styles.accountButton}>
              <FaUser className={styles.accountIcon} />
              Creare cont
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
