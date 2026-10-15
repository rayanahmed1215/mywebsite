"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <Link href="/" className="text-lg font-semibold">
        Rayan Ahmed
      </Link>

      <div className="flex gap-6 text-sm text-zinc-400">
        {links.map(({ href, label }) => {
          const active = href !== "/#contact" && pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`transition hover:text-white ${active ? "text-white" : ""}`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}