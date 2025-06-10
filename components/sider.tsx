'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'About Me' },
  { href: '/Qualification', label: 'Qualification' },
  { href: '/Project', label: 'Projects' },
  { href: '/Awards', label: 'Awards' },
  { href: '/ContactMe', label: 'Contact Me' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`${
        collapsed ? 'w-20' : 'w-64'
      } transition-all duration-300 min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white p-4 shadow-xl flex flex-col justify-between`}
    >
      <div>
        {/* Collapse Toggle Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="mb-6 w-full bg-gray-700 text-white p-2 rounded hover:bg-gray-600"
        >
          {collapsed ? '➤' : '⬅'}
        </button>

        {/* Title */}
        {!collapsed && (
          <h1 className="text-2xl font-extrabold text-center text-yellow-400 mb-6">
            Baskaran Vaishnavan
          </h1>
        )}

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm md:text-base font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 px-2 py-2 rounded-md shadow-md text-center transition duration-300"
            >
              {collapsed ? label[0] : label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer */}
      {!collapsed && (
        <footer className="text-sm text-center text-gray-400 mt-10">
          © {new Date().getFullYear()} BCSVAISH.
          <br />
          Built with ❤️ by Vaishnavan
        </footer>
      )}
    </aside>
  );
}
