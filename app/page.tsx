const PROJECTS = [
  {
    id: "claw",
    name: "xrpl claw",
    domain: "xrplclaw.com",
    href: "https://xrplclaw.com",
    tag: "open claude deploy · mcp · cli",
    blurb:
      "open claude deployment service. mcp servers + cli tools sitting on top of the stack.",
    color: "claw" as const,
  },
  {
    id: "blume",
    name: "blume finance",
    domain: "blumefi.com",
    href: "https://blumefi.com",
    tag: "agent marketplace · xrpl evm sidechain",
    blurb:
      "first agent marketplace. discover, fund and deploy ai agents on xrpl evm.",
    color: "blume" as const,
  },
  {
    id: "drops",
    name: "drops.market",
    domain: "drops.market",
    href: "https://drops.market",
    tag: "nft marketplace for agents · xrpl evm",
    blurb:
      "nft marketplace for agents. mint, list, trade agent ownership.",
    color: "drops" as const,
  },
];

const FOCUS = [
  "linux + windows servers",
  "microsoft 365 + azure",
  "networking",
  "ai + automation",
];

// ─── Header (above the bento) ────────────────────────────────
function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 28,
            height: 28,
            border: "1.5px solid var(--ink)",
            borderRadius: 999,
            display: "grid",
            placeItems: "center",
            fontFamily: "var(--hand)",
            fontSize: 18,
            lineHeight: 1,
          }}
        >
          s
        </div>
        <span className="mono" style={{ fontSize: 12 }}>shane on chain</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span className="mono" style={{ fontSize: 10, color: "var(--ink-3)" }}>
          shaneonchain.com
        </span>
        <span
          aria-hidden
          className="mo-pulse-presence"
          style={{
            width: 6,
            height: 6,
            borderRadius: 999,
            background: "#3b9d6b",
            boxShadow: "0 0 0 2px rgba(59,157,107,0.18)",
          }}
        />
      </div>
    </header>
  );
}

// ─── Tiles ───────────────────────────────────────────────────
function HeroTile() {
  return (
    <>
      <span className="tag">developer · sysadmin · santa cruz, ca</span>
      <div>
        <div
          className="h1"
          style={{ fontSize: "clamp(64px, 11vw, 124px)", lineHeight: 0.92 }}
        >
          shane
        </div>
        <div
          className="h1"
          style={{
            fontSize: "clamp(34px, 5vw, 56px)",
            lineHeight: 1,
            color: "var(--ink-3)",
          }}
        >
          on chain.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 12,
        }}
      >
        <p
          style={{
            flex: 1,
            maxWidth: 440,
            margin: 0,
            fontSize: 14,
            lineHeight: 1.45,
            color: "var(--ink-2)",
          }}
        >
          developer + sysadmin in santa cruz. building agent infrastructure on
          xrpl evm — mcp servers, cli tools, the deploy stack.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 2,
          }}
        >
          <span className="mono" style={{ fontSize: 10, color: "var(--ink-3)" }}>
            scroll
          </span>
          <span
            className="hand mo-breathe"
            style={{ fontSize: 22, lineHeight: 1, color: "#b94b30" }}
          >
            ↓
          </span>
        </div>
      </div>
    </>
  );
}

function NowTile() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="mono" style={{ fontSize: 10, opacity: 0.7 }}>NOW</span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            fontFamily: "var(--mono)",
            fontSize: 9,
            opacity: 0.7,
          }}
        >
          <span
            aria-hidden
            className="mo-pulse-live"
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: "#5ee59a",
              boxShadow: "0 0 0 3px rgba(94,229,154,0.25)",
            }}
          />
          LIVE
        </span>
      </div>
      <div
        className="hand"
        style={{ fontSize: 26, lineHeight: 1.05, marginTop: 8 }}
      >
        shipping xrplclaw — agent infra on xrpl evm.
      </div>
      <div
        className="mono"
        style={{ fontSize: 9, opacity: 0.55, marginTop: "auto" }}
      >
        v0.4 · openclaw containers + mcp
      </div>
    </>
  );
}

