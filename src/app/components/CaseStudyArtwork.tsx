import type { CaseStudy } from "../data/caseStudies";

// ─── Micro SVG Icons ──────────────────────────────────────────────────────────
const SigBars = ({ c = "#FFF" }: { c?: string }) => (
  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
    <rect x="0" y="5.5" width="2" height="3.5" rx="0.5" fill={c}/>
    <rect x="3.5" y="3.5" width="2" height="5.5" rx="0.5" fill={c}/>
    <rect x="7" y="1.5" width="2" height="7.5" rx="0.5" fill={c}/>
    <rect x="10" y="0" width="2" height="9" rx="0.5" fill={c} opacity="0.3"/>
  </svg>
);
const BattIcon = ({ c = "#FFF", pct = 85 }: { c?: string; pct?: number }) => (
  <svg width="19" height="10" viewBox="0 0 19 10" fill="none">
    <rect x="0.5" y="0.5" width="15" height="9" rx="2.5" stroke={c} strokeWidth="1" opacity="0.6"/>
    <rect x="2" y="2" width={Math.round(11 * pct / 100)} height="6" rx="1.2" fill={pct <= 20 ? "#FF3B30" : c}/>
    <path d="M16 3.5v3" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.55"/>
  </svg>
);
const WifiIco = ({ c = "#FFF" }: { c?: string }) => (
  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
    <path d="M1 3.5Q6 0 11 3.5" stroke={c} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4"/>
    <path d="M2.5 5.5Q6 3 9.5 5.5" stroke={c} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7"/>
    <path d="M4 7.5Q6 6 8 7.5" stroke={c} strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    <circle cx="6" cy="9" r="0.9" fill={c}/>
  </svg>
);
const HomeIco = ({ c = "#FFF" }: { c?: string }) => (
  <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
    <path d="M1.5 6.5L7 1.5L12.5 6.5V12H9.5V9H4.5V12H1.5V6.5Z" stroke={c} strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
  </svg>
);
const SearchIco = ({ c = "#FFF" }: { c?: string }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <circle cx="5" cy="5" r="4" stroke={c} strokeWidth="1.2" fill="none"/>
    <line x1="8" y1="8" x2="11" y2="11" stroke={c} strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const BoxIco = ({ c = "#FFF" }: { c?: string }) => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <rect x="1" y="4" width="11" height="8.5" rx="1.5" stroke={c} strokeWidth="1.2" fill="none"/>
    <path d="M1 7h11" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
    <path d="M4 0.5L1 4M9 0.5L12 4" stroke={c} strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="4" y1="0.5" x2="9" y2="0.5" stroke={c} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
const PersonIco = ({ c = "#FFF" }: { c?: string }) => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <circle cx="6.5" cy="4" r="3" stroke={c} strokeWidth="1.2" fill="none"/>
    <path d="M1 13C1 10 3.5 8 6.5 8C9.5 8 12 10 12 13" stroke={c} strokeWidth="1.2" strokeLinecap="round" fill="none"/>
  </svg>
);
const BellIco = ({ c = "#FFF" }: { c?: string }) => (
  <svg width="12" height="13" viewBox="0 0 12 13" fill="none">
    <path d="M6 1C6 1 2.5 2.5 2.5 6V9L1 10.5H11L9.5 9V6C9.5 2.5 6 1 6 1Z" stroke={c} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M4.5 10.5C4.5 11.3 5.2 12 6 12C6.8 12 7.5 11.3 7.5 10.5" stroke={c} strokeWidth="1.2" fill="none"/>
    <line x1="6" y1="0" x2="6" y2="1" stroke={c} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
const CartIco = ({ c = "#FFF" }: { c?: string }) => (
  <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
    <path d="M1 1H2.5L4.5 8.5H11L12.5 3.5H4" stroke={c} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="5.5" cy="11" r="1" fill={c}/>
    <circle cx="10.5" cy="11" r="1" fill={c}/>
  </svg>
);
const ChartIco = ({ c = "#FFF" }: { c?: string }) => (
  <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
    <rect x="1" y="7" width="2.5" height="5" rx="0.7" fill={c}/>
    <rect x="5" y="4" width="2.5" height="8" rx="0.7" fill={c}/>
    <rect x="9.5" y="1" width="2.5" height="11" rx="0.7" fill={c}/>
  </svg>
);
const CardIco = ({ c = "#FFF" }: { c?: string }) => (
  <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
    <rect x="0.5" y="0.5" width="13" height="10" rx="2" stroke={c} strokeWidth="1" fill="none"/>
    <line x1="1" y1="4" x2="13" y2="4" stroke={c} strokeWidth="1.5"/>
    <rect x="2" y="6.5" width="4" height="2" rx="0.5" fill={c} opacity="0.6"/>
  </svg>
);
const BoltIco = ({ c = "#FFF" }: { c?: string }) => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
    <path d="M6 1L1 8H5L4 13L9 6H5L6 1Z" fill={c} strokeWidth="0.5" strokeLinejoin="round"/>
  </svg>
);
const DropIco = ({ c = "#FFF" }: { c?: string }) => (
  <svg width="10" height="13" viewBox="0 0 10 13" fill="none">
    <path d="M5 0.5L1.5 5.5C0.4 7.2 0.4 9 1.6 10.5C2.8 12 7.2 12 8.4 10.5C9.6 9 9.6 7.2 8.5 5.5L5 0.5Z" stroke={c} strokeWidth="0.8" fill={c} opacity="0.85"/>
  </svg>
);
const NetIco = ({ c = "#FFF" }: { c?: string }) => (
  <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
    <path d="M1 3Q7 0 13 3" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.4"/>
    <path d="M3 5.5Q7 3 11 5.5" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.7"/>
    <path d="M5 8Q7 6.5 9 8" stroke={c} strokeWidth="1.3" strokeLinecap="round"/>
    <circle cx="7" cy="10" r="0.9" fill={c}/>
  </svg>
);
const CrossIco = ({ c = "#FFF" }: { c?: string }) => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M6.5 1V12M1 6.5H12" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);
const BackArrow = ({ c = "#111" }: { c?: string }) => (
  <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
    <path d="M10 2L4 7L10 12" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── Shared Status Bar ────────────────────────────────────────────────────────
function StatusBar({ dark }: { dark?: boolean }) {
  const ic = dark ? "rgba(241,244,251,0.72)" : "#333";
  const txt = dark ? "rgba(241,244,251,0.85)" : "#111";
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 12px 4px" }}>
      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 7.5, fontWeight: 700, color: txt }}>9:41</span>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <SigBars c={ic}/><WifiIco c={ic}/><BattIcon c={ic} pct={85}/>
      </div>
    </div>
  );
}

function HomeIndicator({ dark }: { dark?: boolean }) {
  return (
    <div style={{ display:"flex", justifyContent:"center", paddingTop:4, paddingBottom:5 }}>
      <div style={{ width:36, height:4, borderRadius:2, background: dark ? "rgba(241,244,251,0.2)" : "rgba(0,0,0,0.16)" }}/>
    </div>
  );
}

// ─── Phone Frame ─────────────────────────────────────────────────────────────
function PhoneFrame({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  const shell = dark
    ? "linear-gradient(158deg,#2E3D4E 0%,#1C2A38 35%,#121C28 65%,#1E2E3E 100%)"
    : "linear-gradient(158deg,#2E2E2E 0%,#1C1C1C 35%,#111111 65%,#1E1E1E 100%)";
  const btnBg = dark ? "#233040" : "#1A1A1A";
  return (
    <div style={{ position: "relative", width: 134, flexShrink: 0 }}>
      {/* Side buttons */}
      <div style={{ position: "absolute", left: -2.5, top: 64, width: 3, height: 18, borderRadius: "3px 0 0 3px", background: btnBg }}/>
      <div style={{ position: "absolute", left: -2.5, top: 90, width: 3, height: 18, borderRadius: "3px 0 0 3px", background: btnBg }}/>
      <div style={{ position: "absolute", right: -2.5, top: 72, width: 3, height: 30, borderRadius: "0 3px 3px 0", background: btnBg }}/>
      {/* Outer shell */}
      <div style={{
        width: 134, height: 270, borderRadius: 28,
        background: shell,
        padding: "3px",
        boxShadow: dark
          ? "0 36px 72px -14px rgba(0,0,0,0.8),0 0 0 1px rgba(255,255,255,0.08),inset 0 1px 0 rgba(255,255,255,0.1),inset 0 -1px 0 rgba(0,0,0,0.4)"
          : "0 36px 72px -14px rgba(0,0,0,0.65),0 0 0 1px rgba(255,255,255,0.1),inset 0 1px 0 rgba(255,255,255,0.14),inset 0 -1px 0 rgba(0,0,0,0.5)",
      }}>
        <div style={{ width:"100%", height:"100%", borderRadius: 25, background: dark ? "#0B1F3A" : "#FFF", overflow:"hidden", position:"relative" }}>
          {/* Dynamic Island */}
          <div style={{ position:"absolute", top:7, left:"50%", transform:"translateX(-50%)", width:38, height:9, borderRadius:9, background:"#050505", zIndex:20, boxShadow:"0 0 0 1px rgba(255,255,255,0.07)" }}/>
          {children}
        </div>
      </div>
    </div>
  );
}

// ─── ARTWORK EXPORT ───────────────────────────────────────────────────────────
export function CaseStudyArtwork({ cs }: { cs: CaseStudy; animated?: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: cs.bg }}>
      {cs.pattern === "brew"   && <BrewArtwork cs={cs} />}
      {cs.pattern === "shop"   && <ShopArtwork cs={cs} />}
      {cs.pattern === "wallet" && <WalletArtwork cs={cs} />}
      <div className="pointer-events-none absolute inset-0" style={{ background:"radial-gradient(circle at 70% 18%,rgba(255,255,255,0.14),transparent 55%)" }}/>
    </div>
  );
}

