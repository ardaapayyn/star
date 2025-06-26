import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });
  const [currentReview, setCurrentReview] = useState(0);

  // Scroll handler for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Prenotazione inviata con successo! Ti contatteremo presto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2'
    });
  };

  // Reviews data
  const reviews = [
    {
      name: "Marco Rossi",
      rating: 5,
      text: "Atmosfera incredibile e pizza fantastica! Il servizio è impeccabile e l'ambiente è molto elegante.",
      date: "2 settimane fa"
    },
    {
      name: "Giulia Bianchi",
      rating: 5,
      text: "Il miglior ristorante della zona! I kebab sono deliziosi e la presentazione dei piatti è da alta cucina.",
      date: "1 mese fa"
    },
    {
      name: "Alessandro Conti",
      rating: 5,
      text: "Esperienza culinaria eccezionale. Ingredienti di qualità superiore e atmosfera rilassante.",
      date: "3 settimane fa"
    }
  ];

  // Menu items
  const menuItems = {
    antipasti: [
      { name: "Antipasto della Casa", description: "Selezione di salumi e formaggi locali", price: "€15" },
      { name: "Bruschette Tradizionali", description: "Pomodori freschi, basilico e olio extravergine", price: "€8" },
      { name: "Antipasto Mediterraneo", description: "Olive, feta, verdure grigliate", price: "€12" }
    ],
    primi: [
      { name: "Spaghetti Carbonara", description: "Ricetta tradizionale romana", price: "€14" },
      { name: "Risotto ai Porcini", description: "Riso Carnaroli con funghi porcini", price: "€16" },
      { name: "Penne all'Arrabbiata", description: "Pomodoro, aglio, peperoncino", price: "€12" }
    ],
    secondi: [
      { name: "Pizza Margherita", description: "Pomodoro, mozzarella, basilico", price: "€10" },
      { name: "Pizza Diavola", description: "Pomodoro, mozzarella, salame piccante", price: "€13" },
      { name: "Kebab Speciale", description: "Carne marinata, verdure fresche, salse", price: "€11" }
    ],
    dolci: [
      { name: "Tiramisù della Casa", description: "Ricetta della nonna", price: "€7" },
      { name: "Cannoli Siciliani", description: "Ricotta fresca e gocce di cioccolato", price: "€6" },
      { name: "Gelato Artigianale", description: "3 gusti a scelta", price: "€5" }
    ]
  };

  // Auto-advance reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <h2 className="logo-text">Star Pizzeria & Kebab</h2>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <button 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
            <button 
              className={`nav-link ${activeSection === 'menu' ? 'active' : ''}`}
              onClick={() => scrollToSection('menu')}
            >
              Menu
            </button>
            <button 
              className={`nav-link ${activeSection === 'prenotazioni' ? 'active' : ''}`}
              onClick={() => scrollToSection('prenotazioni')}
            >
              Prenotazioni
            </button>
            <button 
              className={`nav-link ${activeSection === 'contatti' ? 'active' : ''}`}
              onClick={() => scrollToSection('contatti')}
            >
              Contatti
            </button>
          </div>

          <button 
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1585554934973-a0972837fb45" 
            alt="Restaurant atmosphere"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Star Pizzeria & Kebab</h1>
          <p className="hero-subtitle">Dove tradizione e sapore si incontrano</p>
          <button 
            className="hero-cta"
            onClick={() => scrollToSection('prenotazioni')}
          >
            Prenota Ora
          </button>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1698577294865-3d0e7300bc6a" 
                alt="Restaurant interior"
                className="about-img"
              />
            </div>
            <div className="about-content">
              <h2 className="section-title">La Nostra Storia</h2>
              <p className="about-text">
                Da tre generazioni, la famiglia Star porta avanti la tradizione culinaria italiana 
                con passione e dedizione. Nel nostro ristorante, ogni piatto racconta una storia 
                di sapori autentici e ingredienti selezionati.
              </p>
              <p className="about-text">
                Unendo la tradizione italiana alla cultura mediterranea, offriamo un'esperienza 
                gastronomica unica che celebra il meglio di entrambi i mondi. La nostra cucina 
                è un ponte tra culture, dove pizza e kebab convivono in perfetta armonia.
              </p>
              <div className="about-features">
                <div className="feature">
                  <span className="feature-icon">🍕</span>
                  <span className="feature-text">Pizza Artigianale</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🥙</span>
                  <span className="feature-text">Kebab Gourmet</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">👨‍🍳</span>
                  <span className="feature-text">Ricette Tradizionali</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu-section">
        <div className="container">
          <h2 className="section-title center">Il Nostro Menu</h2>
          <p className="section-subtitle center">Scopri i nostri piatti della tradizione</p>
          
          <div className="menu-categories">
            {Object.entries(menuItems).map(([category, items]) => (
              <div key={category} className="menu-category">
                <h3 className="category-title">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <div className="menu-items">
                  {items.map((item, index) => (
                    <div key={index} className="menu-item">
                      <div className="item-header">
                        <h4 className="item-name">{item.name}</h4>
                        <span className="item-price">{item.price}</span>
                      </div>
                      <p className="item-description">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <h2 className="section-title center">Cosa Dicono i Nostri Clienti</h2>
          <div className="reviews-carousel">
            <div className="review-card">
              <div className="review-stars">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="review-text">"{reviews[currentReview].text}"</p>
              <div className="review-author">
                <strong>{reviews[currentReview].name}</strong>
                <span className="review-date">{reviews[currentReview].date}</span>
              </div>
            </div>
            <div className="carousel-dots">
              {reviews.map((_, index) => (
                <button 
                  key={index}
                  className={`dot ${index === currentReview ? 'active' : ''}`}
                  onClick={() => setCurrentReview(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prenotazioni Section */}
      <section id="prenotazioni" className="booking-section">
        <div className="container">
          <div className="booking-grid">
            <div className="booking-info">
              <h2 className="section-title">Prenota il Tuo Tavolo</h2>
              <p className="booking-text">
                Vivi un'esperienza culinaria indimenticabile. Prenota il tuo tavolo 
                e lasciati conquistare dai nostri sapori autentici.
              </p>
              <div className="booking-features">
                <div className="booking-feature">
                  <span className="feature-icon">🕒</span>
                  <div>
                    <strong>Orari di Apertura</strong>
                    <p>Lun-Dom: 12:00 - 24:00</p>
                  </div>
                </div>
                <div className="booking-feature">
                  <span className="feature-icon">📞</span>
                  <div>
                    <strong>Prenotazioni Telefoniche</strong>
                    <p>+39 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefono</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Data</label>
                  <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Orario</label>
                  <select
                    id="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    required
                  >
                    <option value="">Seleziona orario</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="guests">Numero Ospiti</label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                >
                  <option value="1">1 persona</option>
                  <option value="2">2 persone</option>
                  <option value="3">3 persone</option>
                  <option value="4">4 persone</option>
                  <option value="5">5 persone</option>
                  <option value="6+">6+ persone</option>
                </select>
              </div>

              <button type="submit" className="submit-btn">
                Conferma Prenotazione
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contatti Section */}
      <section id="contatti" className="contact-section">
        <div className="container">
          <h2 className="section-title center">Contatti & Posizione</h2>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Indirizzo</strong>
                  <p>Via Roma 123, 00100 Roma, Italia</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Telefono</strong>
                  <p>+39 123 456 789</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>info@starpizzeriakebab.it</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <div>
                  <strong>Orari di Apertura</strong>
                  <p>Lunedì - Domenica: 12:00 - 24:00</p>
                </div>
              </div>

              <div className="social-links">
                <h4>Seguici sui Social</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon">📘 Facebook</a>
                  <a href="#" className="social-icon">📷 Instagram</a>
                  <a href="#" className="social-icon">🐦 Twitter</a>
                </div>
              </div>
            </div>

            <div className="map-container">
              <div className="map-placeholder">
                <img 
                  src="https://images.unsplash.com/photo-1551558493-23ad82b16536" 
                  alt="Restaurant location"
                  className="map-image"
                />
                <div className="map-overlay">
                  <p>Clicca per aprire in Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Star Pizzeria & Kebab</h3>
              <p>Dove tradizione e sapore si incontrano da tre generazioni.</p>
            </div>

            <div className="footer-section">
              <h4>Link Rapidi</h4>
              <ul>
                <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button onClick={() => scrollToSection('menu')}>Menu</button></li>
                <li><button onClick={() => scrollToSection('prenotazioni')}>Prenotazioni</button></li>
                <li><button onClick={() => scrollToSection('contatti')}>Contatti</button></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contatti</h4>
              <p>📍 Via Roma 123, Roma</p>
              <p>📞 +39 123 456 789</p>
              <p>✉️ info@starpizzeriakebab.it</p>
            </div>

            <div className="footer-section">
              <h4>Orari</h4>
              <p>Lunedì - Domenica</p>
              <p>12:00 - 24:00</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Star Pizzeria & Kebab. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${isScrolled ? 'visible' : ''}`}
        onClick={() => scrollToSection('home')}
      >
        ↑
      </button>
    </div>
  );
};

export default App;