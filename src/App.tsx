import './App.css'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Calendar from './components/Calendar/Calendar'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Calendar />} />
        <Route path="calendars" element={<Calendar />} />
        <Route path="events" element={<div>Events Page</div>} />
        <Route path="todos" element={<div>Todos Page</div>} />
        <Route path="notes" element={<div>Notes Page</div>} />
        <Route path="login" element={<div>Login Page</div>} />
      </Route>
    </Routes>
  )
}