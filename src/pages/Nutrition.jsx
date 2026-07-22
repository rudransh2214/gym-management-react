import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import '../css/dashboard.css'

function Nutrition() {
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [waterIntake, setWaterIntake] = useState(6)
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

  const addWater = () => setWaterIntake(prev => Math.min(prev + 1, 12))

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
            <h1>Nutrition Plans</h1>
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

          <div className="dashboard-cards">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Calories Today</h3>
                <div className="card-icon"><i className="fas fa-fire"></i></div>
              </div>
              <div className="card-value">1,850</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>1,850 / 2,200 kcal</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Protein</h3>
                <div className="card-icon"><i className="fas fa-drumstick-bite"></i></div>
              </div>
              <div className="card-value">120g</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>120 / 150g</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Carbs</h3>
                <div className="card-icon"><i className="fas fa-bread-slice"></i></div>
              </div>
              <div className="card-value">180g</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>180 / 250g</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Fats</h3>
                <div className="card-icon"><i className="fas fa-cheese"></i></div>
              </div>
              <div className="card-value">65g</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>65 / 70g</span>
              </div>
            </div>
          </div>

          <div className="card" style={{ marginBottom: '30px' }}>
            <div className="card-header">
              <h3 className="card-title">Water Intake</h3>
              <div className="card-icon"><i className="fas fa-tint"></i></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ height: '20px', background: 'var(--glass-bg)', borderRadius: '10px', overflow: 'hidden', marginBottom: '10px' }}>
                  <div style={{ height: '100%', width: `${(waterIntake / 12) * 100}%`, background: '#3498db', borderRadius: '10px', transition: 'all 0.3s' }}></div>
                </div>
                <p style={{ color: 'var(--text-gray)' }}>{waterIntake} / 12 glasses</p>
              </div>
              <button className="btn btn-primary" onClick={addWater}>+ Add Glass</button>
            </div>
          </div>

          <div className="table-container">
            <div className="table-header">
              <h3 className="table-title">Today's Meals</h3>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Meal</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th>Protein</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Breakfast</td>
                  <td>8:00 AM</td>
                  <td>450 kcal</td>
                  <td>30g</td>
                  <td><span className="status-badge active">Completed</span></td>
                </tr>
                <tr>
                  <td>Snack</td>
                  <td>10:30 AM</td>
                  <td>150 kcal</td>
                  <td>10g</td>
                  <td><span className="status-badge active">Completed</span></td>
                </tr>
                <tr>
                  <td>Lunch</td>
                  <td>1:00 PM</td>
                  <td>650 kcal</td>
                  <td>45g</td>
                  <td><span className="status-badge active">Completed</span></td>
                </tr>
                <tr>
                  <td>Snack</td>
                  <td>4:00 PM</td>
                  <td>200 kcal</td>
                  <td>15g</td>
                  <td><span className="status-badge pending">Upcoming</span></td>
                </tr>
                <tr>
                  <td>Dinner</td>
                  <td>7:00 PM</td>
                  <td>600 kcal</td>
                  <td>40g</td>
                  <td><span className="status-badge pending">Upcoming</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="section-header" style={{ marginTop: '40px' }}>
            <h2>Available Nutrition Plans</h2>
            <p>Choose a plan that fits your goals</p>
          </div>
          <div className="dashboard-cards">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Weight Loss</h3>
                <div className="card-icon"><i className="fas fa-weight"></i></div>
              </div>
              <p style={{ color: 'var(--text-gray)', marginBottom: '15px' }}>1,800 kcal/day • High protein</p>
              <button className="btn btn-outline btn-block">View Plan</button>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Muscle Gain</h3>
                <div className="card-icon"><i className="fas fa-dumbbell"></i></div>
              </div>
              <p style={{ color: 'var(--text-gray)', marginBottom: '15px' }}>2,500 kcal/day • High carbs</p>
              <button className="btn btn-outline btn-block">View Plan</button>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Maintenance</h3>
                <div className="card-icon"><i className="fas fa-balance-scale"></i></div>
              </div>
              <p style={{ color: 'var(--text-gray)', marginBottom: '15px' }}>2,200 kcal/day • Balanced</p>
              <button className="btn btn-outline btn-block">View Plan</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Nutrition
