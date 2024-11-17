import { CalendarEvent } from '../../types/CalendarTypes'
import styles from '../../styles/WeekView.module.css'

interface WeekViewProps {
  currentDate: Date
  events?: CalendarEvent[]
}

export default function WeekView({ currentDate, events = [] }: WeekViewProps) {
  const getWeekDays = () => {
    const days = []
    const startOfWeek = new Date(currentDate)
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay())
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek)
      day.setDate(startOfWeek.getDate() + i)
      days.push(day)
    }
    return days
  }

  const weekDays = getWeekDays()

  return (
    <div className={styles.weekView}>
      <div className={styles.timeColumn}>
        {Array.from({ length: 24 }, (_, i) => (
          <div key={i} className={styles.timeSlot}>
            {`${i}:00`}
          </div>
        ))}
      </div>
      <div className={styles.daysGrid}>
        {weekDays.map((day, index) => (
          <div key={index} className={styles.dayColumn}>
            <div className={styles.dayHeader}>
              {day.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' })}
            </div>
            {Array.from({ length: 24 }, (_, hour) => (
              <div key={hour} className={styles.hourSlot} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
