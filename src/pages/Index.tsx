import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Index: Redirecting to home page');
    navigate('/home');
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0B0B1E]">
      {/* Empty div for background while redirecting */}
    </div>
  );
};

export default Index;