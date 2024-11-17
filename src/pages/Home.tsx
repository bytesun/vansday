import styles from '../styles/Home.module.css'
import Calendar from '../components/Calendar/Calendar'
import { CalendarEvent } from '../types/Event'
import Navbar from '../components/Navbar/Navbar'
export default function Home() {
  const sampleEvents: CalendarEvent[] = [
    {
      id: '1',
      title: 'Team Meeting',
      date: new Date('2024-02-15T10:00:00'),
      color: '#4285f4',
      description: 'Weekly team sync to discuss project progress'
    },
    {
      id: '2',
      title: 'Product Launch',
      date: new Date('2024-02-16T14:30:00'),
      color: '#0f9d58',
      description: 'New feature release and demo'
    },
    {
      id: '3',
      title: 'Client Workshop',
      date: new Date('2024-02-20T09:00:00'),
      color: '#db4437',
      description: 'Interactive session with key stakeholders'
    },
    {
      id: '4',
      title: 'Tech Review',
      date: new Date(),
      color: '#f4b400',
      description: 'Architecture and code review session'
    }
  ]
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Calendar events={sampleEvents} />
      </div>
    </>
  )
}