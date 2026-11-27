import { MessageCircle, Shirt } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../config/siteConfig';

export default function ContactCTA() {
  return (
    <section id="contact-cta" className="cta-section">
      <svg
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '-4rem',
          left: '-4rem',
          width: '16rem',
          height: '16rem',
          color: 'var(--aqua-accent)',
          opacity: 0.18,
        }}
        viewBox="0 0 300 300"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="150" cy="150" r="130" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
      </svg>
      <svg
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          bottom: '-5rem',
          right: '-5rem',
          width: '18rem',
          height: '18rem',
          color: 'var(--aqua-accent)',
          opacity: 0.16,
        }}
        viewBox="0 0 300 300"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="150" cy="150" r="140" stroke="currentColor" strokeWidth="2" />
      </svg>
      <div className="container cta-inner" style={{ position: 'relative' }}>
        <div className="cta-icon-circle">
          <Shirt size={22} aria-hidden="true" />
        </div>

        <h2 className="section-title cta-title">Let&apos;s Create Something Beautiful</h2>

        <p className="section-lead cta-lead">
          Have an idea for your next outfit? We&apos;d love to hear from you.
        </p>

        <div className="cta-buttons">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <MessageCircle size={18} aria-hidden="true" />
            <span>WhatsApp Us</span>
          </a>

          <Link to="/reviews#contact" className="btn btn-secondary btn-secondary-ivory">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

