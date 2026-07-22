import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/dashboard.css'

function Register() {
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    membership: '',
    terms: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const { firstName, lastName, email, phone, password, confirmPassword, membership, terms } = formData
    
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    
    if (password.length < 6) {
      alert('Password must be at least 6 characters!')
      return
    }
    
    if (!terms) {
      alert('Please agree to the Terms & Conditions')
      return
    }
    
    if (firstName && lastName && email && phone && password && membership) {
      const userData = {
        firstName,
        lastName,
        email,
        phone,
        membership,
        joinDate: new Date().toISOString(),
        status: 'active'
      }
      
      const users = JSON.parse(localStorage.getItem('users')) || []
      users.push(userData)
      localStorage.setItem('users', JSON.stringify(users))
      
      localStorage.setItem('currentUser', JSON.stringify(userData))
      localStorage.setItem('userType', 'member')
      
      alert('Registration successful! Welcome to FitZone!')
      setTimeout(() => {
        navigate('/dashboard')
      }, 2000)
    } else {
      alert('Please fill in all fields')
    }
  }

  const handleSocialLogin = () => {
    alert('Social registration would be implemented here')
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
            <Link to="/login" className="btn btn-outline">Login</Link>
            <Link to="/register" className="btn btn-primary">Register</Link>
          </div>
        </div>
      </nav>

      {/* Register Section */}
      <section className="auth-section">
        <div className="container">
          <div className="auth-container register-container">
            <div className="auth-image">
              <div className="auth-overlay">
                <h2>Join FitZone Today!</h2>
                <p>Start your fitness journey with us and transform your life</p>
              </div>
            </div>
            <div className="auth-form-container">
              <div className="auth-header">
                <h2>Create Your Account</h2>
                <p>Fill in the details to get started</p>
              </div>
              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <div className="input-group">
                      <i className="fas fa-user"></i>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        placeholder="First name" 
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <div className="input-group">
                      <i className="fas fa-user"></i>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        placeholder="Last name" 
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
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
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <div className="input-group">
                    <i className="fas fa-phone"></i>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="Enter your phone number" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
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
                      placeholder="Create a password" 
                      required
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button type="button" className="toggle-password" onClick={togglePassword}>
                      <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="input-group">
                    <i className="fas fa-lock"></i>
                    <input 
                      type={showConfirmPassword ? 'text' : 'password'} 
                      id="confirmPassword" 
                      name="confirmPassword" 
                      placeholder="Confirm your password" 
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    <button type="button" className="toggle-password" onClick={toggleConfirmPassword}>
                      <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="membership">Select Membership Plan</label>
                  <div className="input-group">
                    <i className="fas fa-crown"></i>
                    <select 
                      id="membership" 
                      name="membership" 
                      required
                      value={formData.membership}
                      onChange={handleChange}
                    >
                      <option value="">Choose a plan</option>
                      <option value="basic">Basic - $29/month</option>
                      <option value="standard">Standard - $49/month</option>
                      <option value="premium">Premium - $79/month</option>
                      <option value="elite">Elite - $149/month</option>
                    </select>
                  </div>
                </div>
                <div className="form-options">
                  <label className="checkbox-container">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                    />
                    <span className="checkmark"></span>
                    I agree to the <a href="#">Terms & Conditions</a>
                  </label>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Create Account</button>
                <div className="form-divider">
                  <span>or register with</span>
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
                  <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register
