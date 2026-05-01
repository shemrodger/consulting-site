import { useEffect, useState } from "react";
import App from "./App";
import V2Fun from "./versions/V2Fun";
import VersionSwitcher from "./components/VersionSwitcher";
import Portal from "./components/Portal";

type Version = 1 | 2;
type View = "portal" | "v1" | "v2";

const VERSION_KEY = "site:version";
const ENTERED_KEY = "site:entered"; // has the visitor passed the portal at least once

function readInitialView(): View {
  if (typeof window === "undefined") return "portal";
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("v");
  if (fromUrl === "2") return "v2";
  if (fromUrl === "1") return "v1";
  if (fromUrl === "portal") return "portal";

  const entered = window.localStorage.getItem(ENTERED_KEY) === "1";
  if (!entered) return "portal";
  return window.localStorage.getItem(VERSION_KEY) === "2" ? "v2" : "v1";
}

export default function Site() {
  const [view, setView] = useState<View>(readInitialView);

  useEffect(() => {
    if (view === "v1" || view === "v2") {
      window.localStorage.setItem(VERSION_KEY, view === "v2" ? "2" : "1");
      window.localStorage.setItem(ENTERED_KEY, "1");
    }
  }, [view]);

  function chooseFromPortal(version: Version) {
    setView(version === 2 ? "v2" : "v1");
    window.scrollTo({ top: 0 });
  }

  function switchTo(version: Version) {
    setView(version === 2 ? "v2" : "v1");
  }

  if (view === "portal") {
    return (
      <>
        {/*
          Split-screen live previews — both sites render at full 100vw width,
          scaled to 50% so they each fill one half of the viewport.
          The `transform` on the inner div makes position:fixed children
          (grain overlay, V2 cursor, etc.) behave as position:absolute,
          so they stay clipped inside their container.
        */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            pointerEvents: "none",
            zIndex: 9990,
            overflow: "hidden",
          }}
        >
          {/* V1 · Editorial — left half */}
          <div
            style={{
              width: "50%",
              height: "100vh",
              overflow: "hidden",
              flexShrink: 0,
              position: "relative",
              borderRight: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div
              style={{
                width: "100vw",
                position: "absolute",
                top: 0,
                left: 0,
                transform: "scale(0.5)",
                transformOrigin: "top left",
              }}
            >
              <App />
            </div>
          </div>

          {/* V2 · Fun — right half */}
          <div
            style={{
              width: "50%",
              height: "100vh",
              overflow: "hidden",
              flexShrink: 0,
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100vw",
                position: "absolute",
                top: 0,
                left: 0,
                transform: "scale(0.5)",
                transformOrigin: "top left",
              }}
            >
              <V2Fun />
            </div>
          </div>
        </div>

        <Portal onChoose={chooseFromPortal} />
      </>
    );
  }

  return (
    <>
      {view === "v1" ? <App /> : <V2Fun />}
      <VersionSwitcher
        version={view === "v2" ? 2 : 1}
        onChange={switchTo}
        onBackToPortal={() => setView("portal")}
      />
    </>
  );
}
