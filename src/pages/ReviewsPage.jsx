import { Clock, Heart, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import ContactCard from '../components/ContactCard';
import { reviewsData } from '../data/reviewsData';
import { getEmailUrl, getWhatsAppUrl, siteConfig } from '../config/siteConfig';

export default function ReviewsPage() {
  return (
    <>
      <section id="reviews" className="reviews-hero">
        <div className="container reviews-hero-inner">
          <div className="hero-badge">
            <Heart size={15} fill="currentColor" aria-hidden="true" />
            <span>Client Stories</span>
          </div>

          <h1 className="hero-title">Love From Our Customers</h1>

          <p className="section-lead" style={{ maxWidth: '40rem' }}>
            Every design is special, but the smiles and experiences of our customers make it even
            more meaningful.
          </p>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="marquee-stack">
          <div className="marquee-row" aria-label="Customer reviews row 1">
            <div className="marquee-track marquee-track-left">
              {[0, 1].map((groupIdx) => (
                <div key={`top-group-${groupIdx}`} className="marquee-group" aria-hidden={groupIdx === 1}>
                  {[...reviewsData.slice(0, 3), ...reviewsData.slice(0, 3)].map((review, idx) => (
                    <div key={`top-${groupIdx}-${review.id}-${idx}`} className="marquee-item">
                      <TestimonialCard review={review} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="marquee-row" aria-label="Customer reviews row 2">
            <div className="marquee-track marquee-track-right">
              {[0, 1].map((groupIdx) => (
                <div key={`bottom-group-${groupIdx}`} className="marquee-group" aria-hidden={groupIdx === 1}>
                  {[...reviewsData.slice(3), ...reviewsData.slice(3)].map((review, idx) => (
                    <div key={`bottom-${groupIdx}-${review.id}-${idx}`} className="marquee-item">
                      <TestimonialCard review={review} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-container">
          <div className="section-header-center">
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="section-title">We&apos;d Love to Hear From You</h2>
            <p className="section-lead">
              Whether you have a design in mind, a question or simply want to explore our work,
              reach out to us.
            </p>
          </div>

          <div className="contact-cards-grid">
            <ContactCard
              icon={MessageCircle}
              title="Chat with Us"
              description="Connect with us directly on WhatsApp for enquiries and design discussions."
              ctaLabel="Message on WhatsApp"
              href={getWhatsAppUrl()}
              variant="primary"
              external
            />
            <ContactCard
              icon={Mail}
              title="Email Us"
              description="Send us your questions, ideas or enquiries. We'd be happy to hear from you."
              ctaLabel="Send an Email"
              href={getEmailUrl()}
              variant="secondary"
            />
          </div>

          <div className="boutique-info-bar">
            <div className="info-item">
              <MapPin size={20} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} aria-hidden="true" />
              <div>
                <h4 className="info-item-title">Boutique Location</h4>
                <p className="info-item-text">{siteConfig.contact.location}</p>
                <a
                  href={siteConfig.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '0.75rem' }}
                >
                  <MapPin size={16} aria-hidden="true" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
            <div className="info-item">
              <Phone size={20} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} aria-hidden="true" />
              <div>
                <h4 className="info-item-title">Phone Number</h4>
                <p className="info-item-text">{siteConfig.contact.phoneDisplay}</p>
              </div>
            </div>
            <div className="info-item">
              <Clock size={20} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} aria-hidden="true" />
              <div>
                <h4 className="info-item-title">Opening Hours</h4>
                <p className="info-item-text">{siteConfig.contact.openingHours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

