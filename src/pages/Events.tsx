import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Clock, MapPin, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CardContainer, CardBody, CardItem } from '@/components/ui/card-3d';

const allEvents = [
  {
    id: 1,
    title: 'Hackathon 24H',
    category: 'Technical',
    description: 'Build innovative solutions in 24 hours with your team. Solve real-world problems and showcase your coding skills.',
    date: 'March 15, 2026',
    time: '9:00 AM - 9:00 AM (Next Day)',
    venue: 'Main Auditorium',
    teamSize: '2-4 members',
    registrations: 234,
    prize: '₹2,00,000',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Code Arena',
    category: 'Technical',
    description: 'Competitive programming challenge for coding enthusiasts. Test your algorithmic skills against the best.',
    date: 'March 15, 2026',
    time: '2:00 PM - 5:00 PM',
    venue: 'CS Lab 1',
    teamSize: 'Individual',
    registrations: 156,
    prize: '₹50,000',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Battle of Bands',
    category: 'Cultural',
    description: 'Showcase your musical talent and rock the stage. From rock to classical, all genres welcome.',
    date: 'March 16, 2026',
    time: '6:00 PM - 10:00 PM',
    venue: 'Open Air Theatre',
    teamSize: '3-6 members',
    registrations: 89,
    prize: '₹75,000',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Valorant Championship',
    category: 'Gaming',
    description: 'Compete in the ultimate esports battle. Show your tactical skills and teamwork.',
    date: 'March 16, 2026',
    time: '10:00 AM - 6:00 PM',
    venue: 'Gaming Zone',
    teamSize: '5 members',
    registrations: 312,
    prize: '₹1,00,000',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'AI Workshop',
    category: 'Workshop',
    description: 'Hands-on workshop on building AI applications. Learn from industry experts.',
    date: 'March 15, 2026',
    time: '11:00 AM - 1:00 PM',
    venue: 'Seminar Hall',
    teamSize: 'Individual',
    registrations: 178,
    prize: 'Certificate + Goodies',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Dance Off',
    category: 'Cultural',
    description: 'Express yourself through dance and win big. All dance styles welcome.',
    date: 'March 17, 2026',
    time: '4:00 PM - 8:00 PM',
    venue: 'Main Stage',
    teamSize: '4-8 members',
    registrations: 145,
    prize: '₹60,000',
    image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&h=400&fit=crop',
  },
  {
    id: 7,
    title: 'Robo Wars',
    category: 'Technical',
    description: 'Build and battle robots in an epic showdown. Engineering meets combat.',
    date: 'March 17, 2026',
    time: '10:00 AM - 4:00 PM',
    venue: 'Engineering Block',
    teamSize: '3-5 members',
    registrations: 67,
    prize: '₹80,000',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
  },
  {
    id: 8,
    title: 'Photography Contest',
    category: 'Cultural',
    description: 'Capture moments that tell stories. Theme-based photography competition.',
    date: 'March 15-17, 2026',
    time: 'All Day',
    venue: 'Campus Wide',
    teamSize: 'Individual',
    registrations: 234,
    prize: '₹30,000',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop',
  },
  {
    id: 9,
    title: 'FIFA Tournament',
    category: 'Gaming',
    description: 'Show your football gaming skills in EA FC tournament.',
    date: 'March 16, 2026',
    time: '11:00 AM - 5:00 PM',
    venue: 'Gaming Zone',
    teamSize: 'Individual',
    registrations: 198,
    prize: '₹40,000',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=600&h=400&fit=crop',
  },
];

const categories = ['All', 'Technical', 'Cultural', 'Gaming', 'Workshop'];

const categoryColors: Record<string, string> = {
  Technical: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Cultural: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  Gaming: 'bg-green-500/20 text-green-400 border-green-500/30',
  Workshop: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

const EventsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = allEvents.filter((event) => {
    const matchesCategory = activeCategory === 'All' || event.category === activeCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="py-12 bg-surface-overlay/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Explore <span className="text-gradient">Events</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover 50+ exciting events across technical, cultural, gaming, and workshop categories
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl mx-auto"
            >
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-card border-border"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? 'default' : 'secondary'}
                    onClick={() => setActiveCategory(category)}
                    className="transition-all duration-300"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground">
                Showing {filteredEvents.length} events
              </p>
              <Button variant="ghost" size="sm" className="gap-2">
                <Filter className="w-4 h-4" />
                More Filters
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <CardContainer key={event.id} className="inter-var">
                  <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      {event.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-2"
                    >
                      {event.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <div className="relative h-40 w-full overflow-hidden rounded-xl group-hover/card:shadow-xl">
                        <img
                          src={event.image}
                          height="1000"
                          width="1000"
                          className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                        <Badge className={`absolute top-2 left-2 ${categoryColors[event.category]} border`}>
                          {event.category}
                        </Badge>
                      </div>
                    </CardItem>

                    {/* Event Details */}
                    <div className="mt-4 space-y-2 text-sm text-neutral-500 dark:text-neutral-300">
                      <CardItem translateZ="40" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                      </CardItem>
                      <CardItem translateZ="40" className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{event.teamSize}</span>
                      </CardItem>
                      <CardItem translateZ="40" className="flex items-center gap-2">
                        <span className="font-bold text-primary">{event.prize}</span> Prize
                      </CardItem>
                    </div>

                    <div className="flex justify-between items-center mt-8">
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        More details
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-primary transition-colors duration-200"
                      >
                        Register Now
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No events found matching your criteria.</p>
                <Button variant="outline" className="mt-4" onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;
