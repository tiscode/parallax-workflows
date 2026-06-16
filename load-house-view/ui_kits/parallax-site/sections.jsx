/* Parallax UI kit — page sections. Depends on primitives.jsx (window globals). */
const { useState: useStateS } = React;

function Nav() {
  const links = ["Features", "Insights", "Technology", "Comparison", "Docs"];
  const [active, setActive] = useStateS("Features");
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, backdropFilter: "blur(10px)",
      background: "rgba(12,39,70,.72)", borderBottom: "1px solid rgba(146,166,193,.14)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", height: 64, display: "flex",
        alignItems: "center", gap: 28, padding: "0 28px" }}>
        <Logo dark size={24} />
        <nav style={{ display: "flex", gap: 22, marginLeft: 10 }}>
          {links.map((l) => (
            <a key={l} onClick={() => setActive(l)} style={{ cursor: "pointer", fontFamily: "var(--font-body)",
              fontSize: 14.5, color: active === l ? "#fff" : "#92A6C1", textDecoration: "none",
              fontWeight: active === l ? 600 : 400 }}>{l}</a>
          ))}
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16 }}>
          <a style={{ fontFamily: "var(--font-body)", fontSize: 14.5, color: "#cdd9e8", textDecoration: "none" }}>Login</a>
          <Button variant="cta" style={{ padding: "9px 16px", fontSize: 14 }}>Schedule a Demo</Button>
        </div>
      </div>
    </header>
  );
}

