import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">My Next.js Website</div>
      <nav className="nav">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="./About" className="nav-link">
          About
        </Link>
        <Link href="./Contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </header>
  );
}
