/* Polaris Exhibit Suite — Tweaks: palette · display type · motion (mirrors the
   benchmark's bottom-right theme switcher). */

const SUITE_TWEAKS = /*EDITMODE-BEGIN*/{
  "palette": "warm",
  "display": "house",
  "settle": "standard"
}/*EDITMODE-END*/;

// accent ramps — [accent, bright, accent-hair]
const SUITE_PALETTES = {
  warm:     ["#c9a55f", "#e9d8b0", "rgba(201,165,95,.28)"],
  cerulean: ["#3e92cc", "#cfe3f5", "rgba(62,146,204,.30)"],
  mono:     ["#9fb3c8", "#e2e8f0", "rgba(159,179,200,.28)"]
};

const SUITE_DISPLAY = {
  // headline / display family
  house:  '"NorPath","Norpeth","Source Serif 4",Georgia,serif',
  modern: '"Futura","Futura PT","Jost","Century Gothic",sans-serif'
};

const SUITE_SETTLE = { subtle: ".55s", standard: ".8s", dramatic: "1.15s" };

function applySuiteVars(t) {
  const r = document.documentElement.style;
  const p = SUITE_PALETTES[t.palette] || SUITE_PALETTES.warm;
  r.setProperty('--accent', p[0]);
  r.setProperty('--bright', p[1]);
  r.setProperty('--accent-hair', p[2]);
  r.setProperty('--serif', SUITE_DISPLAY[t.display] || SUITE_DISPLAY.house);
  // when display = modern sans, headlines read better upright than italic
  document.body.classList.toggle('disp-modern', t.display === 'modern');
  r.setProperty('--settle-dur', SUITE_SETTLE[t.settle] || SUITE_SETTLE.standard);
}

function SuiteTweaks() {
  const [t, setTweak] = useTweaks(SUITE_TWEAKS);
  React.useEffect(() => {
    applySuiteVars(t);
  }, [t.palette, t.display, t.settle]);

  return (
    <TweaksPanel>
      <TweakSection label="Accent palette" />
      <TweakRadio label="Ramp" value={t.palette}
                  options={['warm', 'cerulean', 'mono']}
                  onChange={(v) => setTweak('palette', v)} />
      <TweakSection label="Display type" />
      <TweakRadio label="Headlines" value={t.display}
                  options={['house', 'modern']}
                  onChange={(v) => setTweak('display', v)} />
      <TweakSection label="Entrance motion" />
      <TweakRadio label="Settle" value={t.settle}
                  options={['subtle', 'standard', 'dramatic']}
                  onChange={(v) => setTweak('settle', v)} />
    </TweaksPanel>
  );
}

// apply persisted/default vars immediately, before React mounts
applySuiteVars(SUITE_TWEAKS);
ReactDOM.createRoot(document.getElementById('tweak-root')).render(<SuiteTweaks />);
