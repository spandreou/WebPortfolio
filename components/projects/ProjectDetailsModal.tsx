"use client";

import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import { HomeOpsArchitecture } from "@/components/projects/HomeOpsArchitecture";
import type { ProjectItem } from "@/lib/projects-data";

type ProjectDetailsModalProps = {
  project: ProjectItem;
  open: boolean;
  onClose: () => void;
};

export function ProjectDetailsModal({
  project,
  open,
  onClose,
}: ProjectDetailsModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          event.currentTarget.close();
        }
      }}
      className="m-auto max-h-[calc(100svh-2rem)] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto rounded-2xl border border-cyan-300/24 bg-slate-950/96 p-0 text-slate-100 shadow-[0_24px_90px_rgba(2,6,23,0.78)] backdrop:bg-slate-950/82 backdrop:backdrop-blur-sm"
    >
      <div className="p-5 sm:p-7 lg:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-cyan-300/75">
              Project Detail
            </p>
            <h2
              id={titleId}
              className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl"
            >
              {project.name}
            </h2>
          </div>
          <button
            type="button"
            aria-label={`Close ${project.name} details`}
            title="Close details"
            onClick={() => dialogRef.current?.close()}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/14 bg-slate-900/72 text-slate-300 transition hover:border-cyan-300/42 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <p
          id={descriptionId}
          className="mt-5 max-w-4xl text-sm leading-relaxed text-slate-300/86 sm:text-base"
        >
          {project.fullDescription ?? project.shortDescription}
        </p>

        {project.architecture === "homeops" ? <HomeOpsArchitecture /> : null}
      </div>
    </dialog>
  );
}