// ─── BREW ─────────────────────────────────────────────────────────────────────
function BrewArtwork({ cs }: { cs: CaseStudy }) {
  const beans: [number,number,number,number,number][] = [
    [318,52,-30,15,10],[38,128,45,12,8],[358,288,20,14,9],
    [14,378,-55,13,8],[200,458,30,16,10],[78,58,15,11,7],
  ];
  return (
    <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"8% 6%" }}>
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.13 }} viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
        {beans.map(([x,y,r,rx,ry],i) => (
          <g key={i} transform={`translate(${x},${y}) rotate(${r})`}>
            <ellipse cx="0" cy="0" rx={rx} ry={ry} fill="#7A4A28"/>
            <line x1="0" y1={-ry+1} x2="0" y2={ry-1} stroke="#5A3018" strokeWidth="1.2"/>
          </g>
        ))}
        <circle cx="200" cy="490" r="130" fill="none" stroke="#C99868" strokeWidth="0.5" opacity="0.22"/>
        <circle cx="200" cy="490" r="178" fill="none" stroke="#C99868" strokeWidth="0.3" opacity="0.14"/>
      </svg>

      {/* macOS-style browser window */}
      <div style={{ width:"100%", borderRadius:12, background:"#FFF", boxShadow:"0 32px 80px -16px rgba(42,26,15,0.55),0 0 0 1px rgba(42,26,15,0.08)", overflow:"hidden", display:"flex", flexDirection:"column" }}>
        {/* Title bar */}
        <div style={{ background:"#EDEBE8", padding:"6px 10px 5px", display:"flex", alignItems:"center", gap:6 }}>
          {(["#FF5F57","#FEBC2E","#28C840"] as const).map((c,i) => (
            <span key={i} style={{ width:8, height:8, borderRadius:"50%", background:c, display:"block", boxShadow:`0 0 0 0.5px rgba(0,0,0,0.14)` }}/>
          ))}
          {/* Tab */}
          <div style={{ flex:1, margin:"0 6px", background:"#FFF", borderRadius:"5px 5px 0 0", padding:"3px 9px", display:"flex", alignItems:"center", gap:5, maxWidth:180, boxShadow:"0 -1px 3px rgba(0,0,0,0.06)" }}>
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none"><circle cx="3.5" cy="3.5" r="3" fill="#C99868"/></svg>
            <span style={{ fontFamily:"Inter, sans-serif", fontSize:6.5, color:"#666" }}>breweasy.coffee</span>
          </div>
          <div style={{ flex:1 }}/>
        </div>
        {/* Address bar */}
        <div style={{ background:"#F5F3F0", borderBottom:"1px solid rgba(42,26,15,0.08)", padding:"4px 10px", display:"flex", alignItems:"center", gap:6 }}>
          <div style={{ display:"flex", gap:5, opacity:0.5 }}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M5 2L2 4L5 6" stroke="#555" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M3 2L6 4L3 6" stroke="#555" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div style={{ flex:1, background:"#DDDBD8", borderRadius:4, padding:"2px 8px", display:"flex", alignItems:"center", gap:4 }}>
            <svg width="6" height="7" viewBox="0 0 6 7" fill="none"><rect x="1" y="2.5" width="4" height="4" rx="0.8" stroke="#888" strokeWidth="0.8" fill="none"/><path d="M2 2.5V1.5a1 1 0 012 0v1" stroke="#888" strokeWidth="0.8"/></svg>
            <span style={{ fontFamily:"Inter, sans-serif", fontSize:6.5, color:"#888" }}>breweasy.coffee</span>
          </div>
        </div>
        {/* Navbar */}
        <div style={{ padding:"5px 10px", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:"1px solid rgba(42,26,15,0.07)", background:"#FFFCF8" }}>
          <span style={{ fontFamily:"Fraunces, serif", fontSize:10, color:"#2A1A0F", fontStyle:"italic" }}>Breweasy</span>
          <div style={{ display:"flex", gap:8, alignItems:"center" }}>
            {["Menu","Story","Roasters"].map(l => (
              <span key={l} style={{ fontFamily:"Inter, sans-serif", fontSize:6, letterSpacing:"0.14em", color:"#888", textTransform:"uppercase" }}>{l}</span>
            ))}
            <span style={{ fontFamily:"Inter, sans-serif", fontSize:5.5, background:"#2A1A0F", color:"#F5EBDD", borderRadius:20, padding:"2px 6px", letterSpacing:"0.12em", textTransform:"uppercase" }}>Order</span>
          </div>
        </div>
        {/* Hero */}
        <div style={{ background:"linear-gradient(155deg,#C4956A 0%,#8B5438 45%,#5A2E14 100%)", position:"relative", overflow:"hidden", height:90 }}>
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(circle at 22% 58%,rgba(255,210,160,0.18),transparent 60%)" }}/>
          <svg style={{ position:"absolute", right:-5, bottom:0, height:"115%", opacity:0.28 }} viewBox="0 0 100 120" fill="none">
            <ellipse cx="50" cy="110" rx="34" ry="8" fill="rgba(0,0,0,0.28)"/>
            <path d="M22 44 L27 103 Q28 110 36 110 L64 110 Q72 110 73 103 L78 44Z" fill="#1A0D05"/>
            <path d="M78 60 Q92 60 92 76 Q92 92 78 92" stroke="#1A0D05" strokeWidth="9" fill="none" strokeLinecap="round"/>
            <ellipse cx="50" cy="44" rx="28" ry="7" fill="#2A1A0A"/>
            <ellipse cx="50" cy="42" rx="24" ry="5" fill="#3A2010"/>
            <ellipse cx="50" cy="42" rx="19" ry="3.5" fill="#C4956A" opacity="0.55"/>
            {[36,50,64].map((x,i) => (
              <path key={i} d={`M${x} 33 Q${x-3} 25 ${x} 19 Q${x+3} 13 ${x} 7`} stroke="rgba(255,255,255,0.44)" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
            ))}
          </svg>
          <div style={{ position:"absolute", left:10, top:8, bottom:8, display:"flex", flexDirection:"column", justifyContent:"space-between", zIndex:2 }}>
            <div>
              <div style={{ fontFamily:"Inter, sans-serif", fontSize:5, letterSpacing:"0.3em", color:"rgba(245,235,221,0.6)", textTransform:"uppercase", marginBottom:3 }}>Ethiopia · Single Origin</div>
              <div style={{ fontFamily:"Fraunces, serif", fontSize:14, lineHeight:1.05, letterSpacing:"-0.025em", color:"#F5EBDD", fontWeight:400 }}>
                Slow <em style={{ fontStyle:"italic", fontWeight:300, opacity:0.75 }}>mornings,</em><br/>good beans.
              </div>
            </div>
            <div style={{ display:"flex", gap:5 }}>
              <span style={{ fontFamily:"Inter, sans-serif", fontSize:5.5, letterSpacing:"0.15em", background:"#F5EBDD", color:"#2A1A0F", borderRadius:20, padding:"2px 7px", textTransform:"uppercase" }}>Shop Beans</span>
              <span style={{ fontFamily:"Inter, sans-serif", fontSize:5.5, letterSpacing:"0.14em", color:"rgba(245,235,221,0.65)", textTransform:"uppercase", alignSelf:"center" }}>Our Story →</span>
            </div>
          </div>
        </div>
        {/* Products */}
        <div style={{ padding:"8px 10px 9px", background:"#FFFCF8" }}>
          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
            <span style={{ fontFamily:"Inter, sans-serif", fontSize:5.5, letterSpacing:"0.26em", color:"#999", textTransform:"uppercase" }}>Today's Roasts</span>
            <span style={{ fontFamily:"Inter, sans-serif", fontSize:5.5, letterSpacing:"0.14em", color:"#C99868", textTransform:"uppercase" }}>View All →</span>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:5 }}>
            {[
              { name:"Ethiopia Yirgacheffe", price:"₱380", badge:"New",  bg:"linear-gradient(145deg,#D4A574,#8B5E3C)" },
              { name:"Colombia Huila",       price:"₱350", badge:"",     bg:"linear-gradient(145deg,#C47850,#7A3A20)" },
              { name:"Guatemala Antigua",    price:"₱320", badge:"Best", bg:"linear-gradient(145deg,#B06030,#5A2E10)" },
            ].map(p => (
              <div key={p.name} style={{ borderRadius:6, overflow:"hidden", border:"1px solid rgba(42,26,15,0.09)" }}>
                <div style={{ background:p.bg, height:36, position:"relative", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <rect x="2" y="7" width="12" height="11" rx="2" fill="rgba(0,0,0,0.28)"/>
                    <rect x="5" y="4" width="6" height="5" rx="1" fill="rgba(0,0,0,0.22)"/>
                  </svg>
                  {p.badge && <span style={{ position:"absolute", top:3, right:3, fontFamily:"Inter, sans-serif", fontSize:4.5, background:"#2A1A0F", color:"#F5EBDD", borderRadius:3, padding:"1px 3px" }}>{p.badge}</span>}
                </div>
                <div style={{ padding:"4px 5px", background:"#FFF" }}>
                  <div style={{ fontFamily:"Inter, sans-serif", fontSize:5.5, color:"#2A1A0F", lineHeight:1.3, fontWeight:500 }}>{p.name}</div>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:3 }}>
                    <span style={{ fontFamily:"Fraunces, serif", fontSize:9, color:"#2A1A0F" }}>{p.price}</span>
                    <span style={{ fontFamily:"Inter, sans-serif", fontSize:5, background:"#2A1A0F", color:"#F5EBDD", borderRadius:20, padding:"1.5px 5px" }}>Add</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Status bar */}
        <div style={{ padding:"4px 10px", borderTop:"1px solid rgba(42,26,15,0.06)", display:"flex", justifyContent:"space-between", background:"#FFFCF8" }}>
          <div style={{ display:"flex", alignItems:"center", gap:4 }}>
            <span style={{ width:5, height:5, borderRadius:"50%", background:"#4CAF50", display:"block" }}/>
            <span style={{ fontFamily:"Inter, sans-serif", fontSize:5.5, color:"#888" }}>Open Now · 7am – 9pm</span>
          </div>
          <span style={{ fontFamily:"Inter, sans-serif", fontSize:5.5, color:"#C99868", textTransform:"uppercase", letterSpacing:"0.12em" }}>3 Locations</span>
        </div>
      </div>

      <div style={{ position:"absolute", bottom:"3%", left:"7%", fontFamily:"Fraunces, serif", fontSize:"clamp(9px,1.2vw,16px)", color:"#2A1A0F", fontStyle:"italic", fontWeight:300, opacity:0.38 }}>Est. 2024</div>
    </div>
  );
}

