import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "../common/Container";

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
    <nav className="w-full fixed top-0 z-50 bg-white/60 backdrop-blur-s h-[81px] rounded-b-[10px] border-b border-white/10 shadow-sm">

      <Container>

        {/* Desktop Navbar */}
        <div className="hidden md:grid grid-cols-3 items-center h-[81px]">

          {/* Left */}
          <ul className="flex items-center justify-start gap-6 h-full font-poppins text-nav text-primary">
            {navLinksLeft.map((link, i) => (
              <li key={i}>
                <Link to={link.path} className="hover:text-highlight transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Center Logo */}
          <div className="flex items-center justify-center h-full">
            <img
              src="/images/sapsaa-logo.svg"
              alt="logo"
              className="h-[80px] object-contain scale-[1.8] translate-y-[30px]"
            />
          </div>

          {/* Right */}
          <ul className="flex items-center justify-end gap-6 h-full font-poppins text-nav text-primary">
            {navLinksRight.map((link, i) => (
              <li key={i}>
                <Link to={link.path} className="hover:text-highlight transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex justify-between items-center h-[81px]">

          <img
            src="/images/sapsaa-logo.svg"
            alt="logo"
            className="h-[70px] object-contain"
          />

          <button
            onClick={() => setOpen(!open)}
            className="text-primary text-3xl"
          >
            ☰
          </button>

        </div>

      </Container>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primary px-6 pb-6 space-y-4 text-white font-poppins text-nav">

          {[...navLinksLeft, ...navLinksRight].map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="block border-b border-white/20 pb-2"
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