function AnalyzerFrame() {
  const [tab, setTab] = useStateS("Portfolio Analytics");
  const rows = [
    ["AAPL", "Apple Inc.", "228.52", "+1.4", "8.6"],
    ["MSFT", "Microsoft", "441.30", "+0.8", "9.1"],
    ["NVDA", "NVIDIA", "121.44", "+2.2", "9.4"],
    ["TSLA", "Tesla", "242.10", "-3.1", "5.2"],
  ];
  return (
    <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid rgba(146,166,193,.2)",
      background: "#0a2039", boxShadow: "0 30px 80px rgba(0,0,0,.5)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 14px",
        background: "#0e2a4a", borderBottom: "1px solid rgba(146,166,193,.16)" }}>
        <span style={{ width: 11, height: 11, borderRadius: 99, background: "#ED7D31" }} />
        <span style={{ width: 11, height: 11, borderRadius: 99, background: "#547498" }} />
        <span style={{ width: 11, height: 11, borderRadius: 99, background: "#284b73" }} />
        <span style={{ marginLeft: 12, fontFamily: "var(--font-num)", fontSize: 12.5, color: "#92A6C1" }}>
          parallax.chicago.global/analyzer
        </span>
      </div>
      <div style={{ display: "flex", gap: 4, padding: "12px 16px 0" }}>
        {["Portfolio Analytics", "Stock Research"].map((t) => (
          <button key={t} onClick={() => setTab(t)} style={{ fontFamily: "var(--font-body)", fontSize: 13,
            fontWeight: 600, cursor: "pointer", padding: "8px 14px", border: 0, borderRadius: "6px 6px 0 0",
            background: tab === t ? "#11335a" : "transparent", color: tab === t ? "#fff" : "#92A6C1" }}>{t}</button>
        ))}
      </div>
      <div style={{ padding: 16 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: "#11335a" }}>
              {["Ticker", "Name", "Price", "Day", "Factor"].map((h, i) => (
                <th key={h} style={{ textAlign: i > 1 ? "right" : "left", color: "#cdd9e8",
                  fontFamily: "var(--font-body)", fontWeight: 600, padding: "9px 12px", fontSize: 12 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={r[0]} style={{ background: idx % 2 ? "rgba(146,166,193,.05)" : "transparent" }}>
                <td style={{ padding: "9px 12px", fontWeight: 700, color: "#fff", fontFamily: "var(--font-num)" }}>{r[0]}</td>
                <td style={{ padding: "9px 12px", color: "#92A6C1" }}>{r[1]}</td>
                <td style={{ padding: "9px 12px", textAlign: "right", fontFamily: "var(--font-num)", color: "#cdd9e8" }}>{r[2]}</td>
                <td style={{ padding: "9px 12px", textAlign: "right", fontFamily: "var(--font-num)", fontWeight: 600,
                  color: r[3].startsWith("-") ? "#f0a3a3" : "#5fdd9a" }}>
                  {r[3].startsWith("-") ? "↓" : "↑"} {r[3]}%
                </td>
                <td style={{ padding: "9px 12px", textAlign: "right", fontFamily: "var(--font-num)", color: "#cdd9e8" }}>{r[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 28px 40px",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
      <div>
        <Eyebrow>AI-Native Workspace for Finance</Eyebrow>
        <h1 style={{ fontSize: 52, marginTop: 16, color: "#fff", lineHeight: 1.05 }}>
          Investment Intelligence <span style={{ color: "#92A6C1" }}>for better decisions</span>
        </h1>
        <p style={{ marginTop: 20, fontSize: 18, color: "#a9bace", maxWidth: 460 }}>
          Analyze 62,000+ securities with AI-powered quantitative models. Accelerate research,
          automate workflows, and enhance returns.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
          <StatChip icon="layers">15+ quantitative factors</StatChip>
          <StatChip icon="cpu">Multi-model AI engine</StatChip>
          <StatChip icon="globe">48 global markets</StatChip>
        </div>
        <div style={{ marginTop: 30, display: "flex", gap: 12 }}>
          <Button variant="cta" iconRight="arrow-right">Schedule a Demo</Button>
          <Button variant="secondary">Read the docs</Button>
        </div>
      </div>
      <AnalyzerFrame />
    </section>
  );
}

function FeatureBento() {
  const feats = [
    ["file-text", "Automated Reports", "AI-generated research reports for every security and portfolio."],
    ["bell", "Real-Time Insights", "Get notified on earnings, risk alerts, and opportunities."],
    ["cpu", "Multi-Model AI", "Parallax orchestrates OpenAI, Anthropic, Gemini, and Perplexity as peer models."],
    ["calendar-range", "30+ Years of Data", "Backtest strategies against three decades of market history."],
  ];
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 28px" }}>
      <Eyebrow>The platform</Eyebrow>
      <h2 style={{ color: "#fff", marginTop: 12, fontSize: 34 }}>See our platform in action</h2>
      <p style={{ color: "#92A6C1", marginTop: 10, fontSize: 17 }}>Explore the tools that power smarter investment decisions.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginTop: 32 }}>
        {feats.map(([ic, t, d]) => (
          <div key={t} style={{ background: "#11335a", border: "1px solid var(--navy-600)",
            borderRadius: 12, padding: 22, display: "flex", flexDirection: "column", gap: 12, minHeight: 168 }}>
            <span style={{ width: 40, height: 40, borderRadius: 9, background: "rgba(237,125,49,.14)",
              display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={ic} size={20} color="#ED7D31" />
            </span>
            <h3 style={{ color: "#fff", fontSize: 18, marginTop: 4 }}>{t}</h3>
            <p style={{ color: "#a9bace", fontSize: 14, lineHeight: 1.5, margin: 0 }}>{d}</p>
            <a style={{ marginTop: "auto", color: "#92A6C1", fontSize: 13.5, textDecoration: "underline",
              fontFamily: "var(--font-body)" }}>Learn more</a>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    ["What is Parallax and how does it work?",
      "Parallax is a Large Investment Model that discovers, scores, constructs, and explains investment decisions across 62,000+ securities and 48 markets."],
    ["How many markets and securities does Parallax cover?", "48 markets and 62,000+ securities, scored across 15+ factors and 30+ alpha signals."],
    ["What kind of reports does Parallax generate?", "AI-generated research reports for every security and portfolio — factor breakdowns, risk decomposition, and macro context."],
    ["Which AI models does Parallax integrate with?", "OpenAI, Anthropic, Gemini, and Perplexity, orchestrated as peer models."],
    ["Is my portfolio data secure?", "Yes. Same input produces same output — defensible to MAS, FCA, SFC, and SEC."],
  ];
  const [open, setOpen] = useStateS(0);
  return (
    <section style={{ maxWidth: 800, margin: "0 auto", padding: "60px 28px" }}>
      <Eyebrow style={{ textAlign: "center" }}>FAQs</Eyebrow>
      <h2 style={{ color: "#fff", textAlign: "center", marginTop: 12, fontSize: 30 }}>Your questions answered</h2>
      <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
        {qs.map(([q, a], i) => (
          <div key={i} style={{ border: "1px solid var(--navy-600)", borderRadius: 10, background: "#0e2a4a", overflow: "hidden" }}>
            <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: "100%", textAlign: "left",
              display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, cursor: "pointer",
              border: 0, background: "transparent", padding: "16px 18px", fontFamily: "var(--font-head)",
              fontWeight: 700, color: "#fff", fontSize: 16 }}>
              {q}<Icon name={open === i ? "minus" : "plus"} size={18} color="#92A6C1" />
            </button>
            {open === i && <p style={{ margin: 0, padding: "0 18px 18px", color: "#a9bace", fontSize: 15, lineHeight: 1.55 }}>{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 28px 70px" }}>
      <div style={{ borderRadius: 16, padding: "56px 40px", textAlign: "center",
        background: "linear-gradient(180deg,#11335a,#0a2039)", border: "1px solid var(--navy-600)" }}>
        <h2 style={{ color: "#fff", fontSize: 34, maxWidth: 640, margin: "0 auto" }}>
          Start making smarter investment decisions
        </h2>
        <p style={{ color: "#a9bace", fontSize: 17, maxWidth: 560, margin: "16px auto 0" }}>
          The AI workspace that helps investment teams analyze faster, research deeper, and decide with confidence.
        </p>
        <div style={{ marginTop: 26, display: "flex", justifyContent: "center" }}>
          <Button variant="cta" iconRight="arrow-right">Schedule a Demo</Button>
        </div>
        <div style={{ marginTop: 14, color: "#6e87a3", fontSize: 13.5, fontFamily: "var(--font-body)" }}>Talk to us for early access</div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    ["Platform", ["Features", "Insights", "Technology", "Comparison"]],
    ["Company", ["About Us", "Contact", "Login"]],
    ["Legal", ["Terms", "Privacy", "Disclaimers"]],
  ];
  return (
    <footer style={{ borderTop: "1px solid rgba(146,166,193,.14)", background: "#0a2039" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 28px 28px", display: "grid",
        gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 32 }}>
        <div>
          <Logo dark size={24} />
          <p style={{ color: "#6e87a3", fontSize: 13.5, marginTop: 14, maxWidth: 280 }}>
            By Chicago Global Capital. Quantitative investment analytics for institutional and accredited investors.
          </p>
          <div style={{ marginTop: 12, color: "#92A6C1", fontSize: 13, fontFamily: "var(--font-body)" }}>
            A Chicago Global product →
          </div>
        </div>
        {cols.map(([h, items]) => (
          <div key={h}>
            <div className="cg-eyebrow" style={{ color: "#92A6C1" }}>{h}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: 14 }}>
              {items.map((it) => <a key={it} style={{ color: "#a9bace", fontSize: 14, textDecoration: "none", fontFamily: "var(--font-body)" }}>{it}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "18px 28px 36px", borderTop: "1px solid rgba(146,166,193,.1)",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ color: "#6e87a3", fontSize: 12.5, fontFamily: "var(--font-body)" }}>
          © 2026 Chicago Global Capital Pte. Ltd. · UEN 201734851Z · 30 Cecil Street #16-08, Singapore 049712
        </span>
        <span className="editorial" style={{ fontStyle: "italic", color: "#ED7D31", fontSize: 19 }}>Solve the market.</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, FeatureBento, FAQ, CTA, Footer, AnalyzerFrame });
