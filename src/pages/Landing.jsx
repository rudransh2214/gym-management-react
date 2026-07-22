import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  const [scrolled, setScrolled] = useState(false)
  const [menuActive, setMenuActive] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)

    // Hide loading screen
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const toggleMenu = () => {
    setMenuActive(!menuActive)
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
    <>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-brand">
            <i className="fas fa-dumbbell"></i>
            <span>FitZone</span>
          </div>
          <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#plans">Plans</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-buttons">
            <Link to="/login" className="btn btn-outline">Login</Link>
            <Link to="/register" className="btn btn-primary">Join Now</Link>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Transform Your Body,<br />Transform Your Life</h1>
            <p>Join the premium fitness experience with world-class trainers, state-of-the-art equipment, and personalized workout plans.</p>
            <div className="hero-buttons">
              <Link to="/register" className="btn btn-primary btn-lg">Start Your Journey</Link>
              <a href="#about" className="btn btn-outline btn-lg">Learn More</a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <h3>5000+</h3>
                <p>Active Members</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Expert Trainers</p>
              </div>
              <div className="stat-item">
                <h3>100+</h3>
                <p>Weekly Classes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose FitZone?</h2>
            <p>Experience fitness like never before with our premium amenities</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-dumbbell"></i>
              </div>
              <h3>Modern Equipment</h3>
              <p>State-of-the-art fitness equipment from top brands worldwide</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>Expert Trainers</h3>
              <p>Certified professionals to guide your fitness journey</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>24/7 Access</h3>
              <p>Round the clock access to all gym facilities</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shower"></i>
              </div>
              <h3>Premium Amenities</h3>
              <p>Luxury locker rooms, showers, and sauna facilities</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3>Personal Training</h3>
              <p>Customized workout plans tailored to your goals</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Group Classes</h3>
              <p>Exciting group sessions from yoga to HIIT</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div className="image-overlay">
                <i className="fas fa-play-circle"></i>
              </div>
            </div>
            <div className="about-text">
              <h2>About FitZone Gym</h2>
              <p>Founded in 2015, FitZone has been transforming lives through fitness. Our mission is to make quality fitness accessible to everyone while maintaining the highest standards of service and equipment.</p>
              <p>With over 5000 active members and 50+ certified trainers, we provide a comprehensive fitness experience that goes beyond just working out. We focus on holistic wellness including nutrition, mental health, and lifestyle coaching.</p>
              <ul className="about-list">
                <li><i className="fas fa-check-circle"></i> 10+ Years of Excellence</li>
                <li><i className="fas fa-check-circle"></i> Certified Professional Trainers</li>
                <li><i className="fas fa-check-circle"></i> Modern Infrastructure</li>
                <li><i className="fas fa-check-circle"></i> Personalized Programs</li>
              </ul>
              <Link to="/about" className="btn btn-primary">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="plans" className="plans">
        <div className="container">
          <div className="section-header">
            <h2>Membership Plans</h2>
            <p>Choose the perfect plan for your fitness goals</p>
          </div>
          <div className="plans-grid">
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
              <Link to="/register" className="btn btn-outline">Choose Plan</Link>
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
              <Link to="/register" className="btn btn-primary">Choose Plan</Link>
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
              <Link to="/register" className="btn btn-outline">Choose Plan</Link>
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
              <Link to="/register" className="btn btn-primary">Choose Plan</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="trainers">
        <div className="container">
          <div className="section-header">
            <h2>Our Expert Trainers</h2>
            <p>Learn from the best in the fitness industry</p>
          </div>
          <div className="trainers-grid">
            <div className="trainer-card">
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
                <h3>Mike Johnson</h3>
                <p className="trainer-specialty">Strength & Conditioning</p>
                <div className="trainer-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.9)</span>
                </div>
              </div>
            </div>
            <div className="trainer-card">
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
                <h3>Sarah Williams</h3>
                <p className="trainer-specialty">Yoga & Pilates</p>
                <div className="trainer-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span>(4.8)</span>
                </div>
              </div>
            </div>
            <div className="trainer-card">
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
                <h3>David Chen</h3>
                <p className="trainer-specialty">CrossFit & HIIT</p>
                <div className="trainer-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(5.0)</span>
                </div>
              </div>
            </div>
            <div className="trainer-card">
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
                <h3>Emily Rodriguez</h3>
                <p className="trainer-specialty">Nutrition & Wellness</p>
                <div className="trainer-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span>(4.7)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to="/trainers" className="btn btn-primary">View All Trainers</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Members Say</h2>
            <p>Real stories from real transformations</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <i className="fas fa-quote-left"></i>
                <p>FitZone completely changed my life. The trainers are incredibly supportive and the facilities are top-notch. I've lost 30 pounds in 6 months!</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image"></div>
                <div className="author-info">
                  <h4>John Smith</h4>
                  <p>Member for 2 years</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <i className="fas fa-quote-left"></i>
                <p>The group classes are amazing! I've made so many friends and actually look forward to working out. The yoga classes with Sarah are life-changing.</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image"></div>
                <div className="author-info">
                  <h4>Lisa Anderson</h4>
                  <p>Member for 1 year</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <i className="fas fa-quote-left"></i>
                <p>Best investment I've ever made in myself. The personal training sessions helped me achieve goals I never thought possible. Highly recommend!</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image"></div>
                <div className="author-info">
                  <h4>Michael Brown</h4>
                  <p>Member for 3 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>Have questions? We're here to help</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>123 Fitness Street, Gym City, GC 12345</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>info@fitzone.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-text">
                  <h4>Hours</h4>
                  <p>24/7 for Premium & Elite Members</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
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
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#plans">Membership</a></li>
                <li><a href="#trainers">Trainers</a></li>
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
              <h4>Newsletter</h4>
              <p>Subscribe to get the latest updates and offers</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit"><i className="fas fa-paper-plane"></i></button>
              </form>
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

export default Landing
