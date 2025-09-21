import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-8 border-t border-white/20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-left">
          <span className="text-2xl font-bold text-slate-900">Remittra</span>
        </div>

        <nav className="flex-1 flex justify-center space-x-6 text-sm">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#careers" className="hover:underline">
            Careers
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>

        <div className="flex-1 flex justify-end space-x-4 items-center">
          <a aria-label="LinkedIn" href="#" className="hover:text-sky-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8h4.6V24H.2zM8.7 8h4.4v2.2h.1c.6-1.1 2.1-2.2 4.3-2.2 4.6 0 5.5 3 5.5 7V24h-4.6v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.8-2.8 3.7V24H8.7V8z" />
            </svg>
          </a>

          <a aria-label="Twitter" href="#" className="hover:text-sky-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 4.6c-.9.4-1.8.7-2.8.8 1-.6 1.7-1.6 2-2.8-.9.5-1.9.9-3 1.2C19.4 2 18 1.5 16.6 1.5c-2.6 0-4.6 2.2-4.1 4.7C8 6 4.4 4 2 1.1c-.3.6-.5 1.2-.5 1.9 0 1.6.8 3 2.1 3.8-.8 0-1.5-.2-2.2-.6v.1c0 2.1 1.5 3.8 3.6 4.2-.4.1-.9.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.5-1.6 1.3-3.6 2.1-5.7 2.1H0c2.1 1.3 4.6 2 7.2 2 8.6 0 13.3-7.2 13.3-13.4v-.6c.9-.7 1.6-1.6 2.2-2.6z" />
            </svg>
          </a>

          <a aria-label="Instagram" href="#" className="hover:text-sky-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.2 1.1.6 1.6 1.1.5.5.9 1 1.1 1.6.2.5.4 1.2.5 2.4.1 1.2.1 1.6.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.6 1.1-1.1 1.6-.5.5-1 .9-1.6 1.1-.5.2-1.2.4-2.4.5-1.2.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1.1-.6-1.6-1.1-.5-.5-.9-1-1.1-1.6-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.6-1.1 1.1-1.6.5-.5 1-.9 1.6-1.1.5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 3.1a6.7 6.7 0 100 13.4 6.7 6.7 0 000-13.4zm0 11a4.3 4.3 0 110-8.6 4.3 4.3 0 010 8.6z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
