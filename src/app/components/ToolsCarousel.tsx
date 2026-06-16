import "../../styles/tools-carousel.css";

const tools = [
  { name: "Adobe Illustrator", icon: "Ai" },
  { name: "Photoshop", icon: "Ps" },
  { name: "After Effects", icon: "Ae" },
  { name: "Premiere Pro", icon: "Pr" },
  { name: "Figma", icon: "Fig" },
  { name: "Claude", icon: "Cl" },
  { name: "Grok", icon: "Gr" },
  { name: "ChatGPT", icon: "GPT" },
  { name: "Nanobanana Pro", icon: "Nb" },
  { name: "Higgsfield", icon: "Hf" },
];

// Duplicate for seamless infinite loop
const track = [...tools, ...tools];

export function ToolsCarousel() {
  return (
    <div className="relative overflow-hidden border-t border-b border-[#EAEAEA] bg-[#FAFAFA] py-7">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24" style={{ background: "linear-gradient(to right, #FAFAFA, transparent)" }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24" style={{ background: "linear-gradient(to left, #FAFAFA, transparent)" }} />

      <div className="tools-track flex gap-10">
        {track.map((tool, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-3"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-md"
              style={{ background: "#111", fontFamily: "Inter, sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: "0.04em", color: "#fff" }}
            >
              {tool.icon}
            </span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, letterSpacing: "0.06em", color: "#444", whiteSpace: "nowrap" }}>
              {tool.name}
            </span>
            <span className="ml-4 text-[#DEDEDE]" style={{ fontSize: 18 }}>·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
