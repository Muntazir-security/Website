import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Element } from 'react-scroll';
import MainNav from "./components/MainNav";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-[#0B0B1E]">
        <MainNav />
        <Element name="home" className="section" id="home">
          <Home />
        </Element>
        <Element name="about" className="section" id="about">
          <About />
        </Element>
        <Element name="portfolio" className="section" id="portfolio">
          <Portfolio />
        </Element>
        <Element name="contact" className="section" id="contact">
          <Contact />
        </Element>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;