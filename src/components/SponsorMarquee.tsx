import { motion } from 'framer-motion';

const sponsors = [
  { name: 'TechCorp', logo: '🏢' },
  { name: 'InnovateLabs', logo: '💡' },
  { name: 'CodeNinja', logo: '🥷' },
  { name: 'CloudTech', logo: '☁️' },
  { name: 'DataDriven', logo: '📊' },
  { name: 'AIFirst', logo: '🤖' },
  { name: 'WebWizards', logo: '🧙' },
  { name: 'AppMasters', logo: '📱' },
];

const SponsorMarquee = () => {
  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm uppercase tracking-wider text-muted-foreground"
        >
          Proudly Sponsored By
        </motion.p>
      </div>

      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee container */}
        <div className="flex overflow-hidden">
          <div className="flex animate-[marquee_30s_linear_infinite]">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-8 min-w-[150px]"
              >
                <div className="flex items-center gap-3 px-6 py-4 rounded-lg bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 hover:bg-card group cursor-pointer">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{sponsor.logo}</span>
                  <span className="text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                    {sponsor.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorMarquee;
