import { HomepagePreviewCard } from "@/components/home/HomepagePreviewCard";

type PreviewItem = {
  id: string;
  label: string;
  title: string;
  copy: string;
  href: string;
};

type SectionPreviewGridProps = {
  items: PreviewItem[];
};

export function SectionPreviewGrid({ items }: SectionPreviewGridProps) {
  return (
    <section className="pb-20" aria-label="Portfolio sections overview">
      <p className="font-mono text-[0.64rem] tracking-[0.3em] text-cyan-300/75 sm:text-xs">
        SITE FLOW
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
        Navigate the Portfolio
      </h2>
      <p className="mt-2 max-w-3xl text-sm text-slate-300/80 sm:text-base">
        Explore profile details, featured technical work, and direct ways to collaborate.
      </p>
      <div className="mt-6 grid gap-4 sm:gap-5 md:grid-cols-3">
        {items.map((item, index) => (
          <HomepagePreviewCard
            key={item.id}
            index={index}
            label={item.label}
            title={item.title}
            copy={item.copy}
            href={item.href}
          />
        ))}
      </div>
    </section>
  );
}
