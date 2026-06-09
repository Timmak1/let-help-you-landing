import { useState } from 'react';
import { 
  Trophy, 
  Users, 
  Settings, 
  CheckCircle2, 
  AlertCircle,
  Plus,
  Gamepad2,
  Calendar,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-24 h-24 mb-4 relative">
                <Avatar className="w-24 h-24 border-4 border-primary">
                  <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-card" />
              </div>
              <CardTitle className="text-xl">John Doe</CardTitle>
              <CardDescription>Level 42 Challenger</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-center border-t pt-4">
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-xs text-muted-foreground uppercase">Matches</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">65%</p>
                  <p className="text-xs text-muted-foreground uppercase">Win Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <nav className="flex flex-col gap-2">
            <Button 
              variant={activeTab === 'profile' ? 'secondary' : 'ghost'} 
              className="justify-start gap-3 h-12"
              onClick={() => setActiveTab('profile')}
            >
              <Settings className="h-5 w-5" /> Profile Settings
            </Button>
            <Button 
              variant={activeTab === 'teams' ? 'secondary' : 'ghost'} 
              className="justify-start gap-3 h-12"
              onClick={() => setActiveTab('teams')}
            >
              <Users className="h-5 w-5" /> My Teams
            </Button>
            <Button 
              variant={activeTab === 'tournaments' ? 'secondary' : 'ghost'} 
              className="justify-start gap-3 h-12"
              onClick={() => setActiveTab('tournaments')}
            >
              <Trophy className="h-5 w-5" /> My Tournaments
            </Button>
            <Button 
              variant={activeTab === 'reporting' ? 'secondary' : 'ghost'} 
              className="justify-start gap-3 h-12"
              onClick={() => setActiveTab('reporting')}
            >
              <CheckCircle2 className="h-5 w-5" /> Score Reporting
            </Button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {activeTab === 'profile' && (
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your public profile and gaming accounts.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Username</Label>
                    <Input defaultValue="JohnDoeEsports" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input defaultValue="john@example.com" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label>EA ID (for EA FC 26)</Label>
                    <Input placeholder="EA_Account_Name" />
                  </div>
                  <div className="space-y-2">
                    <Label>RocketID</Label>
                    <Input placeholder="Rocket#1234" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Bio</Label>
                  <textarea className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Tell us about your gaming journey..." />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          )}

          {activeTab === 'teams' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">My Teams</h3>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" /> Create Team
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <Card key={i} className="overflow-hidden group">
                    <div className="h-2 bg-primary" />
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="h-16 w-16 rounded bg-muted flex items-center justify-center font-black text-2xl">
                        T{i}
                      </div>
                      <div>
                        <CardTitle>Alpha Squad {i}</CardTitle>
                        <CardDescription>4 Members • Active</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex -space-x-2 mb-4">
                        {[1, 2, 3, 4].map((m) => (
                          <Avatar key={m} className="border-2 border-card w-8 h-8">
                            <AvatarImage src={`https://i.pravatar.cc/150?u=${m}`} />
                            <AvatarFallback>M</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full">Manage Team</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reporting' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Active Matches</h3>
              
              <div className="space-y-4">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="gap-1">
                        <Gamepad2 className="h-3 w-3" /> EA FC 26
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> 15 mins remaining
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-center flex-1">
                        <div className="h-16 w-16 bg-muted rounded-full mx-auto mb-2 flex items-center justify-center font-bold">AS</div>
                        <p className="font-bold">Alpha Squad</p>
                        <Badge variant="outline" className="mt-1 text-green-500">Checked In</Badge>
                      </div>
                      <div className="text-2xl font-black px-4 italic text-muted-foreground">VS</div>
                      <div className="text-center flex-1">
                        <div className="h-16 w-16 bg-muted rounded-full mx-auto mb-2 flex items-center justify-center font-bold">OT</div>
                        <p className="font-bold">Omega Team</p>
                        <Badge variant="outline" className="mt-1 text-yellow-500">Pending Check-in</Badge>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-4 rounded-lg flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm font-medium mb-2">Report your score</p>
                        <div className="flex items-center gap-2">
                          <Input type="number" placeholder="Your Score" className="w-24" />
                          <span className="text-xl font-bold">-</span>
                          <Input type="number" placeholder="Opponent" className="w-24" />
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90">Submit Score</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="font-bold text-yellow-500">Reporting Policy</p>
                    <p className="text-sm text-yellow-500/80">
                      Both teams must report the score within 30 minutes of the match completion. 
                      Upload a screenshot of the final score screen in case of disputes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}