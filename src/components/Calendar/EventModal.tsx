import { CalendarEvent } from '../../types/Event'
import styles from '../../styles/EventModal.module.css'

interface EventModalProps {
  event: CalendarEvent
  onClose: () => void
}

export default function EventModal({ event, onClose }: EventModalProps) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>{event.title}</h2>
        <p className={styles.date}>
          {new Date(event.date).toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        {event.description && (
          <p className={styles.description}>{event.description}</p>
        )}
      </div>
    </div>
  )
}