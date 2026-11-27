import { Star } from 'lucide-react';

export default function TestimonialCard({ review }) {
  const initial = review.name.charAt(0).toUpperCase();

  return (
    <article className="testimonial-card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div className="stars-row" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: review.rating }).map((_, idx) => (
            <Star key={idx} size={18} fill="currentColor" aria-hidden="true" />
          ))}
        </div>
        <p className="testimonial-quote">&ldquo;{review.text}&rdquo;</p>
      </div>

      <footer className="testimonial-footer">
        {review.avatar ? (
          <img
            src={review.avatar}
            alt={review.name}
            className="testimonial-avatar"
            loading="lazy"
          />
        ) : (
          <div className="testimonial-initial" aria-hidden="true">
            {initial}
          </div>
        )}
        <div>
          <h3 className="testimonial-name">{review.name}</h3>
          <p className="testimonial-service">{review.service}</p>
        </div>
      </footer>
    </article>
  );
}

