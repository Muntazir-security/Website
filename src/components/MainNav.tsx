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
    <div className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-[1280px] mx-auto px-6 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Muntazir
        </Link>

        {/* Navigation Items */}
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <Link to="/home">
                <NavigationMenuLink 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-white/5 text-gray-300 hover:text-white transition-colors",
                    location.pathname === "/home" && "text-[#9b87f5] font-medium border-b-2 border-[#9b87f5]"
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
                    "bg-transparent hover:bg-white/5 text-gray-300 hover:text-white transition-colors",
                    location.pathname === "/about" && "text-[#9b87f5] font-medium border-b-2 border-[#9b87f5]"
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
                    "bg-transparent hover:bg-white/5 text-gray-300 hover:text-white transition-colors",
                    location.pathname === "/portfolio" && "text-[#9b87f5] font-medium border-b-2 border-[#9b87f5]"
                  )}
                >
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-white/5 text-gray-300 hover:text-white transition-colors",
                    location.pathname === "/contact" && "text-[#9b87f5] font-medium border-b-2 border-[#9b87f5]"
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