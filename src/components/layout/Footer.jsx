import { Link } from "react-scroll";
import { FiHeart } from "react-icons/fi";
import { navLinks } from "@/data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-dark-border bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Main row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={500}
            className="text-2xl font-bold font-heading gradient-text cursor-pointer select-none"
          >
            Ankur.
          </Link>

          {/* Center: credit */}
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            Designed &amp; Built by{" "}
            <span className="font-medium text-slate-700 dark:text-slate-300">
              Ankur
            </span>
            <FiHeart size={14} className="text-rose-500 fill-rose-500" />
          </p>

          {/* Back to top */}
          <Link
            to="home"
            smooth
            duration={600}
            className="px-4 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-white rounded-full transition-all cursor-pointer"
          >
            Back to top ↑
          </Link>
        </div>

        {/* Quick nav */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth
              offset={-80}
              duration={500}
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-slate-400 dark:text-slate-600">
          © {year} Ankur. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
