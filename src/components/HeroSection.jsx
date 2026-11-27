import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

const HERO_IMAGE = '/Outfits/Magenta Bodice with Brocade Skirt.png';

export default function HeroSection() {
  const handleScrollToWorks = (e) => {
    e.preventDefault();
    const el = document.getElementById('our-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-section">
      <svg className="hero-decor-svg" viewBox="0 0 400 400" fill="none" aria-hidden="true">
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
        <circle cx="200" cy="200" r="145" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={15} aria-hidden="true" />
            <span>{siteConfig.brand.tagline}</span>
          </div>

          <h1 className="hero-title">Elegance Designed Just for You.</h1>

          <p className="section-lead" style={{ maxWidth: '40rem' }}>
            Discover beautiful fashion, unique designs and styles crafted to make every moment special.
          </p>

          <div className="hero-buttons">
            <a href="#our-works" onClick={handleScrollToWorks} className="btn btn-primary">
              Explore Our Works
            </a>
            <Link to="/reviews#contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="hero-media-col">
          <div className="hero-frame-wrap">
            <div className="hero-backdrop" aria-hidden="true" />
            <div className="hero-image-card">
              <img
                src={HERO_IMAGE}
                alt="Bespoke teal silk saree and custom embroidered blouse at Siri Fashion Hub atelier"
                className="hero-image"
              />
            </div>

            <div className="hero-identity-card">
              <img
                src={siteConfig.brand.banner}
                alt={`${siteConfig.brand.name} Visual Identity`}
                className="hero-identity-img"
              />
              <div>
                <p className="hero-identity-title">Bespoke Tailoring</p>
                <p className="hero-identity-sub">Crafted with Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

