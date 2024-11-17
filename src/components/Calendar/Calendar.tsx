import { useState, useEffect } from 'react'
import styles from '../../styles/Calendar.module.css'
import { CalendarEvent } from '../../types/Event'
import EventModal from './EventModal'
import WeekView from './WeekView';
import AgendaView from './AgendaView';
import { FiMenu } from 'react-icons/fi'


interface CalendarProps {
  events?: CalendarEvent[]
  onEventClick?: (event: CalendarEvent) => void
  onDateClick?: (date: Date) => void
}

export default function Calendar({ events = [], onEventClick, onDateClick }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
  const [view, setView] = useState<'month' | 'week' | 'agenda'>('month')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setView('agenda')
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + direction)))
  }

  const getEventsForDate = (day: number) => {
    return events.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate.getDate() === day &&
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getFullYear() === currentDate.getFullYear()
    })
  }

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    )
    onDateClick?.(clickedDate)
  }

  const handleEventClick = (event: CalendarEvent, e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedEvent(event)
    onEventClick?.(event)
  }
  const isToday = (day: number): boolean => {
    const today = new Date()
    return day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
  }

  const navigateToToday = () => {
    setCurrentDate(new Date())
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button onClick={navigateToToday}>Today</button>
        <div className={styles.mobileMenu}>
          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu />
          </button>
          {isMenuOpen && (
            <div className={styles.dropdown}>
              
              <button onClick={() => {
                setView('month')
                setIsMenuOpen(false)
              }}>Month</button>
              <button onClick={() => {
                setView('week')
                setIsMenuOpen(false)
              }}>Week</button>
              <button onClick={() => {
                setView('agenda')
                setIsMenuOpen(false)
              }}>Agenda</button>
            </div>
          )}
        </div>

        <div className={styles.navigationGroup}>
          <button onClick={() => navigateMonth(-1)}>&lt;</button>
          <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
          <button onClick={() => navigateMonth(1)}>&gt;</button>
        </div>
        <div className={styles.viewGroup}>
          <button
            className={`${styles.viewButton} ${view === 'month' ? styles.active : ''}`}
            onClick={() => setView('month')}
          >
            Month
          </button>
          <button
            className={`${styles.viewButton} ${view === 'week' ? styles.active : ''}`}
            onClick={() => setView('week')}
          >
            Week
          </button>
          <button
            className={`${styles.viewButton} ${view === 'agenda' ? styles.active : ''}`}
            onClick={() => setView('agenda')}
          >
            Agenda
          </button>
        </div>
      </div>
      {view === 'month' ? (
        <div className={styles.monthView}>
          <div className={styles.weekdays}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day}>{day}</div>
            ))}
          </div>

          <div className={styles.days}>
            {[...Array(firstDayOfMonth)].map((_, index) => (
              <div key={`empty-${index}`} className={styles.emptyDay}></div>
            ))}
            {[...Array(daysInMonth)].map((_, index) => {
              const day = index + 1
              const dayEvents = getEventsForDate(day)

              return (
                <div
                  key={day}
                  className={styles.day}
                  onClick={() => handleDateClick(day)}
                >
                  <span className={isToday(day) ? styles.today : styles.dayNumber}>
                    {day}
                  </span>
                  <div className={styles.eventContainer}>
                    {dayEvents.map(event => (
                      <div
                        key={event.id}
                        className={styles.event}
                        style={{ backgroundColor: event.color || '#4285f4' }}
                        onClick={(e) => handleEventClick(event, e)}
                        title={event.title}
                      >
                        {event.title}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : view === 'week' ? (
        <WeekView currentDate={currentDate} events={events} />
      ) : (
        <AgendaView currentDate={currentDate} events={events} />
      )}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  )
}

