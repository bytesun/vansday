import { CalendarEvent } from '../../types/Event'
import styles from '../../styles/AgendaView.module.css'

interface AgendaViewProps {
  currentDate: Date
  events?: CalendarEvent[]
}

export default function AgendaView({  events = [] }: AgendaViewProps) {
  const sortedEvents = [...events].sort((a, b) => a.date.getTime() - b.date.getTime())
  
  return (
    <div className={styles.agendaView}>
      <div className={styles.timeline}>
        {sortedEvents.map((event) => (
          <div key={event.id} className={styles.eventItem}>
            <div className={styles.dateColumn}>
              {event.date.toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric'
              })}
            </div>
            <div 
              className={styles.eventContent}
              style={{ borderLeft: `4px solid ${event.color || '#4285f4'}` }}
            >
              <div className={styles.eventTime}>
                {event.date.toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit'
                })}
              </div>
              <div className={styles.eventTitle}>{event.title}</div>
              {event.description && (
                <div className={styles.eventDescription}>{event.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
