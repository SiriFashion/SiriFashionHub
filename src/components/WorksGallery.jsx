import { worksData } from '../data/worksData';

export default function WorksGallery() {
  return (
    <section id="our-works" className="works-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-eyebrow">Portfolio Showcase</span>
          <h2 className="section-title">Our Creative Works</h2>
          <p className="section-lead">A glimpse of our designs, creations and styles.</p>
        </div>

        <div className="works-grid">
          {worksData.map((item) => (
            <article key={item.id} className="work-card">
              <div className="work-image-wrap">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="work-image"
                  loading="lazy"
                />
              </div>
              <div className="work-card-body">
                <h3 className="work-card-title">{item.title}</h3>
                <p className="work-card-desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

