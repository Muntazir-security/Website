import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
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
      <BrowserRouter>
        <div className="min-h-screen bg-[#0B0B1E]">
          <MainNav />
          <section id="" className="min-h-screen">
            <Home />
          </section>
          <section id="about" className="min-h-screen">
            <About />
          </section>
          <section id="portfolio" className="min-h-screen">
            <Portfolio />
          </section>
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;