"use client";

import Link from "next/link";
import { Headphones, Mail, Menu, Play, X, Zap } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site-data";

export function AnnouncementBar() {
  return (
    <div className="announcement">
      <span><Zap size={14} /> Free trial setup for new viewers</span>
      <span><Headphones size={14} /> 24/7 support every day</span>
      <span><Mail size={14} /> support@channelmoa.com</span>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <AnnouncementBar />
      <div className="nav-wrap">
        <Link className="brand" href="/" aria-label="channelmoa home">
          <span className="brand-mark"><Play size={22} fill="currentColor" /></span>
          <span>channelmoa</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link className="btn btn-secondary" href="/packages">View Packages</Link>
          <Link className="btn btn-primary" href="/contact">Get Free Trial</Link>
          <button className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      <nav className={`mobile-nav ${open ? "open" : ""}`} aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
        ))}
      </nav>
    </header>
  );
}
