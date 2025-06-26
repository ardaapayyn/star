import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('it');
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
    const message = language === 'it' ? 
      'Prenotazione inviata con successo! Ti contatteremo presto.' :
      'Booking submitted successfully! We will contact you soon.';
    alert(message);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2'
    });
  };

  // Translations
  const t = {
    it: {
      nav: {
        home: 'Home',
        menu: 'Menu',
        booking: 'Prenotazioni',
        contact: 'Contatti'
      },
      hero: {
        title: 'Star',
        subtitle: 'Pizzeria & Kebap',
        description: 'Dove la tradizione della pizzeria incontra l\'autenticità del kebab',
        cta: 'Prenota Ora'
      },
      about: {
        title: 'Il Nostro Locale',
        text1: 'Scopri il nostro locale accogliente, dove la tradizione della pizzeria incontra l\'autenticità del kebab. Offriamo un\'ampia scelta di pizze preparate con impasto a lenta lievitazione naturale e kebab realizzati con carne selezionata e ingredienti freschi.',
        text2: 'Che tu scelga di gustare i nostri piatti sul posto, grazie ai comodi posti a sedere, o di portarli via con il servizio d\'asporto, la qualità è sempre garantita. Perfetto per una pausa pranzo veloce o una cena informale.',
        features: {
          dough: 'Impasto Lenta Lievitazione',
          meat: 'Carne Selezionata',
          outdoor: 'Tavoli All\'aperto'
        }
      },
      menu: {
        title: 'Il Nostro Menu',
        subtitle: 'Scopri i nostri piatti autentici',
        pizze_classiche: 'Pizze Classiche',
        pizze_baby: 'Pizze Baby',
        kebab: 'Kebab',
        calzoni: 'Calzoni',
        dolci: 'Dolci',
        piatti_asporto: 'Piatti d\'Asporto',
        frittelle: 'Frittelle',
        bevande: 'Bevande',
        birre: 'Birre'
      },
      reviews: {
        title: 'Cosa Dicono i Nostri Clienti'
      },
      booking: {
        title: 'Prenota il Tuo Tavolo',
        description: 'Vivi un\'esperienza culinaria autentica nel nostro locale accogliente. Prenota il tuo tavolo o ordina da asporto per gustare la qualità dei nostri piatti dove preferisci.',
        hours: 'Orari di Apertura',
        hours_text: 'Mar-Dom: 11:00 - 23:30\nLunedì: Chiuso',
        phone: 'Prenotazioni Telefoniche',
        services: 'Servizi Disponibili',
        services_text: 'Take Away • Tavoli All\'aperto • Parcheggio',
        form: {
          name: 'Nome Completo',
          email: 'Email',
          phone: 'Telefono',
          date: 'Data',
          time: 'Orario',
          time_select: 'Seleziona orario',
          guests: 'Numero Ospiti',
          guests_options: ['1 persona', '2 persone', '3 persone', '4 persone', '5 persone', '6+ persone'],
          submit: 'Conferma Prenotazione'
        }
      },
      contact: {
        title: 'Contatti & Posizione',
        address: 'Indirizzo',
        phone: 'Telefono',
        email: 'Email',
        hours: 'Orari di Apertura',
        hours_text: 'Martedì - Domenica: 11:00 - 23:30\nLunedì: Chiuso',
        payment: 'Metodi di Pagamento',
        payment_text: 'Contanti • Contactless • Mastercard\nVISA • Carta di debito • Maestro',
        services: 'Servizi',
        services_text: 'Accessibile • Aria condizionata\nTavoli all\'aperto • Parcheggio • Take away'
      },
      footer: {
        description: 'Dove la tradizione della pizzeria incontra l\'autenticità del kebab.',
        tagline: 'Impasto a lenta lievitazione e ingredienti selezionati dal 2011.',
        quick_links: 'Link Rapidi',
        contact: 'Contatti',
        hours: 'Orari',
        hours_text: 'Martedì - Domenica\n11:00 - 23:30\nLunedì: Chiuso',
        copyright: '© 2025 Star Pizzeria&Kebap. Tutti i diritti riservati.'
      }
    },
    en: {
      nav: {
        home: 'Home',
        menu: 'Menu',
        booking: 'Booking',
        contact: 'Contact'
      },
      hero: {
        title: 'Star',
        subtitle: 'Pizzeria & Kebap',
        description: 'Where pizza tradition meets kebab authenticity',
        cta: 'Book Now'
      },
      about: {
        title: 'Our Restaurant',
        text1: 'Discover our welcoming restaurant, where pizza tradition meets kebab authenticity. We offer a wide selection of pizzas made with naturally slow-rising dough and kebabs made with selected meat and fresh ingredients.',
        text2: 'Whether you choose to enjoy our dishes on-site, thanks to comfortable seating, or take them away with our takeaway service, quality is always guaranteed. Perfect for a quick lunch break or informal dinner.',
        features: {
          dough: 'Slow Rising Dough',
          meat: 'Selected Meat',
          outdoor: 'Outdoor Seating'
        }
      },
      menu: {
        title: 'Our Menu',
        subtitle: 'Discover our authentic dishes',
        pizze_classiche: 'Classic Pizzas',
        pizze_baby: 'Baby Pizzas',
        kebab: 'Kebab',
        calzoni: 'Calzones',
        dolci: 'Desserts',
        piatti_asporto: 'Takeaway Dishes',
        frittelle: 'Fritters',
        bevande: 'Beverages',
        birre: 'Beers'
      },
      reviews: {
        title: 'What Our Customers Say'
      },
      booking: {
        title: 'Book Your Table',
        description: 'Experience an authentic culinary journey in our welcoming restaurant. Book your table or order takeaway to enjoy the quality of our dishes wherever you prefer.',
        hours: 'Opening Hours',
        hours_text: 'Tue-Sun: 11:00 - 23:30\nMonday: Closed',
        phone: 'Phone Reservations',
        services: 'Available Services',
        services_text: 'Take Away • Outdoor Seating • Parking',
        form: {
          name: 'Full Name',
          email: 'Email',
          phone: 'Phone',
          date: 'Date',
          time: 'Time',
          time_select: 'Select time',
          guests: 'Number of Guests',
          guests_options: ['1 person', '2 people', '3 people', '4 people', '5 people', '6+ people'],
          submit: 'Confirm Booking'
        }
      },
      contact: {
        title: 'Contact & Location',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Opening Hours',
        hours_text: 'Tuesday - Sunday: 11:00 - 23:30\nMonday: Closed',
        payment: 'Payment Methods',
        payment_text: 'Cash • Contactless • Mastercard\nVISA • Debit card • Maestro',
        services: 'Services',
        services_text: 'Accessible • Air conditioning\nOutdoor seating • Parking • Take away'
      },
      footer: {
        description: 'Where pizza tradition meets kebab authenticity.',
        tagline: 'Slow-rising dough and selected ingredients since 2011.',
        quick_links: 'Quick Links',
        contact: 'Contact',
        hours: 'Hours',
        hours_text: 'Tuesday - Sunday\n11:00 - 23:30\nMonday: Closed',
        copyright: '© 2024 Star Pizzeria&Kebap. All rights reserved.'
      }
    }
  };

  // Reviews data
  const reviews = [
    {
      name: "Marco Rossi",
      rating: 5,
      text: language === 'it' ? 
        "Pizza incredibile con impasto a lenta lievitazione! Il kebab è autentico e saporito. Locale accogliente e servizio ottimo." :
        "Incredible pizza with slow-rising dough! The kebab is authentic and tasty. Welcoming place and excellent service.",
      date: language === 'it' ? "2 settimane fa" : "2 weeks ago"
    },
    {
      name: "Giulia Bianchi",
      rating: 5,
      text: language === 'it' ? 
        "Il miglior kebab di Cassano d'Adda! Ingredienti freschi e carne selezionata. Consiglio vivamente i tavoli all'aperto." :
        "The best kebab in Cassano d'Adda! Fresh ingredients and selected meat. I highly recommend the outdoor tables.",
      date: language === 'it' ? "1 mese fa" : "1 month ago"
    },
    {
      name: "Alessandro Conti",
      rating: 5,
      text: language === 'it' ? 
        "Tradizione italiana e sapori autentici del Medio Oriente si incontrano perfettamente. Take away veloce e qualità garantita." :
        "Italian tradition and authentic Middle Eastern flavors meet perfectly. Fast takeaway and guaranteed quality.",
      date: language === 'it' ? "3 settimane fa" : "3 weeks ago"
    }
  ];

  // Complete real menu items from the original menu
  const menuItems = {
    pizze_classiche: [
      { name: "FOCACCIA LISCIA", description: "Pane oregano", price: "4.50€"},
      { name: "MARINARA", description: "Pomodoro, aglio, origano", price: "6.00€", baby: "5.00€" },
      { name: "MARGHERITA", description: "Pomodoro, mozzarella", price: "7.00€", baby: "6.00€" },
      { name: "COTTO", description: "Pomodoro, mozzarella, prosciutto cotto", price: "7.50€", baby: "6.50€" },
      { name: "FUNGHI", description: "Pomodoro, mozzarella, funghi", price: "6.50€", baby: "7.00€" },
      { name: "GORGONZOLA", description: "Pomodoro, mozzarella, gorgonzola", price: "6.50€", baby: "7.50€" },
      { name: "MELANZANE", description: "Pomodoro, mozzarella, melanzane alla griglia", price: "6.50€", baby: "7.00€" },
      { name: "OLIVE", description: "Pomodoro, mozzarella, olive", price: "6.50€", baby: "7.00€" },
      { name: "PUGLIESE", description: "Pomodoro, mozzarella, cipolla, origano", price: "6.50€", baby: "7.00€" },
      { name: "NAPOLETANA", description: "Pomodoro, mozzarella, alici, capperi", price: "6.50€", baby: "7.00€" },
      { name: "ZUCCHINE", description: "Pomodoro, mozzarella, zucchine alla griglia", price: "6.50€", baby: "7.00€" },
      { name: "CARCIOFI", description: "Pomodoro, mozzarella, carciofi", price: "6.50€", baby: "7.00€" },
      { name: "PEPERONI", description: "Pomodoro, mozzarella, peperoni alla griglia", price: "6.50€", baby: "7.00€" },
      { name: "SALAME DOLCE", description: "Pomodoro, mozzarella, salame dolce", price: "6.50€", baby: "7.00€" },
      { name: "WURSTEL", description: "Pomodoro, mozzarella, wurstel", price: "7.00€", baby: "7.50€" },
      { name: "SALSICCIA", description: "Pomodoro, mozzarella, salsiccia fresca", price: "7.00€", baby: "7.50€" },
      { name: "SPECK", description: "Pomodoro, mozzarella, speck", price: "7.00€", baby: "7.50€" },
      { name: "DIAVOLA", description: "Pomodoro, mozzarella, salame piccante", price: "7.00€", baby: "7.50€" },
      { name: "RUCOLA", description: "Pomodoro, mozzarella, rucola", price: "7.00€", baby: "7.50€" },
      { name: "TONNO", description: "Pomodoro, mozzarella, tonno", price: "7.00€", baby: "7.50€" },
      { name: "PATATINE", description: "Pomodoro, mozzarella, patatine fritte", price: "7.00€", baby: "7.50€" },
      { name: "MARELIANA", description: "Pomodoro, mozzarella, acciughe, origano, parmigiano grattato", price: "7.50€", baby: "8.00€" },
      { name: "PATATOSA", description: "Pomodoro, mozzarella, prosciutto cotto, patatine fritte", price: "7.50€", baby: "8.00€" },
      { name: "CONTADINA", description: "Pomodoro, mozzarella, salsiccia, peperoni, funghi", price: "7.50€", baby: "8.00€" },
      { name: "VEGETARIANA", description: "Pomodoro, mozzarella, verdure miste, olive nere, origano", price: "7.50€", baby: "8.00€" },
      { name: "TONNO e CIPOLLA", description: "Pomodoro, mozzarella, tonno, cipolla", price: "7.50€", baby: "8.00€" },
      { name: "COTTO e FUNGHI", description: "Pomodoro, mozzarella, prosciutto cotto, funghi champignon", price: "7.50€", baby: "8.00€" },
      { name: "4 FORMAGGI", description: "Pomodoro, mozzarella, gorgonzola, taleggio, grana", price: "7.50€", baby: "8.00€" },
      { name: "FRUTTI DI MARE", description: "Pomodoro, mozzarella, frutti di mare", price: "7.50€", baby: "8.00€" },
      { name: "KEBAB", description: "Pomodoro, mozzarella, carne döner kebab, cipolla, pomodoro, salad", price: "7.50€", baby: "8.00€" }
    ],
    kebab: [
      { name: "KEBAB", description: "Completo", price: "9.50€" },
      { name: "KEBAB", description: "Normale", price: "8.50€" }
    ],
    calzoni: [
      { name: "CALZONE LISCIO", description: "Pomodoro, mozzarella, prosciutto cotto", price: "7.50€" },
      { name: "FARCITO", description: "Pomodoro, mozzarella, prosciutto cotto, funghi champignon, carciofi", price: "8.50€" },
      { name: "KEBAB", description: "Pomodoro, mozzarella, carne döner kebab", price: "8.50€" }
    ],
    dolci: [
      { name: "BAKLAVA", description: "Dolce turco con pasta sfoglia, pistacchio, burro, sciroppo di zucchero", price: "al pezzo 1.00€", extra: "a metà 4.00€" },
      { name: "TIRAMISU", description: "", price: "4.00€" }
    ],
    piatti_asporto: [
      { name: "DONER KEBAB", description: "con Riso e Verdure", price: "9.50€" },
      { name: "DONER KEBAB", description: "con Patate e Verdure", price: "9.50€" },
      { name: "DONER KEBAB", description: "con VASCHETTA, piccola tutto carne", price: "6.00€" },
      { name: "DONER KEBAB", description: "con VASCHETTA, media tutto carne", price: "8.00€" },
      { name: "DONER KEBAB", description: "con VASCHETTA, grande tutto carne", price: "14.00€" },
      { name: "HAMBURGER", description: "con Patate e Verdure", price: "9.50€" },
      { name: "HAMBURGER", description: "Normale con salad, pomodoro, cipolla, patatine salsa", price: "7.50€" },
      { name: "FALAFEL", description: "con Patate e Verdure", price: "9.50€" },
      { name: "FALAFEL", description: "con riso e verdure (pomodoro, insalata, cipolla, pomodoro, salsa, salsa yogurt)", price: "9.50€" },
      { name: "FALAFEL", description: "con Riso e Verdure", price: "9.50€" },
      { name: "INSALATA TONNO", description: "Insalata, cipolla, pomodoro, mais, olive, tonno, salsa di yogurt", price: "7.00€" }
    ],
    frittelle: [
      { name: "FAGOTTINO", description: "al pezzo formaggio, speck", price: "1.50€" },
      { name: "ARANCINO", description: "al pezzo riso, formaggio, speck", price: "1.50€" },
      { name: "FALAFEL", description: "Supplì di ceci al prosciutto di ceci e verdure mischiate, speck", price: "1.00€" },
      { name: "ALETTE DI POLLO", description: "3 pezzi", price: "3.00€" },
      { name: "POLPETTE DI POLLO", description: "6 pezzi", price: "3.50€" },
      { name: "DOLCINI SILUROS", description: "Spinaci, patate, 3 spezie patate, 3 porzioni", price: "6.50€" },
      { name: "CROCCHETTE DI PATATE", description: "5 pezzi", price: "2.50€" },
      { name: "PATATINE FRITTE", description: "piccole", price: "2.50€" },
      { name: "PATATINE FRITTE", description: "grandi", price: "6.00€" }
    ],
    bevande: [
      { name: "CAFFE", description: "", price: "1.00€" },
      { name: "COCA COLA", description: "", price: "1.50€" },
      { name: "BIBITA IN LATTINA", description: "33 cl", price: "2.00€" },
      { name: "ACQUA NAT./FRIZZ.", description: "50 cl", price: "1.50€" },
      { name: "ENERGY DRINK", description: "Red Bull", price: "3.00€" }
    ],
    birre: [
      { name: "BIRRA in LATTINA", description: "33 cl", price: "2.00€" },
      { name: "BIRRA in BOTTIGLIA", description: "33 cl (Ceres, Heineken, Beck's)", price: "2.50€" },
      { name: "BIRRA in BOTTIGLIA", description: "33 cl (Ceres, Super Tennent's)", price: "3.00€" },
      { name: "BIRRA in BOTTIGLIA", description: "66 cl (Moretti, Heineken)", price: "3.50€" }
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
            <div className="logo-container">
              <span className="logo-star">★</span>
              <div className="logo-text">
                <span className="logo-main">Star</span>
                <span className="logo-sub">Pizzeria & Kebap</span>
              </div>
            </div>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <button 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              {t[language].nav.home}
            </button>
            <button 
              className={`nav-link ${activeSection === 'menu' ? 'active' : ''}`}
              onClick={() => scrollToSection('menu')}
            >
              {t[language].nav.menu}
            </button>
            <button 
              className={`nav-link ${activeSection === 'prenotazioni' ? 'active' : ''}`}
              onClick={() => scrollToSection('prenotazioni')}
            >
              {t[language].nav.booking}
            </button>
            <button 
              className={`nav-link ${activeSection === 'contatti' ? 'active' : ''}`}
              onClick={() => scrollToSection('contatti')}
            >
              {t[language].nav.contact}
            </button>
            
            <div className="language-switcher">
              <button 
                className={`lang-btn ${language === 'it' ? 'active' : ''}`}
                onClick={() => setLanguage('it')}
              >
                IT
              </button>
              <button 
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
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
          <div className="hero-logo">
            <span className="hero-star">★</span>
            <h1 className="hero-title">{t[language].hero.title}</h1>
          </div>
          <h2 className="hero-subtitle">{t[language].hero.subtitle}</h2>
          <p className="hero-description">{t[language].hero.description}</p>
          <button 
            className="hero-cta"
            onClick={() => scrollToSection('prenotazioni')}
          >
            {t[language].hero.cta}
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
              <h2 className="section-title">{t[language].about.title}</h2>
              <p className="about-text">
                {t[language].about.text1}
              </p>
              <p className="about-text">
                {t[language].about.text2}
              </p>
              <div className="about-features">
                <div className="feature">
                  <span className="feature-icon">🍕</span>
                  <span className="feature-text">{t[language].about.features.dough}</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🥙</span>
                  <span className="feature-text">{t[language].about.features.meat}</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🏠</span>
                  <span className="feature-text">{t[language].about.features.outdoor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu-section">
        <div className="container">
          <h2 className="section-title center">{t[language].menu.title}</h2>
          <p className="section-subtitle center">{t[language].menu.subtitle}</p>
          
          <div className="menu-categories">
            {Object.entries(menuItems).map(([category, items]) => (
              <div key={category} className="menu-category">
                <h3 className="category-title">
                  {t[language].menu[category] || category.toUpperCase()}
                </h3>
                <div className="menu-items">
                  {items.map((item, index) => (
                    <div key={index} className="menu-item">
                      <div className="item-header">
                        <h4 className="item-name">{item.name}</h4>
                        <div className="item-prices">
                          <span className="item-price">{item.price}</span>
                          {item.baby && <span className="item-price-baby">Baby: {item.baby}</span>}
                          {item.extra && <span className="item-price-extra">{item.extra}</span>}
                        </div>
                      </div>
                      {item.description && <p className="item-description">{item.description}</p>}
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
          <h2 className="section-title center">{t[language].reviews.title}</h2>
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
              <h2 className="section-title">{t[language].booking.title}</h2>
              <p className="booking-text">
                {t[language].booking.description}
              </p>
              <div className="booking-features">
                <div className="booking-feature">
                  <span className="feature-icon">🕒</span>
                  <div>
                    <strong>{t[language].booking.hours}</strong>
                    <p style={{whiteSpace: 'pre-line'}}>{t[language].booking.hours_text}</p>
                  </div>
                </div>
                <div className="booking-feature">
                  <span className="feature-icon">📞</span>
                  <div>
                    <strong>{t[language].booking.phone}</strong>
                    <p>+39 0363 376 006</p>
                  </div>
                </div>
                <div className="booking-feature">
                  <span className="feature-icon">🚗</span>
                  <div>
                    <strong>{t[language].booking.services}</strong>
                    <p>{t[language].booking.services_text}</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t[language].booking.form.name}</label>
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
                  <label htmlFor="email">{t[language].booking.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{t[language].booking.form.phone}</label>
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
                  <label htmlFor="date">{t[language].booking.form.date}</label>
                  <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">{t[language].booking.form.time}</label>
                  <select
                    id="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    required
                  >
                    <option value="">{t[language].booking.form.time_select}</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                    <option value="23:00">23:00</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="guests">{t[language].booking.form.guests}</label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                >
                  {t[language].booking.form.guests_options.map((option, index) => (
                    <option key={index} value={index + 1}>{option}</option>
                  ))}
                  <option value="6+">6+ {language === 'it' ? 'persone' : 'people'}</option>
                </select>
              </div>

              <button type="submit" className="submit-btn">
                {t[language].booking.form.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contatti Section */}
      <section id="contatti" className="contact-section">
        <div className="container">
          <h2 className="section-title center">{t[language].contact.title}</h2>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>{t[language].contact.address}</strong>
                  <p>Via Milano 13<br/>20062 Cassano D'adda, Italia</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>{t[language].contact.phone}</strong>
                  <p>+39 0363 376 006</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>{t[language].contact.email}</strong>
                  <p>anilcocen2011@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <div>
                  <strong>{t[language].contact.hours}</strong>
                  <p style={{whiteSpace: 'pre-line'}}>{t[language].contact.hours_text}</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">💳</span>
                <div>
                  <strong>{t[language].contact.payment}</strong>
                  <p style={{whiteSpace: 'pre-line'}}>{t[language].contact.payment_text}</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">⭐</span>
                <div>
                  <strong>{t[language].contact.services}</strong>
                  <p style={{whiteSpace: 'pre-line'}}>{t[language].contact.services_text}</p>
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
                  <p>📍 Via Milano 13, Cassano D'adda</p>
                  <p>{language === 'it' ? 'Clicca per aprire in Google Maps' : 'Click to open in Google Maps'}</p>
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
              <div className="footer-logo">
                <span className="logo-star">★</span>
                <div className="logo-text">
                  <span className="logo-main">Star</span>
                  <span className="logo-sub">Pizzeria & Kebap</span>
                </div>
              </div>
              <p>{t[language].footer.description}</p>
              <p>{t[language].footer.tagline}</p>
            </div>

            <div className="footer-section">
              <h4>{t[language].footer.quick_links}</h4>
              <ul>
                <li><button onClick={() => scrollToSection('home')}>{t[language].nav.home}</button></li>
                <li><button onClick={() => scrollToSection('menu')}>{t[language].nav.menu}</button></li>
                <li><button onClick={() => scrollToSection('prenotazioni')}>{t[language].nav.booking}</button></li>
                <li><button onClick={() => scrollToSection('contatti')}>{t[language].nav.contact}</button></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>{t[language].footer.contact}</h4>
              <p>📍 Via Milano 13, Cassano D'adda</p>
              <p>📞 +39 0363 376 006</p>
              <p>✉️ anilcocen2011@gmail.com</p>
            </div>

            <div className="footer-section">
              <h4>{t[language].footer.hours}</h4>
              <p style={{whiteSpace: 'pre-line'}}>{t[language].footer.hours_text}</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>{t[language].footer.copyright}</p>
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