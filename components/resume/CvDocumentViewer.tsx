"use client";

import { useState } from "react";
import { Download, ExternalLink, Eye, EyeOff, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function CvDocumentViewer() {
  const [showViewer, setShowViewer] = useState(false);

  return (
    <article className="content-card rounded-2xl p-5 sm:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
            <FileText size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-100 sm:text-xl">
              Curriculum Vitae (PDF)
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setShowViewer((prev) => !prev)}
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/35 bg-cyan-300/15 px-3.5 py-1.5 text-xs font-medium text-cyan-100 transition hover:border-cyan-100 hover:bg-cyan-300/25 sm:text-sm"
          >
            {showViewer ? <EyeOff size={15} /> : <Eye size={15} />}
            {showViewer ? "Hide Document" : "Show Document"}
          </button>
          <a
            href={siteConfig.links.cv}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/70 px-3.5 py-1.5 text-xs font-medium text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-100 sm:text-sm"
          >
            <ExternalLink size={14} />
            Open in Tab
          </a>
          <a
            href={siteConfig.links.cv}
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/70 px-3.5 py-1.5 text-xs font-medium text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-100 sm:text-sm"
          >
            <Download size={14} />
            Download
          </a>
        </div>
      </div>

      {showViewer ? (
        <div className="mt-5 overflow-hidden rounded-xl border border-cyan-300/20 bg-slate-950/80 shadow-2xl">
          <iframe
            src={`${siteConfig.links.cv}#view=FitH`}
            title="Spyridon Andreou Curriculum Vitae PDF Preview"
            className="h-[650px] w-full sm:h-[820px]"
          />
          <div className="border-t border-cyan-300/10 bg-slate-950/90 px-4 py-2.5 text-center text-xs text-slate-400">
            <span>Viewing on a mobile device? You can </span>
            <a
              href={siteConfig.links.cv}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-cyan-300 underline hover:text-cyan-200"
            >
              open the PDF directly in a new tab
            </a>
            <span> or </span>
            <a
              href={siteConfig.links.cv}
              download
              className="font-medium text-cyan-300 underline hover:text-cyan-200"
            >
              download it
            </a>
            .
          </div>
        </div>
      ) : null}
    </article>
  );
}
