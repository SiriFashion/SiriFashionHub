import { BadgeCheck, Heart, Leaf, Sparkles } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WorksGallery from '../components/WorksGallery';
import FeatureCard from '../components/FeatureCard';
import ContactCTA from '../components/ContactCTA';

const features = [
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Care and attention in every design.',
  },
  {
    icon: Sparkles,
    title: 'Unique Designs',
    description: 'Styles that stand out and feel special.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Craftsmanship',
    description: 'Attention to detail and quality.',
  },
  {
    icon: Leaf,
    title: 'Personal Touch',
    description: 'Fashion and service tailored to you.',
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorksGallery />

      <section className="features-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">The Boutique Promise</span>
            <h2 className="section-title">Why Choose Us</h2>
          </div>

          <div className="features-grid">
            {features.map((feat) => (
              <FeatureCard
                key={feat.title}
                icon={feat.icon}
                title={feat.title}
                description={feat.description}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

