import { NavLink } from 'react-router-dom'
import styles from '../../styles/Navbar.module.css'
import { FiCalendar, FiList, FiCheckSquare, FiFileText, FiUser } from 'react-icons/fi'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        IcEvent
      </div>
      
      <div className={styles.menuItems}>
        <NavLink 
          to="/calendars" 
          className={({ isActive }) => 
            `${styles.menuItem} ${isActive ? styles.active : ''}`
          }
        >
          <FiCalendar />
          <span>Calendars</span>
        </NavLink>
        
        <NavLink 
          to="/events" 
          className={({ isActive }) => 
            `${styles.menuItem} ${isActive ? styles.active : ''}`
          }
        >
          <FiList />
          <span>Events</span>
        </NavLink>
        
        <NavLink 
          to="/todos" 
          className={({ isActive }) => 
            `${styles.menuItem} ${isActive ? styles.active : ''}`
          }
        >
          <FiCheckSquare />
          <span>Todos</span>
        </NavLink>
        
        <NavLink 
          to="/notes" 
          className={({ isActive }) => 
            `${styles.menuItem} ${isActive ? styles.active : ''}`
          }
        >
          <FiFileText />
          <span>Notes</span>
        </NavLink>
      </div>
      
      <NavLink 
        to="/login" 
        className={({ isActive }) => 
          `${styles.loginButton} ${isActive ? styles.active : ''}`
        }
      >
        <FiUser />
        <span>Login</span>
      </NavLink>
    </nav>
  )
}