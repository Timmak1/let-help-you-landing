import { Hero } from '@/components/home/Hero';
import { Sponsors } from '@/components/home/Sponsors';
import { AdDisplay } from '@/components/home/AdDisplay';
import { TournamentCard } from '@/components/tournaments/TournamentCard';
import { Tournament } from '@/types';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowRight, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const MOCK_TOURNAMENTS: Tournament[] = [
  {
    id: '1',
    title: 'University Rocket League Open',
    description: 'The premier college tournament for Rocket League in South Africa.',
    game: 'Rocket League',
    category: 'Campus Clash',
    status: 'Upcoming',
    startDate: 'June 20, 2025',
    prizePool: 'R10,000',
    banner: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/56456194-6d7d-4fce-9474-610c135dadb9/rocket-league-poster-bd0d2777-1777308658870.webp'
  },
  {
    id: '2',
    title: 'Kaizer Chiefs vs Orlando Pirates',
    description: 'Represent your team in this classic Soweto Derby esports edition.',
    game: 'EA FC 26',
    category: 'Mzansi E-Kick League',
    status: 'Ongoing',
    startDate: 'Now Playing',
    prizePool: 'R5,000',
    banner: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/56456194-6d7d-4fce-9474-610c135dadb9/psl-stadium-bg-18814b83-1777308659178.webp',
    pslTeam: 'Soweto Derby'
  },
  {
    id: '3',
    title: 'Wits University FIFA Cup',
    description: 'Exclusive to Wits University students.',
    game: 'EA FC 26',
    category: 'Campus Clash',
    status: 'Upcoming',
    startDate: 'July 2, 2025',
    prizePool: 'R3,000',
    banner: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/56456194-6d7d-4fce-9474-610c135dadb9/eafc-tournament-poster-ad75505d-1777308658550.webp'
  }
];

export function Home({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="flex flex-col gap-0">
      <Hero onExplore={() => onNavigate('tournaments')} />
      <Sponsors />
      
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Latest Updates</h2>
              <Button variant="link" className="text-primary font-bold">View All News</Button>
            </div>
            <AdDisplay />
          </div>
          
          <div className="bg-card/50 border border-border rounded-2xl p-6 h-fit">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="h-5 w-5 text-primary" />
              <h3 className="font-bold text-xl text-foreground">Top Teams</h3>
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer hover:bg-muted/50 p-2 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-muted-foreground w-4">{i}.</span>
                    <div className="h-10 w-10 rounded bg-muted flex items-center justify-center font-bold">
                      T{i}
                    </div>
                    <div>
                      <p className="font-bold text-sm">Team Elite {i}</p>
                      <p className="text-xs text-muted-foreground">2,450 Points</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-[10px]">+12%</Badge>
                </div>
              ))}
            </div>
            <Button className="w-full mt-6" variant="outline">View Leaderboard</Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-4xl font-black tracking-tighter mb-4 italic uppercase">Active Tournaments</h2>
            <p className="text-muted-foreground">Find the perfect tournament for your skill level.</p>
          </div>
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList className="bg-muted/50 p-1">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="campus">Campus Clash</TabsTrigger>
              <TabsTrigger value="mzansi">Mzansi League</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0" />
            <TabsContent value="campus" className="mt-0" />
            <TabsContent value="mzansi" className="mt-0" />
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_TOURNAMENTS.map((tournament) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <TournamentCard 
                tournament={tournament} 
                onClick={() => onNavigate(`tournament-${tournament.id}`)} 
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" onClick={() => onNavigate('tournaments')}>
            Browse All Tournaments
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <footer className="bg-muted/30 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src="https://storage.googleapis.com/dala-prod-public-storage/attachments/5ed372d4-96bd-470a-ac96-089ee92da1f4/1777307499002_inbound7813962547014691804.png" alt="DRVN" className="h-8" />
                <span className="font-bold text-xl tracking-tighter">DRVN <span className="text-primary">E-SPORTS</span></span>
              </div>
              <p className="text-muted-foreground max-w-sm mb-6">
                The leading platform for competitive gaming in South Africa. Connecting players, teams, and fans through high-octane esports action.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">Platform</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><button className="hover:text-foreground">Browse Tournaments</button></li>
                <li><button className="hover:text-foreground">Campus Clash</button></li>
                <li><button className="hover:text-foreground">Mzansi League</button></li>
                <li><button className="hover:text-foreground">Team Search</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">Support</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><button className="hover:text-foreground">Rules & Regs</button></li>
                <li><button className="hover:text-foreground">Score Reporting</button></li>
                <li><button className="hover:text-foreground">Terms of Service</button></li>
                <li><button className="hover:text-foreground">Contact Us</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 DRVN E-SPORTS. All rights reserved.</p>
            <div className="flex gap-6">
              <button className="hover:text-foreground">Privacy Policy</button>
              <button className="hover:text-foreground">Cookie Policy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}