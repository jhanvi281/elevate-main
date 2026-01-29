import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Mic, Lightbulb, Coffee, Sparkles, Flag, Music, Handshake, Presentation, TrendingUp, MessageSquare } from 'lucide-react';

const timelineData = [
  {
    day: 'Day 1',
    date: 'February 20, 2026',
    title: 'POLICY, PROTOCOL & PERSPECTIVE',
    venue: 'Town Hall, PSIT Kanpur',
    events: [
      { time: '10:15 - 10:40', title: 'Inaugural Keynote: "The Vision"', description: "Speaker: Chief Guest. Topic: India's Roadmap for 2030.", icon: Mic },
      { time: '10:40 - 11:10', title: 'Government Insight Session', description: 'Speaker: Govt. Official (DST/MSME). "Unlocking Grants: How to access government funds."', icon: Lightbulb },
      { time: '11:30 - 12:15', title: 'Panel Discussion 1: The Incubator Roadmap', description: 'Speakers: Heads of Incubators & Senior Professors. Topic: "From Lab to Market: The role of academic incubators."', icon: Users },
      { time: '12:15 - 13:00', title: 'Masterclass: Design Thinking', description: 'Speaker: Industry Expert. A rapid workshop on validating a startup idea.', icon: Sparkles },
      { time: '13:00 - 14:00', title: 'Networking Luncheon', description: 'Lunch break and networking opportunity.', icon: Coffee },
      { time: '14:00 - 14:45', title: 'Fireside Chat: "The Struggle is Real"', description: 'Speaker: A Unicorn/Successful Founder. Informal interview style about their zero-to-one journey.', icon: MessageSquare },
      { time: '14:45 - 15:30', title: 'Startup Expo Walkthrough', description: 'Activity: VIPs and Experts formally tour the stalls. Startups stand at their booths for demo.', icon: MapPin },
      { time: '15:50 - 16:40', title: 'Skill Workshop: The Art of the Pitch Deck', description: 'Speaker: VC Analyst. Preparing students for Day 2.', icon: Presentation },
    ],
  },
  {
    day: 'Day 2',
    date: 'February 21, 2026',
    title: 'THE ARENA (PITCH & FUNDING)',
    venue: 'Town Hall, PSIT Kanpur',
    events: [
      { time: '09:30 - 11:00', title: 'The Grand Pitch: Seed Stage (Part 1)', description: 'Jury: VCs & Angel Investors.', icon: TrendingUp },
      { time: '11:00 - 11:20', title: 'Networking Tea Break (1)', description: '"Investor Connect"', icon: Coffee },
      { time: '11:20 - 12:00', title: 'Expert Talk: "Valuation & Equity"', description: 'Speaker: Finance Professor/CA. Explaining term sheets, equity dilution, and cap tables.', icon: Presentation },
      { time: '12:00 - 13:00', title: 'The Grand Pitch: Growth Stage (Part 2)', description: 'Jury: VCs. 5 Advanced Startups pitch (7 mins pitch + 3 mins Q&A each).', icon: TrendingUp },
      { time: '14:00 - 14:45', title: 'Reverse Pitch: "Wooing the Founder"', description: 'Activity: 3 Investors/Incubators take the stage to tell students why they should choose their firm/accelerator.', icon: Handshake },
      { time: '14:45 - 15:30', title: 'Elevator Pitch Royale (Open Mic)', description: 'Activity: 60-second rapid-fire pitches for audience members who didn\'t make the finals. Prize for "Crowd Favorite."', icon: Mic },
      { time: '15:50 - 16:30', title: 'Valedictory & Awards Ceremony', description: 'Chief Guest: Eminent Industry Leader. Grant distribution (5 Lakhs Grant).', icon: Sparkles },
    ],
  },
];

const EventTimeline = () => {
  return (
    <section id="timeline" className="py-20 bg-surface-overlay/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Event <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Two days packed with innovation, investment insights, and ecosystem building. Here's the complete schedule for ELEVATE 2026.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="space-y-16">
          {timelineData.map((dayData, dayIndex) => (
            <motion.div
              key={dayData.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: dayIndex * 0.2 }}
            >
              {/* Day Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                <div className="flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-full px-6 py-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-xl font-bold text-primary">{dayData.day}</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent hidden sm:block" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-muted-foreground text-sm">{dayData.date}</span>
                  <div className="flex items-center gap-1 text-primary/80 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{dayData.venue}</span>
                  </div>
                </div>
              </div>

              {/* Events for this day */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

                <div className="space-y-4">
                  {dayData.events.map((event, eventIndex) => {
                    const IconComponent = event.icon;
                    return (
                      <motion.div
                        key={eventIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: eventIndex * 0.05 }}
                        className="relative pl-12 sm:pl-16"
                      >
                        {/* Timeline Dot */}
                        <div className="absolute left-2 sm:left-4 top-4 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
                        </div>

                        {/* Event Card */}
                        <div className="card-elevated p-4 sm:p-5 rounded-xl hover:border-primary/40 transition-all duration-300 group">
                          <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                            {/* Icon */}
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base leading-tight">
                                  {event.title}
                                </h4>
                              </div>
                              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                                {event.description}
                              </p>
                              <div className="flex items-center gap-2 mt-2 text-primary/70">
                                <Clock className="w-3.5 h-3.5" />
                                <span className="text-xs font-medium">{event.time}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          * Schedule is subject to minor adjustments. All sessions will be held at Town Hall, PSIT Kanpur.
        </motion.p>
      </div>
    </section>
  );
};

export default EventTimeline;
