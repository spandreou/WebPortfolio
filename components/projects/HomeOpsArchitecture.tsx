import {
  Activity,
  ArrowDown,
  ArrowRight,
  Boxes,
  BrainCircuit,
  Cloud,
  Database,
  LayoutDashboard,
  Server,
  ShieldCheck,
  UserRoundCog,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

type ArchitectureNode = {
  title: string;
  description: string;
  icon: LucideIcon;
  phase?: string;
};

const monitoringNodes: ArchitectureNode[] = [
  {
    title: "Services, Host & Storage",
    description: "Service health, host health, storage visibility, and historical status data.",
    icon: Server,
  },
  {
    title: "Docker Runtime",
    description: "Containers, images, networks, volumes, and operational state.",
    icon: Boxes,
  },
  {
    title: "Cloudflare Tunnels",
    description: "Tunnel visibility and Cloudflare operational intelligence.",
    icon: Cloud,
  },
  {
    title: "State & History",
    description: "State snapshots, JSONL history, timelines, and reporting data.",
    icon: Database,
  },
];

const apiNodes: ArchitectureNode[] = [
  {
    title: "Status & Relationships",
    description: "Services, containers, networks, and service relationships.",
    icon: Activity,
    phase: "Building",
  },
  {
    title: "Operations",
    description: "Deployments, Docker operations, backups, and alerts.",
    icon: Waypoints,
    phase: "Being integrated",
  },
  {
    title: "Incidents & Access",
    description: "Incidents, operational timelines, users, roles, and audit logs.",
    icon: ShieldCheck,
    phase: "In progress",
  },
  {
    title: "Intelligence",
    description:
      "Dependency graph, incident correlation, recommendations, intelligence score, and timeline enrichment.",
    icon: BrainCircuit,
    phase: "Designed to support",
  },
];

export function HomeOpsArchitecture() {
  return (
    <figure
      aria-label="HomeOps architecture diagram"
      className="mt-8 border-t border-cyan-300/16 pt-7"
    >
      <div>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-cyan-300/75">
          Architecture
        </p>
        <h3 className="mt-2 text-xl font-semibold text-slate-100 sm:text-2xl">
          HomeOps Control Center
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300/82">
          A unified operational flow connecting the administrator, dashboard,
          monitoring pipeline, state history, and in-progress control modules.
        </p>
      </div>

      <div className="mt-6 grid items-center gap-2 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <DiagramNode
          title="Homelab Administrator"
          description="Reviews health, incidents, and operations."
          icon={UserRoundCog}
        />
        <FlowArrow />
        <DiagramNode
          title="React Operations Dashboard"
          description="Responsive control-center interface."
          icon={LayoutDashboard}
        />
        <FlowArrow />
        <DiagramNode
          title="HomeOps API"
          description="REST access to state and operational modules."
          icon={Waypoints}
        />
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-2">
        <ArchitectureLane
          eyebrow="Monitoring & Infrastructure"
          title="Python Monitoring & Reporting"
          description="Collects and records visibility from self-hosted infrastructure."
          icon={Activity}
          nodes={monitoringNodes}
        />
        <ArchitectureLane
          eyebrow="HomeOps API Modules"
          title="Operations & Intelligence"
          description="Reads shared state and exposes control-center capabilities as they are integrated."
          icon={BrainCircuit}
          nodes={apiNodes}
        />
      </div>

      <figcaption className="sr-only">
        The homelab administrator uses a React operations dashboard connected to
        the HomeOps API. Python monitoring observes services, Linux host storage,
        Docker, Cloudflare tunnels, and state history. The API uses that state for
        status, operations, incidents, timelines, dependencies, correlation, and
        recommendations.
      </figcaption>
    </figure>
  );
}

function ArchitectureLane({
  eyebrow,
  title,
  description,
  icon: Icon,
  nodes,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  nodes: ArchitectureNode[];
}) {
  return (
    <section
      aria-label={eyebrow}
      className="rounded-lg border border-cyan-300/18 bg-slate-950/45 p-4 sm:p-5"
    >
      <p className="text-[0.62rem] uppercase tracking-[0.2em] text-cyan-200/68">
        {eyebrow}
      </p>
      <div className="mt-3 flex items-start gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-300/24 bg-cyan-300/10 text-cyan-100">
          <Icon size={17} aria-hidden="true" />
        </span>
        <div>
          <h4 className="text-sm font-semibold text-slate-100 sm:text-base">{title}</h4>
          <p className="mt-1 text-xs leading-relaxed text-slate-300/76 sm:text-sm">
            {description}
          </p>
        </div>
      </div>

      <div className="my-3 flex justify-center text-cyan-300/58">
        <ArrowDown size={17} aria-hidden="true" />
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {nodes.map((node) => (
          <DiagramNode key={node.title} {...node} compact />
        ))}
      </div>
    </section>
  );
}

function DiagramNode({
  title,
  description,
  icon: Icon,
  phase,
  compact = false,
}: ArchitectureNode & { compact?: boolean }) {
  return (
    <div
      className={`rounded-lg border border-white/12 bg-slate-900/72 ${
        compact ? "p-3" : "p-4"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/8 text-cyan-100">
          <Icon size={16} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-medium leading-snug text-slate-100">{title}</p>
          {phase ? (
            <span className="mt-1 inline-block text-[0.58rem] uppercase tracking-[0.16em] text-cyan-200/72">
              {phase}
            </span>
          ) : null}
          <p className="mt-1 text-xs leading-relaxed text-slate-300/72">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex justify-center text-cyan-300/58" aria-hidden="true">
      <ArrowDown size={18} className="md:hidden" />
      <ArrowRight size={18} className="hidden md:block" />
    </div>
  );
}