// ─── SHOP ─────────────────────────────────────────────────────────────────────
function ShopArtwork({ cs }: { cs: CaseStudy }) {
  return (
    <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
      <div style={{ position:"absolute", right:"-8%", top:"-14%", fontFamily:"Fraunces, serif", fontSize:"min(56vw,380px)", lineHeight:0.85, color:cs.accent, opacity:0.15, fontStyle:"italic", userSelect:"none", pointerEvents:"none" }}>S</div>
      {/* Glow accents */}
      <div style={{ position:"absolute", left:"10%", bottom:"15%", width:80, height:80, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,107,61,0.22),transparent 70%)", pointerEvents:"none" }}/>
      <div style={{ position:"absolute", right:"8%", top:"20%", width:60, height:60, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,230,176,0.18),transparent 70%)", pointerEvents:"none" }}/>

      {/* Phone 1 — Home Feed */}
      <div style={{ transform:"translateX(-40%) rotate(-6deg)", transformOrigin:"center 60%", zIndex:1, flexShrink:0, position:"absolute" }}>
        <PhoneFrame><HomeFeedScreen/></PhoneFrame>
      </div>
      {/* Phone 2 — Product Detail */}
      <div style={{ transform:"translateX(28%) rotate(5deg)", transformOrigin:"center 40%", zIndex:3, flexShrink:0, position:"absolute" }}>
        <PhoneFrame><ProductDetailScreen/></PhoneFrame>
      </div>

      <div style={{ position:"absolute", bottom:"5%", left:"7%", fontFamily:"Inter, sans-serif", fontSize:7, letterSpacing:"0.28em", color:"rgba(255,255,255,0.55)", textTransform:"uppercase" }}>Shopizee · 2024</div>
      <div style={{ position:"absolute", bottom:"5%", right:"7%", fontFamily:"Fraunces, serif", fontSize:11, color:cs.accent, letterSpacing:"-0.01em", fontStyle:"italic" }}>11 markets live</div>
    </div>
  );
}

// ─── WALLET ───────────────────────────────────────────────────────────────────
function WalletArtwork({ cs }: { cs: CaseStudy }) {
  return (
    <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.08 }} preserveAspectRatio="none">
        <defs><pattern id="wg" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0 L0 0 0 28" fill="none" stroke={cs.accent} strokeWidth="0.5"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#wg)"/>
      </svg>
      <div style={{ position:"absolute", top:"8%", right:"10%", width:"42%", paddingBottom:"42%", borderRadius:"50%", background:"radial-gradient(circle,rgba(125,243,184,0.14),transparent 70%)" }}/>
      <div style={{ position:"absolute", bottom:"12%", left:"6%", width:"32%", paddingBottom:"32%", borderRadius:"50%", background:"radial-gradient(circle,rgba(94,200,255,0.11),transparent 70%)" }}/>
      {/* Floating stat — top left */}
      <div style={{ position:"absolute", top:"12%", left:"4%", background:"rgba(15,32,60,0.88)", border:"1px solid rgba(125,243,184,0.2)", borderRadius:10, padding:"7px 10px", backdropFilter:"blur(8px)", zIndex:5 }}>
        <div style={{ fontFamily:"Inter, sans-serif", fontSize:5.5, color:"rgba(241,244,251,0.42)", letterSpacing:"0.16em", textTransform:"uppercase", marginBottom:3 }}>Send flow</div>
        <div style={{ fontFamily:"Fraunces, serif", fontSize:15, color:"#7DF3B8", letterSpacing:"-0.04em" }}>3 taps</div>
        <div style={{ fontFamily:"Inter, sans-serif", fontSize:5, color:"rgba(241,244,251,0.32)", marginTop:1 }}>↓ from 8</div>
      </div>
      {/* Floating stat — bottom right */}
      <div style={{ position:"absolute", bottom:"14%", right:"4%", background:"rgba(15,32,60,0.88)", border:"1px solid rgba(94,200,255,0.18)", borderRadius:10, padding:"7px 10px", backdropFilter:"blur(8px)", zIndex:5 }}>
        <div style={{ fontFamily:"Inter, sans-serif", fontSize:5.5, color:"rgba(241,244,251,0.42)", letterSpacing:"0.16em", textTransform:"uppercase", marginBottom:3 }}>App score</div>
        <div style={{ fontFamily:"Fraunces, serif", fontSize:15, color:"#F1F4FB", letterSpacing:"-0.04em" }}>4.9 ★</div>
        <div style={{ fontFamily:"Inter, sans-serif", fontSize:5, color:"rgba(241,244,251,0.32)", marginTop:1 }}>↑ from 4.1</div>
      </div>

      <PhoneFrame dark><WalletDashboardScreen cs={cs}/></PhoneFrame>

      <div style={{ position:"absolute", top:"5%", left:"8%", fontFamily:"Inter, sans-serif", fontSize:7, letterSpacing:"0.28em", color:"rgba(241,244,251,0.38)", textTransform:"uppercase" }}>Payko</div>
      <div style={{ position:"absolute", bottom:"5%", right:"8%", fontFamily:"Fraunces, serif", fontSize:11, color:cs.accent, fontStyle:"italic", opacity:0.75 }}>5.1M users</div>
    </div>
  );
}

