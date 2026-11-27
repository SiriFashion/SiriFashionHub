export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="feature-card">
      <div className="icon-badge">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc">{description}</p>
    </article>
  );
}

