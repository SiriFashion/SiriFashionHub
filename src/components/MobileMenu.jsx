import { Link } from 'react-router-dom';

export default function MobileMenu({ isOpen, currentPath, onNavigateHomeSection, onNavigateContact, onClose }) {
  if (!isOpen) return null;

  return (
    <div id="mobile-menu" className="mobile-drawer">
      <nav aria-label="Mobile Navigation" className="mobile-nav">
        <Link
          to="/"
          onClick={onClose}
          className={`mobile-nav-link ${currentPath === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <a
          href="/#our-works"
          onClick={(e) => {
            e.preventDefault();
            onNavigateHomeSection('our-works');
          }}
          className="mobile-nav-link"
        >
          Our Works
        </a>
        <Link
          to="/reviews"
          onClick={onClose}
          className={`mobile-nav-link ${currentPath === '/reviews' ? 'active' : ''}`}
        >
          Reviews
        </Link>
        <a
          href="/reviews#contact"
          onClick={(e) => {
            e.preventDefault();
            onNavigateContact();
          }}
          className="mobile-nav-link"
        >
          Contact
        </a>
        <a
          href="/reviews#contact"
          onClick={(e) => {
            e.preventDefault();
            onNavigateContact();
          }}
          className="btn btn-primary btn-sm"
          style={{ marginTop: '0.5rem' }}
        >
          Contact Us
        </a>
      </nav>
    </div>
  );
}

