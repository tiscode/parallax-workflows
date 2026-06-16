/* Chicago Global — corporate site UI kit (light, institutional). Self-contained. */
const { useState: useStateCG } = React;

function CGIcon({ name, size = 20, color = "currentColor", stroke = 1.75, style = {} }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
    strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
    style={{ flex: "none", display: "inline-block", verticalAlign: "middle", ...style }}
    dangerouslySetInnerHTML={{ __html: (window.PXICONS && window.PXICONS[name]) || "" }} />;
}

function Wordmark({ color = "var(--navy)", size = 17 }) {
  return <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, letterSpacing: ".22em",
    textTransform: "uppercase", color, fontSize: size }}>Chicago&nbsp;Global</span>;
}

function CGNav() {
  const links = ["Investment Strategy", "Research", "Careers"];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(255,255,255,.9)",
      backdropFilter: "blur(8px)", borderBottom: "1px solid #e7eaef" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", height: 66, display: "flex", alignItems: "center",
        padding: "0 28px", gap: 28 }}>
        <Wordmark />
        <nav style={{ display: "flex", gap: 24, marginLeft: "auto" }}>
          {links.map((l) => <a key={l} style={{ fontFamily: "var(--font-body)", fontSize: 14.5,
            color: "#1F2937", textDecoration: "none" }}>{l}</a>)}
        </nav>
        <button className="btn-secondary" style={{ padding: "9px 16px", fontSize: 14 }}>Get In Touch</button>
      </div>
    </header>
  );
}

function CGHero() {
  return (
    <section style={{ position: "relative", background:
      "radial-gradient(120% 90% at 70% -10%, #1c4a7e 0%, #0C2746 45%, #081d35 100%)", overflow: "hidden" }}>
      {/* placeholder for the "Chicago Beam" hero photograph (pending upload) */}
      <div style={{ position: "absolute", inset: 0, opacity: .5, background:
        "conic-gradient(from 210deg at 78% 0%, rgba(146,166,193,.0), rgba(146,166,193,.28), rgba(146,166,193,0) 35%)" }} />
      <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto", padding: "120px 28px 130px" }}>
        <Wordmark color="#fff" size={22} />
        <h1 style={{ color: "#fff", fontSize: 46, marginTop: 26, maxWidth: 720, lineHeight: 1.08 }}>
          A next-generation investment management firm
        </h1>
        <p style={{ color: "#cdd9e8", fontSize: 19, marginTop: 20, maxWidth: 600 }}>
          Chicago Global runs timeless investment strategies powered by advanced technology. We engineer
          portfolios that learn and adapt faster than humans.
        </p>
        <div style={{ marginTop: 30, display: "flex", gap: 12 }}>
          <button className="btn-cta">Get In Touch</button>
          <a style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#92A6C1", fontFamily: "var(--font-body)",
            fontWeight: 600, fontSize: 15, textDecoration: "none", padding: "11px 6px" }}>
            Try Parallax <CGIcon name="arrow-right" size={16} color="#92A6C1" />
          </a>
        </div>
      </div>
    </section>
  );
}

const CG_TIMELINE = [
  ["2015", "Team comes together at University of Chicago. Company subsequently incorporated in Singapore."],
  ["2019", "Global Equity Fund launch. Initial release of Parallax 1.0."],
  ["2022", "AI-powered risk analytics. Parallax 2.0 with enhanced reasoning and context processing."],
  ["2024", "Launch of Investment Solutions for Family Offices. Parallax 3.0, in training."],
  ["2026", "Parallax launch. Try the technology."],
];

function CGTimeline() {
  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "84px 28px" }}>
      <div className="cg-eyebrow">History</div>
      <h2 style={{ marginTop: 12, fontSize: 32, color: "var(--navy)" }}>A decade of compounding research</h2>
      <div style={{ marginTop: 40, display: "flex", flexDirection: "column" }}>
        {CG_TIMELINE.map(([yr, txt], i) => (
          <div key={yr} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 28,
            padding: "22px 0", borderTop: "1px solid #e7eaef" }}>
            <div style={{ fontFamily: "var(--font-num)", fontWeight: 700, fontSize: 26, color: "#ED7D31" }}>{yr}</div>
            <p style={{ margin: 0, fontSize: 17, color: "#1F2937", maxWidth: 620 }}>{txt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CGQuote() {
  return (
    <section style={{ background: "#F5F2EB" }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "84px 28px", textAlign: "center" }}>
        <blockquote style={{ margin: 0, fontFamily: "var(--font-head)", fontWeight: 400, fontSize: 28,
          lineHeight: 1.4, color: "var(--navy)" }}>
          “Fifty years of research and development were needed to lay the groundwork for Chicago Global.
          Today, we deliver unrivaled investment technology in an ultra efficient format.”
        </blockquote>
        <div className="cg-eyebrow" style={{ marginTop: 26, color: "#547498" }}>Ivan Chelebiev · Co-Founder</div>
      </div>
    </section>
  );
}

function CGTeam() {
  const team = [["Ivan Chelebiev", "Co-Founder"], ["Ben —", "Co-Founder"], ["Research", "Quantitative team"]];
  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "84px 28px" }}>
      <div className="cg-eyebrow">Team</div>
      <h2 style={{ marginTop: 12, fontSize: 32, color: "var(--navy)" }}>Alumni and faculty of UChicago Booth</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, marginTop: 36 }}>
        {team.map(([n, r]) => (
          <div key={n}>
            <div style={{ aspectRatio: "4/5", borderRadius: 8, background: "#0C2746",
              display: "flex", alignItems: "flex-end", padding: 16, color: "#3b5e85", fontSize: 12,
              fontFamily: "var(--font-body)", border: "1px solid #e7eaef" }}>
              AI portrait · black bg
            </div>
            <div style={{ marginTop: 14, fontFamily: "var(--font-head)", fontWeight: 700, color: "var(--navy)", fontSize: 17 }}>{n}</div>
            <div style={{ color: "#547498", fontSize: 14, fontFamily: "var(--font-body)" }}>{r}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CGFooter() {
  return (
    <footer style={{ background: "var(--navy)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 28px 36px", display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr", gap: 32 }}>
        <div>
          <Wordmark color="#fff" size={18} />
          <p style={{ color: "#92A6C1", fontSize: 14, marginTop: 16, maxWidth: 320 }}>
            Powered by Parallax. For accredited and institutional investors.
          </p>
        </div>
        <div>
          <div className="cg-eyebrow" style={{ color: "#92A6C1" }}>Contact</div>
          <p style={{ color: "#cdd9e8", fontSize: 14, marginTop: 14, lineHeight: 1.6 }}>
            info@chicago.global<br />30 Cecil Street #16-08<br />Prudential Tower, Singapore 049712
          </p>
        </div>
        <div>
          <div className="cg-eyebrow" style={{ color: "#92A6C1" }}>Legal</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: 14 }}>
            {["Privacy Policy", "Disclaimer"].map((x) => <a key={x} style={{ color: "#cdd9e8", fontSize: 14,
              textDecoration: "none", fontFamily: "var(--font-body)" }}>{x}</a>)}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 28px 30px", borderTop: "1px solid rgba(146,166,193,.16)",
        color: "#6e87a3", fontSize: 12.5, fontFamily: "var(--font-body)" }}>
        © 2026 Chicago Global Capital Pte Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}

Object.assign(window, { CGNav, CGHero, CGTimeline, CGQuote, CGTeam, CGFooter });
