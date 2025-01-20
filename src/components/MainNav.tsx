import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const MainNav = () => {
  const location = useLocation();

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B1E]/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-5xl mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="relative group">
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] group-hover:to-[#6366f1] group-hover:from-[#a855f7] transition-all duration-500">
            Muntazir
          </span>
          <motion.div
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] group-hover:w-full transition-all duration-300"
            whileHover={{ width: "100%" }}
          />
        </Link>

        {/* Navigation Items */}
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            {[
              { path: "/home", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/portfolio", label: "Portfolio" },
              { path: "/contact", label: "Contact" }
            ].map((item) => (
              <NavigationMenuItem key={item.path}>
                <Link to={item.path}>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "relative px-3 py-1.5 text-sm bg-transparent hover:bg-white/5 text-gray-300 hover:text-white transition-colors",
                      location.pathname === item.path && "text-[#9b87f5] font-medium"
                    )}
                  >
                    {item.label}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9b87f5]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </motion.div>
  )
}

export default MainNav