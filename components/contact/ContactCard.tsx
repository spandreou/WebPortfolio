"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Link2, Mail, MapPin, Network } from "lucide-react";
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
      className="content-card content-card-interactive contact-channel-card rounded-2xl p-5 sm:p-6"
    >
      <div className="flex items-center gap-2.5 text-cyan-100">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/28 bg-slate-950/72 shadow-[0_0_14px_rgba(34,211,238,0.1)]">
          <CardIcon id={item.id} />
        </span>
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100/92">
          {item.title}
        </h3>
      </div>
      <div className="mt-4">
        {item.href ? (
          <Link
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={`${item.title}: ${item.value}`}
            className="content-card-link inline-flex items-center gap-1.5 text-sm text-cyan-100 sm:text-base"
          >
            {item.value}
            <ArrowUpRight size={14} className="card-link-icon" />
          </Link>
        ) : (
          <p className="text-sm text-slate-100 sm:text-base">{item.value}</p>
        )}
        {item.helperText ? (
          <p className="mt-2 text-sm leading-relaxed text-slate-300/82">
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
