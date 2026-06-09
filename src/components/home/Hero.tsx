import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Trophy, ArrowRight, Gamepad2 } from 'lucide-react';

export function Hero({ onExplore }: { onExplore: () => void }) {
  const bgImage = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/56456194-6d7d-4fce-9474-610c135dadb9/esports-arena-bg-36403d3c-1777308659428.webp";
  const designImage = "https://storage.googleapis.com/dala-prod-public-storage/attachments/5ed372d4-96bd-470a-ac96-089ee92da1f4/1777307498996_inbound4816251130378444940.png";

  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Decorative Design Asset */}
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 hidden lg:block">
        <img src={designImage} alt="Design" className="h-full w-full object-cover grayscale brightness-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6 backdrop-blur-sm">
            <Trophy className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Welcome to the Arena</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-none">
            DRIVE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x">LEGACY</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
            The ultimate esports platform for competitive players. Join Campus Clash or represent your PSL team in the Mzansi E-Kick League.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-14 px-8 text-lg font-bold group" onClick={onExplore}>
              Join Tournament
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold bg-background/50 backdrop-blur-md">
              <Gamepad2 className="mr-2 h-5 w-5" />
              Browse Games
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-border/50 pt-8">
            <div>
              <p className="text-3xl font-bold">50K+</p>
              <p className="text-sm text-muted-foreground">Active Players</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="text-3xl font-bold">120</p>
              <p className="text-sm text-muted-foreground">Daily Events</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="text-3xl font-bold">$10K</p>
              <p className="text-sm text-muted-foreground">Prize Pool Weekly</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}