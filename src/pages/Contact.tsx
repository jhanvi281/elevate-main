import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, Users, User, Crown, Shield, Code, Star, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const teamMembers = {
  convener: {
    title: "Convener",
    icon: Crown,
    members: [
      {
        name: "Dr. Rajesh Kumar",
        role: "Faculty Convener",
        image: "/images/team/convener.jpg",
        email: "convener@elevate2026.com",
        phone: "+91 98765 43210",
        linkedin: "https://linkedin.com/in/rajeshkumar",
        instagram: "https://instagram.com/rajeshkumar"
      }
    ]
  },
  coConvener: {
    title: "Co-Conveners",
    icon: Shield,
    members: [
      {
        name: "Prof. Priya Sharma",
        role: "Faculty Co-Convener",
        image: "/images/team/co-convener-1.jpg",
        email: "priya@elevate2026.com",
        phone: "+91 98765 43211",
        linkedin: "https://linkedin.com/in/priyasharma",
        instagram: "https://instagram.com/priyasharma"
      },
      {
        name: "Dr. Amit Patel",
        role: "Faculty Co-Convener",
        image: "/images/team/co-convener-2.jpg",
        email: "amit@elevate2026.com",
        phone: "+91 98765 43212",
        linkedin: "https://linkedin.com/in/amitpatel",
        instagram: "https://instagram.com/amitpatel"
      }
    ]
  },
  coordinators: {
    title: "Coordinators",
    icon: Users,
    members: [
      {
        name: "Neha Gupta",
        role: "Event Coordinator",
        image: "/images/team/coordinator-1.jpg",
        email: "neha@elevate2026.com",
        phone: "+91 98765 43213",
        linkedin: "https://linkedin.com/in/nehagupta",
        instagram: "https://instagram.com/nehagupta"
      },
      {
        name: "Rohit Singh",
        role: "Logistics Coordinator",
        image: "/images/team/coordinator-2.jpg",
        email: "rohit@elevate2026.com",
        phone: "+91 98765 43214",
        linkedin: "https://linkedin.com/in/rohitsingh",
        instagram: "https://instagram.com/rohitsingh"
      }
    ]
  },
  eventLead: {
    title: "Event Lead",
    icon: Star,
    members: [
      {
        name: "Ananya Sharma",
        role: "Event Lead",
        image: "/images/team/event-lead.jpg",
        email: "ananya@elevate2026.com",
        phone: "+91 98765 43221",
        linkedin: "https://linkedin.com/in/ananyasharma",
        instagram: "https://instagram.com/ananyasharma",
        description: "Overall event management and team coordination"
      }
    ]
  },
  coEventLeads: {
    title: "Co-Event Leads",
    icon: Zap,
    members: [
      {
        name: "Rahul Verma",
        role: "Co-Event Lead",
        image: "/images/team/co-head-1.jpg",
        email: "rahul@elevate2026.com",
        phone: "+91 98765 43222",
        linkedin: "https://linkedin.com/in/rahulverma",
        instagram: "https://instagram.com/rahulverma",
        description: "Technical operations and infrastructure"
      },
      {
        name: "Karan Singh",
        role: "Co-Event Lead",
        image: "/images/team/co-head-3.jpg",
        email: "karan@elevate2026.com",
        phone: "+91 98765 43224",
        linkedin: "https://linkedin.com/in/karansingh",
        instagram: "https://instagram.com/karansingh",
        description: "Marketing, promotions and publicity"
      }
    ]
  },
  coreMembers: {
    title: "Core Members",
    icon: Award,
    members: [
      {
        name: "Sneha Reddy",
        role: "Core Member",
        image: "/images/team/core-member-1.jpg",
        email: "sneha@elevate2026.com",
        phone: "+91 98765 43225",
        linkedin: "https://linkedin.com/in/snehareddy",
        instagram: "https://instagram.com/snehareddy",
        description: "Event planning and coordination"
      },
      {
        name: "Amit Kumar",
        role: "Core Member",
        image: "/images/team/core-member-2.jpg",
        email: "amit.k@elevate2026.com",
        phone: "+91 98765 43226",
        linkedin: "https://linkedin.com/in/amitkumar",
        instagram: "https://instagram.com/amitkumar",
        description: "Logistics and venue management"
      },
      {
        name: "Divya Patel",
        role: "Core Member",
        image: "/images/team/core-member-3.jpg",
        email: "divya@elevate2026.com",
        phone: "+91 98765 43227",
        linkedin: "https://linkedin.com/in/divyapatel",
        instagram: "https://instagram.com/divyapatel",
        description: "Registration and participant management"
      },
      {
        name: "Rohit Sharma",
        role: "Core Member",
        image: "/images/team/core-member-4.jpg",
        email: "rohit.s@elevate2026.com",
        phone: "+91 98765 43228",
        linkedin: "https://linkedin.com/in/rohitsharma",
        instagram: "https://instagram.com/rohitsharma",
        description: "Technical support and troubleshooting"
      },
      {
        name: "Kavya Menon",
        role: "Core Member",
        image: "/images/team/core-member-5.jpg",
        email: "kavya@elevate2026.com",
        phone: "+91 98765 43229",
        linkedin: "https://linkedin.com/in/kavyamenon",
        instagram: "https://instagram.com/kavyamenon",
        description: "Design and creative content"
      },
      {
        name: "Arjun Nair",
        role: "Core Member",
        image: "/images/team/core-member-6.jpg",
        email: "arjun@elevate2026.com",
        phone: "+91 98765 43230",
        linkedin: "https://linkedin.com/in/arjunnair",
        instagram: "https://instagram.com/arjunnair",
        description: "Social media management"
      },
      {
        name: "Neha Gupta",
        role: "Core Member",
        image: "/images/team/core-member-7.jpg",
        email: "neha.g@elevate2026.com",
        phone: "+91 98765 43231",
        linkedin: "https://linkedin.com/in/nehagupta",
        instagram: "https://instagram.com/nehagupta",
        description: "Sponsor relations and partnerships"
      },
      {
        name: "Vikram Reddy",
        role: "Core Member",
        image: "/images/team/core-member-8.jpg",
        email: "vikram@elevate2026.com",
        phone: "+91 98765 43232",
        linkedin: "https://linkedin.com/in/vikramreddy",
        instagram: "https://instagram.com/vikramreddy",
        description: "Finance and budget management"
      },
      {
        name: "Anjali Singh",
        role: "Core Member",
        image: "/images/team/core-member-9.jpg",
        email: "anjali@elevate2026.com",
        phone: "+91 98765 43233",
        linkedin: "https://linkedin.com/in/anjalisingh",
        instagram: "https://instagram.com/anjalisingh",
        description: "Hospitality and guest management"
      },
      {
        name: "Suresh Kumar",
        role: "Core Member",
        image: "/images/team/core-member-10.jpg",
        email: "suresh@elevate2026.com",
        phone: "+91 98765 43234",
        linkedin: "https://linkedin.com/in/sureshkumar",
        instagram: "https://instagram.com/sureshkumar",
        description: "Documentation and reporting"
      }
    ]
  }
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8"
            >
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Get in Touch</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="text-foreground">Contact</span>
              <br />
              <span className="text-gradient">Our Team</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            >
              Meet the dedicated team behind ELEVATE 2026. Connect with us for any queries or collaborations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="hero" size="xl" className="group">
                Email Us
                <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Call Us
              </Button>
            </motion.div>

            {/* Floating Contact Icons */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0 }}
              className="absolute top-20 left-10 text-primary/20"
            >
              <Mail className="w-16 h-16" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-40 right-20 text-secondary/20"
            >
              <Phone className="w-12 h-12" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 left-20 text-primary/20"
            >
              <MapPin className="w-14 h-14" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          {Object.entries(teamMembers).map(([key, group], groupIndex) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                className="mb-20 last:mb-0"
              >
                {/* Section Header */}
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-4"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                    <span className="text-lg font-semibold text-primary">{group.title}</span>
                  </motion.div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    {group.title}
                  </h2>
                </div>

                {/* Team Members Grid */}
                <div className={`grid gap-6 ${
                  key === 'coreMembers' ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 
                  key === 'coEventLeads' ? 'md:grid-cols-2 max-w-4xl mx-auto' : 
                  key === 'coConvener' ? 'md:grid-cols-2' : 
                  'max-w-2xl mx-auto'
                }`}>
                  {group.members.map((member, memberIndex) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: memberIndex * 0.1 }}
                      className="group"
                    >
                      <div className="bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:border-primary/50">
                        {/* Profile Image */}
                        <div className="relative h-80 overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.src = `https://picsum.photos/seed/${member.name}/400/320.jpg`;
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Social Links Overlay */}
                          <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                            >
                              <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                              href={member.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
                            >
                              <Instagram className="w-5 h-5" />
                            </a>
                          </div>
                        </div>

                        {/* Member Info */}
                        <div className="p-6">
                          <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                          <p className="text-primary font-medium mb-4">{member.role}</p>
                          
                          {/* Contact Info */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                              <Mail className="w-4 h-4 flex-shrink-0" />
                              <a href={`mailto:${member.email}`} className="text-sm">
                                {member.email}
                              </a>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                              <Phone className="w-4 h-4 flex-shrink-0" />
                              <a href={`tel:${member.phone}`} className="text-sm">
                                {member.phone}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 relative bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                Send us a <span className="text-primary">Message</span>
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Have questions about ELEVATE 2026? We'd love to hear from you!
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <div className="text-center">
                  <Button variant="hero" size="xl" className="group">
                    Send Message
                    <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-border rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Quick <span className="text-primary">Contact</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              For general inquiries, sponsorships, or media partnerships
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:info@elevate2026.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@elevate2026.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 98765 43210
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                PSIT College, Kanpur
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button variant="hero" size="xl" asChild>
                <Link to="/">Back to Home</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/events">View Events</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
