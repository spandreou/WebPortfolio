"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { SocialLinkItem } from "@/lib/contact-data";

type SocialLinksPanelProps = {
  links: SocialLinkItem[];
};

export function SocialLinksPanel({ links }: SocialLinksPanelProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="glass-panel rounded-2xl p-5 sm:p-6"
    >
      <p className="font-mono text-[0.64rem] tracking-[0.28em] text-cyan-300/75 sm:text-xs">
        SOCIAL LINKS
      </p>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 text-sm text-slate-200 transition hover:text-cyan-100 sm:text-base"
            >
              {link.name}
              <ArrowUpRight size={15} />
            </Link>
          </li>
        ))}
      </ul>
    </motion.aside>
  );
}
