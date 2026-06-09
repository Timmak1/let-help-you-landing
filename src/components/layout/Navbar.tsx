import { useState, useEffect } from 'react';
import { 
  Trophy, 
  Gamepad2, 
  Users, 
  LayoutDashboard, 
  LogOut, 
  Bell, 
  Search, 
  Menu, 
  X,
  User as UserIcon,
  Home as HomeIcon,
  Flame,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

export function Navbar({ onNavigate, currentPage }: { onNavigate: (page: string) => void, currentPage: string }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoUrl = "https://storage.googleapis.com/dala-prod-public-storage/attachments/5ed372d4-96bd-470a-ac96-089ee92da1f4/1777307499002_inbound7813962547014691804.png";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group transition-transform active:scale-95"
          >
            <img src={logoUrl} alt="DRVN E-SPORTS" className="h-10 w-auto" />
            <span className="font-bold text-xl tracking-tighter hidden md:block">
              DRVN <span className="text-primary">E-SPORTS</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors hover:text-primary ${currentPage === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('tournaments')}
              className={`text-sm font-medium transition-colors hover:text-primary ${currentPage === 'tournaments' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Tournaments
            </button>
            <button 
              onClick={() => onNavigate('campus')}
              className={`text-sm font-medium transition-colors hover:text-primary ${currentPage === 'campus' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Campus Clash
            </button>
            <button 
              onClick={() => onNavigate('mzansi')}
              className={`text-sm font-medium transition-colors hover:text-primary ${currentPage === 'mzansi' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Mzansi League
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search tournaments..." 
              className="pl-9 h-9 bg-muted/50 border-none focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full overflow-hidden">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onNavigate('dashboard')}>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate('dashboard')}>
                <UserIcon className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate('dashboard')}>
                <Users className="mr-2 h-4 w-4" />
                Teams
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <img src={logoUrl} alt="Logo" className="h-8" />
                  <span>DRVN E-SPORTS</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                <Button variant="ghost" className="justify-start gap-2" onClick={() => onNavigate('home')}>
                  <HomeIcon className="h-4 w-4" /> Home
                </Button>
                <Button variant="ghost" className="justify-start gap-2" onClick={() => onNavigate('tournaments')}>
                  <Trophy className="h-4 w-4" /> Tournaments
                </Button>
                <Button variant="ghost" className="justify-start gap-2" onClick={() => onNavigate('campus')}>
                  <Globe className="h-4 w-4" /> Campus Clash
                </Button>
                <Button variant="ghost" className="justify-start gap-2" onClick={() => onNavigate('mzansi')}>
                  <Flame className="h-4 w-4" /> Mzansi League
                </Button>
                <Button variant="ghost" className="justify-start gap-2" onClick={() => onNavigate('dashboard')}>
                  <LayoutDashboard className="h-4 w-4" /> Dashboard
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}