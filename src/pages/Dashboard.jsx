import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import '../css/dashboard.css'

function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [userType, setUserType] = useState('member')
  const navigate = useNavigate()

  useEffect(() => {
    const type = localStorage.getItem('userType')
    if (!type) {
      navigate('/login')
      return
    }
    setUserType(type)
    
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [navigate])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen)
  }

  const toggleTheme = () => {
    alert('Theme toggle would be implemented here')
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

  const dashboardCards = userType === 'admin' ? [
    { title: 'Total Members', value: '5,234', icon: 'fa-users', change: '+12%', positive: true },
    { title: 'Active Members', value: '4,450', icon: 'fa-user-check', change: '85% active', positive: true },
    { title: 'New This Month', value: '127', icon: 'fa-user-plus', change: '+15%', positive: true },
    { title: 'Revenue', value: '$45,230', icon: 'fa-dollar-sign', change: '+8%', positive: true },
  ] : [
    { title: 'Workouts This Week', value: '5', icon: 'fa-dumbbell', change: '+2 from last week', positive: true },
    { title: 'Calories Burned', value: '3,450', icon: 'fa-fire', change: '+15%', positive: true },
    { title: 'Hours Trained', value: '12.5', icon: 'fa-clock', change: '+1.5 hrs', positive: true },
    { title: 'Goals Achieved', value: '3/5', icon: 'fa-trophy', change: '60% complete', positive: true },
  ]

  const recentActivity = [
    { icon: 'fa-dumbbell', title: 'Completed workout', time: '2 hours ago' },
    { icon: 'fa-calendar-check', title: 'Booked yoga class', time: '5 hours ago' },
    { icon: 'fa-utensils', title: 'Logged nutrition', time: '1 day ago' },
    { icon: 'fa-weight', title: 'Updated weight', time: '2 days ago' },
  ]

  const upcomingClasses = [
    { name: 'Yoga Flow', trainer: 'Sarah Williams', time: 'Mon, 9:00 AM', duration: '60 min', status: 'Confirmed' },
    { name: 'HIIT Training', trainer: 'David Chen', time: 'Wed, 6:00 PM', duration: '45 min', status: 'Confirmed' },
    { name: 'Strength Training', trainer: 'Mike Johnson', time: 'Fri, 7:00 AM', duration: '90 min', status: 'Pending' },
  ]

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <Sidebar />
        
        <main className="main-content" style={{ marginLeft: sidebarOpen ? '280px' : '0' }}>
          <div className="dashboard-header">
            <h1>Welcome Back!</h1>
            <div className="header-actions">
              <button className="notification-btn" onClick={toggleNotifications}>
                <i className="fas fa-bell"></i>
                <span className="notification-badge">3</span>
              </button>
              <button className="theme-toggle" onClick={toggleTheme}>
                <i className="fas fa-moon"></i>
              </button>
              <button className="notification-btn" onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>

          <div className="dashboard-cards">
            {dashboardCards.map((card, index) => (
              <div className="card" key={index}>
                <div className="card-header">
                  <h3 className="card-title">{card.title}</h3>
                  <div className="card-icon"><i className={`fas ${card.icon}`}></i></div>
                </div>
                <div className="card-value">{card.value}</div>
                <div className={`card-change ${card.positive ? 'positive' : 'negative'}`}>
                  <i className={`fas fa-arrow-${card.positive ? 'up' : 'down'}`}></i>
                  <span>{card.change}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="dashboard-grid">
            <div className="chart-container">
              <div className="chart-header">
                <h3 className="chart-title">Activity Overview</h3>
                <div className="chart-actions">
                  <button className="chart-btn active">Week</button>
                  <button className="chart-btn">Month</button>
                  <button className="chart-btn">Year</button>
                </div>
              </div>
              <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-gray)' }}>
                <p>Chart would be rendered here</p>
              </div>
            </div>
            <div className="chart-container">
              <div className="chart-header">
                <h3 className="chart-title">Recent Activity</h3>
              </div>
              <ul className="activity-list">
                {recentActivity.map((activity, index) => (
                  <li className="activity-item" key={index}>
                    <div className="activity-icon">
                      <i className={`fas ${activity.icon}`}></i>
                    </div>
                    <div className="activity-content">
                      <h4>{activity.title}</h4>
                      <p>{activity.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="chart-container">
            <div className="chart-header">
              <h3 className="chart-title">Upcoming Classes</h3>
              <a href="/classes" className="btn btn-outline">View All</a>
            </div>
            <div className="table-container" style={{ background: 'transparent', border: 'none', padding: 0 }}>
              <table>
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Trainer</th>
                    <th>Time</th>
                    <th>Duration</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingClasses.map((cls, index) => (
                    <tr key={index}>
                      <td>{cls.name}</td>
                      <td>{cls.trainer}</td>
                      <td>{cls.time}</td>
                      <td>{cls.duration}</td>
                      <td><span className={`status-badge ${cls.status === 'Confirmed' ? 'active' : 'pending'}`}>{cls.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      <div className={`modal ${notificationsOpen ? 'active' : ''}`} id="notificationPanel">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Notifications</h3>
            <button className="modal-close" onClick={toggleNotifications}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <ul className="activity-list">
            {recentActivity.map((activity, index) => (
              <li className="activity-item" key={index}>
                <div className="activity-icon">
                  <i className={`fas ${activity.icon}`}></i>
                </div>
                <div className="activity-content">
                  <h4>{activity.title}</h4>
                  <p>{activity.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
