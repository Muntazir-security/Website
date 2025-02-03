import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { StrictMode, useEffect } from "react";
import MainNav from "./components/MainNav";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('Route changed, scrolling to top');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

// Main content wrapper that combines all pages for continuous scrolling
const MainContent = () => {
  return (
    <div className="continuous-scroll">
      <div id="home-section"><Home /></div>
      <div id="about-section"><About /></div>
      <div id="portfolio-section"><Portfolio /></div>
      <div id="contact-section"><Contact /></div>
    </div>
  );
};

const App = () => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-[#0B0B1E] overflow-y-auto">
            <ScrollToTop />
            <MainNav />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/*" element={<MainContent />} />
            </Routes>
            <Analytics />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </StrictMode>
);

export default App;