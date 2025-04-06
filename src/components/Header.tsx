
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import UserProfileMenu from "@/components/UserProfileMenu";

const Header = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleOpen = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  // Handle navigation with proper scroll behavior
  const handleNavigation = (path: string) => {
    navigate(path);
    closeMenu();
    window.scrollTo(0, 0);
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#", submenu: true, submenuItems: [
      { name: "CV Writing", href: "/services/cv-writing" },
      { name: "Cover Letter", href: "/services/cover-letter" },
      { name: "LinkedIn Optimization", href: "/services/linkedin-optimization" },
      { name: "Interview Coaching", href: "/services/interview-coaching" },
    ]},
    { name: "CV Review", href: "/cv-review" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link 
            to="/" 
            className="items-center space-x-2 flex"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="font-bold text-xl tracking-tight">CareerSolutions</span>
          </Link>

          {!isMobile && (
            <nav className="hidden md:flex gap-6">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <Link
                      to={item.href}
                      className="flex items-center text-lg font-medium transition-colors hover:text-primary"
                      onClick={(e) => {
                        if (item.submenu) e.preventDefault();
                      }}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                      {item.submenuItems?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          )}
        </div>

        <div className="flex items-center gap-2">
          <UserProfileMenu />
          
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden" size="icon">
                  <Menu />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name} className="px-2">
                      {item.submenu ? (
                        <div className="block text-lg font-medium p-2">
                          {item.name}
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className="block text-lg font-medium p-2"
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      )}
                      {item.submenu && (
                        <div className="ml-4 my-1 space-y-1">
                          {item.submenuItems?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block text-base p-2 text-muted-foreground hover:text-foreground"
                              onClick={() => handleNavigation(subItem.href)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
