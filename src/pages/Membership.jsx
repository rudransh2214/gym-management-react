import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import '../css/dashboard.css'

function Membership() {
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentPlan, setCurrentPlan] = useState({ name: 'Premium', price: 79, expiry: 'December 31, 2024', status: 'active' })
  const [upgradeModalOpen, setUpgradeModalOpen] = useState(false)
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

  const openUpgradeModal = () => setUpgradeModalOpen(true)
  const closeUpgradeModal = () => setUpgradeModalOpen(false)

  const handleUpgrade = (plan) => {
    alert(`Upgrading to ${plan} plan`)
    closeUpgradeModal()
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
            <h1>Membership Plans</h1>
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
              <h3 className="card-title">Current Membership</h3>
              <div className="card-icon"><i className="fas fa-crown"></i></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <h2 style={{ fontSize: '28px', color: 'var(--text-light)', marginBottom: '10px' }}>{currentPlan.name} Plan</h2>
                <p style={{ color: 'var(--text-gray)' }}>Valid until: <span style={{ color: 'var(--primary-color)' }}>{currentPlan.expiry}</span></p>
                <p style={{ color: 'var(--text-gray)' }}>Monthly payment: <span style={{ color: 'var(--primary-color)' }}>${currentPlan.price}.00</span></p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ display: 'inline-block', padding: '10px 20px', background: 'rgba(46, 204, 113, 0.2)', borderRadius: '20px', color: '#2ecc71', fontWeight: 600, marginBottom: '10px' }}>
                  <i className="fas fa-check-circle"></i> Active
                </div>
                <br />
                <button className="btn btn-outline" onClick={openUpgradeModal}>Upgrade Plan</button>
              </div>
            </div>
          </div>

          <div className="section-header">
            <h2>Available Plans</h2>
            <p>Choose the perfect plan for your fitness goals</p>
          </div>
          <div className="plans-grid" style={{ marginBottom: '40px' }}>
            <div className="plan-card basic">
              <div className="plan-header">
                <h3>Basic</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">29</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <ul className="plan-features">
                <li><i className="fas fa-check"></i> Gym Access (6AM - 10PM)</li>
                <li><i className="fas fa-check"></i> Basic Equipment</li>
                <li><i className="fas fa-check"></i> Locker Room Access</li>
                <li><i className="fas fa-check"></i> 2 Group Classes/Week</li>
                <li><i className="fas fa-times"></i> Personal Training</li>
                <li><i className="fas fa-times"></i> Sauna Access</li>
              </ul>
              <button className="btn btn-outline" onClick={() => handleUpgrade('Basic')}>Choose Plan</button>
            </div>
            <div className="plan-card standard">
              <div className="popular-badge">Most Popular</div>
              <div className="plan-header">
                <h3>Standard</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">49</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <ul className="plan-features">
                <li><i className="fas fa-check"></i> 24/7 Gym Access</li>
                <li><i className="fas fa-check"></i> All Equipment</li>
                <li><i className="fas fa-check"></i> Locker & Shower Access</li>
                <li><i className="fas fa-check"></i> Unlimited Group Classes</li>
                <li><i className="fas fa-check"></i> 1 PT Session/Month</li>
                <li><i className="fas fa-times"></i> Sauna Access</li>
              </ul>
              <button className="btn btn-primary" onClick={() => handleUpgrade('Standard')}>Choose Plan</button>
            </div>
            <div className="plan-card premium">
              <div className="plan-header">
                <h3>Premium</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">79</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <ul className="plan-features">
                <li><i className="fas fa-check"></i> 24/7 Gym Access</li>
                <li><i className="fas fa-check"></i> All Equipment + VIP Area</li>
                <li><i className="fas fa-check"></i> Premium Locker Room</li>
                <li><i className="fas fa-check"></i> Unlimited Group Classes</li>
                <li><i className="fas fa-check"></i> 4 PT Sessions/Month</li>
                <li><i className="fas fa-check"></i> Sauna & Spa Access</li>
              </ul>
              <button className="btn btn-outline" onClick={() => handleUpgrade('Premium')}>Current Plan</button>
            </div>
            <div className="plan-card elite">
              <div className="elite-badge">Best Value</div>
              <div className="plan-header">
                <h3>Elite</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">149</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <ul className="plan-features">
                <li><i className="fas fa-check"></i> 24/7 VIP Access</li>
                <li><i className="fas fa-check"></i> All Equipment + Private Area</li>
                <li><i className="fas fa-check"></i> Private Locker & Shower</li>
                <li><i className="fas fa-check"></i> Unlimited Group Classes</li>
                <li><i className="fas fa-check"></i> Unlimited PT Sessions</li>
                <li><i className="fas fa-check"></i> Full Spa & Nutrition Plan</li>
              </ul>
              <button className="btn btn-primary" onClick={() => handleUpgrade('Elite')}>Choose Plan</button>
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
                  <th>Plan</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>June 15, 2024</td>
                  <td>Premium</td>
                  <td>$79.00</td>
                  <td><span className="status-badge active">Paid</span></td>
                </tr>
                <tr>
                  <td>May 15, 2024</td>
                  <td>Premium</td>
                  <td>$79.00</td>
                  <td><span className="status-badge active">Paid</span></td>
                </tr>
                <tr>
                  <td>April 15, 2024</td>
                  <td>Standard</td>
                  <td>$49.00</td>
                  <td><span className="status-badge active">Paid</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <div className={`modal ${upgradeModalOpen ? 'active' : ''}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h3>Upgrade Membership</h3>
            <button className="modal-close" onClick={closeUpgradeModal}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>Select the plan you want to upgrade to:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button className="btn btn-outline" onClick={() => handleUpgrade('Standard')}>Standard - $49/month</button>
            <button className="btn btn-outline" onClick={() => handleUpgrade('Premium')}>Premium - $79/month</button>
            <button className="btn btn-outline" onClick={() => handleUpgrade('Elite')}>Elite - $149/month</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Membership
