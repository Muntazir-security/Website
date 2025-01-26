import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeScreen from '../components/WelcomeScreen';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Index component mounted');
    const timer = setTimeout(() => {
      console.log('5 seconds elapsed, navigating to home');
      navigate('/home');
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0B0B1E]">
      <WelcomeScreen />
    </div>
  );
};

export default Index;