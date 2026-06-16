/* Parallax UI kit — primitives. Exports to window for sibling Babel scripts. */
const { useState } = React;

// Inline Lucide icon (real <svg>, recolorable via stroke). Needs window.PXICONS (icons-data.js).
function Icon({ name, size = 22, color = "currentColor", stroke = 1.75, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      style={{ flex: "none", display: "inline-block", verticalAlign: "middle", ...style }}
      dangerouslySetInnerHTML={{ __html: (window.PXICONS && window.PXICONS[name]) || "" }} />
  );
}

// Parallax logo lockup: three-bar mark + wordmark.
function Logo({ dark = true, size = 26 }) {
  const src = dark ? "../../assets/parallax-mark-white.svg" : "../../assets/parallax-mark-navy.svg";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
      <img src={src} alt="Parallax" style={{ width: size * 0.84, height: size }} />
      <span className="wordmark" style={{ fontFamily: "var(--font-head)", fontWeight: 700,
        fontSize: size * 0.72, color: dark ? "#fff" : "var(--navy)", letterSpacing: ".01em" }}>
        Parallax
      </span>
    </span>
  );
}

function Eyebrow({ children, style = {} }) {
  return <div className="cg-eyebrow" style={{ color: "var(--blue-light)", ...style }}>{children}</div>;
}

function Button({ children, variant = "cta", iconRight, onClick, style = {} }) {
  const base = {
    fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15, cursor: "pointer",
    borderRadius: "var(--r-comfy)", padding: "11px 20px", display: "inline-flex",
    alignItems: "center", gap: 8, border: "1px solid transparent", transition: "filter .15s, background .15s",
  };
  const variants = {
    cta: { background: "var(--orange)", color: "#fff" },
    secondary: { background: "transparent", color: "#fff", borderColor: "var(--navy-600)" },
    ghost: { background: "transparent", color: "var(--blue-light)", padding: "11px 6px" },
  };
  return (
    <button onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(.93)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
      style={{ ...base, ...variants[variant], ...style }}>
      {children}{iconRight && <Icon name={iconRight} size={17} />}
    </button>
  );
}

function Badge({ children, tone = "neutral" }) {
  const tones = {
    success: ["#0f3d24", "#5fdd9a"], error: ["#3d1414", "#f0a3a3"],
    warning: ["#3d2a10", "#f0c48a"], neutral: ["rgba(146,166,193,.14)", "#92A6C1"],
    brand: ["rgba(146,166,193,.16)", "#cdd9e8"],
  };
  const [bg, fg] = tones[tone] || tones.neutral;
  return (
    <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12.5,
      padding: "4px 10px", borderRadius: "var(--r-std)", background: bg, color: fg,
      display: "inline-flex", alignItems: "center", gap: 5 }}>{children}</span>
  );
}

function StatChip({ icon, children }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "9px 15px",
      borderRadius: "var(--r-full)", border: "1px solid rgba(146,166,193,.22)",
      background: "rgba(255,255,255,.03)", color: "#cdd9e8", fontFamily: "var(--font-body)", fontSize: 14 }}>
      <Icon name={icon} size={16} color="var(--blue-light)" />{children}
    </span>
  );
}

Object.assign(window, { Icon, Logo, Eyebrow, Button, Badge, StatChip });
