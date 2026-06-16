/* Parallax Docs — Mintlify-style documentation UI kit (light). Self-contained. */
const { useState: useStateD } = React;

function DIcon({ name, size = 18, color = "currentColor", stroke = 1.75, style = {} }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
    strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
    style={{ flex: "none", display: "inline-block", verticalAlign: "middle", ...style }}
    dangerouslySetInnerHTML={{ __html: (window.PXICONS && window.PXICONS[name]) || "" }} />;
}

function DocsTop() {
  return (
    <header style={{ height: 60, borderBottom: "1px solid #e7eaef", display: "flex", alignItems: "center",
      gap: 18, padding: "0 24px", position: "sticky", top: 0, background: "#fff", zIndex: 10 }}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
        <img src="../../assets/parallax-mark-navy.svg" alt="" style={{ width: 19, height: 21 }} />
        <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, color: "var(--navy)", fontSize: 18 }}>Parallax</span>
        <span style={{ color: "#92A6C1", fontSize: 13, fontFamily: "var(--font-body)", marginLeft: 2 }}>docs</span>
      </span>
      <div style={{ marginLeft: 18, display: "flex", alignItems: "center", gap: 8, background: "#F5F6F8",
        border: "1px solid #e7eaef", borderRadius: 8, padding: "8px 12px", width: 280 }}>
        <DIcon name="search" size={15} color="#92A6C1" />
        <span style={{ color: "#92A6C1", fontSize: 13.5, fontFamily: "var(--font-body)" }}>Search or ask…</span>
        <span style={{ marginLeft: "auto", color: "#aab4c2", fontSize: 12, fontFamily: "var(--font-num)" }}>⌘K</span>
      </div>
      <nav style={{ marginLeft: "auto", display: "flex", gap: 20 }}>
        {["Documentation", "API Reference", "Console"].map((l, i) => (
          <a key={l} style={{ fontFamily: "var(--font-body)", fontSize: 14, textDecoration: "none",
            color: i === 0 ? "var(--navy)" : "#547498", fontWeight: i === 0 ? 600 : 400 }}>{l}</a>
        ))}
      </nav>
    </header>
  );
}

const TREE = [
  ["Get Started", [["Introduction", true], ["Quickstart", false]]],
  ["Console", [["Overview", false], ["Portfolio Analysis", false], ["Screener", false]]],
  ["Methodology", [["Overview", false], ["Six Factors", false], ["Three Layers", false]]],
  ["API Reference", [["Introduction", false], ["Authentication", false]]],
];

