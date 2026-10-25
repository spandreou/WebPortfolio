"use client";

import { useEffect, useId, useRef } from "react";
import { Download, ExternalLink, X } from "lucide-react";

type CvPreviewModalProps = {
  open: boolean;
  onClose: () => void;
  pdfUrl: string;
};

export function CvPreviewModal({ open, onClose, pdfUrl }: CvPreviewModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-modal="true"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          event.currentTarget.close();
        }
      }}
      className="m-auto h-[90vh] max-h-[92svh] w-[calc(100%-1.5rem)] max-w-6xl overflow-hidden rounded-2xl border border-cyan-300/30 bg-slate-950/98 p-0 text-slate-100 shadow-[0_24px_90px_rgba(2,6,23,0.88),0_0_40px_rgba(34,211,238,0.16)] backdrop:bg-slate-950/85 backdrop:backdrop-blur-md"
    >
      <div className="flex h-full flex-col">
        {/* Header toolbar */}
        <div className="flex items-center justify-between border-b border-cyan-300/15 px-4 py-3 sm:px-6 sm:py-4">
          <div className="min-w-0 pr-2">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs">
              DOCUMENT PREVIEW
            </span>
            <h2
              id={titleId}
              className="mt-0.5 truncate text-lg font-semibold tracking-tight text-slate-100 sm:text-2xl"
            >
              Curriculum Vitae — Spyridon Andreou
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20 sm:inline-flex"
            >
              <ExternalLink size={14} />
              Open in Tab
            </a>
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/40 bg-cyan-300/15 px-3 py-1.5 text-xs font-medium text-cyan-100 transition hover:border-cyan-100 hover:bg-cyan-300/25"
            >
              <Download size={14} />
              Download
            </a>
            <button
              type="button"
              aria-label="Close CV preview"
              title="Close preview"
              onClick={() => dialogRef.current?.close()}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-slate-900/80 text-slate-300 transition hover:border-cyan-300/45 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="relative flex-1 bg-slate-900/40 p-2 sm:p-4">
          <iframe
            src={`${pdfUrl}#view=FitH`}
            title="Spyridon Andreou CV Document Preview"
            className="h-full w-full rounded-xl border border-cyan-400/20 bg-slate-900 shadow-inner"
          />
        </div>

        {/* Mobile notice */}
        <div className="border-t border-cyan-300/10 px-4 py-2 text-center text-xs text-slate-400 sm:hidden">
          <span>Viewing issues on mobile? </span>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 underline hover:text-cyan-200"
          >
            Open PDF directly
          </a>
        </div>
      </div>
    </dialog>
  );
}
