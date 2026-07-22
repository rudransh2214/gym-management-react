import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/dashboard.css'

function Login() {
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (email && password) {
      if (email === 'admin@fitzone.com' && password === 'admin123') {
        localStorage.setItem('userType', 'admin')
        localStorage.setItem('userEmail', email)
        alert('Welcome Admin!')
        setTimeout(() => {
          navigate('/dashboard')
        }, 1500)
      } else {
        localStorage.setItem('userType', 'member')
        localStorage.setItem('userEmail', email)
        alert('Login successful!')
        setTimeout(() => {
          navigate('/dashboard')
        }, 1500)
      }
    } else {
      alert('Please fill in all fields')
    }
  }

  const handleSocialLogin = () => {
    alert('Social login would be implemented here')
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
    <div className="auth-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">
            <i className="fas fa-dumbbell"></i>
            <span>FitZone</span>
          </div>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#plans">Plans</a></li>
            <li><a href="/#trainers">Trainers</a></li>
          </ul>
          <div className="nav-buttons">
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/register" className="btn btn-outline">Register</Link>
          </div>
        </div>
      </nav>

      {/* Login Section */}
      <section className="auth-section">
        <div className="container">
          <div className="auth-container">
            <div className="auth-image">
              <div className="auth-overlay">
                <h2>Welcome Back!</h2>
                <p>Access your dashboard and manage your fitness journey</p>
              </div>
            </div>
            <div className="auth-form-container">
              <div className="auth-header">
                <h2>Login to Your Account</h2>
                <p>Enter your credentials to continue</p>
              </div>
              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-group">
                    <i className="fas fa-envelope"></i>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="Enter your email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-group">
                    <i className="fas fa-lock"></i>
                    <input 
                      type={showPassword ? 'text' : 'password'} 
                      id="password" 
                      name="password" 
                      placeholder="Enter your password" 
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button" className="toggle-password" onClick={togglePassword}>
                      <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                  </div>
                </div>
                <div className="form-options">
                  <label className="checkbox-container">
                    <input type="checkbox" id="remember" />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                  <a href="#" className="forgot-password">Forgot Password?</a>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
                <div className="form-divider">
                  <span>or login with</span>
                </div>
                <div className="social-login">
                  <button type="button" className="btn social-btn google" onClick={handleSocialLogin}>
                    <i className="fab fa-google"></i>
                    Google
                  </button>
                  <button type="button" className="btn social-btn facebook" onClick={handleSocialLogin}>
                    <i className="fab fa-facebook-f"></i>
                    Facebook
                  </button>
                </div>
                <div className="auth-footer">
                  <p>Don't have an account? <Link to="/register">Register here</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
