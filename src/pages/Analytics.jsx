import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import '../css/dashboard.css'

function Analytics() {
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedPeriod, setSelectedPeriod] = useState('month')
  const navigate = useNavigate()

  useEffect(() => {
    const userType = localStorage.getItem('userType')
    if (userType !== 'admin') {
      navigate('/dashboard')
      return
    }
    
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [navigate])

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const toggleTheme = () => alert('Theme toggle would be implemented here')
  const toggleNotifications = () => alert('Notifications would be implemented here')

  const selectPeriod = (period) => setSelectedPeriod(period)

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
            <h1>Analytics Dashboard</h1>
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

          <div className="card" style={{ marginBottom: '30px' }}>
            <div className="card-header">
              <h3 className="card-title">Time Period</h3>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button className={`btn ${selectedPeriod === 'week' ? 'btn-primary' : 'btn-outline'}`} onClick={() => selectPeriod('week')}>This Week</button>
              <button className={`btn ${selectedPeriod === 'month' ? 'btn-primary' : 'btn-outline'}`} onClick={() => selectPeriod('month')}>This Month</button>
              <button className={`btn ${selectedPeriod === 'quarter' ? 'btn-primary' : 'btn-outline'}`} onClick={() => selectPeriod('quarter')}>This Quarter</button>
              <button className={`btn ${selectedPeriod === 'year' ? 'btn-primary' : 'btn-outline'}`} onClick={() => selectPeriod('year')}>This Year</button>
            </div>
          </div>

          <div className="dashboard-cards">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Total Revenue</h3>
                <div className="card-icon"><i className="fas fa-dollar-sign"></i></div>
              </div>
              <div className="card-value">$45,230</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>+12% from last period</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">New Members</h3>
                <div className="card-icon"><i className="fas fa-user-plus"></i></div>
              </div>
              <div className="card-value">127</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>+15% growth</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Retention Rate</h3>
                <div className="card-icon"><i className="fas fa-percentage"></i></div>
              </div>
              <div className="card-value">85%</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>+5% improvement</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Avg Revenue/Member</h3>
                <div className="card-icon"><i className="fas fa-chart-line"></i></div>
              </div>
              <div className="card-value">$89</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>+3% increase</span>
              </div>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="chart-container">
              <div className="chart-header">
                <h3 className="chart-title">Revenue Trend</h3>
              </div>
              <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-gray)' }}>
                <p>Revenue chart would be rendered here</p>
              </div>
            </div>
            <div className="chart-container">
              <div className="chart-header">
                <h3 className="chart-title">Member Growth</h3>
              </div>
              <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-gray)' }}>
                <p>Member growth chart would be rendered here</p>
              </div>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="chart-container">
              <div className="chart-header">
                <h3 className="chart-title">Attendance Overview</h3>
              </div>
              <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-gray)' }}>
                <p>Attendance chart would be rendered here</p>
              </div>
            </div>
            <div className="chart-container">
              <div className="chart-header">
                <h3 className="chart-title">Class Popularity</h3>
              </div>
              <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-gray)' }}>
                <p>Class popularity chart would be rendered here</p>
              </div>
            </div>
          </div>

          <div className="table-container">
            <div className="table-header">
              <h3 className="table-title">Class Statistics</h3>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Total Sessions</th>
                  <th>Avg Attendance</th>
                  <th>Revenue</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Yoga Flow</td>
                  <td>245</td>
                  <td>18.5</td>
                  <td>$4,900</td>
                  <td>4.8</td>
                </tr>
                <tr>
                  <td>HIIT Training</td>
                  <td>320</td>
                  <td>14.2</td>
                  <td>$6,400</td>
                  <td>4.9</td>
                </tr>
                <tr>
                  <td>Strength Training</td>
                  <td>280</td>
                  <td>16.8</td>
                  <td>$5,600</td>
                  <td>4.7</td>
                </tr>
                <tr>
                  <td>Pilates</td>
                  <td>195</td>
                  <td>15.3</td>
                  <td>$3,900</td>
                  <td>4.6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Analytics
