import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import '../css/dashboard.css'

function Members() {
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [members, setMembers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [editingMember, setEditingMember] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const userType = localStorage.getItem('userType')
    if (userType !== 'admin') {
      navigate('/dashboard')
      return
    }
    
    // Load members from localStorage or use dummy data
    const storedMembers = JSON.parse(localStorage.getItem('members')) || []
    if (storedMembers.length === 0) {
      const dummyMembers = [
        { id: 1, firstName: 'John', lastName: 'Smith', email: 'john@example.com', phone: '555-0101', plan: 'Standard', joinDate: '2024-01-15', status: 'active' },
        { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', phone: '555-0102', plan: 'Premium', joinDate: '2024-02-20', status: 'active' },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', email: 'mike@example.com', phone: '555-0103', plan: 'Basic', joinDate: '2024-03-10', status: 'inactive' },
        { id: 4, firstName: 'Sarah', lastName: 'Williams', email: 'sarah@example.com', phone: '555-0104', plan: 'Elite', joinDate: '2024-04-05', status: 'active' },
        { id: 5, firstName: 'David', lastName: 'Chen', email: 'david@example.com', phone: '555-0105', plan: 'Standard', joinDate: '2024-05-12', status: 'pending' },
      ]
      localStorage.setItem('members', JSON.stringify(dummyMembers))
      setMembers(dummyMembers)
    } else {
      setMembers(storedMembers)
    }
    
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [navigate])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const toggleTheme = () => {
    alert('Theme toggle would be implemented here')
  }

  const toggleNotifications = () => {
    alert('Notifications would be implemented here')
  }

  const openAddMemberModal = () => {
    setEditingMember(null)
    setModalOpen(true)
  }

  const openEditMemberModal = (member) => {
    setEditingMember(member)
    setModalOpen(true)
  }

  const closeMemberModal = () => {
    setModalOpen(false)
    setEditingMember(null)
  }

  const saveMember = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const memberData = {
      id: editingMember ? editingMember.id : Date.now(),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      plan: formData.get('plan'),
      status: formData.get('status'),
      joinDate: editingMember ? editingMember.joinDate : new Date().toISOString().split('T')[0],
    }

    let updatedMembers
    if (editingMember) {
      updatedMembers = members.map(m => m.id === editingMember.id ? memberData : m)
    } else {
      updatedMembers = [...members, memberData]
    }

    setMembers(updatedMembers)
    localStorage.setItem('members', JSON.stringify(updatedMembers))
    closeMemberModal()
  }

  const deleteMember = (id) => {
    if (confirm('Are you sure you want to delete this member?')) {
      const updatedMembers = members.filter(m => m.id !== id)
      setMembers(updatedMembers)
      localStorage.setItem('members', JSON.stringify(updatedMembers))
    }
  }

  const filteredMembers = members.filter(member => {
    const matchesSearch = `${member.firstName} ${member.lastName} ${member.email}`.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === '' || member.status === filterStatus
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
            <h1>Member Management</h1>
            <div className="header-actions">
              <button className="notification-btn" onClick={toggleNotifications}>
                <i className="fas fa-bell"></i>
                <span className="notification-badge">5</span>
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
                <h3 className="card-title">Total Members</h3>
                <div className="card-icon"><i className="fas fa-users"></i></div>
              </div>
              <div className="card-value">{members.length}</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>+12% this month</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Active Members</h3>
                <div className="card-icon"><i className="fas fa-user-check"></i></div>
              </div>
              <div className="card-value">{members.filter(m => m.status === 'active').length}</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>85% active rate</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">New This Month</h3>
                <div className="card-icon"><i className="fas fa-user-plus"></i></div>
              </div>
              <div className="card-value">12</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>+15% growth</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Expiring Soon</h3>
                <div className="card-icon"><i className="fas fa-clock"></i></div>
              </div>
              <div className="card-value">3</div>
              <div className="card-change negative">
                <i className="fas fa-exclamation-triangle"></i>
                <span>Need attention</span>
              </div>
            </div>
          </div>

          <div className="table-container">
            <div className="table-header">
              <h3 className="table-title">All Members</h3>
              <div className="table-actions">
                <div className="search-box">
                  <input 
                    type="text" 
                    placeholder="Search members..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <i className="fas fa-search"></i>
                </div>
                <select 
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  style={{ padding: '10px 15px', border: '1px solid var(--border-color)', borderRadius: '20px', background: 'var(--glass-bg)', color: 'var(--text-light)' }}
                >
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
                <button className="btn btn-primary" onClick={openAddMemberModal}>
                  <i className="fas fa-plus"></i> Add Member
                </button>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Plan</th>
                  <th>Join Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map(member => (
                  <tr key={member.id}>
                    <td>{member.id}</td>
                    <td>{member.firstName} {member.lastName}</td>
                    <td>{member.email}</td>
                    <td>{member.phone}</td>
                    <td>{member.plan}</td>
                    <td>{member.joinDate}</td>
                    <td><span className={`status-badge ${member.status}`}>{member.status}</span></td>
                    <td>
                      <button className="action-btn edit" onClick={() => openEditMemberModal(member)}>
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="action-btn delete" onClick={() => deleteMember(member.id)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <div className={`modal ${modalOpen ? 'active' : ''}`} id="memberModal">
        <div className="modal-content">
          <div className="modal-header">
            <h3>{editingMember ? 'Edit Member' : 'Add New Member'}</h3>
            <button className="modal-close" onClick={closeMemberModal}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <form onSubmit={saveMember}>
            <div className="form-group">
              <label>First Name</label>
              <div className="input-group">
                <i className="fas fa-user"></i>
                <input type="text" name="firstName" defaultValue={editingMember?.firstName} required />
              </div>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <div className="input-group">
                <i className="fas fa-user"></i>
                <input type="text" name="lastName" defaultValue={editingMember?.lastName} required />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input type="email" name="email" defaultValue={editingMember?.email} required />
              </div>
            </div>
            <div className="form-group">
              <label>Phone</label>
              <div className="input-group">
                <i className="fas fa-phone"></i>
                <input type="tel" name="phone" defaultValue={editingMember?.phone} required />
              </div>
            </div>
            <div className="form-group">
              <label>Membership Plan</label>
              <div className="input-group">
                <i className="fas fa-crown"></i>
                <select name="plan" defaultValue={editingMember?.plan || 'Basic'} required>
                  <option value="Basic">Basic</option>
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                  <option value="Elite">Elite</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Status</label>
              <div className="input-group">
                <i className="fas fa-check-circle"></i>
                <select name="status" defaultValue={editingMember?.status || 'active'} required>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Save Member</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Members
