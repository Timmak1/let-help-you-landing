import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Shield, GraduationCap, Star, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { TournamentCard } from '@/components/tournaments/TournamentCard';
import { Tournament } from '@/types';

const CAMPUS_TOURNAMENTS: Tournament[] = [
  {
    id: 'c1',
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
    id: 'c2',
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

const MZANSI_TOURNAMENTS: Tournament[] = [
  {
    id: 'm1',
    title: 'Soweto Derby: Esports Edition',
    description: 'Represent Kaizer Chiefs or Orlando Pirates.',
    game: 'EA FC 26',
    category: 'Mzansi E-Kick League',
    status: 'Ongoing',
    startDate: 'Now Playing',
    prizePool: 'R5,000',
    banner: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/56456194-6d7d-4fce-9474-610c135dadb9/psl-stadium-bg-18814b83-1777308659178.webp',
    pslTeam: 'Kaizer Chiefs'
  },
  {
    id: 'm2',
    title: 'Coastal Clash: Cape Town City vs AmaZulu',
    description: 'Represent your local coastal team.',
    game: 'EA FC 26',
    category: 'Mzansi E-Kick League',
    status: 'Upcoming',
    startDate: 'August 10, 2025',
    prizePool: 'R5,000',
    banner: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/56456194-6d7d-4fce-9474-610c135dadb9/eafc-tournament-poster-ad75505d-1777308658550.webp',
    pslTeam: 'Cape Town City'
  }
];

export function Tournaments() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase italic tracking-tighter">Tournaments</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Compete in the biggest tournaments in South Africa. From college campuses to professional PSL representation.
        </p>
      </div>

      <Tabs defaultValue="campus" className="space-y-12">
        <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <TabsList className="h-12 bg-muted/50 p-1">
            <TabsTrigger value="campus" className="px-8 gap-2">
              <GraduationCap className="h-4 w-4" /> Campus Clash
            </TabsTrigger>
            <TabsTrigger value="mzansi" className="px-8 gap-2">
              <Star className="h-4 w-4" /> Mzansi E-Kick League
            </TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="px-3 py-1">24 Active Events</Badge>
            <Badge variant="outline" className="px-3 py-1">R150,000 Total Prize Pool</Badge>
          </div>
        </div>

        <TabsContent value="campus" className="space-y-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="md:col-span-2 lg:col-span-4 bg-primary/10 border-primary/20">
              <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="bg-primary/20 p-6 rounded-2xl">
                  <GraduationCap className="h-12 w-12 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Join Campus Clash</h3>
                  <p className="text-muted-foreground mb-4">
                    Exclusive for university students. Verify your student email to participate in the biggest collegiate esports series.
                  </p>
                  <Button className="font-bold">Verify Student Status</Button>
                </div>
              </CardContent>
            </Card>
            
            {CAMPUS_TOURNAMENTS.map(t => (
              <TournamentCard key={t.id} tournament={t} onClick={() => {}} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mzansi" className="space-y-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="md:col-span-2 lg:col-span-4 bg-yellow-500/10 border-yellow-500/20">
              <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="bg-yellow-500/20 p-6 rounded-2xl">
                  <Star className="h-12 w-12 text-yellow-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Represent Your PSL Team</h3>
                  <p className="text-muted-foreground mb-4">
                    The Mzansi E-Kick League allows you to represent your favorite local football clubs. Join the official yearly league.
                  </p>
                  <Button className="bg-yellow-600 hover:bg-yellow-700 font-bold">Register for Season 2025</Button>
                </div>
              </CardContent>
            </Card>
            
            {MZANSI_TOURNAMENTS.map(t => (
              <TournamentCard key={t.id} tournament={t} onClick={() => {}} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}