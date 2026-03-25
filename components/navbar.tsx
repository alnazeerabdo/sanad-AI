"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const basePath = "";

const navLinks = [
  { name: "الرئيسية", href: `${basePath}/` },
  { name: "من نحن", href: `${basePath}/about` },
  { name: "خدماتنا", href: `${basePath}/services` },
  { name: "مشاريعنا", href: `${basePath}/projects` },
  { name: "تواصل معنا", href: `${basePath}/contact` },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === `${basePath}/`) return pathname === basePath || pathname === `${basePath}/`;
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-background/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href={`${basePath}/`} className="flex items-center gap-2 shrink-0">
            <img
              src={`${basePath}/logo-01.png`}
              alt="سند تكنو"
              className="h-9 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-foreground bg-primary/8"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute bottom-1 right-1/2 translate-x-1/2 w-1 h-1 rounded-full bg-foreground" />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="rounded-full px-6 gap-2 text-sm" asChild>
              <a href={`${basePath}/contact`}>
                احجز استشارة
                <svg
                  className="w-4 h-4 rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="القائمة"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-xl border-t border-border/60 px-4 py-5 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3">
            <Button className="w-full rounded-full" asChild>
              <a href={`${basePath}/contact`} onClick={() => setMobileMenuOpen(false)}>
                احجز استشارة
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
