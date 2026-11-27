export default function ContactCard({
  icon: Icon,
  title,
  description,
  ctaLabel,
  href,
  variant = 'primary',
  external = false,
}) {
  return (
    <article className="contact-card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div className="icon-badge icon-badge-lg">
          <Icon size={26} aria-hidden="true" />
        </div>
        <h3 className="contact-card-title">{title}</h3>
        <p className="testimonial-quote">{description}</p>
      </div>

      <footer>
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
        >
          <Icon size={18} aria-hidden="true" />
          <span>{ctaLabel}</span>
        </a>
      </footer>
    </article>
  );
}

