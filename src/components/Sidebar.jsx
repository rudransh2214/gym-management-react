import { Link, useLocation } from 'react-router-dom'
import '../css/dashboard.css'

function Sidebar() {
  const location = useLocation()
  const userType = localStorage.getItem('userType') || 'member'
  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {}
  
  const getUserInitials = () => {
    if (currentUser.firstName && currentUser.lastName) {
      return `${currentUser.firstName[0]}${currentUser.lastName[0]}`.toUpperCase()
    }
    return userType === 'admin' ? 'AD' : 'JD'
  }

  const getUserName = () => {
    if (currentUser.firstName && currentUser.lastName) {
      return `${currentUser.firstName} ${currentUser.lastName}`
    }
    return userType === 'admin' ? 'Admin' : 'John Doe'
  }

  const handleLogout = () => {
    localStorage.removeItem('userType')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('currentUser')
    window.location.href = '/login'
  }

  const menuItems = [
    { path: '/dashboard', icon: 'fa-home', label: 'Dashboard', showFor: ['admin', 'member'] },
    { path: '/members', icon: 'fa-users', label: 'Members', showFor: ['admin'] },
    { path: '/trainers', icon: 'fa-user-tie', label: 'Trainers', showFor: ['admin'] },
    { path: '/membership', icon: 'fa-crown', label: 'Membership', showFor: ['admin', 'member'] },
    { path: '/classes', icon: 'fa-calendar', label: 'Classes', showFor: ['admin', 'member'] },
    { path: '/attendance', icon: 'fa-clipboard-check', label: 'Attendance', showFor: ['admin', 'member'] },
    { path: '/workout', icon: 'fa-dumbbell', label: 'Workout', showFor: ['admin', 'member'] },
    { path: '/nutrition', icon: 'fa-apple-alt', label: 'Nutrition', showFor: ['admin', 'member'] },
    { path: '/progress', icon: 'fa-chart-line', label: 'Progress', showFor: ['admin', 'member'] },
    { path: '/payment', icon: 'fa-credit-card', label: 'Payment', showFor: ['admin', 'member'] },
    { path: '/analytics', icon: 'fa-chart-bar', label: 'Analytics', showFor: ['admin'] },
    { path: '/settings', icon: 'fa-cog', label: 'Settings', showFor: ['admin', 'member'] },
  ]

  const filteredMenuItems = menuItems.filter(item => item.showFor.includes(userType))

  return (
    <aside className="sidebar" id="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <i className="fas fa-dumbbell"></i>
          <span>FitZone</span>
        </div>
      </div>
      <nav className="sidebar-menu">
        <ul>
          {filteredMenuItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={location.pathname === item.path ? 'active' : ''}
              >
                <i className={`fas ${item.icon}`}></i> {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">{getUserInitials()}</div>
          <div className="user-details">
            <h4>{getUserName()}</h4>
            <p>{userType === 'admin' ? 'Administrator' : 'Member'}</p>
          </div>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
