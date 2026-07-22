import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import '../css/dashboard.css'

function Attendance() {
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [memberId, setMemberId] = useState('')
  const [attendanceHistory, setAttendanceHistory] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const dummyAttendance = [
      { id: 1, date: '2024-06-20', checkIn: '09:00 AM', checkOut: '11:30 AM', duration: '2h 30m' },
      { id: 2, date: '2024-06-18', checkIn: '08:30 AM', checkOut: '10:45 AM', duration: '2h 15m' },
      { id: 3, date: '2024-06-15', checkIn: '07:00 AM', checkOut: '09:00 AM', duration: '2h 00m' },
      { id: 4, date: '2024-06-13', checkIn: '06:30 PM', checkOut: '08:15 PM', duration: '1h 45m' },
      { id: 5, date: '2024-06-10', checkIn: '09:15 AM', checkOut: '11:00 AM', duration: '1h 45m' },
    ]
    setAttendanceHistory(dummyAttendance)
    
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const toggleTheme = () => alert('Theme toggle would be implemented here')
  const toggleNotifications = () => alert('Notifications would be implemented here')

  const checkIn = () => {
    if (memberId) {
      alert(`Checked in member ID: ${memberId}`)
      setMemberId('')
    } else {
      alert('Please enter a member ID')
    }
  }

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
            <h1>Attendance Tracking</h1>
            <div className="header-actions">
              <button className="notification-btn" onClick={toggleNotifications}>
                <i className="fas fa-bell"></i>
                <span className="notification-badge">2</span>
              </button>
              <button className="theme-toggle" onClick={toggleTheme}>
                <i className="fas fa-moon"></i>
              </button>
              <button className="notification-btn" onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>

          <div className="card" style={{ marginBottom: '30px', textAlign: 'center' }}>
            <div className="card-header" style={{ justifyContent: 'center' }}>
              <h3 className="card-title">Quick Check-in</h3>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <i className="fas fa-qrcode" style={{ fontSize: '64px', color: 'var(--primary-color)' }}></i>
            </div>
            <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>Scan your QR code or enter your member ID to check in</p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', maxWidth: '400px', margin: '0 auto' }}>
              <input 
                type="text" 
                placeholder="Enter Member ID" 
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
                style={{ flex: 1, padding: '15px', border: '2px solid var(--border-color)', borderRadius: '10px', background: 'var(--glass-bg)', color: 'var(--text-light)' }}
              />
              <button className="btn btn-primary" onClick={checkIn}>Check In</button>
            </div>
          </div>

          <div className="dashboard-cards">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Today's Check-ins</h3>
                <div className="card-icon"><i className="fas fa-user-check"></i></div>
              </div>
              <div className="card-value">45</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>+15% from yesterday</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">This Week</h3>
                <div className="card-icon"><i className="fas fa-calendar-week"></i></div>
              </div>
              <div className="card-value">287</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>+8% from last week</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">This Month</h3>
                <div className="card-icon"><i className="fas fa-calendar-alt"></i></div>
              </div>
              <div className="card-value">1,245</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>+12% from last month</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Avg Duration</h3>
                <div className="card-icon"><i className="fas fa-clock"></i></div>
              </div>
              <div className="card-value">1h 45m</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>+5 min average</span>
              </div>
            </div>
          </div>

          <div className="table-container">
            <div className="table-header">
              <h3 className="table-title">Attendance History</h3>
              <div className="table-actions">
                <select style={{ padding: '10px 15px', border: '1px solid var(--border-color)', borderRadius: '20px', background: 'var(--glass-bg)', color: 'var(--text-light)' }}>
                  <option value="">All Time</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                </select>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {attendanceHistory.map(record => (
                  <tr key={record.id}>
                    <td>{record.date}</td>
                    <td>{record.checkIn}</td>
                    <td>{record.checkOut}</td>
                    <td>{record.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card" style={{ marginTop: '30px' }}>
            <div className="card-header">
              <h3 className="card-title">Monthly Progress</h3>
            </div>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <p style={{ color: 'var(--text-gray)', marginBottom: '10px' }}>June 2024</p>
                <div style={{ height: '20px', background: 'var(--glass-bg)', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '85%', background: 'var(--primary-color)', borderRadius: '10px' }}></div>
                </div>
                <p style={{ color: 'var(--text-light)', marginTop: '5px' }}>85% attendance</p>
              </div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <p style={{ color: 'var(--text-gray)', marginBottom: '10px' }}>May 2024</p>
                <div style={{ height: '20px', background: 'var(--glass-bg)', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '78%', background: 'var(--primary-color)', borderRadius: '10px' }}></div>
                </div>
                <p style={{ color: 'var(--text-light)', marginTop: '5px' }}>78% attendance</p>
              </div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <p style={{ color: 'var(--text-gray)', marginBottom: '10px' }}>April 2024</p>
                <div style={{ height: '20px', background: 'var(--glass-bg)', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '72%', background: 'var(--primary-color)', borderRadius: '10px' }}></div>
                </div>
                <p style={{ color: 'var(--text-light)', marginTop: '5px' }}>72% attendance</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Attendance
