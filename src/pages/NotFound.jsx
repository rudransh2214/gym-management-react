import { Link } from 'react-router-dom'
import '../css/dashboard.css'

function NotFound() {
  return (
    <div className="dashboard-page">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column', textAlign: 'center' }}>
        <h1 style={{ fontSize: '120px', color: 'var(--primary-color)', marginBottom: '20px' }}>404</h1>
        <h2 style={{ color: 'var(--text-light)', marginBottom: '20px' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-gray)', marginBottom: '30px' }}>The page you're looking for doesn't exist or has been moved.</p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">Go Home</Link>
          <Link to="/dashboard" className="btn btn-outline">Go to Dashboard</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
