import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CertificationsPanel } from "@/components/resume/CertificationsPanel";
import { EducationTimeline } from "@/components/resume/EducationTimeline";
import { ExperienceTimeline } from "@/components/resume/ExperienceTimeline";
import { LanguagesPanel } from "@/components/resume/LanguagesPanel";
import { ResumeHeroCard } from "@/components/resume/ResumeHeroCard";
import { ResumeSectionHeading } from "@/components/resume/ResumeSectionHeading";
import { SkillsCategoryGrid } from "@/components/resume/SkillsCategoryGrid";
import { createMetadata } from "@/lib/metadata";
import { resumeData } from "@/lib/resume-data";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Resume",
    description:
      "Professional resume overview covering education, experience, technical skills, and certifications.",
    path: "/resume",
  }),
};

export default function ResumePage() {
  return (
    <div className="space-y-14 pb-20 sm:space-y-16 sm:pb-24">
      <ResumeHeroCard personal={resumeData.personal} links={resumeData.links} />

      <ScrollReveal y={20} duration={0.62}>
        <section id="skills">
          <ResumeSectionHeading
            title="Skills Matrix"
            subtitle="Core technologies organized by domain to highlight practical depth and engineering focus."
          />
          <SkillsCategoryGrid skills={resumeData.skills} />
        </section>
      </ScrollReveal>

      <ScrollReveal y={20} duration={0.62} delay={0.04}>
        <section id="education">
          <ResumeSectionHeading
            title="Education"
            subtitle="Academic path and continuous learning with emphasis on software engineering and intelligent systems."
          />
          <EducationTimeline education={resumeData.education} />
        </section>
      </ScrollReveal>

      <ScrollReveal y={20} duration={0.62} delay={0.06}>
        <section id="experience">
          <ResumeSectionHeading
            title="Experience"
            subtitle="Hands-on work where architecture decisions and implementation quality translate into real outcomes."
          />
          <ExperienceTimeline experience={resumeData.experience} />
        </section>
      </ScrollReveal>

      <ScrollReveal y={20} duration={0.62} delay={0.08}>
        <section id="credentials">
          <ResumeSectionHeading
            title="Certifications & Languages"
            subtitle="Additional proof points that support technical reliability and communication across teams."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            <CertificationsPanel certifications={resumeData.certifications} />
            <LanguagesPanel languages={resumeData.languages} />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal y={18} duration={0.58} delay={0.1}>
        <section className="content-card rounded-2xl p-6 sm:p-8">
          <p className="font-mono text-[0.64rem] tracking-[0.3em] text-cyan-300/75 sm:text-xs">
            EXPLORE MORE
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
            Projects and Collaboration
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300/85 sm:text-base">
            Continue to technical project highlights or reach out directly for internships
            and junior opportunities.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/projects" className="w-full sm:w-auto">
              View Projects
            </Button>
            <Button href="/contact" variant="secondary" className="w-full sm:w-auto">
              Contact Me
            </Button>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
