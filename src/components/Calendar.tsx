import { useState } from 'react'
import styles from '../styles/Calendar.module.css'

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate()

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay()

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + direction)))
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button onClick={() => navigateMonth(-1)}></button>
        <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
        <button onClick={() => navigateMonth(1)}></button>
      </div>
      
      <div className={styles.weekdays}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>
      
      <div className={styles.days}>
        {[...Array(firstDayOfMonth)].map((_, index) => (
          <div key={`empty-${index}`} className={styles.emptyDay}></div>
        ))}
        {[...Array(daysInMonth)].map((_, index) => (
          <div key={index + 1} className={styles.day}>
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  )
}
