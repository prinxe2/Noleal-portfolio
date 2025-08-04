export default function Navbar({ onNavClick }) {
  const navItems = [
    { label: 'home', target: 'home' },
    { label: 'expertise', target: 'about' },
    { label: 'work', target: 'work' },
    { label: 'resume', target: 'resume' },
    { label: 'contact', target: 'contact' },
  ];

  return (
    <nav className="flex justify-between items-center px-10 py-6 backdrop-blur-sm z-20 fixed w-full top-0">
      <h1 className="text-cyan-400 text-lg font-mono">
        bsemc.nolealarjaym<span className="text-white">._</span>
      </h1>
      <ul className="flex gap-6 text-sm text-gray-400 uppercase tracking-widest">
        {navItems.map(({ label, target }) => (
          <li
            key={label}
            className="hover:text-cyan-400 cursor-pointer"
            onClick={() => onNavClick(target)}
          >
            // {label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
