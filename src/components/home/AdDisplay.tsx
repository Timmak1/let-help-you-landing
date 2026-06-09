import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ANNOUNCEMENTS = [
  {
    id: '1',
    title: 'Mzansi E-Kick League 2025 Registration Open',
    content: 'Represent your local PSL team and compete for the R50,000 prize pool. Early bird registration ends next week.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/56456194-6d7d-4fce-9474-610c135dadb9/psl-stadium-bg-18814b83-1777308659178.webp',
    date: 'Ends in 5 days',
    tag: 'League'
  },
  {
    id: '2',
    title: 'Campus Clash: College Qualifier #1',
    content: 'Calling all university students! Rocket League and EA FC 26 qualifiers are starting. Register your college team now.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/56456194-6d7d-4fce-9474-610c135dadb9/rocket-league-poster-bd0d2777-1777308658870.webp',
    date: 'Starts June 15',
    tag: 'Campus'
  },
  {
    id: '3',
    title: 'DRVN Pro Series: EA FC 26 Masters',
    content: 'The most prestigious EA FC tournament in South Africa. Top 16 players will fly to Johannesburg for the grand finals.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/56456194-6d7d-4fce-9474-610c135dadb9/eafc-tournament-poster-ad75505d-1777308658550.webp',
    date: 'Apply Now',
    tag: 'Pro'
  }
];

export function AdDisplay() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % ANNOUNCEMENTS.length);
  const prev = () => setCurrent((prev) => (prev === 0 ? ANNOUNCEMENTS.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img 
            src={ANNOUNCEMENTS[current].image} 
            alt={ANNOUNCEMENTS[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-8 w-full md:w-2/3">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              {ANNOUNCEMENTS[current].tag}
            </Badge>
            <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
              {ANNOUNCEMENTS[current].title}
            </h2>
            <p className="text-gray-300 mb-6 line-clamp-2">
              {ANNOUNCEMENTS[current].content}
            </p>
            <div className="flex items-center gap-4">
              <Button className="bg-white text-black hover:bg-white/90">
                Register Now
              </Button>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Calendar className="h-4 w-4" />
                {ANNOUNCEMENTS[current].date}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 right-8 flex gap-2">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={prev}
          className="rounded-full bg-black/20 border-white/20 text-white hover:bg-black/40"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={next}
          className="rounded-full bg-black/20 border-white/20 text-white hover:bg-black/40"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute top-8 right-8 flex gap-1">
        {ANNOUNCEMENTS.map((_, i) => (
          <div 
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-primary' : 'w-2 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}