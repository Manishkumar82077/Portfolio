import { Link } from "react-router-dom";
import { useState, useCallback, memo } from "react";

const navLinks = [
  { to: "/projects", text: "Projects" },
  { to: "/contact", text: "Contact" },
];

const Button = memo(({ onClick, children }) => (
  <button
    onClick={onClick}
    className="py-1 px-2 bg-indigo-500 hover:bg-fuchsia-500 text-white rounded-lg shadow-mdtransition-all duration-300 hover:shadow-lg"
  >
    {children}
  </button>
));

const NavLink = memo(({ to, text, onClick, className }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block py-2 hover:text-sky-500 transition-colors duration-200 ${className}`}
    style={{ color: "#1a365d" }}
  >
    {text}
  </Link>
));

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center p-4 shadow-sm bg-gradient-to-r from-white to-blue-50 text-gray-900 border-b border-blue-100">
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/" className="text-blue-900 hover:text-blue-700">
            Home
          </Link>
        </div>

        <div className="hidden lg:flex gap-8 text-lg font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              text={link.text}
              className="hover:text-sky-600"
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button onClick={() => window.open("/resume.pdf", "_blank")}>
            Resume
          </Button>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-blue-900 text-2xl focus:outline-none hover:text-blue-700"
            aria-label="Toggle navigation menu"
            aria-expanded={isSidebarOpen}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Sidebar and Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity ${
          isSidebarOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible delay-200"
        }`}
      >
        <div
          className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm transition-opacity duration-200"
          onClick={closeSidebar}
        />
        <div
          className={`w-3/4 bg-white text-blue-900 p-6 fixed top-0 left-0 bottom-0 transform transition-transform duration-300 shadow-xl ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="text-xl font-bold tracking-wide mb-4 text-sky-600">
            My Portfolio
          </div>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              text={link.text}
              onClick={closeSidebar}
              className="hover:text-sky-500"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);
