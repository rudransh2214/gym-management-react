import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import '../css/dashboard.css'

function Settings() {
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false
  })
  const navigate = useNavigate()

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {}
    setFormData(prev => ({
      ...prev,
      firstName: currentUser.firstName || '',
      lastName: currentUser.lastName || '',
      email: currentUser.email || '',
      phone: currentUser.phone || ''
    }))
    
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const toggleTheme = () => alert('Theme toggle would be implemented here')
  const toggleNotifications = () => alert('Notifications would be implemented here')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSaveProfile = (e) => {
    e.preventDefault()
    alert('Profile updated successfully')
  }

  const handleChangePassword = (e) => {
    e.preventDefault()
    if (formData.newPassword !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    alert('Password changed successfully')
    setFormData(prev => ({ ...prev, currentPassword: '', newPassword: '', confirmPassword: '' }))
  }

  const handleDownloadData = () => {
    alert('Downloading your data...')
  }

  const handleDeactivate = () => {
    if (confirm('Are you sure you want to deactivate your account?')) {
      alert('Account deactivated')
    }
  }

  const handleDeleteAccount = () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      localStorage.clear()
      navigate('/')
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
            <h1>Account Settings</h1>
            <div className="header-actions">
              <button className="notification-btn" onClick={toggleNotifications}>
                <i className="fas fa-bell"></i>
                <span className="notification-badge">1</span>
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
              <h3 className="card-title">Profile Information</h3>
              <div className="card-icon"><i className="fas fa-user"></i></div>
            </div>
            <form onSubmit={handleSaveProfile}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <div className="input-group">
                    <i className="fas fa-user"></i>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <div className="input-group">
                    <i className="fas fa-user"></i>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <div className="input-group">
                  <i className="fas fa-envelope"></i>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <div className="input-group">
                  <i className="fas fa-phone"></i>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
          </div>

          <div className="card" style={{ marginBottom: '30px' }}>
            <div className="card-header">
              <h3 className="card-title">Change Password</h3>
              <div className="card-icon"><i className="fas fa-lock"></i></div>
            </div>
            <form onSubmit={handleChangePassword}>
              <div className="form-group">
                <label>Current Password</label>
                <div className="input-group">
                  <i className="fas fa-key"></i>
                  <input type="password" name="currentPassword" value={formData.currentPassword} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>New Password</label>
                <div className="input-group">
                  <i className="fas fa-key"></i>
                  <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>Confirm New Password</label>
                <div className="input-group">
                  <i className="fas fa-key"></i>
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Change Password</button>
            </form>
          </div>

          <div className="card" style={{ marginBottom: '30px' }}>
            <div className="card-header">
              <h3 className="card-title">Notification Preferences</h3>
              <div className="card-icon"><i className="fas fa-bell"></i></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <label className="checkbox-container">
                <input type="checkbox" name="emailNotifications" checked={formData.emailNotifications} onChange={handleChange} />
                <span className="checkmark"></span>
                Email Notifications
              </label>
              <label className="checkbox-container">
                <input type="checkbox" name="pushNotifications" checked={formData.pushNotifications} onChange={handleChange} />
                <span className="checkmark"></span>
                Push Notifications
              </label>
              <label className="checkbox-container">
                <input type="checkbox" name="smsNotifications" checked={formData.smsNotifications} onChange={handleChange} />
                <span className="checkmark"></span>
                SMS Notifications
              </label>
            </div>
          </div>

          <div className="card" style={{ marginBottom: '30px' }}>
            <div className="card-header">
              <h3 className="card-title">Theme</h3>
              <div className="card-icon"><i className="fas fa-palette"></i></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button className="btn btn-primary">Dark Mode</button>
              <button className="btn btn-outline">Light Mode</button>
            </div>
          </div>

          <div className="card" style={{ border: '2px solid #e74c3c', background: 'rgba(231, 76, 60, 0.1)' }}>
            <div className="card-header">
              <h3 className="card-title" style={{ color: '#e74c3c' }}>Danger Zone</h3>
              <div className="card-icon" style={{ color: '#e74c3c' }}><i className="fas fa-exclamation-triangle"></i></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button className="btn btn-outline" onClick={handleDownloadData}>Download My Data</button>
              <button className="btn btn-outline" onClick={handleDeactivate}>Deactivate Account</button>
              <button className="btn btn-outline" style={{ borderColor: '#e74c3c', color: '#e74c3c' }} onClick={handleDeleteAccount}>Delete Account</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Settings
