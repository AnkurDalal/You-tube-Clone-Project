import { Menu, Search } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import User from "./User";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

function Header({ toggleSideBar }) {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

 

      <div className="flex items-center gap-2 md:gap-4">
        {/* Mobile Search Button (visible only on mobile) */}
        <button
          onClick={() => setIsMobileSearchOpen(true)}
          className="md:hidden btn-secondary"
          aria-label="Open search"
        >
          <Search size={24} />
        </button>
        <ThemeToggle />
        <User />
      </div>
    </header>
  );
}

export default Header;
