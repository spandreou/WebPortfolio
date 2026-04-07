"use client";

import { motion } from "framer-motion";
import { Download, Link2, Mail, MapPin, Network } from "lucide-react";
import Link from "next/link";
import type { ContactCardItem } from "@/lib/contact-data";

type ContactCardProps = {
  item: ContactCardItem;
  index: number;
};

export function ContactCard({ item, index }: ContactCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="glass-panel rounded-2xl p-5 sm:p-6"
    >
      <div className="flex items-center gap-2 text-cyan-100">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/25 bg-slate-950/70">
          <CardIcon id={item.id} />
        </span>
        <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
      </div>
      <div className="mt-4">
        {item.href ? (
          <Link
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={`${item.title}: ${item.value}`}
            className="text-sm text-cyan-100 transition hover:text-cyan-50 sm:text-base"
          >
            {item.value}
          </Link>
        ) : (
          <p className="text-sm text-slate-100 sm:text-base">{item.value}</p>
        )}
        {item.helperText ? (
          <p className="mt-2 text-sm leading-relaxed text-slate-300/80">
            {item.helperText}
          </p>
        ) : null}
      </div>
    </motion.article>
  );
}

function CardIcon({ id }: { id: ContactCardItem["id"] }) {
  if (id === "email") return <Mail size={16} />;
  if (id === "github") return <Link2 size={16} />;
  if (id === "linkedin") return <Network size={16} />;
  if (id === "location") return <MapPin size={16} />;
  return <Download size={16} />;
}
