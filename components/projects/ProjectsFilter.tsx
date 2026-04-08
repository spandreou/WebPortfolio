"use client";

import {
  type ProjectItem,
  projectCategoryLabels,
  projectStatusLabels,
} from "@/lib/projects-data";
import { cn } from "@/lib/utils";

export type CategoryFilter = ProjectItem["category"] | "all";
export type StatusFilter = ProjectItem["status"] | "all";

type ProjectsFilterProps = {
  categories: ProjectItem["category"][];
  selectedCategory: CategoryFilter;
  selectedStatus: StatusFilter;
  onCategoryChange: (value: CategoryFilter) => void;
  onStatusChange: (value: StatusFilter) => void;
};

const statusOptions: StatusFilter[] = [
  "all",
  "completed",
  "in-progress",
  "concept",
];

export function ProjectsFilter({
  categories,
  selectedCategory,
  selectedStatus,
  onCategoryChange,
  onStatusChange,
}: ProjectsFilterProps) {
  return (
    <div className="content-card rounded-2xl p-4 sm:p-5">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/75">
          Filter by Category
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["all", ...categories].map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={selectedCategory === category}
              onClick={() => onCategoryChange(category as CategoryFilter)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs transition sm:text-sm",
                selectedCategory === category
                  ? "border-cyan-300/45 bg-cyan-300/16 text-cyan-100"
                  : "border-white/14 bg-slate-950/65 text-slate-300 hover:border-cyan-200/30 hover:text-cyan-100",
              )}
            >
              {category === "all"
                ? "All"
                : projectCategoryLabels[category as ProjectItem["category"]]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/75">
          Filter by Status
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {statusOptions.map((status) => (
            <button
              key={status}
              type="button"
              aria-pressed={selectedStatus === status}
              onClick={() => onStatusChange(status)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs transition sm:text-sm",
                selectedStatus === status
                  ? "border-cyan-300/45 bg-cyan-300/16 text-cyan-100"
                  : "border-white/14 bg-slate-950/65 text-slate-300 hover:border-cyan-200/30 hover:text-cyan-100",
              )}
            >
              {status === "all"
                ? "All"
                : projectStatusLabels[status as ProjectItem["status"]]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
