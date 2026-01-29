import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Gift, Award, Medal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const prizes = [
  {
    icon: <Trophy className="w-12 h-12" />,
    title: 'Grand Prize',
    amount: '₹2,00,000',
    description: 'For the overall best project at Hackathon',
    color: 'from-yellow-400 to-amber-500',
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: 'Category Winners',
    amount: '₹50,000',
    description: 'For each category winner across events',
    color: 'from-gray-300 to-gray-400',
  },
  {
    icon: <Medal className="w-10 h-10" />,
    title: 'Runner Ups',
    amount: '₹25,000',
    description: 'For second place in major competitions',
    color: 'from-amber-600 to-amber-700',
  },
  {
    icon: <Gift className="w-10 h-10" />,
    title: 'Special Prizes',
    amount: '₹1,00,000+',
    description: 'Sponsor gifts, internships, and more',
    color: 'from-primary to-accent',
  },
];

const PrizesSection = () => {
  return (
    <section id="prizes" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Win <span className="text-gradient">Big</span> Prizes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over ₹5,00,000 in cash prizes, internships, gadgets, and exclusive opportunities
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-card rounded-xl border border-border p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(45_100%_51%/0.1)]"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${prize.color} text-primary-foreground mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {prize.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{prize.title}</h3>
              <p className="text-3xl font-bold text-primary mb-2">{prize.amount}</p>
              <p className="text-sm text-muted-foreground">{prize.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="group">
            View All Prizes
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizesSection;
