import { Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/Index';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import MainNav from './components/MainNav';
import PageBackground from './components/shared/PageBackground';

const App = () => {
  return (
    <div className="relative min-h-screen">
      <PageBackground />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/home"
          element={
            <>
              <MainNav />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <MainNav />
              <About />
            </>
          }
        />
        <Route
          path="/portfolio"
          element={
            <>
              <MainNav />
              <Portfolio />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <MainNav />
              <Contact />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;