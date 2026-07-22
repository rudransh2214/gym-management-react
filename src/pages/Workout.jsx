import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import '../css/dashboard.css'

function Workout() {
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [detailModalOpen, setDetailModalOpen] = useState(false)
  const [selectedWorkout, setSelectedWorkout] = useState(null)
  const navigate = useNavigate()

  const workouts = [
    { id: 1, name: 'Upper Body Strength', category: 'strength', duration: '45 min', calories: 350, exercises: 8, sets: 3, description: 'Focus on chest, shoulders, and arms with compound movements' },
    { id: 2, name: 'Lower Body Power', category: 'strength', duration: '50 min', calories: 400, exercises: 7, sets: 4, description: 'Leg and glute focused workout with progressive overload' },
    { id: 3, name: 'HIIT Cardio', category: 'cardio', duration: '30 min', calories: 450, exercises: 12, sets: 3, description: 'High intensity interval training for maximum calorie burn' },
    { id: 4, name: 'Core & Abs', category: 'core', duration: '25 min', calories: 200, exercises: 10, sets: 3, description: 'Strengthen your core and define your abs' },
    { id: 5, name: 'Full Body Burn', category: 'strength', duration: '60 min', calories: 500, exercises: 10, sets: 3, description: 'Complete full body workout for all muscle groups' },
    { id: 6, name: 'Flexibility Flow', category: 'flexibility', duration: '40 min', calories: 150, exercises: 8, sets: 2, description: 'Improve flexibility and reduce muscle tension' },
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

  const openDetailModal = (workout) => {
    setSelectedWorkout(workout)
    setDetailModalOpen(true)
  }

  const closeDetailModal = () => {
    setDetailModalOpen(false)
    setSelectedWorkout(null)
  }

  const filteredWorkouts = selectedCategory === 'all' ? workouts : workouts.filter(w => w.category === selectedCategory)

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
            <h1>Workout Plans</h1>
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

          <div className="card" style={{ marginBottom: '30px' }}>
            <div className="card-header">
              <h3 className="card-title">Today's Workout</h3>
              <div className="card-icon"><i className="fas fa-calendar-day"></i></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <h2 style={{ fontSize: '24px', color: 'var(--text-light)', marginBottom: '10px' }}>Upper Body Strength</h2>
                <p style={{ color: 'var(--text-gray)' }}><i className="fas fa-clock"></i> 45 minutes • <i className="fas fa-fire"></i> 350 calories</p>
                <p style={{ color: 'var(--text-gray)' }}><i className="fas fa-dumbbell"></i> 8 exercises • <i className="fas fa-redo"></i> 3 sets each</p>
              </div>
              <button className="btn btn-primary" onClick={() => openDetailModal(workouts[0])}>Start Workout</button>
            </div>
          </div>

          <div className="card" style={{ marginBottom: '30px' }}>
            <div className="card-header">
              <h3 className="card-title">Filter by Category</h3>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setSelectedCategory('all')}>All</button>
              <button className={`btn ${selectedCategory === 'strength' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setSelectedCategory('strength')}>Strength</button>
              <button className={`btn ${selectedCategory === 'cardio' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setSelectedCategory('cardio')}>Cardio</button>
              <button className={`btn ${selectedCategory === 'core' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setSelectedCategory('core')}>Core</button>
              <button className={`btn ${selectedCategory === 'flexibility' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setSelectedCategory('flexibility')}>Flexibility</button>
            </div>
          </div>

          <div className="dashboard-cards">
            {filteredWorkouts.map(workout => (
              <div className="card" key={workout.id} style={{ cursor: 'pointer' }} onClick={() => openDetailModal(workout)}>
                <div className="card-header">
                  <h3 className="card-title">{workout.name}</h3>
                  <div className="card-icon"><i className="fas fa-dumbbell"></i></div>
                </div>
                <p style={{ color: 'var(--text-gray)', marginBottom: '10px' }}>{workout.description}</p>
                <div style={{ display: 'flex', gap: '15px', color: 'var(--text-gray)', fontSize: '14px' }}>
                  <span><i className="fas fa-clock"></i> {workout.duration}</span>
                  <span><i className="fas fa-fire"></i> {workout.calories} cal</span>
                  <span><i className="fas fa-list"></i> {workout.exercises} exercises</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <div className={`modal ${detailModalOpen ? 'active' : ''}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h3>Workout Details</h3>
            <button className="modal-close" onClick={closeDetailModal}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          {selectedWorkout && (
            <div>
              <h2 style={{ color: 'var(--text-light)', marginBottom: '10px' }}>{selectedWorkout.name}</h2>
              <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>{selectedWorkout.description}</p>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <div style={{ padding: '15px', background: 'var(--glass-bg)', borderRadius: '10px', flex: 1 }}>
                  <i className="fas fa-clock" style={{ color: 'var(--primary-color)' }}></i>
                  <p style={{ color: 'var(--text-light)', marginTop: '5px' }}>{selectedWorkout.duration}</p>
                </div>
                <div style={{ padding: '15px', background: 'var(--glass-bg)', borderRadius: '10px', flex: 1 }}>
                  <i className="fas fa-fire" style={{ color: 'var(--primary-color)' }}></i>
                  <p style={{ color: 'var(--text-light)', marginTop: '5px' }}>{selectedWorkout.calories} calories</p>
                </div>
                <div style={{ padding: '15px', background: 'var(--glass-bg)', borderRadius: '10px', flex: 1 }}>
                  <i className="fas fa-dumbbell" style={{ color: 'var(--primary-color)' }}></i>
                  <p style={{ color: 'var(--text-light)', marginTop: '5px' }}>{selectedWorkout.exercises} exercises</p>
                </div>
              </div>
              <button className="btn btn-primary btn-block">Start Workout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Workout
