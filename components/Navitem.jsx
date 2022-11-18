import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href} className={`${styles.nav__item} ${active ? styles.active : ''}`}>
      {text}
    </Link>
  )
}

export default NavItem
