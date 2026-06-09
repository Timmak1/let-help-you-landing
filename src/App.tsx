import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Home } from '@/pages/Home';
import { Dashboard } from '@/pages/Dashboard';
import { Tournaments } from '@/pages/Tournaments';
import { Auth } from '@/pages/Auth';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'home') return <Home onNavigate={setCurrentPage} />;
    if (currentPage === 'dashboard') return <Dashboard />;
    if (currentPage === 'tournaments' || currentPage === 'campus' || currentPage === 'mzansi') return <Tournaments />;
    if (currentPage === 'auth') return <Auth onNavigate={setCurrentPage} />;
    
    return <Home onNavigate={setCurrentPage} />;
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;