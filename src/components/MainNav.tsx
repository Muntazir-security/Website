import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

const MainNav = () => {
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B1E]/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Ekizr
        </Link>

        {/* Navigation Items */}
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <Link to="/home">
                <NavigationMenuLink 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-white/5",
                    location.pathname === "/home" && "text-[#6366f1] font-medium border-b-2 border-[#6366f1]"
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-white/5",
                    location.pathname === "/about" && "text-[#6366f1] font-medium border-b-2 border-[#6366f1]"
                  )}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/portfolio">
                <NavigationMenuLink 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-white/5",
                    location.pathname === "/portfolio" && "text-[#6366f1] font-medium border-b-2 border-[#6366f1]"
                  )}
                >
                  Portofolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-white/5",
                    location.pathname === "/contact" && "text-[#6366f1] font-medium border-b-2 border-[#6366f1]"
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

export default MainNav