function DocsSidebar() {
  return (
    <aside style={{ width: 250, flex: "none", borderRight: "1px solid #e7eaef", padding: "26px 18px",
      height: "calc(100vh - 60px)", position: "sticky", top: 60, overflow: "auto" }}>
      {TREE.map(([group, items]) => (
        <div key={group} style={{ marginBottom: 22 }}>
          <div className="cg-eyebrow" style={{ color: "#0C2746", fontSize: 11.5, marginBottom: 10 }}>{group}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {items.map(([label, active]) => (
              <a key={label} style={{ fontFamily: "var(--font-body)", fontSize: 14, textDecoration: "none",
                padding: "6px 10px", borderRadius: 6, cursor: "pointer",
                color: active ? "#fff" : "#475569", background: active ? "#0C2746" : "transparent",
                fontWeight: active ? 600 : 400 }}>{label}</a>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}

function Card({ icon, title, children, big }) {
  const [h, setH] = useStateD(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ border: "1px solid " + (h ? "#547498" : "#e7eaef"), borderRadius: 10, padding: 18,
        background: "#fff", transition: "border-color .15s, box-shadow .15s",
        boxShadow: h ? "var(--shadow-2)" : "none", cursor: "pointer" }}>
      <DIcon name={icon} size={22} color="#ED7D31" stroke={1.8} />
      <h3 style={{ fontSize: 16, color: "var(--navy)", margin: "12px 0 6px" }}>{title}</h3>
      <p style={{ margin: 0, fontSize: 14, color: "#475569", lineHeight: 1.5, fontFamily: "var(--font-body)" }}>{children}</p>
    </div>
  );
}

const FACTORS = [["gem", "Quality", "Strong fundamentals and competitive advantages"],
  ["shield-half", "Defensive", "Prioritize risk-adjusted returns"],
  ["trending-up", "Momentum", "Capture securities with positive price trends"],
  ["scale", "Value", "Buy quality assets below intrinsic value"],
  ["search", "Size", "Exploit attention gaps in smaller companies"],
  ["crosshair", "Tactical", "Capture short-term liquidity dislocations"]];

function DocsContent() {
  return (
    <main style={{ flex: 1, minWidth: 0, padding: "36px 48px", maxWidth: 820 }}>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#92A6C1", marginBottom: 10 }}>
        Get Started <span style={{ margin: "0 6px" }}>/</span> <span style={{ color: "#547498" }}>Introduction</span>
      </div>
      <h1 style={{ fontSize: 36, color: "var(--navy)" }}>Introduction</h1>
      <p style={{ fontSize: 17, color: "#475569", marginTop: 14 }}>
        AI-powered quantitative investment analytics built on University of Chicago finance research.
        <strong> Parallax starts with what you already own</strong>, then shows you how to optimize it using
        the same quantitative methods that power billion-dollar endowments and hedge funds.
      </p>

      <h2 style={{ fontSize: 24, color: "var(--navy)", marginTop: 38 }}>Explore the platform</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 18 }}>
        <Card icon="layout-dashboard" title="Console">Analyze portfolios, build strategies, screen opportunities, and monitor investments.</Card>
        <Card icon="code" title="API Reference">Integrate Parallax analytics into your applications with our REST API.</Card>
        <Card icon="telescope" title="Methodology">Understand our multi-factor approach built on Nobel Prize-winning research.</Card>
        <Card icon="book-open" title="Glossary">Investment terms and concepts explained for beginners and experts.</Card>
      </div>

      <h2 style={{ fontSize: 24, color: "var(--navy)", marginTop: 40 }}>The Parallax approach</h2>
      <p style={{ fontSize: 15.5, color: "#475569", marginTop: 8 }}>Our Six-Factor Framework systematically evaluates every security.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginTop: 16 }}>
        {FACTORS.map(([ic, t, d]) => (
          <div key={t} style={{ border: "1px solid #e7eaef", borderRadius: 10, padding: 16 }}>
            <DIcon name={ic} size={20} color="#547498" />
            <h3 style={{ fontSize: 15, color: "var(--navy)", margin: "10px 0 5px" }}>{t}</h3>
            <p style={{ margin: 0, fontSize: 13, color: "#64748b", lineHeight: 1.45, fontFamily: "var(--font-body)" }}>{d}</p>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 24, color: "var(--navy)", marginTop: 40 }}>Who uses Parallax</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 16, fontSize: 14,
        border: "1px solid #CCCDCF", borderRadius: 8, overflow: "hidden" }}>
        <thead><tr style={{ background: "#0C2746" }}>
          <th style={{ textAlign: "left", color: "#fff", fontWeight: 600, padding: "10px 14px", fontFamily: "var(--font-body)" }}>User type</th>
          <th style={{ textAlign: "left", color: "#fff", fontWeight: 600, padding: "10px 14px", fontFamily: "var(--font-body)" }}>How they use Parallax</th>
        </tr></thead>
        <tbody>
          {[["Individual Investors", "Institutional-grade portfolio analysis instantly"],
            ["Financial Advisors", "Sophisticated AI-powered insights for clients"],
            ["Institutional Investors", "Enterprise analytics with compliance features"]].map((r, i) => (
            <tr key={r[0]} style={{ background: i % 2 ? "#EAEDF3" : "#fff" }}>
              <td style={{ padding: "10px 14px", color: "var(--navy)", fontWeight: 600, fontFamily: "var(--font-body)" }}>{r[0]}</td>
              <td style={{ padding: "10px 14px", color: "#1F2937", fontFamily: "var(--font-body)" }}>{r[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

function DocsTOC() {
  const items = ["Explore the platform", "The Parallax approach", "Who uses Parallax"];
  return (
    <aside style={{ width: 220, flex: "none", padding: "40px 24px", height: "calc(100vh - 60px)",
      position: "sticky", top: 60 }}>
      <div className="cg-eyebrow" style={{ color: "#92A6C1", fontSize: 11, marginBottom: 14 }}>On this page</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
        {items.map((t, i) => <a key={t} style={{ fontFamily: "var(--font-body)", fontSize: 13.5,
          textDecoration: "none", color: i === 0 ? "#0C2746" : "#64748b", borderLeft: "2px solid " + (i === 0 ? "#ED7D31" : "transparent"),
          paddingLeft: 12, fontWeight: i === 0 ? 600 : 400 }}>{t}</a>)}
      </div>
    </aside>
  );
}

function DocsApp() {
  return (
    <React.Fragment>
      <DocsTop />
      <div style={{ display: "flex", maxWidth: 1400, margin: "0 auto" }}>
        <DocsSidebar /><DocsContent /><DocsTOC />
      </div>
    </React.Fragment>
  );
}
Object.assign(window, { DocsApp });
