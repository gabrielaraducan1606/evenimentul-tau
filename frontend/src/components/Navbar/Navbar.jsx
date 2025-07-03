import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './Navbar.module.css';
import { FaUser } from 'react-icons/fa';

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

              {/* SERVICII cu subcategorii */}
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

          {/* Nivel 3: Sub-opțiuni */}
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


              {/* MENIURI SIMPLE */}
              {label !== 'Servicii' && activeMain === label && Array.isArray(value) && (
                <div className={styles.dropdownWrapper}>
                  {value.map((item, i) => (
                    <Link key={i} to={item.link} className={styles.dropdownItem}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link to="/creeaza-cont" className={styles.accountButton}>
          <FaUser className={styles.accountIcon} />
          Creare cont
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
