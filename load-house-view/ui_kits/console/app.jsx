/* Parallax Console — dark dashboard UI kit.
   IMPORTANT: reconstructed from brand-guidelines.md dark-mode component specs +
   product description. The real Console is login-gated; this is NOT a copy of it.
   Swap for a screenshot-accurate build when the user supplies Console captures. */
const { useState: useStateC } = React;

function CIcon({ name, size = 18, color = "currentColor", stroke = 1.75, style = {} }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
    strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
    style={{ flex: "none", display: "inline-block", verticalAlign: "middle", ...style }}
    dangerouslySetInnerHTML={{ __html: (window.PXICONS && window.PXICONS[name]) || "" }} />;
}

const NAV = [
  ["layout-dashboard", "Overview"], ["chart-pie", "Portfolio"], ["search", "Analyzer"],
  ["filter", "Screener"], ["file-text", "Research"], ["bell", "Alerts"],
];

function Sidebar({ active, setActive }) {
  return (
    <aside style={{ width: 240, flex: "none", background: "#0a2039", borderRight: "1px solid #285FA0",
      display: "flex", flexDirection: "column", padding: "18px 14px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "4px 8px 18px" }}>
        <img src="../../assets/parallax-mark-white.svg" alt="" style={{ width: 20, height: 22 }} />
        <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, color: "#fff", fontSize: 18 }}>Parallax</span>
      </div>
      <nav style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {NAV.map(([ic, label]) => {
          const on = active === label;
          return (
            <button key={label} onClick={() => setActive(label)} style={{ display: "flex", alignItems: "center", gap: 11,
              padding: "10px 12px", borderRadius: 8, border: 0, cursor: "pointer", textAlign: "left",
              fontFamily: "var(--font-body)", fontSize: 14.5, fontWeight: on ? 600 : 400,
              background: on ? "#154175" : "transparent", color: on ? "#fff" : "#92A6C1" }}>
              <CIcon name={ic} size={18} color={on ? "#ED7D31" : "#92A6C1"} />{label}
            </button>
          );
        })}
      </nav>
      <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 10, padding: "12px 10px",
        borderTop: "1px solid #285FA0" }}>
        <span style={{ width: 30, height: 30, borderRadius: 99, background: "#547498", display: "flex",
          alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 700 }}>IC</span>
        <div style={{ fontFamily: "var(--font-body)", lineHeight: 1.2 }}>
          <div style={{ color: "#fff", fontSize: 13 }}>I. Chelebiev</div>
          <div style={{ color: "#6e87a3", fontSize: 11.5 }}>Family Office</div>
        </div>
      </div>
    </aside>
  );
}

function TopBar({ active }) {
  return (
    <div style={{ height: 60, flex: "none", borderBottom: "1px solid #285FA0", display: "flex",
      alignItems: "center", gap: 16, padding: "0 24px" }}>
      <h1 style={{ fontSize: 20, color: "#fff", margin: 0 }}>{active}</h1>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "#92A6C1",
        padding: "4px 10px", borderRadius: 99, border: "1px solid #285FA0" }}>Polaris · USD</span>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#0a2039", border: "1px solid #285FA0",
          borderRadius: 6, padding: "8px 12px", width: 220 }}>
          <CIcon name="search" size={15} color="#6e87a3" />
          <span style={{ color: "#6e87a3", fontSize: 13, fontFamily: "var(--font-body)" }}>Search securities…</span>
        </div>
        <button className="btn-cta" style={{ padding: "9px 15px", fontSize: 13.5 }}>+ New analysis</button>
      </div>
    </div>
  );
}

function Card({ children, style = {} }) {
  return <div style={{ background: "#154175", border: "1px solid #285FA0", borderRadius: 12, padding: 20, ...style }}>{children}</div>;
}

function StatCards() {
  const stats = [["Portfolio value", "$24.82M", "+1.8%", true], ["Day P&L", "+$184.2K", "+0.74%", true],
    ["Sharpe (1Y)", "1.62", "+0.08", true], ["Max drawdown", "−8.4%", "−1.1%", false]];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
      {stats.map(([label, val, delta, pos]) => (
        <Card key={label}>
          <div style={{ color: "#92A6C1", fontSize: 13, fontFamily: "var(--font-body)" }}>{label}</div>
          <div style={{ fontFamily: "var(--font-num)", fontVariantNumeric: "tabular-nums", color: "#fff",
            fontSize: 26, fontWeight: 700, marginTop: 8 }}>{val}</div>
          <div style={{ fontFamily: "var(--font-num)", fontSize: 13, marginTop: 4, color: pos ? "#5fdd9a" : "#f0a3a3" }}>
            {pos ? "↑" : "↓"} {delta}
          </div>
        </Card>
      ))}
    </div>
  );
}

