import React from "react";

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  logo?: string;
  companyName: string;
  navLinks: NavLink[];
  maxWidth?: string;
}

const Header: React.FC<HeaderProps> = ({
  companyName,
  navLinks,
  maxWidth = "1200px",
}) => {
  const activeLink = navLinks[0]?.href;

  const isActive = (href: string) => href === activeLink;

  return (
    <header
      className={`flex items-center justify-between w-full mx-auto`}
      style={{ maxWidth }}
    >
      <div className="flex items-center space-x-2 flex-co">
        {/* {logo && <img src={logo} alt={companyName} className="w-full h-12 object-contain" />} */}
        <h1 className="text-lg font-bold">{companyName}</h1>
      </div>

      <nav>
        <ul className="flex space-x-4">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={isActive(link.href) ? "font-bold" : ""}
            >
              <a
                href={link.href}
                className="text-white hover:text-gray-600 transition-colors hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
