import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { X, ChevronLeft, ChevronRight, Plus, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

// Event gallery images
const placeholderImages: GalleryImage[] = [
  // Opening Ceremony (10 slots)
  { id: 'oc1', src: '/images/opening-ceremony/1.jpg', alt: 'ELEVATE 2025 - Opening Ceremony' },
  { id: 'oc2', src: '/images/opening-ceremony/2.jpg', alt: 'ELEVATE 2025 - Opening Ceremony' },
  { id: 'oc3', src: '/images/opening-ceremony/3.jpg', alt: 'ELEVATE 2025 - Opening Ceremony' },
  { id: 'oc4', src: '/images/opening-ceremony/4.jpg', alt: 'ELEVATE 2025 - Opening Ceremony' },
  { id: 'oc5', src: '/images/opening-ceremony/5.jpg', alt: 'ELEVATE 2025 - Opening Ceremony' },
  { id: 'oc6', src: '/images/opening-ceremony/6.jpg', alt: 'ELEVATE 2025 - Opening Ceremony' },
  { id: 'oc7', src: '/images/opening-ceremony/7.jpg', alt: 'ELEVATE 2025 - Opening Ceremony' },
  { id: 'oc8', src: '/images/opening-ceremony/8.jpg', alt: 'ELEVATE 2025 - Opening Ceremony' },
  { id: 'oc9', src: '/images/opening-ceremony/9.jpg', alt: 'ELEVATE 2025 - Opening Ceremony' },
  { id: 'oc10', src: '/images/opening-ceremony/10.jpg', alt: 'ELEVATE 2025 - Opening Ceremony' },
  
  // Tech Talks (10 slots)
  { id: 'tt1', src: '/images/tech-talks/1.jpg', alt: 'ELEVATE 2025 - Tech Talks' },
  { id: 'tt2', src: '/images/tech-talks/2.jpg', alt: 'ELEVATE 2025 - Tech Talks' },
  { id: 'tt3', src: '/images/tech-talks/3.jpg', alt: 'ELEVATE 2025 - Tech Talks' },
  { id: 'tt4', src: '/images/tech-talks/4.jpg', alt: 'ELEVATE 2025 - Tech Talks' },
  { id: 'tt5', src: '/images/tech-talks/5.jpg', alt: 'ELEVATE 2025 - Tech Talks' },
  { id: 'tt6', src: '/images/tech-talks/6.jpg', alt: 'ELEVATE 2025 - Tech Talks' },
  { id: 'tt7', src: '/images/tech-talks/7.jpg', alt: 'ELEVATE 2025 - Tech Talks' },
  { id: 'tt8', src: '/images/tech-talks/8.jpg', alt: 'ELEVATE 2025 - Tech Talks' },
  { id: 'tt9', src: '/images/tech-talks/9.jpg', alt: 'ELEVATE 2025 - Tech Talks' },
  { id: 'tt10', src: '/images/tech-talks/10.jpg', alt: 'ELEVATE 2025 - Tech Talks' },
  
  // Team Building (10 slots)
  { id: 'tb1', src: '/images/team-building/1.jpg', alt: 'ELEVATE 2025 - Team Building' },
  { id: 'tb2', src: '/images/team-building/2.jpg', alt: 'ELEVATE 2025 - Team Building' },
  { id: 'tb3', src: '/images/team-building/3.jpg', alt: 'ELEVATE 2025 - Team Building' },
  { id: 'tb4', src: '/images/team-building/4.jpg', alt: 'ELEVATE 2025 - Team Building' },
  { id: 'tb5', src: '/images/team-building/5.jpg', alt: 'ELEVATE 2025 - Team Building' },
  { id: 'tb6', src: '/images/team-building/6.jpg', alt: 'ELEVATE 2025 - Team Building' },
  { id: 'tb7', src: '/images/team-building/7.jpg', alt: 'ELEVATE 2025 - Team Building' },
  { id: 'tb8', src: '/images/team-building/8.jpg', alt: 'ELEVATE 2025 - Team Building' },
  { id: 'tb9', src: '/images/team-building/9.jpg', alt: 'ELEVATE 2025 - Team Building' },
  { id: 'tb10', src: '/images/team-building/10.jpg', alt: 'ELEVATE 2025 - Team Building' },
  
  // Prize Distribution (10 slots)
  { id: 'pd1', src: '/images/prize-distribution/1.jpg', alt: 'ELEVATE 2025 - Prize Distribution' },
  { id: 'pd2', src: '/images/prize-distribution/2.jpg', alt: 'ELEVATE 2025 - Prize Distribution' },
  { id: 'pd3', src: '/images/prize-distribution/3.jpg', alt: 'ELEVATE 2025 - Prize Distribution' },
  { id: 'pd4', src: '/images/prize-distribution/4.jpg', alt: 'ELEVATE 2025 - Prize Distribution' },
  { id: 'pd5', src: '/images/prize-distribution/5.jpg', alt: 'ELEVATE 2025 - Prize Distribution' },
  { id: 'pd6', src: '/images/prize-distribution/6.jpg', alt: 'ELEVATE 2025 - Prize Distribution' },
  { id: 'pd7', src: '/images/prize-distribution/7.jpg', alt: 'ELEVATE 2025 - Prize Distribution' },
  { id: 'pd8', src: '/images/prize-distribution/8.jpg', alt: 'ELEVATE 2025 - Prize Distribution' },
  { id: 'pd9', src: '/images/prize-distribution/9.jpg', alt: 'ELEVATE 2025 - Prize Distribution' },
  { id: 'pd10', src: '/images/prize-distribution/10.jpg', alt: 'ELEVATE 2025 - Prize Distribution' }
];

// Group images by event while maintaining original order
const groupImagesByEvent = (images: GalleryImage[]) => {
  const sections = [
    'Opening Ceremony',
    'Tech Talks',
    'Team Building',
    'Prize Distribution'
  ];
  
  const grouped: Record<string, GalleryImage[]> = {};
  
  // Initialize all sections with empty arrays
  sections.forEach(section => {
    grouped[section] = [];
  });
  
  // Distribute images to their respective sections
  images.forEach(image => {
    const eventName = image.alt.split(' - ')[1];
    if (grouped[eventName]) {
      grouped[eventName].push(image);
    }
  });
  
  // Filter out empty sections
  const result: Record<string, GalleryImage[]> = {};
  sections.forEach(section => {
    if (grouped[section] && grouped[section].length > 0) {
      result[section] = grouped[section];
    }
  });
  
  return result;
};

// Carousel component for each section
const SectionCarousel = ({ 
  images, 
  title, 
  onImageClick 
}: { 
  images: GalleryImage[], 
  title: string, 
  onImageClick: (index: number) => void 
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
    dragFree: true
  });
  
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', onSelect);
    onSelect();
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-foreground/90">{title}</h3>
      <div className="relative group">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {images.map((image, index) => (
              <motion.div 
                key={image.id}
                className="relative flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] pl-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div 
                  className="relative aspect-[4/3] rounded-xl overflow-hidden bg-card border border-border cursor-pointer"
                  onClick={() => onImageClick(images.findIndex(img => img.id === image.id))}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={scrollPrev}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors ${!prevBtnEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!prevBtnEnabled}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={scrollNext}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors ${!nextBtnEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!nextBtnEnabled}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

const EventGallery = () => {
  const [images] = useState<GalleryImage[]>(placeholderImages);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Group images by event
  const groupedImages = groupImagesByEvent(images);

  const openLightbox = (index: number) => {
    if (images[index]?.src) {
      setSelectedImage(index);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section className="py-20 px-4 bg-surface-overlay relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Memories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            <span className="text-primary">ELEVATE 2025</span> Recap
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Relive the incredible moments from last year's event. Here's a glimpse of what made ELEVATE 2025 unforgettable!
          </p>
        </motion.div>

        {/* Gallery Carousels */}
        <div className="space-y-16 py-4">
          {Object.entries(groupedImages).map(([eventName, eventImages]) => (
            <SectionCarousel 
              key={eventName} 
              images={eventImages} 
              title={eventName}
              onImageClick={openLightbox}
            />
          ))}
        </div>

        {/* Add More Photos CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Want to add your photos from ELEVATE 2025? Contact us!
          </p>
          <Button variant="outline" className="gap-2 border-primary/50 hover:border-primary hover:bg-primary/10">
            <Plus className="w-4 h-4" />
            Submit Your Photos
          </Button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && images[selectedImage]?.src && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors z-50"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors z-50"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white font-medium">{images[selectedImage].alt}</p>
              <p className="text-white/50 text-sm mt-1">
                {selectedImage + 1} / {images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventGallery;