// ─── Shop screens ─────────────────────────────────────────────────────────────
function HomeFeedScreen() {
  return (
    <div style={{ height:"100%", display:"flex", flexDirection:"column", background:"#F8F8F8", fontFamily:"Inter, sans-serif", fontSize:7 }}>
      <StatusBar dark={false}/>
      <div style={{ padding:"0 10px 3px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div>
          <div style={{ fontSize:5.5, color:"#AAA", letterSpacing:"0.06em" }}>Deliver to</div>
          <div style={{ fontSize:8, fontWeight:700, color:"#111" }}>Manila, PH ▾</div>
        </div>
        <div style={{ display:"flex", gap:6 }}>
          <div style={{ width:22, height:22, borderRadius:11, background:"#F0F0F0", display:"flex", alignItems:"center", justifyContent:"center" }}><BellIco c="#666"/></div>
          <div style={{ width:22, height:22, borderRadius:11, background:"#FF6B3D", display:"flex", alignItems:"center", justifyContent:"center" }}><CartIco c="#FFF"/></div>
        </div>
      </div>
      <div style={{ margin:"0 8px 5px", background:"#EBEBEB", borderRadius:20, padding:"4px 9px", display:"flex", alignItems:"center", gap:4 }}>
        <SearchIco c="#AAA"/>
        <span style={{ fontSize:6.5, color:"#BBB" }}>Search Shopizee</span>
      </div>
      {/* Flash sale banner */}
      <div style={{ margin:"0 8px 4px", borderRadius:10, background:"linear-gradient(130deg,#FF6B3D,#C7361A)", padding:"5px 9px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", right:-12, top:-12, width:50, height:50, borderRadius:"50%", background:"rgba(255,255,255,0.08)" }}/>
        <div style={{ fontSize:5.5, color:"rgba(255,230,176,0.9)", letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:1 }}>⚡ Flash Sale</div>
        <div style={{ fontSize:8, color:"#FFF", fontWeight:700, marginBottom:1 }}>Up to 70% off</div>
        <div style={{ fontSize:5.5, color:"rgba(255,255,255,0.72)" }}>Ends in 02:45:18</div>
        <div style={{ position:"absolute", right:8, top:"50%", transform:"translateY(-50%)", background:"rgba(255,255,255,0.18)", borderRadius:8, padding:"3px 7px", fontSize:6, color:"#FFF", fontWeight:600 }}>Shop</div>
      </div>
      <div style={{ display:"flex", gap:5, padding:"0 8px 4px", overflow:"hidden" }}>
        {[["For You",true],["Mall",false],["Fashion",false],["Tech",false]].map(([l,a]) => (
          <span key={l as string} style={{ flexShrink:0, borderRadius:20, padding:"2px 7px", background:a?"#FF6B3D":"#EBEBEB", color:a?"#FFF":"#666", fontSize:6, fontWeight:a?600:400 }}>{l}</span>
        ))}
      </div>
      <div style={{ padding:"0 8px", flex:1, overflow:"hidden" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:5 }}>
          {[
            { bg:"#FFE6B0", price:"₱189",   name:"Tote Bag",  stars:"4.8", sold:"2.1k" },
            { bg:"#FFC9B0", price:"₱1,299",  name:"Sneakers",  stars:"4.9", sold:"850" },
            { bg:"#D2E8FF", price:"₱72",     name:"Notebook",  stars:"4.7", sold:"5k+" },
            { bg:"#E6D6FF", price:"₱449",    name:"Earbuds",   stars:"4.8", sold:"1.3k" },
          ].map(p => (
            <div key={p.name} style={{ borderRadius:8, background:"#FFF", overflow:"hidden", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ background:p.bg, height:32, display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
                <div style={{ width:22, height:22, borderRadius:4, background:"rgba(0,0,0,0.09)" }}/>
                <span style={{ position:"absolute", top:3, left:3, background:"#FF6B3D", color:"#FFF", fontSize:4.5, borderRadius:3, padding:"1px 3px" }}>Sale</span>
              </div>
              <div style={{ padding:"3px 4px" }}>
                <div style={{ fontSize:6, color:"#111", fontWeight:500 }}>{p.name}</div>
                <div style={{ fontSize:5.5, color:"#FFA500", marginTop:1 }}>★ {p.stars} <span style={{ color:"#CCC" }}>({p.sold})</span></div>
                <div style={{ fontSize:7.5, fontWeight:700, color:"#FF6B3D", marginTop:1 }}>{p.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom nav */}
      <div style={{ borderTop:"1px solid #EBEBEB", background:"#FFF" }}>
        <div style={{ display:"flex", justifyContent:"space-around", padding:"5px 0 3px" }}>
          {([[<HomeIco c="#FF6B3D"/>,"Home",true],[<SearchIco c="#BBB"/>,"Search",false],[<BoxIco c="#BBB"/>,"Orders",false],[<PersonIco c="#BBB"/>,"Me",false]] as [React.ReactNode,string,boolean][]).map(([ic,lb,a]) => (
            <div key={lb} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:2 }}>
              <div style={{ width:16, height:16, display:"flex", alignItems:"center", justifyContent:"center" }}>{ic}</div>
              <span style={{ fontSize:5.5, color:a?"#FF6B3D":"#BBB", fontWeight:a?600:400 }}>{lb}</span>
            </div>
          ))}
        </div>
        <HomeIndicator/>
      </div>
    </div>
  );
}

function ProductDetailScreen() {
  return (
    <div style={{ height:"100%", display:"flex", flexDirection:"column", background:"#FFF", fontFamily:"Inter, sans-serif" }}>
      <StatusBar dark={false}/>
      <div style={{ padding:"0 10px 7px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div style={{ width:22, height:22, borderRadius:11, background:"#F0F0F0", display:"flex", alignItems:"center", justifyContent:"center" }}><BackArrow c="#333"/></div>
        <span style={{ fontSize:7.5, fontWeight:600, color:"#111" }}>Product</span>
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none"><path d="M6.5 10.5C6.5 10.5 1 7 1 4C1 2.3 2.3 1 4 1C5 1 5.9 1.5 6.5 2.2C7.1 1.5 8 1 9 1C10.7 1 12 2.3 12 4C12 7 6.5 10.5 6.5 10.5Z" stroke="#FF6B3D" strokeWidth="1.2" fill="none"/></svg>
      </div>
      <div style={{ margin:"0 8px 9px", borderRadius:12, background:"linear-gradient(145deg,#FFE6B0,#FFC080)", height:88, position:"relative", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
        <svg width="72" height="42" viewBox="0 0 72 42" fill="none">
          <path d="M5 33 Q10 21 20 19 L36 17 Q46 15 53 19 L66 23 Q69 25 68 29 Q67 33 63 34 L11 36 Q5 36 5 33Z" fill="#FF6B3D"/>
          <path d="M20 19 L22 9 Q23 6 26 6 L39 7 Q43 8 41 14 L36 17" fill="#FFF" opacity="0.88"/>
          <ellipse cx="36" cy="35.5" rx="30" ry="3" fill="rgba(0,0,0,0.08)"/>
        </svg>
        <div style={{ position:"absolute", top:5, right:5, background:"#FF6B3D", color:"#FFF", fontSize:5, borderRadius:4, padding:"2px 5px", fontWeight:600 }}>−35%</div>
        <div style={{ position:"absolute", bottom:6, left:"50%", transform:"translateX(-50%)", display:"flex", gap:3 }}>
          {[true,false,false].map((a,i) => <span key={i} style={{ width:5, height:5, borderRadius:"50%", background:a?"#FF6B3D":"#DDD", display:"block" }}/>)}
        </div>
      </div>
      <div style={{ padding:"0 10px", flex:1, overflow:"hidden" }}>
        <div style={{ fontSize:5.5, color:"#FF6B3D", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:2 }}>Shopizee Mall · Verified</div>
        <div style={{ fontSize:9.5, fontWeight:700, color:"#111", lineHeight:1.2, marginBottom:4 }}>Urban Runner Pro Sneakers</div>
        <div style={{ display:"flex", alignItems:"center", gap:4, marginBottom:4 }}>
          <div style={{ display:"flex", gap:1 }}>
            {[1,2,3,4].map(i => <span key={i} style={{ fontSize:7, color:"#FFA500" }}>★</span>)}
            <span style={{ fontSize:7, color:"#DDD" }}>★</span>
          </div>
          <span style={{ fontSize:5.5, color:"#888" }}>4.8 (2,341)</span>
        </div>
        <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:5 }}>
          <span style={{ fontSize:15, fontWeight:800, color:"#FF6B3D" }}>₱1,299</span>
          <span style={{ fontSize:8, color:"#CCC", textDecoration:"line-through" }}>₱1,999</span>
        </div>
        <div style={{ fontSize:5.5, color:"#AAA", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:4 }}>Size</div>
        <div style={{ display:"flex", gap:4, marginBottom:6 }}>
          {["38","39","40","41","42"].map((s,i) => (
            <div key={s} style={{ width:20, height:20, borderRadius:4, border:`1px solid ${i===2?"#FF6B3D":"#E0E0E0"}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:6.5, color:i===2?"#FF6B3D":"#888", fontWeight:i===2?700:400 }}>{s}</div>
          ))}
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:5, padding:"5px 0", borderTop:"1px solid #F2F2F2" }}>
          <div style={{ width:16, height:16, borderRadius:8, background:"linear-gradient(135deg,#FF6B3D,#C7361A)" }}/>
          <div>
            <div style={{ fontSize:6.5, fontWeight:600, color:"#111" }}>SneakerHub PH</div>
            <div style={{ fontSize:5.5, color:"#AAA" }}>98.7% positive</div>
          </div>
          <span style={{ marginLeft:"auto", fontSize:5.5, color:"#FF6B3D", border:"1px solid #FF6B3D", borderRadius:4, padding:"2px 5px" }}>Chat</span>
        </div>
      </div>
      <div style={{ padding:"7px 8px 0px", display:"flex", gap:5 }}>
        <div style={{ flex:1, background:"#FFF3EE", borderRadius:10, padding:"7px 0", textAlign:"center", border:"1.5px solid #FF6B3D" }}>
          <span style={{ fontSize:6.5, fontWeight:600, color:"#FF6B3D", letterSpacing:"0.1em" }}>ADD TO CART</span>
        </div>
        <div style={{ flex:1.2, background:"#FF6B3D", borderRadius:10, padding:"7px 0", textAlign:"center" }}>
          <span style={{ fontSize:6.5, fontWeight:600, color:"#FFF", letterSpacing:"0.1em" }}>BUY NOW</span>
        </div>
      </div>
      <HomeIndicator/>
    </div>
  );
}

// ─── Wallet Dashboard ─────────────────────────────────────────────────────────
function WalletDashboardScreen({ cs }: { cs: CaseStudy }) {
  return (
    <div style={{ height:"100%", display:"flex", flexDirection:"column", background:"#0B1F3A", fontFamily:"Inter, sans-serif", color:cs.fg }}>
      <StatusBar dark/>
      <div style={{ padding:"4px 10px 6px", display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
        <div>
          <div style={{ fontSize:5.5, color:"rgba(241,244,251,0.45)", marginBottom:1 }}>Good morning,</div>
          <div style={{ fontSize:10, fontFamily:"Fraunces, serif", color:cs.fg, letterSpacing:"-0.02em" }}>Hercules 👋</div>
        </div>
        <div style={{ width:22, height:22, borderRadius:11, background:"linear-gradient(135deg,#7DF3B8,#5EC8FF)" }}/>
      </div>
      {/* Balance card */}
      <div style={{ margin:"0 8px 8px", borderRadius:14, padding:"10px 12px", background:"linear-gradient(135deg,rgba(125,243,184,0.96) 0%,rgba(95,200,255,0.86) 100%)", position:"relative", overflow:"hidden", boxShadow:"0 12px 28px -10px rgba(125,243,184,0.38)" }}>
        <div style={{ position:"absolute", top:-18, right:-18, width:68, height:68, borderRadius:"50%", background:"rgba(255,255,255,0.14)" }}/>
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
          <div style={{ fontSize:5.5, color:"#0B1F3A", letterSpacing:"0.16em", textTransform:"uppercase", opacity:0.68 }}>Available Balance</div>
          <div style={{ background:"#0B1F3A", borderRadius:10, padding:"2px 7px", fontSize:6, color:"#7DF3B8", letterSpacing:"0.12em", fontWeight:600 }}>PAYKO</div>
        </div>
        <div style={{ fontFamily:"Fraunces, serif", fontSize:22, lineHeight:1, letterSpacing:"-0.04em", color:"#0B1F3A", marginBottom:5 }}>₱24,580<span style={{ opacity:0.48, fontSize:14 }}>.00</span></div>
        <div style={{ display:"flex", justifyContent:"space-between" }}>
          <span style={{ fontSize:6, color:"#0B1F3A", opacity:0.5, letterSpacing:"0.1em" }}>•••• •••• •••• 4521</span>
          <span style={{ fontSize:6, color:"#0B1F3A", opacity:0.5 }}>12/27</span>
        </div>
      </div>
      {/* Quick actions */}
      <div style={{ padding:"0 8px 7px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:5 }}>
          {([
            [<svg width="15" height="15" viewBox="0 0 10 10" fill="none"><path d="M5 8V2M2 5L5 2L8 5" stroke="#7DF3B8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,"Send"],
            [<svg width="15" height="15" viewBox="0 0 10 10" fill="none"><path d="M5 2v6M2 5L5 8L8 5" stroke="#5EC8FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,"Receive"],
            [<svg width="15" height="15" viewBox="0 0 10 10" fill="none"><rect x="1" y="2" width="8" height="6.5" rx="1" stroke="#FFE6B0" strokeWidth="1.2" fill="none"/><line x1="1" y1="5" x2="9" y2="5" stroke="#FFE6B0" strokeWidth="1"/></svg>,"Pay Bills"],
            [<svg width="15" height="15" viewBox="0 0 10 10" fill="none"><rect x="1.5" y="1" width="7" height="8" rx="1" stroke="#E8B0FF" strokeWidth="1.2" fill="none"/><line x1="3.5" y1="4" x2="6.5" y2="4" stroke="#E8B0FF" strokeWidth="1"/><line x1="3.5" y1="6" x2="5.5" y2="6" stroke="#E8B0FF" strokeWidth="1"/></svg>,"Load"],
          ] as [React.ReactNode,string][]).map(([ic,lb]) => (
            <div key={lb} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:3 }}>
              <div style={{ width:28, height:28, borderRadius:10, background:"rgba(125,243,184,0.1)", border:"1px solid rgba(125,243,184,0.16)", display:"flex", alignItems:"center", justifyContent:"center" }}>{ic}</div>
              <span style={{ fontSize:5.5, color:"rgba(241,244,251,0.5)", textAlign:"center" }}>{lb}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Transactions */}
      <div style={{ padding:"0 8px", flex:1, overflow:"hidden" }}>
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
          <span style={{ fontSize:5.5, letterSpacing:"0.18em", color:"rgba(241,244,251,0.45)", textTransform:"uppercase" }}>Recent</span>
          <span style={{ fontSize:5.5, color:"#7DF3B8", letterSpacing:"0.12em", textTransform:"uppercase" }}>See All →</span>
        </div>
        {[
          { ico:<BoltIco c="#FFE6B0"/>, nm:"Meralco",    sb:"Electric Bill",     am:"−₱1,820", pos:false, col:"#FFE6B0" },
          { ico:<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><rect x="1.5" y="0.5" width="7" height="9" rx="1.5" stroke="#D2E8FF" strokeWidth="1.2" fill="none"/><path d="M3 4.5h4M3 6.5h3" stroke="#D2E8FF" strokeWidth="1" strokeLinecap="round"/></svg>, nm:"Globe Load", sb:"Prepaid",           am:"−₱150",  pos:false, col:"#D2E8FF" },
          { ico:<PersonIco c="#7DF3B8"/>, nm:"J. Reyes",   sb:"Transfer received", am:"+₱3,000", pos:true,  col:"#7DF3B8" },
        ].map(t => (
          <div key={t.nm} style={{ display:"flex", alignItems:"center", gap:6, padding:"5px 0", borderTop:"1px solid rgba(241,244,251,0.06)" }}>
            <div style={{ width:22, height:22, borderRadius:8, background:`${t.col}1A`, border:`1px solid ${t.col}22`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{t.ico}</div>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontSize:7, color:cs.fg, fontWeight:500 }}>{t.nm}</div>
              <div style={{ fontSize:5.5, color:"rgba(241,244,251,0.38)" }}>{t.sb}</div>
            </div>
            <span style={{ fontSize:7.5, fontWeight:600, color:t.pos?"#7DF3B8":cs.fg, flexShrink:0 }}>{t.am}</span>
          </div>
        ))}
      </div>
      {/* Savings goal */}
      <div style={{ margin:"4px 8px 6px", padding:"7px 10px", borderRadius:10, background:"rgba(125,243,184,0.07)", border:"1px solid rgba(125,243,184,0.12)" }}>
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
          <span style={{ fontSize:6, color:"rgba(241,244,251,0.55)", letterSpacing:"0.12em", textTransform:"uppercase" }}>Emergency Fund</span>
          <span style={{ fontSize:6, color:"#7DF3B8", fontWeight:600 }}>65%</span>
        </div>
        <div style={{ height:4, borderRadius:2, background:"rgba(125,243,184,0.14)", overflow:"hidden" }}>
          <div style={{ width:"65%", height:"100%", borderRadius:2, background:"linear-gradient(90deg,#7DF3B8,#5EC8FF)" }}/>
        </div>
      </div>
      {/* Bottom nav */}
      <div style={{ borderTop:"1px solid rgba(241,244,251,0.05)", background:"rgba(11,31,58,0.96)" }}>
        <div style={{ display:"flex", justifyContent:"space-around", padding:"5px 0 3px" }}>
          {([[<HomeIco c="#7DF3B8"/>,"Home",true],[<ChartIco c="rgba(241,244,251,0.28)"/>,"Invest",false],[<CardIco c="rgba(241,244,251,0.28)"/>,"Cards",false],[<PersonIco c="rgba(241,244,251,0.28)"/>,"Profile",false]] as [React.ReactNode,string,boolean][]).map(([ic,lb,a]) => (
            <div key={lb} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:2 }}>
              <div style={{ width:16, height:16, display:"flex", alignItems:"center", justifyContent:"center" }}>{ic}</div>
              <span style={{ fontSize:5.5, color:a?"#7DF3B8":"rgba(241,244,251,0.28)" }}>{lb}</span>
            </div>
          ))}
        </div>
        <HomeIndicator dark/>
      </div>
    </div>
  );
}

// ─── Exported gallery screens (used by CaseStudyDetail) ──────────────────────
export function BrewMenuScreen() {
  const prods = [
    { name:"Ethiopia Yirgacheffe", origin:"Africa",    roast:"Light",  price:"₱380", bg:"#D4A574" },
    { name:"Colombia Huila",       origin:"S. America",roast:"Medium", price:"₱350", bg:"#C47850" },
    { name:"Guatemala Antigua",    origin:"C. America",roast:"Medium", price:"₱320", bg:"#B06030" },
    { name:"Sumatra Mandheling",   origin:"Asia",      roast:"Dark",   price:"₱360", bg:"#8B4020" },
    { name:"Kenya AA",             origin:"Africa",    roast:"Light",  price:"₱410", bg:"#C48060" },
    { name:"Costa Rica Tarrazú",   origin:"C. America",roast:"Medium", price:"₱340", bg:"#A06840" },
  ];
  return (
    <div style={{ background:"#FFFCF8", display:"flex", flexDirection:"column" }}>
      <div style={{ padding:"5px 10px", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:"1px solid rgba(42,26,15,0.07)" }}>
        <span style={{ fontFamily:"Fraunces, serif", fontSize:11, color:"#2A1A0F", fontStyle:"italic" }}>Breweasy</span>
        <div style={{ display:"flex", gap:8, alignItems:"center" }}>
          {["Menu","Story","Roasters"].map(l => <span key={l} style={{ fontFamily:"Inter, sans-serif", fontSize:7, letterSpacing:"0.14em", color:"#888", textTransform:"uppercase" }}>{l}</span>)}
          <span style={{ fontFamily:"Inter, sans-serif", fontSize:6.5, background:"#2A1A0F", color:"#F5EBDD", borderRadius:20, padding:"2px 7px" }}>Order</span>
        </div>
      </div>
      <div style={{ display:"flex" }}>
        <div style={{ width:90, borderRight:"1px solid rgba(42,26,15,0.07)", padding:"10px", flexShrink:0 }}>
          <div style={{ fontFamily:"Inter, sans-serif", fontSize:7, letterSpacing:"0.2em", color:"#999", textTransform:"uppercase", marginBottom:8 }}>Filter</div>
          {[["Origin",["All","Africa","Americas","Asia"]],["Roast",["All","Light","Medium","Dark"]],["Price",["Under ₱350","₱350–400","₱400+"]]].map(([cat,opts]) => (
            <div key={cat as string} style={{ marginBottom:10 }}>
              <div style={{ fontFamily:"Inter, sans-serif", fontSize:6.5, letterSpacing:"0.16em", color:"#888", textTransform:"uppercase", marginBottom:4 }}>{cat}</div>
              {(opts as string[]).map((o,i) => (
                <div key={o} style={{ display:"flex", alignItems:"center", gap:3, marginBottom:3 }}>
                  <div style={{ width:7, height:7, borderRadius:2, border:`1px solid ${i===0?"#2A1A0F":"#DDD"}`, background:i===0?"#2A1A0F":"transparent", flexShrink:0 }}/>
                  <span style={{ fontFamily:"Inter, sans-serif", fontSize:6.5, color:i===0?"#2A1A0F":"#888" }}>{o}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ flex:1, padding:"10px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
            <span style={{ fontFamily:"Inter, sans-serif", fontSize:6.5, color:"#888" }}>12 roasts</span>
            <span style={{ fontFamily:"Inter, sans-serif", fontSize:6.5, color:"#C99868" }}>Sort ▾</span>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:6 }}>
            {prods.map(p => (
              <div key={p.name} style={{ borderRadius:7, overflow:"hidden", border:"1px solid rgba(42,26,15,0.08)" }}>
                <div style={{ height:38, background:`linear-gradient(145deg,${p.bg},#5A2E10)`, position:"relative", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <svg width="15" height="19" viewBox="0 0 15 19" fill="none"><rect x="2" y="6" width="11" height="11" rx="1.5" fill="rgba(0,0,0,0.28)"/><rect x="5" y="3.5" width="5" height="4" rx="1" fill="rgba(0,0,0,0.22)"/></svg>
                  <span style={{ position:"absolute", bottom:2, left:3, fontFamily:"Inter, sans-serif", fontSize:5, background:"rgba(0,0,0,0.32)", color:"#FFF", borderRadius:3, padding:"1px 3px" }}>{p.roast}</span>
                </div>
                <div style={{ padding:"4px 5px", background:"#FFF" }}>
                  <div style={{ fontFamily:"Inter, sans-serif", fontSize:5.5, color:"#2A1A0F", fontWeight:500, lineHeight:1.3 }}>{p.name}</div>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:3 }}>
                    <span style={{ fontFamily:"Fraunces, serif", fontSize:9, color:"#2A1A0F" }}>{p.price}</span>
                    <span style={{ fontFamily:"Inter, sans-serif", fontSize:5, background:"#2A1A0F", color:"#F5EBDD", borderRadius:20, padding:"1.5px 5px" }}>Add</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function BrewSubsScreen() {
  return (
    <div style={{ background:"#FFFCF8", padding:"12px" }}>
      <div style={{ textAlign:"center", marginBottom:12 }}>
        <div style={{ fontFamily:"Inter, sans-serif", fontSize:7, letterSpacing:"0.28em", color:"#999", textTransform:"uppercase", marginBottom:4 }}>Never run out</div>
        <div style={{ fontFamily:"Fraunces, serif", fontSize:18, letterSpacing:"-0.03em", color:"#2A1A0F", lineHeight:1.05 }}>Subscribe &amp; <em style={{ fontStyle:"italic", fontWeight:300 }}>save.</em></div>
        <div style={{ display:"flex", gap:3, justifyContent:"center", marginTop:8 }}>
          {["Monthly","Annual (−20%)"].map((t,i) => (
            <span key={t} style={{ fontFamily:"Inter, sans-serif", fontSize:6.5, padding:"3px 8px", borderRadius:20, background:i===0?"#2A1A0F":"transparent", color:i===0?"#F5EBDD":"#888", border:"1px solid", borderColor:i===0?"#2A1A0F":"#DDD" }}>{t}</span>
          ))}
        </div>
      </div>
      {[
        { name:"Regular", price:"₱680",   per:"/mo", desc:"250g · 1 origin · Monthly surprise",   bg:"#F0E8DC", fg:"#2A1A0F", fgSub:"#888" },
        { name:"Monthly", price:"₱1,200", per:"/mo", desc:"500g · 2 origins · Tasting notes PDF", bg:"#2A1A0F", fg:"#F5EBDD", fgSub:"rgba(245,235,221,0.55)", badge:"Popular" },
        { name:"Artisan", price:"₱2,100", per:"/mo", desc:"1kg · 4 origins · Barista call",       bg:"#C99868", fg:"#2A1A0F", fgSub:"rgba(42,26,15,0.6)" },
      ].map(p => (
        <div key={p.name} style={{ borderRadius:10, padding:"10px 12px", background:p.bg, position:"relative", marginBottom:6, border:p.name==="Monthly"?"none":"1px solid rgba(42,26,15,0.1)" }}>
          {"badge" in p && <span style={{ position:"absolute", top:-5, right:10, fontFamily:"Inter, sans-serif", fontSize:5.5, background:"#C99868", color:"#FFF", borderRadius:4, padding:"2px 6px" }}>Popular</span>}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
            <div>
              <div style={{ fontFamily:"Fraunces, serif", fontSize:13, color:p.fg, letterSpacing:"-0.02em" }}>{p.name}</div>
              <div style={{ fontFamily:"Inter, sans-serif", fontSize:6, color:p.fgSub, marginTop:2, lineHeight:1.5 }}>{p.desc}</div>
            </div>
            <div style={{ textAlign:"right" }}>
              <span style={{ fontFamily:"Fraunces, serif", fontSize:16, color:p.fg, letterSpacing:"-0.03em" }}>{p.price}</span>
              <span style={{ fontFamily:"Inter, sans-serif", fontSize:6, color:p.fgSub }}>{p.per}</span>
            </div>
          </div>
          <div style={{ marginTop:7, textAlign:"right" }}>
            <span style={{ fontFamily:"Inter, sans-serif", fontSize:6.5, letterSpacing:"0.12em", textTransform:"uppercase", background:p.fg, color:p.bg, borderRadius:20, padding:"2.5px 9px" }}>Subscribe</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function BrewJournalScreen() {
  return (
    <div style={{ background:"#FFFCF8", padding:"12px" }}>
      <div style={{ fontFamily:"Inter, sans-serif", fontSize:7, letterSpacing:"0.28em", color:"#999", textTransform:"uppercase", marginBottom:8 }}>Journal · Origin Stories</div>
      <div style={{ borderRadius:10, background:"linear-gradient(155deg,#C4956A,#5A2E14)", height:72, marginBottom:12, position:"relative", overflow:"hidden", padding:"10px 12px", display:"flex", flexDirection:"column", justifyContent:"flex-end" }}>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(0,0,0,0.5),transparent 55%)" }}/>
        <div style={{ position:"relative", zIndex:1 }}>
          <div style={{ fontFamily:"Inter, sans-serif", fontSize:6, letterSpacing:"0.2em", color:"rgba(245,235,221,0.7)", textTransform:"uppercase", marginBottom:2 }}>Ethiopia · Yirgacheffe</div>
          <div style={{ fontFamily:"Fraunces, serif", fontSize:12, color:"#F5EBDD", letterSpacing:"-0.02em", lineHeight:1.15 }}>The valley that taught us what coffee could taste like.</div>
        </div>
      </div>
      {[
        { region:"Colombia",  title:"Huila's mountain farms and the women who run them",                     date:"Mar 2025" },
        { region:"Guatemala", title:"Antigua Antigua: why this 450-year-old city grows the best Medium roast", date:"Feb 2025" },
        { region:"Sumatra",   title:"Wet-hulled and wonderful: the Mandheling process explained",            date:"Jan 2025" },
      ].map(a => (
        <div key={a.title} style={{ padding:"8px 0", borderBottom:"1px solid rgba(42,26,15,0.06)", display:"flex", justifyContent:"space-between", gap:8 }}>
          <div>
            <div style={{ fontFamily:"Inter, sans-serif", fontSize:6, letterSpacing:"0.2em", color:"#C99868", textTransform:"uppercase", marginBottom:2 }}>{a.region}</div>
            <div style={{ fontFamily:"Fraunces, serif", fontSize:9.5, color:"#2A1A0F", letterSpacing:"-0.01em", lineHeight:1.3 }}>{a.title}</div>
          </div>
          <div style={{ fontFamily:"Inter, sans-serif", fontSize:6, color:"#BBB", whiteSpace:"nowrap", paddingTop:2 }}>{a.date}</div>
        </div>
      ))}
    </div>
  );
}

export function ShopCheckoutScreen() {
  return (
    <div style={{ height:"100%", display:"flex", flexDirection:"column", background:"#FFF", fontFamily:"Inter, sans-serif" }}>
      <StatusBar dark={false}/>
      <div style={{ padding:"0 12px 8px", display:"flex", alignItems:"center", gap:6 }}>
        <BackArrow c="#333"/><span style={{ fontSize:8.5, fontWeight:700, color:"#111" }}>Checkout (2 items)</span>
      </div>
      <div style={{ margin:"0 12px 10px", display:"flex", alignItems:"center", gap:3 }}>
        {[["Cart","#FF6B3D"],["Payment","#DDD"],["Confirm","#DDD"]].map(([l,c],i) => (
          <div key={l} style={{ display:"flex", alignItems:"center", gap:3, flex:i<2?1:undefined }}>
            <div style={{ display:"flex", alignItems:"center", gap:3 }}>
              <div style={{ width:14, height:14, borderRadius:7, background:c, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontSize:7, color:i===0?"#FFF":"#AAA", fontWeight:700 }}>{i+1}</span>
              </div>
              <span style={{ fontSize:5.5, color:i===0?"#FF6B3D":"#AAA", fontWeight:i===0?600:400 }}>{l}</span>
            </div>
            {i < 2 && <div style={{ flex:1, height:1, background:"#E8E8E8" }}/>}
          </div>
        ))}
      </div>
      {[
        { name:"Urban Runner Pro",  variant:"Size 40 · Orange", price:"₱1,299" },
        { name:"Tote Bag Woven",    variant:"Natural · One size",price:"₱189 ×2" },
      ].map(item => (
        <div key={item.name} style={{ margin:"0 12px 7px", padding:"7px", borderRadius:9, border:"1px solid #F0F0F0", display:"flex", gap:7 }}>
          <div style={{ width:40, height:40, borderRadius:7, background:"linear-gradient(135deg,#FFE6B0,#FFC080)", flexShrink:0 }}/>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:7, fontWeight:600, color:"#111" }}>{item.name}</div>
            <div style={{ fontSize:5.5, color:"#AAA", marginTop:1 }}>{item.variant}</div>
            <div style={{ fontSize:8, fontWeight:700, color:"#FF6B3D", marginTop:3 }}>{item.price}</div>
          </div>
        </div>
      ))}
      <div style={{ margin:"0 12px 7px", padding:"6px 9px", borderRadius:8, border:"1.5px dashed #FFB8A0", background:"#FFF8F6", display:"flex", alignItems:"center", gap:5 }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="1" width="10" height="10" rx="2" stroke="#FF6B3D" strokeWidth="1" fill="none"/><path d="M4 6h4M6 4v4" stroke="#FF6B3D" strokeWidth="1" strokeLinecap="round"/></svg>
        <span style={{ fontSize:6.5, color:"#CCC", flex:1 }}>Enter promo code</span>
        <span style={{ fontSize:6.5, color:"#FF6B3D", fontWeight:600 }}>Apply</span>
      </div>
      <div style={{ margin:"0 12px", padding:"7px 0", borderTop:"1px solid #F5F5F5" }}>
        {[["Subtotal","₱1,677"],["Shipping","₱60"],["Total","₱1,737"]].map(([l,v],i) => (
          <div key={l} style={{ display:"flex", justifyContent:"space-between", marginBottom:3 }}>
            <span style={{ fontSize:i===2?7.5:6.5, color:i===2?"#111":"#AAA", fontWeight:i===2?700:400 }}>{l}</span>
            <span style={{ fontSize:i===2?8.5:6.5, color:i===2?"#FF6B3D":"#888", fontWeight:i===2?800:400 }}>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ margin:"7px 12px 0px", background:"#FF6B3D", borderRadius:11, padding:"9px 0", textAlign:"center" }}>
        <span style={{ fontSize:7.5, fontWeight:700, color:"#FFF", letterSpacing:"0.1em" }}>PROCEED TO PAYMENT</span>
      </div>
      <HomeIndicator/>
    </div>
  );
}

export function ShopPaymentScreen() {
  return (
    <div style={{ height:"100%", display:"flex", flexDirection:"column", background:"#FFF", fontFamily:"Inter, sans-serif" }}>
      <StatusBar dark={false}/>
      <div style={{ padding:"0 12px 8px" }}>
        <span style={{ fontSize:8.5, fontWeight:700, color:"#111" }}>Payment Method</span>
      </div>
      <div style={{ padding:"0 12px", flex:1, overflow:"hidden" }}>
        <div style={{ fontSize:6.5, letterSpacing:"0.16em", color:"#AAA", textTransform:"uppercase", marginBottom:7 }}>Choose how to pay</div>
        {[
          { ico:<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1" y="2" width="11" height="9" rx="2" stroke="#888" strokeWidth="1" fill="none"/><line x1="1" y1="5.5" x2="12" y2="5.5" stroke="#888" strokeWidth="1.2"/><rect x="2.5" y="7.5" width="3" height="1.5" rx="0.5" fill="#AAA"/></svg>, label:"Cash on Delivery", sub:"Pay when you receive", sel:true  },
          { ico:<CardIco c="#888"/>,  label:"Shoppe Wallet",    sub:"Balance: ₱2,450.00",  sel:false },
          { ico:<svg width="13" height="11" viewBox="0 0 13 11" fill="none"><rect x="0.5" y="0.5" width="12" height="10" rx="2" stroke="#888" strokeWidth="1" fill="none"/><line x1="1" y1="4" x2="12" y2="4" stroke="#888" strokeWidth="1.5"/><rect x="2" y="6" width="4" height="2" rx="0.5" fill="#CCC"/></svg>, label:"Online Banking", sub:"BDO, BPI +8 more", sel:false },
          { ico:<svg width="10" height="13" viewBox="0 0 10 13" fill="none"><rect x="1" y="0.5" width="8" height="12" rx="2" stroke="#888" strokeWidth="1" fill="none"/><rect x="3" y="2" width="4" height="2.5" rx="0.5" fill="#CCC"/><circle cx="5" cy="9.5" r="1" fill="#CCC"/></svg>, label:"GCash / Maya", sub:"Instant · No fees", sel:false },
          { ico:<svg width="13" height="11" viewBox="0 0 13 11" fill="none"><path d="M1 8C1 8 2.5 6 6.5 6C10.5 6 12 8 12 8" stroke="#888" strokeWidth="1.2" strokeLinecap="round" fill="none"/><path d="M6.5 1L5 4H8L6.5 7" stroke="#888" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>, label:"Buy Now Pay Later", sub:"BillEase · 0% / 3mo", sel:false },
        ].map(m => (
          <div key={m.label} style={{ padding:"7px 9px", marginBottom:4, borderRadius:9, border:`1.5px solid ${m.sel?"#FF6B3D":"#F0F0F0"}`, background:m.sel?"#FFF8F6":"#FFF", display:"flex", alignItems:"center", gap:7 }}>
            <div style={{ width:20, height:20, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{m.ico}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:7, fontWeight:m.sel?600:400, color:"#111" }}>{m.label}</div>
              <div style={{ fontSize:5.5, color:"#AAA", marginTop:1 }}>{m.sub}</div>
            </div>
            <div style={{ width:13, height:13, borderRadius:7, border:`2px solid ${m.sel?"#FF6B3D":"#DDD"}`, display:"flex", alignItems:"center", justifyContent:"center" }}>
              {m.sel && <div style={{ width:6, height:6, borderRadius:"50%", background:"#FF6B3D" }}/>}
            </div>
          </div>
        ))}
      </div>
      <div style={{ margin:"7px 12px 0px", background:"#FF6B3D", borderRadius:11, padding:"9px 0", textAlign:"center" }}>
        <span style={{ fontSize:7.5, fontWeight:700, color:"#FFF", letterSpacing:"0.1em" }}>CONFIRM · ₱1,737</span>
      </div>
      <HomeIndicator/>
    </div>
  );
}

export function ShopConfirmedScreen() {
  return (
    <div style={{ height:"100%", display:"flex", flexDirection:"column", background:"#FFF", fontFamily:"Inter, sans-serif", alignItems:"center" }}>
      <StatusBar dark={false}/>
      <div style={{ width:50, height:50, borderRadius:25, background:"linear-gradient(135deg,#4CAF50,#2E7D32)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:8, marginTop:4, boxShadow:"0 8px 20px -4px rgba(76,175,80,0.4)" }}>
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none"><path d="M2 9L8 15L20 3" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <div style={{ fontFamily:"Fraunces, serif", fontSize:15, color:"#111", letterSpacing:"-0.02em", marginBottom:2 }}>Order Confirmed!</div>
      <div style={{ fontSize:7, color:"#AAA", marginBottom:12 }}>Order #SHZ-2024-78412</div>
      <div style={{ width:"calc(100% - 24px)", borderRadius:11, border:"1px solid #F0F0F0", padding:"10px 11px", marginBottom:9 }}>
        <div style={{ fontSize:6, letterSpacing:"0.16em", color:"#AAA", textTransform:"uppercase", marginBottom:6 }}>Delivery Details</div>
        <div style={{ display:"flex", alignItems:"flex-start", gap:5, marginBottom:7 }}>
          <svg width="10" height="13" viewBox="0 0 10 13" fill="none"><path d="M5 1C3 1 1 2.8 1 5C1 8 5 12 5 12C5 12 9 8 9 5C9 2.8 7 1 5 1Z" stroke="#FF6B3D" strokeWidth="1.2" fill="none"/><circle cx="5" cy="5" r="1.5" fill="#FF6B3D"/></svg>
          <div>
            <div style={{ fontSize:7, fontWeight:600, color:"#111" }}>123 Mabini St., Malate</div>
            <div style={{ fontSize:6, color:"#888" }}>Manila, Metro Manila · 1004</div>
          </div>
        </div>
        <div style={{ height:1, background:"#F5F5F5", marginBottom:7 }}/>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          {[["📦","Preparing"],["🚚","Shipped"],["🏠","Delivered"]].map(([ic,lb],i) => (
            <div key={lb} style={{ display:"flex", alignItems:"center", flex:1 }}>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:2 }}>
                <span style={{ fontSize:10 }}>{ic}</span>
                <span style={{ fontSize:5.5, color:i===0?"#FF6B3D":"#AAA" }}>{lb}</span>
              </div>
              {i < 2 && <div style={{ flex:1, height:1.5, background:i===0?"linear-gradient(90deg,#FF6B3D,#E8E8E8)":"#E8E8E8", margin:"0 4px", marginBottom:8 }}/>}
            </div>
          ))}
        </div>
        <div style={{ marginTop:6, textAlign:"center", fontSize:6.5, color:"#888" }}>Est. <strong style={{ color:"#111" }}>Jun 17 – 19</strong></div>
      </div>
      <div style={{ display:"flex", gap:6, width:"calc(100% - 24px)" }}>
        <div style={{ flex:1, borderRadius:10, border:"1.5px solid #FF6B3D", padding:"8px 0", textAlign:"center" }}>
          <span style={{ fontSize:6.5, color:"#FF6B3D", fontWeight:600 }}>Track Order</span>
        </div>
        <div style={{ flex:1, borderRadius:10, background:"#FF6B3D", padding:"8px 0", textAlign:"center" }}>
          <span style={{ fontSize:6.5, color:"#FFF", fontWeight:600 }}>Shop More</span>
        </div>
      </div>
      <HomeIndicator/>
    </div>
  );
}

export function WalletSendScreen() {
  return (
    <div style={{ height:"100%", display:"flex", flexDirection:"column", background:"#0B1F3A", fontFamily:"Inter, sans-serif", color:"#F1F4FB" }}>
      <StatusBar dark/>
      <div style={{ padding:"0 12px 9px" }}>
        <span style={{ fontSize:8.5, fontWeight:700, color:"#F1F4FB" }}>Send Money</span>
      </div>
      <div style={{ padding:"0 12px 7px" }}>
        <div style={{ fontSize:6, letterSpacing:"0.16em", color:"rgba(241,244,251,0.38)", textTransform:"uppercase", marginBottom:7 }}>Recent contacts</div>
        <div style={{ display:"flex", gap:9, overflowX:"hidden" }}>
          {[["JR","J. Reyes","#7DF3B8"],["MS","M. Santos","#5EC8FF"],["AG","A. Garcia","#FFB8D0"],["KL","K. Lee","#FFE6B0"]].map(([i,n,c]) => (
            <div key={n} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:3, flexShrink:0 }}>
              <div style={{ width:28, height:28, borderRadius:14, background:`${c}20`, border:`1.5px solid ${c}40`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:8, color:c, fontWeight:700 }}>{i}</div>
              <span style={{ fontSize:5.5, color:"rgba(241,244,251,0.45)" }}>{(n as string).split(" ")[0]}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ margin:"0 12px 9px", background:"rgba(241,244,251,0.05)", border:"1px solid rgba(241,244,251,0.09)", borderRadius:9, padding:"7px 10px", display:"flex", alignItems:"center", gap:5 }}>
        <SearchIco c="rgba(241,244,251,0.3)"/>
        <span style={{ fontSize:6.5, color:"rgba(241,244,251,0.28)" }}>Name, phone, or account no.</span>
      </div>
      <div style={{ margin:"0 12px 9px", padding:"11px 12px", background:"rgba(125,243,184,0.07)", border:"1px solid rgba(125,243,184,0.14)", borderRadius:11 }}>
        <div style={{ fontSize:6, letterSpacing:"0.16em", color:"rgba(241,244,251,0.38)", textTransform:"uppercase", marginBottom:4 }}>Amount</div>
        <div style={{ display:"flex", alignItems:"baseline", gap:3 }}>
          <span style={{ fontFamily:"Fraunces, serif", fontSize:10, color:"rgba(241,244,251,0.35)" }}>₱</span>
          <span style={{ fontFamily:"Fraunces, serif", fontSize:26, color:"#F1F4FB", letterSpacing:"-0.04em" }}>1,500</span>
        </div>
        <div style={{ height:1, background:"rgba(125,243,184,0.3)", marginTop:5 }}/>
      </div>
      <div style={{ margin:"0 12px 7px", padding:"7px 10px", background:"rgba(241,244,251,0.03)", border:"1px solid rgba(241,244,251,0.07)", borderRadius:9 }}>
        <div style={{ fontSize:5.5, letterSpacing:"0.12em", color:"rgba(241,244,251,0.3)", textTransform:"uppercase", marginBottom:2 }}>Note</div>
        <span style={{ fontSize:6.5, color:"rgba(241,244,251,0.22)" }}>Add a message...</span>
      </div>
      <div style={{ padding:"0 12px 7px", display:"flex", justifyContent:"space-between" }}>
        <span style={{ fontSize:6.5, color:"rgba(241,244,251,0.32)" }}>Transfer fee</span>
        <span style={{ fontSize:6.5, color:"#7DF3B8", fontWeight:600 }}>FREE</span>
      </div>
      <div style={{ margin:"0 12px 0px", background:"linear-gradient(135deg,#7DF3B8,#5EC8FF)", borderRadius:11, padding:"9px 0", textAlign:"center" }}>
        <span style={{ fontSize:8, fontWeight:700, color:"#0B1F3A", letterSpacing:"0.1em" }}>SEND ₱1,500</span>
      </div>
      <HomeIndicator dark/>
    </div>
  );
}

export function WalletBillsScreen() {
  return (
    <div style={{ height:"100%", display:"flex", flexDirection:"column", background:"#0B1F3A", fontFamily:"Inter, sans-serif", color:"#F1F4FB" }}>
      <StatusBar dark/>
      <div style={{ padding:"0 12px 7px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <span style={{ fontSize:8.5, fontWeight:700 }}>Pay Bills</span>
        <span style={{ fontSize:6, color:"#7DF3B8" }}>40 providers</span>
      </div>
      <div style={{ margin:"0 12px 8px", background:"rgba(241,244,251,0.05)", border:"1px solid rgba(241,244,251,0.09)", borderRadius:9, padding:"6px 10px", display:"flex", alignItems:"center", gap:5 }}>
        <SearchIco c="rgba(241,244,251,0.3)"/>
        <span style={{ fontSize:6.5, color:"rgba(241,244,251,0.28)" }}>Search providers...</span>
      </div>
      <div style={{ display:"flex", gap:7, padding:"0 12px 8px" }}>
        {([[<BoltIco c="#7DF3B8"/>,  "Electric",true ],
           [<DropIco c="rgba(241,244,251,0.45)"/>, "Water",  false],
           [<NetIco  c="rgba(241,244,251,0.45)"/>, "Internet",false],
           [<CrossIco c="rgba(241,244,251,0.45)"/>, "Health", false]] as [React.ReactNode,string,boolean][]).map(([ic,l,a]) => (
          <div key={l} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:3, flexShrink:0 }}>
            <div style={{ width:28, height:28, borderRadius:9, background:a?"rgba(125,243,184,0.18)":"rgba(241,244,251,0.05)", border:`1px solid ${a?"rgba(125,243,184,0.3)":"rgba(241,244,251,0.07)"}`, display:"flex", alignItems:"center", justifyContent:"center" }}>{ic}</div>
            <span style={{ fontSize:5.5, color:a?"#7DF3B8":"rgba(241,244,251,0.36)" }}>{l}</span>
          </div>
        ))}
      </div>
      <div style={{ padding:"0 12px", flex:1, overflow:"hidden" }}>
        <div style={{ fontSize:6, letterSpacing:"0.16em", color:"rgba(241,244,251,0.32)", textTransform:"uppercase", marginBottom:6 }}>Electric Providers</div>
        {[
          { name:"Meralco",  area:"Metro Manila", last:"₱1,820", due:"Jun 20", due_flag:true  },
          { name:"VECO",     area:"Cebu",         last:"₱980",   due:"",       due_flag:false },
          { name:"BENECO",   area:"Benguet",      last:"₱760",   due:"",       due_flag:false },
          { name:"SFELAPCO", area:"San Fernando", last:"₱1,120", due:"",       due_flag:false },
        ].map(p => (
          <div key={p.name} style={{ padding:"7px 9px", marginBottom:4, borderRadius:8, background:"rgba(241,244,251,0.03)", border:`1px solid rgba(241,244,251,${p.due_flag?0.12:0.06})`, display:"flex", alignItems:"center", gap:7 }}>
            <div style={{ width:20, height:20, borderRadius:7, background:p.due_flag?"rgba(125,243,184,0.14)":"rgba(241,244,251,0.06)", display:"flex", alignItems:"center", justifyContent:"center" }}><BoltIco c={p.due_flag?"#7DF3B8":"rgba(241,244,251,0.4)"}/></div>
            <div style={{ flex:1 }}>
              <div style={{ display:"flex", alignItems:"center", gap:4 }}>
                <span style={{ fontSize:7, fontWeight:500 }}>{p.name}</span>
                {p.due_flag && <span style={{ fontSize:5, background:"rgba(255,180,0,0.18)", color:"#FFB400", borderRadius:3, padding:"1px 4px" }}>Due {p.due}</span>}
              </div>
              <div style={{ fontSize:5.5, color:"rgba(241,244,251,0.36)" }}>{p.area} · Last: {p.last}</div>
            </div>
            <span style={{ fontSize:7, color:"#7DF3B8" }}>Pay →</span>
          </div>
        ))}
      </div>
      <HomeIndicator dark/>
    </div>
  );
}

export function WalletGoalsScreen() {
  return (
    <div style={{ height:"100%", display:"flex", flexDirection:"column", background:"#0B1F3A", fontFamily:"Inter, sans-serif", color:"#F1F4FB" }}>
      <StatusBar dark/>
      <div style={{ padding:"0 12px 8px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <span style={{ fontSize:8.5, fontWeight:700 }}>Savings Goals</span>
        <span style={{ fontSize:6.5, background:"rgba(125,243,184,0.14)", color:"#7DF3B8", borderRadius:20, padding:"2px 8px", border:"1px solid rgba(125,243,184,0.22)" }}>+ New Goal</span>
      </div>
      <div style={{ margin:"0 12px 9px", padding:"10px 12px", borderRadius:11, background:"linear-gradient(135deg,rgba(125,243,184,0.1),rgba(94,200,255,0.07))", border:"1px solid rgba(125,243,184,0.12)" }}>
        <div style={{ fontSize:6, letterSpacing:"0.14em", color:"rgba(241,244,251,0.4)", textTransform:"uppercase", marginBottom:3 }}>Total Saved</div>
        <div style={{ fontFamily:"Fraunces, serif", fontSize:20, letterSpacing:"-0.04em", color:"#F1F4FB" }}>₱98,500<span style={{ fontSize:12, opacity:0.4 }}>.00</span></div>
        <div style={{ fontSize:6, color:"rgba(241,244,251,0.4)", marginTop:2 }}>↑ +₱12,400 via round-ups this month</div>
      </div>
      {[
        { name:"Emergency Fund", icon:"🏦", target:"₱100,000", saved:"₱65,000", pct:65, color:"#7DF3B8" },
        { name:"Japan Trip 2025", icon:"✈️",  target:"₱80,000",  saved:"₱23,500", pct:29, color:"#5EC8FF" },
        { name:"New Laptop",      icon:"💻", target:"₱55,000",  saved:"₱10,000", pct:18, color:"#FFE6B0" },
      ].map(g => (
        <div key={g.name} style={{ margin:"0 12px 6px", padding:"8px 11px", borderRadius:10, background:"rgba(241,244,251,0.04)", border:"1px solid rgba(241,244,251,0.06)" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:5 }}>
            <div style={{ display:"flex", alignItems:"center", gap:6 }}>
              <span style={{ fontSize:11 }}>{g.icon}</span>
              <div>
                <div style={{ fontSize:7, fontWeight:500, color:"#F1F4FB" }}>{g.name}</div>
                <div style={{ fontSize:5.5, color:"rgba(241,244,251,0.32)", marginTop:1 }}>Goal: {g.target}</div>
              </div>
            </div>
            <div style={{ textAlign:"right" }}>
              <div style={{ fontSize:7.5, fontWeight:700, color:g.color }}>{g.pct}%</div>
              <div style={{ fontSize:5.5, color:"rgba(241,244,251,0.32)" }}>{g.saved}</div>
            </div>
          </div>
          <div style={{ height:3.5, borderRadius:2, background:"rgba(241,244,251,0.07)", overflow:"hidden" }}>
            <div style={{ width:`${g.pct}%`, height:"100%", borderRadius:2, background:g.color }}/>
          </div>
        </div>
      ))}
      <div style={{ margin:"6px 12px 0px", padding:"8px 11px", borderRadius:10, background:"rgba(125,243,184,0.06)", border:"1px solid rgba(125,243,184,0.1)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div>
          <div style={{ fontSize:7, fontWeight:500 }}>Spare Change Round-ups</div>
          <div style={{ fontSize:5.5, color:"rgba(241,244,251,0.36)", marginTop:1 }}>Rounds up every transaction</div>
        </div>
        <div style={{ width:26, height:14, borderRadius:7, background:"#7DF3B8", position:"relative" }}>
          <div style={{ position:"absolute", right:2, top:2, width:10, height:10, borderRadius:5, background:"#0B1F3A" }}/>
        </div>
      </div>
      <HomeIndicator dark/>
    </div>
  );
}
