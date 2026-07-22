import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [activeFaq, setActiveFaq] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent successfully! We\'ll get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
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

  const faqData = [
    {
      question: 'What are your membership options?',
      answer: 'We offer four membership plans: Basic ($29/month), Standard ($49/month), Premium ($79/month), and Elite ($149/month). Each plan includes different access levels and amenities.'
    },
    {
      question: 'Can I freeze my membership?',
      answer: 'Yes, you can freeze your membership for up to 3 months per year for medical reasons or travel. Contact our front desk for more details.'
    },
    {
      question: 'Do you offer personal training?',
      answer: 'Absolutely! We have 50+ certified personal trainers available for one-on-one sessions. Premium and Elite members receive complimentary PT sessions.'
    },
    {
      question: 'What amenities are included?',
      answer: 'All members have access to locker rooms and showers. Premium and Elite members also enjoy sauna, spa access, and VIP areas.'
    },
    {
      question: 'How do I cancel my membership?',
      answer: 'Memberships can be cancelled with 30 days notice. Visit our front desk or contact us via email to process your cancellation request.'
    }
  ]

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
            <h1>Contact Us</h1>
            <p>Get in touch with our team</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>We'd love to hear from you</p>
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
                  <p>6AM - 10PM for Basic & Standard</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="contact-text">
                  <h4>Social Media</h4>
                  <div className="social-links">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <div className="input-group">
                    <i className="fas fa-user"></i>
                    <input 
                      type="text" 
                      placeholder="Your full name" 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <div className="input-group">
                    <i className="fas fa-envelope"></i>
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <div className="input-group">
                    <i className="fas fa-phone"></i>
                    <input 
                      type="tel" 
                      placeholder="Your phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <div className="input-group">
                    <i className="fas fa-tag"></i>
                    <input 
                      type="text" 
                      placeholder="What is this regarding?" 
                      required
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <div className="input-group">
                    <textarea 
                      placeholder="Your message" 
                      rows="5" 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ padding: 0 }}>
        <div style={{ width: '100%', height: '400px', background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920) center/cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', color: 'var(--text-light)' }}>
            <i className="fas fa-map-marker-alt" style={{ fontSize: '48px', marginBottom: '20px' }}></i>
            <h3>Find Us Here</h3>
            <p>123 Fitness Street, Gym City, GC 12345</p>
            <button className="btn btn-primary" style={{ marginTop: '20px' }}>Get Directions</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="features" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="faq-item" 
                style={{
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  padding: '20px',
                  marginBottom: '15px',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <h4 
                  onClick={() => toggleFaq(index)}
                  style={{
                    color: 'var(--text-light)',
                    marginBottom: '10px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  {faq.question}
                  <span style={{ fontSize: '20px', color: 'var(--primary-color)' }}>
                    {activeFaq === index ? '-' : '+'}
                  </span>
                </h4>
                {activeFaq === index && (
                  <p style={{ color: 'var(--text-gray)', lineHeight: '1.6' }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
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

export default Contact
