import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import '../css/dashboard.css'

function Trainers() {
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [trainers, setTrainers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterSpecialty, setFilterSpecialty] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [editingTrainer, setEditingTrainer] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const userType = localStorage.getItem('userType')
    if (userType !== 'admin') {
      navigate('/dashboard')
      return
    }
    
    const storedTrainers = JSON.parse(localStorage.getItem('trainers')) || []
    if (storedTrainers.length === 0) {
      const dummyTrainers = [
        { id: 1, name: 'Mike Johnson', email: 'mike@fitzone.com', phone: '555-0201', specialty: 'Strength Training', experience: 8, members: 25, rating: 4.9 },
        { id: 2, name: 'Sarah Williams', email: 'sarah@fitzone.com', phone: '555-0202', specialty: 'Yoga & Pilates', experience: 6, members: 30, rating: 4.8 },
        { id: 3, name: 'David Chen', email: 'david@fitzone.com', phone: '555-0203', specialty: 'CrossFit & HIIT', experience: 10, members: 20, rating: 5.0 },
        { id: 4, name: 'Emily Rodriguez', email: 'emily@fitzone.com', phone: '555-0204', specialty: 'Nutrition', experience: 5, members: 15, rating: 4.7 },
      ]
      localStorage.setItem('trainers', JSON.stringify(dummyTrainers))
      setTrainers(dummyTrainers)
    } else {
      setTrainers(storedTrainers)
    }
    
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [navigate])

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const toggleTheme = () => alert('Theme toggle would be implemented here')
  const toggleNotifications = () => alert('Notifications would be implemented here')

  const openAddTrainerModal = () => {
    setEditingTrainer(null)
    setModalOpen(true)
  }

  const openEditTrainerModal = (trainer) => {
    setEditingTrainer(trainer)
    setModalOpen(true)
  }

  const closeTrainerModal = () => {
    setModalOpen(false)
    setEditingTrainer(null)
  }

  const saveTrainer = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const trainerData = {
      id: editingTrainer ? editingTrainer.id : Date.now(),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      specialty: formData.get('specialty'),
      experience: parseInt(formData.get('experience')),
      members: parseInt(formData.get('members')),
      rating: editingTrainer ? editingTrainer.rating : 4.5,
    }

    let updatedTrainers
    if (editingTrainer) {
      updatedTrainers = trainers.map(t => t.id === editingTrainer.id ? trainerData : t)
    } else {
      updatedTrainers = [...trainers, trainerData]
    }

    setTrainers(updatedTrainers)
    localStorage.setItem('trainers', JSON.stringify(updatedTrainers))
    closeTrainerModal()
  }

  const deleteTrainer = (id) => {
    if (confirm('Are you sure you want to delete this trainer?')) {
      const updatedTrainers = trainers.filter(t => t.id !== id)
      setTrainers(updatedTrainers)
      localStorage.setItem('trainers', JSON.stringify(updatedTrainers))
    }
  }

  const filteredTrainers = trainers.filter(trainer => {
    const matchesSearch = `${trainer.name} ${trainer.email}`.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterSpecialty === '' || trainer.specialty.includes(filterSpecialty)
    return matchesSearch && matchesFilter
  })

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
            <h1>Trainer Management</h1>
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
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Total Trainers</h3>
                <div className="card-icon"><i className="fas fa-user-tie"></i></div>
              </div>
              <div className="card-value">{trainers.length}</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>+2 this month</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Available Now</h3>
                <div className="card-icon"><i className="fas fa-check-circle"></i></div>
              </div>
              <div className="card-value">{trainers.length - 1}</div>
              <div className="card-change positive">
                <i className="fas fa-clock"></i>
                <span>Ready for sessions</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Avg Rating</h3>
                <div className="card-icon"><i className="fas fa-star"></i></div>
              </div>
              <div className="card-value">4.8</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>Excellent feedback</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Total Sessions</h3>
                <div className="card-icon"><i className="fas fa-calendar-check"></i></div>
              </div>
              <div className="card-value">245</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>This month</span>
              </div>
            </div>
          </div>

          <div className="table-container">
            <div className="table-header">
              <h3 className="table-title">All Trainers</h3>
              <div className="table-actions">
                <div className="search-box">
                  <input 
                    type="text" 
                    placeholder="Search trainers..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <i className="fas fa-search"></i>
                </div>
                <select 
                  value={filterSpecialty}
                  onChange={(e) => setFilterSpecialty(e.target.value)}
                  style={{ padding: '10px 15px', border: '1px solid var(--border-color)', borderRadius: '20px', background: 'var(--glass-bg)', color: 'var(--text-light)' }}
                >
                  <option value="">All Specialties</option>
                  <option value="Strength">Strength Training</option>
                  <option value="Yoga">Yoga & Pilates</option>
                  <option value="CrossFit">CrossFit & HIIT</option>
                  <option value="Nutrition">Nutrition</option>
                  <option value="Cardio">Cardio</option>
                </select>
                <button className="btn btn-primary" onClick={openAddTrainerModal}>
                  <i className="fas fa-plus"></i> Add Trainer
                </button>
              </div>
            </div>
            <div className="trainers-grid">
              {filteredTrainers.map(trainer => (
                <div className="trainer-card" key={trainer.id}>
                  <div className="trainer-image">
                    <div className="trainer-overlay">
                      <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="trainer-info">
                    <h3>{trainer.name}</h3>
                    <p className="trainer-specialty">{trainer.specialty}</p>
                    <div className="trainer-rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <span>({trainer.rating})</span>
                    </div>
                    <p style={{ color: 'var(--text-gray)', fontSize: '14px', marginTop: '10px' }}>
                      {trainer.experience} years experience
                    </p>
                    <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                      <button className="action-btn edit" onClick={() => openEditTrainerModal(trainer)}>
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="action-btn delete" onClick={() => deleteTrainer(trainer.id)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <div className={`modal ${modalOpen ? 'active' : ''}`} id="trainerModal">
        <div className="modal-content">
          <div className="modal-header">
            <h3>{editingTrainer ? 'Edit Trainer' : 'Add New Trainer'}</h3>
            <button className="modal-close" onClick={closeTrainerModal}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <form onSubmit={saveTrainer}>
            <div className="form-group">
              <label>Full Name</label>
              <div className="input-group">
                <i className="fas fa-user"></i>
                <input type="text" name="name" defaultValue={editingTrainer?.name} required />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input type="email" name="email" defaultValue={editingTrainer?.email} required />
              </div>
            </div>
            <div className="form-group">
              <label>Phone</label>
              <div className="input-group">
                <i className="fas fa-phone"></i>
                <input type="tel" name="phone" defaultValue={editingTrainer?.phone} required />
              </div>
            </div>
            <div className="form-group">
              <label>Specialty</label>
              <div className="input-group">
                <i className="fas fa-dumbbell"></i>
                <select name="specialty" defaultValue={editingTrainer?.specialty || 'Strength Training'} required>
                  <option value="Strength Training">Strength Training</option>
                  <option value="Yoga & Pilates">Yoga & Pilates</option>
                  <option value="CrossFit & HIIT">CrossFit & HIIT</option>
                  <option value="Nutrition">Nutrition</option>
                  <option value="Cardio">Cardio</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Experience (years)</label>
              <div className="input-group">
                <i className="fas fa-clock"></i>
                <input type="number" name="experience" min="1" max="30" defaultValue={editingTrainer?.experience || 1} required />
              </div>
            </div>
            <div className="form-group">
              <label>Assigned Members</label>
              <div className="input-group">
                <i className="fas fa-users"></i>
                <input type="number" name="members" min="0" defaultValue={editingTrainer?.members || 0} required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Save Trainer</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Trainers
