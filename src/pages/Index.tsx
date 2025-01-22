import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeScreen from '../components/WelcomeScreen';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    
    if (hasSeenWelcome) {
      console.log('User has already seen welcome screen, redirecting to home');
      navigate('/home');
    } else {
      console.log('First visit, showing welcome screen');
      setShowWelcome(true);
    }
  }, [navigate]);

  const handleLoadingComplete = () => {
    console.log('Welcome screen complete, marking as seen');
    localStorage.setItem('hasSeenWelcome', 'true');
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-[#0B0B1E]">
      {showWelcome && <WelcomeScreen onLoadingComplete={handleLoadingComplete} />}
    </div>
  );
};

export default Index;