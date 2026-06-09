import { Badge } from '@/components/ui/badge';
import { Tournament } from '@/types';
import { Button } from '@/components/ui/button';
import { Trophy, Calendar, ArrowRight } from 'lucide-react';

export function TournamentCard({ 
  tournament, 
  onClick 
}: { 
  tournament: Tournament;
  onClick: () => void;
}) {
  return (
    <div 
      className="group relative bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={tournament.banner} 
          alt={tournament.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant="secondary" className="backdrop-blur-md bg-black/40 border-white/10">
            {tournament.category}
          </Badge>
          {tournament.pslTeam && (
            <Badge className="bg-primary text-primary-foreground">
              {tournament.pslTeam}
            </Badge>
          )}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className={`text-[10px] uppercase font-bold ${
            tournament.status === 'Ongoing' ? 'text-green-500 border-green-500/20' : 
            tournament.status === 'Upcoming' ? 'text-blue-500 border-blue-500/20' : 'text-muted-foreground'
          }`}>
            {tournament.status}
          </Badge>
          <span className="text-xs text-muted-foreground">• {tournament.game}</span>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {tournament.title}
        </h3>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Trophy className="h-4 w-4 text-primary" />
            <span>{tournament.prizePool}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{tournament.startDate}</span>
          </div>
        </div>

        <Button className="w-full group/btn" variant="secondary">
          View Details
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}