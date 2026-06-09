export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
  teams: Team[];
}

export interface Team {
  id: string;
  name: string;
  logo?: string;
  members: string[]; // User IDs
  tournamentIds: string[];
}

export interface Tournament {
  id: string;
  title: string;
  description: string;
  game: string;
  category: 'Campus Clash' | 'Mzansi E-Kick League' | 'General';
  status: 'Upcoming' | 'Ongoing' | 'Completed';
  startDate: string;
  prizePool: string;
  banner: string;
  rules?: string;
  pslTeam?: string; // For Mzansi E-Kick League
}

export interface Match {
  id: string;
  tournamentId: string;
  team1: string;
  team2: string;
  score1?: number;
  score2?: number;
  status: 'Pending' | 'Reported' | 'Verified';
  checkInStatus: {
    team1: boolean;
    team2: boolean;
  };
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
}