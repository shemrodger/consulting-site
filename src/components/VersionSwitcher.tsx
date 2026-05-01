type Version = 1 | 2;

interface Props {
  version: Version;
  onChange: (v: Version) => void;
  onBackToPortal?: () => void;
}

export default function VersionSwitcher({ version, onChange, onBackToPortal }: Props) {
  const isV1 = version === 1;
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 9999,
        fontFamily: "'Space Grotesk', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: 6,
          borderRadius: 999,
          background: isV1 ? "rgba(15,15,15,0.92)" : "rgba(10,10,20,0.85)",
          border: isV1
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid rgba(255,46,99,0.5)",
          backdropFilter: "blur(12px)",
          boxShadow: isV1
            ? "0 8px 24px rgba(0,0,0,0.25)"
            : "0 0 30px rgba(255,46,99,0.4), 0 0 60px rgba(0,240,255,0.2)",
        }}
      >
        {onBackToPortal && (
          <button
            onClick={onBackToPortal}
            title="Back to the chooser"
            aria-label="Back to portal"
            style={{
              border: "none",
              cursor: "pointer",
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "transparent",
              color: isV1 ? "#f5f3ee" : "#fffd82",
              fontSize: 14,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            ⌂
          </button>
        )}
        <Pill
          active={isV1}
          activeBg="#f5f3ee"
          activeFg="#0f0f0f"
          inactiveFg="#f5f3ee"
          onClick={() => onChange(1)}
          label="V1 · Editorial"
        />
        <Pill
          active={!isV1}
          activeBg="linear-gradient(90deg,#ff2e63,#00f0ff)"
          activeFg="#0a0a14"
          inactiveFg="#fffd82"
          onClick={() => onChange(2)}
          label="V2 · Fun"
        />
      </div>
    </div>
  );
}

function Pill({
  active,
  activeBg,
  activeFg,
  inactiveFg,
  onClick,
  label,
}: {
  active: boolean;
  activeBg: string;
  activeFg: string;
  inactiveFg: string;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        border: "none",
        cursor: "pointer",
        padding: "8px 14px",
        borderRadius: 999,
        fontSize: 12,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        fontWeight: 700,
        background: active ? activeBg : "transparent",
        color: active ? activeFg : inactiveFg,
        transition: "transform 0.2s ease",
        transform: active ? "scale(1.0)" : "scale(0.96)",
      }}
    >
      {label}
    </button>
  );
}
