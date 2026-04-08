import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ContactCard } from "@/components/contact/ContactCard";
import { ContactHero } from "@/components/contact/ContactHero";
import { SocialLinksPanel } from "@/components/contact/SocialLinksPanel";
import { ScrollReveal } from "@/components/ScrollReveal";
import { createMetadata } from "@/lib/metadata";
import { contactData } from "@/lib/contact-data";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Contact",
    description:
      "Reach out for internships, junior opportunities, and software collaboration discussions.",
    path: "/contact",
  }),
};

export default function ContactPage() {
  return (
    <div className="space-y-14 pb-20 sm:space-y-16 sm:pb-24">
      <ContactHero
        title={contactData.heroTitle}
        subtitle={contactData.heroSubtitle}
        availability={contactData.availability}
      />

      <ScrollReveal y={20} duration={0.62}>
        <section>
          <p className="font-mono text-[0.64rem] tracking-[0.3em] text-cyan-300/75 sm:text-xs">
            REACH OUT
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
            Contact Channels
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300/82 sm:text-base">
            Choose the channel that works best for opportunities, collaboration, or
            project discussions.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {contactData.cards.map((item, index) => (
              <ContactCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal y={18} duration={0.58} delay={0.05}>
        <section className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
          <article className="content-card contact-conversion rounded-2xl p-6 sm:p-8">
            <p className="font-mono text-[0.64rem] tracking-[0.3em] text-cyan-300/75 sm:text-xs">
              NEXT STEP
            </p>
            <div className="contact-main-cta mt-4 rounded-2xl border border-cyan-300/16 p-4 sm:p-5">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
                {contactData.cta.title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300/88 sm:text-base">
                {contactData.cta.description}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-cyan-200/70">
                Usually replies within 24 hours
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={contactData.cta.primaryHref}
                  className="w-full rounded-xl border-cyan-200/45 bg-cyan-300/18 shadow-[0_0_0_rgba(34,211,238,0)] transition-all duration-300 ease-out hover:scale-[1.02] hover:border-cyan-100/70 hover:bg-cyan-300/28 hover:shadow-[0_0_20px_rgba(34,211,238,0.18)] sm:w-auto"
                >
                  {contactData.cta.primaryLabel}
                </Button>
                <Button
                  href={contactData.cta.secondaryHref}
                  variant="secondary"
                  className="w-full rounded-xl transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(34,211,238,0.12)] sm:w-auto"
                >
                  {contactData.cta.secondaryLabel}
                </Button>
              </div>
            </div>
          </article>
          <SocialLinksPanel links={contactData.socialLinks} />
        </section>
      </ScrollReveal>
    </div>
  );
}
