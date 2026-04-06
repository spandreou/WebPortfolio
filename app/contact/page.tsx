import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ContactCard } from "@/components/contact/ContactCard";
import { ContactHero } from "@/components/contact/ContactHero";
import { SocialLinksPanel } from "@/components/contact/SocialLinksPanel";
import { contactData } from "@/lib/contact-data";

export const metadata: Metadata = {
  title: "Contact | SPYRIDON ANDREOU",
  description: "Contact details and collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <div className="space-y-14 pb-20 sm:space-y-16 sm:pb-24">
      <ContactHero
        title={contactData.heroTitle}
        subtitle={contactData.heroSubtitle}
        availability={contactData.availability}
      />

      <section>
        <p className="font-mono text-[0.64rem] tracking-[0.3em] text-cyan-300/75 sm:text-xs">
          REACH OUT
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
          Contact Channels
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-300/80 sm:text-base">
          Choose the channel that works best for opportunities, collaboration, or
          project discussions.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {contactData.cards.map((item, index) => (
            <ContactCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <article className="glass-panel rounded-2xl p-6 sm:p-8">
          <p className="font-mono text-[0.64rem] tracking-[0.3em] text-cyan-300/75 sm:text-xs">
            NEXT STEP
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
            {contactData.cta.title}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300/85 sm:text-base">
            {contactData.cta.description}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={contactData.cta.primaryHref}>
              {contactData.cta.primaryLabel}
            </Button>
            <Button href={contactData.cta.secondaryHref} variant="secondary">
              {contactData.cta.secondaryLabel}
            </Button>
          </div>
        </article>
        <SocialLinksPanel links={contactData.socialLinks} />
      </section>
    </div>
  );
}
