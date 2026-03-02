import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinksLeft = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Products", path: "/products" },
    { name: "Quality Report", path: "/quality" },
  ];

  const navLinksRight = [
    { name: "Certifications", path: "/explore" },
    { name: "FAQ's", path: "/faq" },
    { name: "Contact Us", path: "/know-more" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-gradient-to-r from-teal-300 to-cyan-200 shadow-md">

      {/* Desktop Navbar */}
      <div className="hidden md:grid grid-cols-3 items-center max-w-7xl mx-auto px-6 py-3">

        {/* Left Links */}
        <ul className="flex justify-start gap-6 text-sm font-medium">
          {navLinksLeft.map((link, i) => (
            <li key={i}>
              <Link to={link.path} className="hover:text-blue-700">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Center Logo */}
        <div className="flex justify-center">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-12"
          />
        </div>

        {/* Right Links */}
        <ul className="flex justify-end gap-6 text-sm font-medium">
          {navLinksRight.map((link, i) => (
            <li key={i}>
              <Link to={link.path} className="hover:text-blue-700">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <img
          src="/images/logo.png"
          alt="logo"
          className="h-10"
        />

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">

          {[...navLinksLeft, ...navLinksRight].map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="block border-b pb-2"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
};

export default Navbar;