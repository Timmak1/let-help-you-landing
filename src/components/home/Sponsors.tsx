import { motion } from 'framer-motion';

const SPONSORS = [
  { name: 'Red Bull', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Red_Bull_Racing_logo.svg/1200px-Red_Bull_Racing_logo.svg.png' },
  { name: 'Monster Energy', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Monster_Energy_logo.svg/1200px-Monster_Energy_logo.svg.png' },
  { name: 'Logitech G', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Logitech_G_logo.svg/1200px-Logitech_G_logo.svg.png' },
  { name: 'Nvidia', logo: 'https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/1280px-Nvidia_logo.svg.png' },
  { name: 'PSL', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Premier_Soccer_League.svg/1200px-Premier_Soccer_League.svg.png' },
];

export function Sponsors() {
  return (
    <section className="py-12 border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Official Partners & Sponsors
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60">
          {SPONSORS.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              whileHover={{ opacity: 1, scale: 1.05 }}
              className="grayscale hover:grayscale-0 transition-all cursor-pointer"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="h-8 md:h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}