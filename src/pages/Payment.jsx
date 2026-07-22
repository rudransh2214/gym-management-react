import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import '../css/dashboard.css'

function Payment() {
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [paymentModalOpen, setPaymentModalOpen] = useState(false)
  const [successModalOpen, setSuccessModalOpen] = useState(false)
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

  const openPaymentModal = () => setPaymentModalOpen(true)
  const closePaymentModal = () => setPaymentModalOpen(false)

  const handlePayment = (e) => {
    e.preventDefault()
    closePaymentModal()
    setSuccessModalOpen(true)
  }

  const closeSuccessModal = () => setSuccessModalOpen(false)

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
            <h1>Payment & Billing</h1>
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
              <h3 className="card-title">Current Bill</h3>
              <div className="card-icon"><i className="fas fa-file-invoice-dollar"></i></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <h2 style={{ fontSize: '36px', color: 'var(--text-light)', marginBottom: '10px' }}>$79.00</h2>
                <p style={{ color: 'var(--text-gray)' }}>Premium Membership - January 2024</p>
                <p style={{ color: 'var(--text-gray)' }}>Due: <span style={{ color: 'var(--primary-color)' }}>January 31, 2024</span></p>
              </div>
              <button className="btn btn-primary" onClick={openPaymentModal}>Pay Now</button>
            </div>
          </div>

          <div className="dashboard-cards">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Total Paid</h3>
                <div className="card-icon"><i className="fas fa-dollar-sign"></i></div>
              </div>
              <div className="card-value">$948.00</div>
              <div className="card-change positive">
                <i className="fas fa-arrow-up"></i>
                <span>12 months</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Pending</h3>
                <div className="card-icon"><i className="fas fa-clock"></i></div>
              </div>
              <div className="card-value">$79.00</div>
              <div className="card-change negative">
                <i className="fas fa-exclamation-triangle"></i>
                <span>Due in 10 days</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Payment Methods</h3>
                <div className="card-icon"><i className="fas fa-credit-card"></i></div>
              </div>
              <div className="card-value">2</div>
              <div className="card-change positive">
                <i className="fas fa-check"></i>
                <span>Active</span>
              </div>
            </div>
          </div>

          <div className="card" style={{ marginBottom: '30px' }}>
            <div className="card-header">
              <h3 className="card-title">Saved Payment Methods</h3>
            </div>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ padding: '20px', border: '2px solid var(--border-color)', borderRadius: '10px', background: 'var(--glass-bg)', flex: 1, minWidth: '250px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <i className="fab fa-cc-visa" style={{ fontSize: '32px', color: '#1a1f71' }}></i>
                  <span style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Primary</span>
                </div>
                <p style={{ color: 'var(--text-light)' }}>•••• •••• •••• 4242</p>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Expires 12/25</p>
              </div>
              <div style={{ padding: '20px', border: '2px solid var(--border-color)', borderRadius: '10px', background: 'var(--glass-bg)', flex: 1, minWidth: '250px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <i className="fab fa-cc-mastercard" style={{ fontSize: '32px', color: '#eb001b' }}></i>
                  <button className="btn btn-outline" style={{ padding: '5px 10px', fontSize: '12px' }}>Set Primary</button>
                </div>
                <p style={{ color: 'var(--text-light)' }}>•••• •••• •••• 5555</p>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Expires 08/26</p>
              </div>
            </div>
          </div>

          <div className="table-container">
            <div className="table-header">
              <h3 className="table-title">Payment History</h3>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>December 15, 2024</td>
                  <td>Premium Membership</td>
                  <td>$79.00</td>
                  <td><span className="status-badge active">Paid</span></td>
                </tr>
                <tr>
                  <td>November 15, 2024</td>
                  <td>Premium Membership</td>
                  <td>$79.00</td>
                  <td><span className="status-badge active">Paid</span></td>
                </tr>
                <tr>
                  <td>October 15, 2024</td>
                  <td>Premium Membership</td>
                  <td>$79.00</td>
                  <td><span className="status-badge active">Paid</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <div className={`modal ${paymentModalOpen ? 'active' : ''}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h3>Make Payment</h3>
            <button className="modal-close" onClick={closePaymentModal}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <form onSubmit={handlePayment}>
            <div className="form-group">
              <label>Amount</label>
              <div className="input-group">
                <i className="fas fa-dollar-sign"></i>
                <input type="text" value="79.00" readOnly />
              </div>
            </div>
            <div className="form-group">
              <label>Card Number</label>
              <div className="input-group">
                <i className="fas fa-credit-card"></i>
                <input type="text" placeholder="•••• •••• •••• ••••" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date</label>
                <div className="input-group">
                  <i className="fas fa-calendar"></i>
                  <input type="text" placeholder="MM/YY" required />
                </div>
              </div>
              <div className="form-group">
                <label>CVV</label>
                <div className="input-group">
                  <i className="fas fa-lock"></i>
                  <input type="text" placeholder="•••" required />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Pay $79.00</button>
          </form>
        </div>
      </div>

      <div className={`modal ${successModalOpen ? 'active' : ''}`}>
        <div className="modal-content" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '64px', color: '#2ecc71', marginBottom: '20px' }}>
            <i className="fas fa-check-circle"></i>
          </div>
          <h3 style={{ color: 'var(--text-dark)', marginBottom: '10px' }}>Payment Successful!</h3>
          <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>Your payment of $79.00 has been processed successfully.</p>
          <button className="btn btn-primary btn-block" onClick={closeSuccessModal}>Done</button>
        </div>
      </div>
    </div>
  )
}

export default Payment
