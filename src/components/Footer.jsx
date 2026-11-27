import { Camera, Mail, MessageCircle } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getEmailUrl, getWhatsAppUrl, siteConfig } from '../config/siteConfig';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleWorksClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById('our-works')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#our-works');
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/reviews') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/reviews#contact');
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand-col">
            <Link to="/" className="brand-link" style={{ width: 'fit-content' }}>
              <img
                src={siteConfig.brand.logo}
                alt={`${siteConfig.brand.name} Logo`}
                className="brand-logo"
              />
              <div className="brand-text">
                <span className="brand-name">{siteConfig.brand.name}</span>
                <span className="brand-tagline">{siteConfig.brand.tagline}</span>
              </div>
            </Link>
            <p className="testimonial-quote" style={{ maxWidth: '24rem' }}>
              {siteConfig.brand.description}
            </p>
          </div>

          <div className="footer-col footer-links-col">
            <h3 className="footer-heading">Quick Links</h3>
            <nav aria-label="Footer Navigation" className="footer-nav">
              <Link to="/" className="footer-link">
                Home
              </Link>
              <a href="/#our-works" onClick={handleWorksClick} className="footer-link">
                Our Works
              </a>
              <Link to="/reviews" className="footer-link">
                Reviews
              </Link>
              <a href="/reviews#contact" onClick={handleContactClick} className="footer-link">
                Contact
              </a>
            </nav>
          </div>

          <div className="footer-col footer-contact-col">
            <h3 className="footer-heading">Connect With Us</h3>
            <div className="footer-nav">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <MessageCircle size={18} color="var(--primary)" aria-hidden="true" />
                <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
              </a>
              <a href={getEmailUrl()} className="footer-link">
                <Mail size={18} color="var(--primary)" aria-hidden="true" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <a
                href={siteConfig.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Camera size={18} color="var(--primary)" aria-hidden="true" />
                <span>Instagram: {siteConfig.social.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">{siteConfig.brand.copyright}</p>
          <p className="footer-copy">Crafted with care &amp; elegance.</p>
        </div>
      </div>
    </footer>
  );
}

