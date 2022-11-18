import React, { useState } from 'react'
import NavItem from './Navitem'
import styles from '../styles/Navbar.module.css'

const MENU_LIST = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/about' },
  { text: 'Settings', href: '/settings' },
]
const Navbar = () => {
  const [activeIdx, setActiveIdx] = useState(-1)

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.nav__items__container}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx)
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
