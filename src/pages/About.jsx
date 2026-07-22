import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function About() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

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
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">
            <i className="fas fa-dumbbell"></i>
            <span>FitZone</span>
          </div>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="/#plans">Plans</a></li>
            <li><a href="/#trainers">Trainers</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="nav-buttons">
            <Link to="/login" className="btn btn-outline">Login</Link>
            <Link to="/register" className="btn btn-primary">Join Now</Link>
          </div>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ height: '50vh', background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920) center/cover' }}>
        <div className="container">
          <div className="hero-content">
            <h1>About FitZone</h1>
            <p>Transforming lives through fitness since 2015</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="about" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Story</h2>
            <p>From a small gym to a premier fitness destination</p>
          </div>
          <div className="about-content">
            <div className="about-image" style={{ height: '400px' }}>
              <div className="image-overlay">
                <i className="fas fa-play-circle"></i>
              </div>
            </div>
            <div className="about-text">
              <h3>Building Dreams, One Workout at a Time</h3>
              <p>FitZone was founded in 2015 with a simple mission: to make quality fitness accessible to everyone while maintaining the highest standards of equipment and service. What started as a small neighborhood gym has grown into a premier fitness destination with over 5,000 active members.</p>
              <p>Our journey began when our founder, a former professional athlete, noticed a gap in the fitness industry - gyms that were either too expensive or lacked quality equipment. FitZone was born to bridge that gap.</p>
              <p>Today, we pride ourselves on our state-of-the-art facilities, certified trainers, and supportive community that helps every member achieve their fitness goals.</p>
              <ul className="about-list">
                <li><i className="fas fa-check-circle"></i> 10+ Years of Excellence</li>
                <li><i className="fas fa-check-circle"></i> 5,000+ Happy Members</li>
                <li><i className="fas fa-check-circle"></i> 50+ Expert Trainers</li>
                <li><i className="fas fa-check-circle"></i> 100+ Weekly Classes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="features" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Mission & Vision</h2>
            <p>What drives us every day</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Our Mission</h3>
              <p>To provide a welcoming, supportive environment where people of all fitness levels can achieve their health and wellness goals through expert guidance and state-of-the-art facilities.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>To be the leading fitness destination known for transforming lives, building community, and making fitness accessible to everyone regardless of their background or experience level.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Our Values</h3>
              <p>Integrity, Excellence, Community, Innovation, and Inclusivity - these core values guide everything we do, from how we treat our members to the equipment we select.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="trainers" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Leadership Team</h2>
            <p>The people behind FitZone's success</p>
          </div>
          <div className="trainers-grid">
            <div className="trainer-card">
              <div className="trainer-image">
                <div className="trainer-overlay">
                  <div className="social-links">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
              </div>
              <div className="trainer-info">
                <h3>Michael Roberts</h3>
                <p className="trainer-specialty">Founder & CEO</p>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px', marginTop: '10px' }}>Former professional athlete with 15+ years in the fitness industry.</p>
              </div>
            </div>
            <div className="trainer-card">
              <div className="trainer-image">
                <div className="trainer-overlay">
                  <div className="social-links">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
              </div>
              <div className="trainer-info">
                <h3>Sarah Johnson</h3>
                <p className="trainer-specialty">Head Trainer</p>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px', marginTop: '10px' }}>Certified fitness expert with specialization in sports performance.</p>
              </div>
            </div>
            <div className="trainer-card">
              <div className="trainer-image">
                <div className="trainer-overlay">
                  <div className="social-links">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
              </div>
              <div className="trainer-info">
                <h3>David Chen</h3>
                <p className="trainer-specialty">Operations Manager</p>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px', marginTop: '10px' }}>Ensuring smooth operations and exceptional member experiences.</p>
              </div>
            </div>
            <div className="trainer-card">
              <div className="trainer-image">
                <div className="trainer-overlay">
                  <div className="social-links">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
              </div>
              <div className="trainer-info">
                <h3>Emily Williams</h3>
                <p className="trainer-specialty">Nutrition Director</p>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px', marginTop: '10px' }}>Registered dietitian specializing in sports nutrition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="features" style={{ padding: '80px 0', background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Achievements</h2>
            <p>Numbers that speak for themselves</p>
          </div>
          <div className="features-grid">
            <div className="feature-card" style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '48px', color: 'var(--primary-color)', marginBottom: '10px' }}>10+</h2>
              <p>Years in Business</p>
            </div>
            <div className="feature-card" style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '48px', color: 'var(--primary-color)', marginBottom: '10px' }}>5,000+</h2>
              <p>Active Members</p>
            </div>
            <div className="feature-card" style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '48px', color: 'var(--primary-color)', marginBottom: '10px' }}>50+</h2>
              <p>Expert Trainers</p>
            </div>
            <div className="feature-card" style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '48px', color: 'var(--primary-color)', marginBottom: '10px' }}>100+</h2>
              <p>Weekly Classes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-brand">
                <i className="fas fa-dumbbell"></i>
                <span>FitZone</span>
              </div>
              <p>Transform your body and life with FitZone Gym. Join our community of fitness enthusiasts today.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><a href="/#plans">Membership</a></li>
                <li><a href="/#trainers">Trainers</a></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Programs</h4>
              <ul>
                <li><a href="#">Personal Training</a></li>
                <li><a href="#">Group Classes</a></li>
                <li><a href="#">Yoga & Pilates</a></li>
                <li><a href="#">CrossFit</a></li>
                <li><a href="#">Nutrition Coaching</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <ul>
                <li><i className="fas fa-map-marker-alt"></i> 123 Fitness Street, Gym City</li>
                <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
                <li><i className="fas fa-envelope"></i> info@fitzone.com</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 FitZone Gym. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default About
