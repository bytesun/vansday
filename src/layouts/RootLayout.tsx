import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/RootLayout.module.css'

export default function RootLayout() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}
