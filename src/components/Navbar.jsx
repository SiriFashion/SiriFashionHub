import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToElement = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavigateHomeSection = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      scrollToElement(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const handleNavigateContact = () => {
    setMenuOpen(false);
    if (location.pathname === '/reviews') {
      scrollToElement('contact');
    } else {
      navigate('/reviews#contact');
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand-link" onClick={() => setMenuOpen(false)}>
          <img
            src={siteConfig.brand.logo}
            alt={`${siteConfig.brand.name} Official Logo`}
            className="brand-logo"
          />
          <div className="brand-text">
            <span className="brand-name">{siteConfig.brand.name}</span>
            <span className="brand-tagline">{siteConfig.brand.tagline}</span>
          </div>
        </Link>

        <nav aria-label="Primary Navigation" className="desktop-nav">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <a
            href="/#our-works"
            onClick={(e) => {
              e.preventDefault();
              handleNavigateHomeSection('our-works');
            }}
            className="nav-link"
          >
            Our Works
          </a>
          <Link
            to="/reviews"
            className={`nav-link ${location.pathname === '/reviews' ? 'active' : ''}`}
          >
            Reviews
          </Link>
          <a
            href="/reviews#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavigateContact();
            }}
            className="nav-link"
          >
            Contact
          </a>
        </nav>

        <div className="header-actions">
          <a
            href="/reviews#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavigateContact();
            }}
            className="btn btn-primary btn-sm desktop-cta"
          >
            Contact Us
          </a>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={menuOpen}
        currentPath={location.pathname}
        onNavigateHomeSection={handleNavigateHomeSection}
        onNavigateContact={handleNavigateContact}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}