function FocusTile() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="mono" style={{ fontSize: 10, color: "var(--ink-3)" }}>FOCUS</span>
        <span className="mono" style={{ fontSize: 9, color: "var(--ink-3)" }}>
          {FOCUS.length}
        </span>
      </div>
      <ul
        style={{
          margin: "6px 0 0",
          padding: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {FOCUS.map((f) => (
          <li
            key={f}
            style={{ display: "flex", gap: 8, alignItems: "center" }}
          >
            <span
              style={{
                width: 10,
                height: 1.5,
                background: "var(--ink)",
                flex: "0 0 auto",
              }}
            />
            <span
              className="hand"
              style={{ fontSize: 18, lineHeight: 1.1, whiteSpace: "nowrap" }}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

function ProjectTile({
  project,
  idx,
  featured,
}: {
  project: (typeof PROJECTS)[number];
  idx: number;
  featured?: boolean;
}) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className={`dot ${project.color}`} />
          <span className="mono" style={{ fontSize: 9, color: "var(--ink-3)" }}>
            0{idx + 1}
            {featured ? " · featured" : ""}
          </span>
        </div>
        <span className="mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>
          ↗
        </span>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: 0,
        }}
      >
        <div
          className="hand"
          style={{
            fontSize: featured
              ? "clamp(48px, 6.5vw, 72px)"
              : "clamp(38px, 5vw, 56px)",
            lineHeight: 0.95,
          }}
        >
          {project.name}
        </div>
        <div
          className="mono"
          style={{ fontSize: 10, color: "var(--ink-3)", marginTop: 4 }}
        >
          {project.domain}
        </div>
      </div>

      <div>
        <div
          style={{
            fontSize: 11,
            color: "var(--ink-2)",
            lineHeight: 1.35,
          }}
        >
          {featured ? project.blurb : project.tag}
        </div>
        {featured && (
          <div
            style={{
              marginTop: 8,
              display: "flex",
              gap: 5,
              flexWrap: "wrap",
            }}
          >
            {project.tag.split(" · ").map((t) => (
              <span key={t} className="chip" style={{ fontSize: 9 }}>{t}</span>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function AboutTile() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="mono" style={{ fontSize: 10, color: "var(--ink-3)" }}>ABOUT</span>
        <span className="mono" style={{ fontSize: 9, color: "var(--ink-3)" }}>
          sysadmin · dev · ops
        </span>
      </div>
      <div
        className="hand"
        style={{
          fontSize: "clamp(18px, 2.2vw, 22px)",
          marginTop: 6,
          lineHeight: 1.2,
        }}
      >
        by day: sysadmin in the bay — servers, microsoft 365, networking.
        <br />
        by night: agent automation on xrpl evm.
      </div>
    </>
  );
}

function ContactTile() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="mono" style={{ fontSize: 10, color: "var(--ink-3)" }}>SAY HI</span>
        <span className="mono" style={{ fontSize: 10, color: "var(--ink-3)" }}>↗</span>
      </div>
      <div
        className="mono"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          marginTop: 8,
        }}
      >
        <a href="mailto:shane@shaneonchain.com" style={{ fontSize: 12 }}>
          shane@shaneonchain.com
        </a>
        <a
          href="https://github.com/ShaneOnChain"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: 11, color: "var(--ink-2)" }}
        >
          github — @ShaneOnChain
        </a>
        <a
          href="https://x.com/shaneonchain"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: 11, color: "var(--ink-2)" }}
        >
          x — @shaneonchain
        </a>
      </div>
    </>
  );
}

export default function Page() {
  return (
    <main>
      <Header />
      <div className="bento">
        <div className="cell hero">
          <HeroTile />
        </div>

        <div className="cell dark now">
          <NowTile />
        </div>

        <div className="cell focus">
          <FocusTile />
        </div>

        {PROJECTS.map((p, i) => (
          <a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className={`cell project ${p.color}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ProjectTile project={p} idx={i} featured={i === 0} />
          </a>
        ))}

        <div className="cell about">
          <AboutTile />
        </div>

        <div className="cell contact">
          <ContactTile />
        </div>
      </div>
    </main>
  );
}
