import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EventTimeline from '@/components/EventTimeline';
import PrizesSection from '@/components/PrizesSection';
import SponsorMarquee from '@/components/SponsorMarquee';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import EventGallery from '@/components/EventGallery';
import { GridBackground } from '@/components/ui/grid-background';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <GridBackground className="fixed inset-0 z-0 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />

        <main>
          <HeroSection />
          <EventTimeline />
          <PrizesSection />
          <EventGallery />
          <SponsorMarquee />
          <CTASection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
