import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import '../css/dashboard.css'

function Classes() {
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedDay, setSelectedDay] = useState('all')
  const [bookModalOpen, setBookModalOpen] = useState(false)
  const [selectedClass, setSelectedClass] = useState(null)
  const navigate = useNavigate()

  const classes = [
    { id: 1, name: 'Yoga Flow', trainer: 'Sarah Williams', day: 'monday', time: '9:00 AM', duration: '60 min', capacity: 20, enrolled: 15 },
    { id: 2, name: 'HIIT Training', trainer: 'David Chen', day: 'monday', time: '6:00 PM', duration: '45 min', capacity: 15, enrolled: 12 },
    { id: 3, name: 'Strength Training', trainer: 'Mike Johnson', day: 'tuesday', time: '7:00 AM', duration: '90 min', capacity: 25, enrolled: 20 },
    { id: 4, name: 'Pilates', trainer: 'Sarah Williams', day: 'wednesday', time: '10:00 AM', duration: '60 min', capacity: 20, enrolled: 18 },
    { id: 5, name: 'CrossFit', trainer: 'David Chen', day: 'thursday', time: '6:00 PM', duration: '60 min', capacity: 15, enrolled: 14 },
    { id: 6, name: 'Spinning', trainer: 'Mike Johnson', day: 'friday', time: '8:00 AM', duration: '45 min', capacity: 20, enrolled: 16 },
    { id: 7, name: 'Zumba', trainer: 'Sarah Williams', day: 'saturday', time: '10:00 AM', duration: '60 min', capacity: 25, enrolled: 22 },
    { id: 8, name: 'Boot Camp', trainer: 'David Chen', day: 'sunday', time: '9:00 AM', duration: '90 min', capacity: 20, enrolled: 15 },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const toggleTheme = () => alert('Theme toggle would be implemented here')
  const toggleNotifications = () => alert('Notifications would be implemented here')

  const selectDay = (day) => setSelectedDay(day)

  const openBookModal = (cls) => {
    setSelectedClass(cls)
    setBookModalOpen(true)
  }

  const closeBookModal = () => {
    setBookModalOpen(false)
    setSelectedClass(null)
  }

  const handleBookClass = () => {
    alert(`Booked ${selectedClass.name} class`)
    closeBookModal()
  }

  const filteredClasses = selectedDay === 'all' ? classes : classes.filter(c => c.day === selectedDay)

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader">
          <div className="loader-bar"></div>
          <div className="loader-bar"></div>
          <div className="loader-bar"></div>
        </div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <Sidebar />
        
        <main className="main-content" style={{ marginLeft: sidebarOpen ? '280px' : '0' }}>
          <div className="dashboard-header">
            <h1>Class Schedule</h1>
            <div className="header-actions">
              <button className="notification-btn" onClick={toggleNotifications}>
                <i className="fas fa-bell"></i>
                <span className="notification-badge">4</span>
              </button>
              <button className="theme-toggle" onClick={toggleTheme}>
                <i className="fas fa-moon"></i>
              </button>
              <button className="notification-btn" onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>

          <div className="card" style={{ marginBottom: '30px' }}>
            <div className="card-header">
              <h3 className="card-title">Select Week</h3>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button className={`btn ${selectedDay === 'all' ? 'btn-primary' : 'btn-outline'}`} onClick={() => selectDay('all')}>All Days</button>
              <button className={`btn ${selectedDay === 'monday' ? 'btn-primary' : 'btn-outline'}`} onClick={() => selectDay('monday')}>Monday</button>
              <button className={`btn ${selectedDay === 'tuesday' ? 'btn-primary' : 'btn-outline'}`} onClick={() => selectDay('tuesday')}>Tuesday</button>
              <button className={`btn ${selectedDay === 'wednesday' ? 'btn-primary' : 'btn-outline'}`} onClick={() => selectDay('wednesday')}>Wednesday</button>
              <button className={`btn ${selectedDay === 'thursday' ? 'btn-primary' : 'btn-outline'}`} onClick={() => selectDay('thursday')}>Thursday</button>
              <button className={`btn ${selectedDay === 'friday' ? 'btn-primary' : 'btn-outline'}`} onClick={() => selectDay('friday')}>Friday</button>
              <button className={`btn ${selectedDay === 'saturday' ? 'btn-primary' : 'btn-outline'}`} onClick={() => selectDay('saturday')}>Saturday</button>
              <button className={`btn ${selectedDay === 'sunday' ? 'btn-primary' : 'btn-outline'}`} onClick={() => selectDay('sunday')}>Sunday</button>
            </div>
          </div>

          <div className="table-container">
            <div className="table-header">
              <h3 className="table-title">Available Classes</h3>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Trainer</th>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Duration</th>
                  <th>Capacity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredClasses.map(cls => (
                  <tr key={cls.id}>
                    <td>{cls.name}</td>
                    <td>{cls.trainer}</td>
                    <td style={{ textTransform: 'capitalize' }}>{cls.day}</td>
                    <td>{cls.time}</td>
                    <td>{cls.duration}</td>
                    <td>{cls.enrolled}/{cls.capacity}</td>
                    <td>
                      <button className="btn btn-primary" style={{ padding: '8px 15px', fontSize: '14px' }} onClick={() => openBookModal(cls)}>
                        Book
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <div className={`modal ${bookModalOpen ? 'active' : ''}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h3>Book Class</h3>
            <button className="modal-close" onClick={closeBookModal}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          {selectedClass && (
            <div>
              <p style={{ marginBottom: '10px' }}><strong>Class:</strong> {selectedClass.name}</p>
              <p style={{ marginBottom: '10px' }}><strong>Trainer:</strong> {selectedClass.trainer}</p>
              <p style={{ marginBottom: '10px' }}><strong>Time:</strong> {selectedClass.time}</p>
              <p style={{ marginBottom: '20px' }}><strong>Duration:</strong> {selectedClass.duration}</p>
              <button className="btn btn-primary btn-block" onClick={handleBookClass}>Confirm Booking</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Classes
