import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { navLinks, personalInfo } from "@/data/portfolioData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollDir, isAtTop } = useScrollDirection();

  const navbarHidden = scrollDir === "down" && !isAtTop;

  return (
    <motion.header
      animate={{ y: navbarHidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isAtTop
          ? "bg-transparent"
          : "bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-slate-200/50 dark:border-dark-border/50 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={500}
            className="text-2xl font-bold font-heading gradient-text cursor-pointer select-none"
          >
            Ankur.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy
                smooth
                offset={-80}
                duration={600}
                activeClass="text-primary"
                className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary rounded-lg hover:bg-slate-100 dark:hover:bg-dark-surface transition-all cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={personalInfo.resumeUrl}
              download
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-200"
            >
              <FiDownload size={15} />
              Resume
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-surface transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white dark:bg-dark-bg border-t border-slate-200 dark:border-dark-border"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  spy
                  smooth
                  offset={-80}
                  duration={600}
                  activeClass="text-primary bg-indigo-50 dark:bg-indigo-900/20"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary rounded-lg hover:bg-slate-100 dark:hover:bg-dark-surface transition-all cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={personalInfo.resumeUrl}
                download
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-all"
              >
                <FiDownload size={15} />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
