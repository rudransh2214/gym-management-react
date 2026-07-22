import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import '../css/dashboard.css'

function Progress() {
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [logModalOpen, setLogModalOpen] = useState(false)
  const [progressData, setProgressData] = useState([
    { id: 1, date: '2024-06-20', weight: 175, bmi: 24.2, bodyFat: 18, muscleMass: 65 },
    { id: 2, date: '2024-06-10', weight: 178, bmi: 24.6, bodyFat: 19, muscleMass: 64 },
    { id: 3, date: '2024-06-01', weight: 180, bmi: 24.9, bodyFat: 20, muscleMass: 63 },
    { id: 4, date: '2024-05-20', weight: 182, bmi: 25.1, bodyFat: 21, muscleMass: 62 },
    { id: 5, date: '2024-05-10', weight: 185, bmi: 25.4, bodyFat: 22, muscleMass: 61 },
  ])
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const toggleTheme = () => alert('Theme toggle would be implemented here')
  const toggleNotifications = () => alert('Notifications would be implemented here')

  const openLogModal = () => setLogModalOpen(true)
  const closeLogModal = () => setLogModalOpen(false)

  const handleLogProgress = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const newEntry = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      weight: parseFloat(formData.get('weight')),
      bmi: parseFloat(formData.get('bmi')),
      bodyFat: parseFloat(formData.get('bodyFat')),
      muscleMass: parseFloat(formData.get('muscleMass')),
    }
    setProgressData([newEntry, ...progressData])
    closeLogModal()
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

  const latestProgress = progressData[0]

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <Sidebar />
        
        <main className="main-content" style={{ marginLeft: sidebarOpen ? '280px' : '0' }}>
          <div className="dashboard-header">
            <h1>Progress Tracking</h1>
            <div className="header-actions">
              <button className="btn btn-primary" onClick={openLogModal}>
                <i className="fas fa-plus"></i> Log Progress
              </button>
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

          <div className="dashboard-cards">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Current Weight</h3>
                <div className="card-icon"><i className="fas fa-weight"></i></div>
              </div>
              <div className="card-value">{latestProgress.weight} lbs</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-down"></i>
                <span>-10 lbs from start</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">BMI</h3>
                <div className="card-icon"><i className="fas fa-calculator"></i></div>
              </div>
              <div className="card-value">{latestProgress.bmi}</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-down"></i>
                <span>Normal range</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Body Fat</h3>
                <div className="card-icon"><i className="fas fa-percentage"></i></div>
              </div>
              <div className="card-value">{latestProgress.bodyFat}%</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-down"></i>
                <span>-4% from start</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Muscle Mass</h3>
                <div className="card-icon"><i className="fas fa-dumbbell"></i></div>
              </div>
              <div className="card-value">{latestProgress.muscleMass} kg</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>+4 kg from start</span>
              </div>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="chart-container">
              <div className="chart-header">
                <h3 className="chart-title">Weight Progress</h3>
                <div className="chart-actions">
                  <button className="chart-btn active">Month</button>
                  <button className="chart-btn">3 Months</button>
                  <button className="chart-btn">6 Months</button>
                </div>
              </div>
              <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-gray)' }}>
                <p>Weight chart would be rendered here</p>
              </div>
            </div>
            <div className="chart-container">
              <div className="chart-header">
                <h3 className="chart-title">BMI Progress</h3>
                <div className="chart-actions">
                  <button className="chart-btn active">Month</button>
                  <button className="chart-btn">3 Months</button>
                  <button className="chart-btn">6 Months</button>
                </div>
              </div>
              <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-gray)' }}>
                <p>BMI chart would be rendered here</p>
              </div>
            </div>
          </div>

          <div className="table-container">
            <div className="table-header">
              <h3 className="table-title">Progress Log</h3>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Weight (lbs)</th>
                  <th>BMI</th>
                  <th>Body Fat (%)</th>
                  <th>Muscle Mass (kg)</th>
                </tr>
              </thead>
              <tbody>
                {progressData.map(entry => (
                  <tr key={entry.id}>
                    <td>{entry.date}</td>
                    <td>{entry.weight}</td>
                    <td>{entry.bmi}</td>
                    <td>{entry.bodyFat}</td>
                    <td>{entry.muscleMass}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <div className={`modal ${logModalOpen ? 'active' : ''}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h3>Log Progress</h3>
            <button className="modal-close" onClick={closeLogModal}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <form onSubmit={handleLogProgress}>
            <div className="form-group">
              <label>Weight (lbs)</label>
              <div className="input-group">
                <i className="fas fa-weight"></i>
                <input type="number" name="weight" step="0.1" required />
              </div>
            </div>
            <div className="form-group">
              <label>BMI</label>
              <div className="input-group">
                <i className="fas fa-calculator"></i>
                <input type="number" name="bmi" step="0.1" required />
              </div>
            </div>
            <div className="form-group">
              <label>Body Fat (%)</label>
              <div className="input-group">
                <i className="fas fa-percentage"></i>
                <input type="number" name="bodyFat" step="0.1" required />
              </div>
            </div>
            <div className="form-group">
              <label>Muscle Mass (kg)</label>
              <div className="input-group">
                <i className="fas fa-dumbbell"></i>
                <input type="number" name="muscleMass" step="0.1" required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Save Progress</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Progress
