import { Scissors } from 'lucide-react';

const ABOUT_IMAGE = '/Outfits/From Vintage Saree to Designer Co-Ord Set.png';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-image-col">
          <div className="about-image-card">
            <img
              src={ABOUT_IMAGE}
              alt="Handcrafted boutique tailoring with turquoise silk fabric and gold embroidery thread"
              className="about-image"
              loading="lazy"
            />
          </div>
        </div>

        <div className="about-text-col">
          <div className="about-eyebrow-row">
            <Scissors size={18} aria-hidden="true" />
            <span className="section-eyebrow">Our Boutique Story</span>
          </div>

          <h2 className="section-title">Where Style Meets Elegance</h2>

          <p className="section-lead" style={{ maxWidth: '40rem' }}>
            At Siri Fashion Hub, we believe every outfit tells a story. Explore beautiful styles,
            thoughtful designs and fashion that celebrates your individuality. Our goal is to help
            every woman feel confident, comfortable and beautiful.
          </p>

          <div className="about-divider-row">
            <span className="about-divider-line" aria-hidden="true" />
            <span className="about-divider-text">
              Tailored for every celebration &amp; everyday grace
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