const FACTORS = [["Quality", 82], ["Defensive", 64], ["Momentum", 91], ["Value", 47], ["Size", 38], ["Tactical", 73]];
function FactorPanel() {
  return (
    <Card>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <h3 style={{ color: "#fff", fontSize: 17, margin: 0 }}>Factor decomposition</h3>
        <span style={{ color: "#6e87a3", fontSize: 12, fontFamily: "var(--font-body)" }}>vs. benchmark</span>
      </div>
      <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 14 }}>
        {FACTORS.map(([name, v]) => (
          <div key={name} style={{ display: "grid", gridTemplateColumns: "92px 1fr 38px", gap: 12, alignItems: "center" }}>
            <span style={{ color: "#cdd9e8", fontSize: 13.5, fontFamily: "var(--font-body)" }}>{name}</span>
            <span style={{ height: 8, borderRadius: 99, background: "#0a2039", overflow: "hidden", display: "block" }}>
              <span style={{ display: "block", height: "100%", width: v + "%",
                background: v >= 70 ? "#5fdd9a" : v >= 50 ? "#92A6C1" : "#ED7D31" }} />
            </span>
            <span style={{ fontFamily: "var(--font-num)", fontVariantNumeric: "tabular-nums", color: "#fff",
              fontSize: 13, textAlign: "right" }}>{v}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Holdings() {
  const rows = [
    ["NVDA", "NVIDIA", "9.4", "↑ +2.2%", "BUY", "buy"],
    ["AAPL", "Apple Inc.", "8.6", "↑ +1.4%", "BUY", "buy"],
    ["MSFT", "Microsoft", "9.1", "↑ +0.8%", "HOLD", "hold"],
    ["TSLA", "Tesla", "5.2", "↓ −3.1%", "SELL", "sell"],
    ["JPM", "JPMorgan", "7.3", "↑ +0.5%", "HOLD", "hold"],
  ];
  const tone = { buy: ["#0f3d24", "#5fdd9a"], sell: ["#3d1414", "#f0a3a3"], hold: ["#3d2a10", "#f0c48a"] };
  return (
    <Card style={{ padding: 0, overflow: "hidden" }}>
      <div style={{ padding: "16px 20px", borderBottom: "1px solid #285FA0" }}>
        <h3 style={{ color: "#fff", fontSize: 17, margin: 0 }}>Holdings</h3>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5 }}>
        <thead><tr style={{ background: "#0C2746" }}>
          {["Ticker", "Name", "Factor", "Day", "Rating"].map((h, i) => (
            <th key={h} style={{ textAlign: i >= 2 ? "right" : "left", color: "#cdd9e8", fontWeight: 600,
              fontFamily: "var(--font-body)", padding: "10px 20px", fontSize: 12.5 }}>{h}</th>
          ))}
        </tr></thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr key={r[0]} style={{ background: idx % 2 ? "rgba(146,166,193,.05)" : "transparent" }}>
              <td style={{ padding: "11px 20px", fontFamily: "var(--font-num)", fontWeight: 700, color: "#fff" }}>{r[0]}</td>
              <td style={{ padding: "11px 20px", color: "#92A6C1", fontFamily: "var(--font-body)" }}>{r[1]}</td>
              <td style={{ padding: "11px 20px", textAlign: "right", fontFamily: "var(--font-num)", color: "#cdd9e8" }}>{r[2]}</td>
              <td style={{ padding: "11px 20px", textAlign: "right", fontFamily: "var(--font-num)", fontWeight: 600,
                color: r[3].includes("−") ? "#f0a3a3" : "#5fdd9a" }}>{r[3]}</td>
              <td style={{ padding: "11px 20px", textAlign: "right" }}>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, padding: "3px 9px",
                  borderRadius: 4, background: tone[r[5]][0], color: tone[r[5]][1] }}>{r[4]}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

function ConsoleApp() {
  const [active, setActive] = useStateC("Overview");
  return (
    <div style={{ display: "flex", height: "100vh", background: "#0C2746", color: "#fff" }}>
      <Sidebar active={active} setActive={setActive} />
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <TopBar active={active} />
        <div style={{ flex: 1, overflow: "auto", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          <StatCards />
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 16 }}>
            <Holdings />
            <FactorPanel />
          </div>
        </div>
      </main>
    </div>
  );
}

Object.assign(window, { ConsoleApp });
