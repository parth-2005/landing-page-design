"use client";

import { useEffect, useState, type FormEvent } from "react";

const CALENDLY_URL = "https://calendly.com/pjpanot260305/30min";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type WaitlistStatus = "idle" | "invalid" | "submitting" | "success" | "error";

function WaitlistForm({ variant }: { variant: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<WaitlistStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isLight = variant === "light";
  const submitting = status === "submitting";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = email.trim();

    if (!EMAIL_PATTERN.test(trimmed)) {
      setStatus("invalid");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setErrorMessage(data?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setEmail("");
      setStatus("success");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          margin: isLight ? "28px auto 0" : "32px auto 0",
          maxWidth: isLight ? "450px" : "460px",
        }}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          disabled={submitting}
          placeholder="you@company.com"
          style={
            isLight
              ? {
                  flex: "1",
                  padding: "15px 16px",
                  borderRadius: "11px",
                  border: "1px solid rgba(20,24,36,.2)",
                  background: "rgba(255,255,255,.96)",
                  font: "400 15px var(--font-ibm-plex-sans),sans-serif",
                  color: "#0f1420",
                  outline: "none",
                  boxShadow: "0 2px 10px rgba(20,24,36,.06)",
                  opacity: submitting ? 0.6 : 1,
                }
              : {
                  flex: "1",
                  padding: "16px 18px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,.25)",
                  background: "rgba(255,255,255,.1)",
                  font: "400 15px var(--font-ibm-plex-sans),sans-serif",
                  color: "#fff",
                  outline: "none",
                  opacity: submitting ? 0.6 : 1,
                }
          }
        />
        <button
          type="submit"
          disabled={submitting}
          style={
            isLight
              ? {
                  padding: "15px 24px",
                  border: "none",
                  borderRadius: "11px",
                  background: "#243bc4",
                  color: "#fff",
                  font: "500 15px var(--font-ibm-plex-sans),sans-serif",
                  boxShadow: "0 8px 20px -6px rgba(36,59,196,.7)",
                  cursor: submitting ? "default" : "pointer",
                  opacity: submitting ? 0.7 : 1,
                }
              : {
                  padding: "16px 26px",
                  border: "none",
                  borderRadius: "12px",
                  background: "#fff",
                  color: "#0f1420",
                  font: "600 15px var(--font-ibm-plex-sans),sans-serif",
                  cursor: submitting ? "default" : "pointer",
                  opacity: submitting ? 0.7 : 1,
                }
          }
        >
          {status === "success" ? "✓ You're on the list" : submitting ? "Submitting…" : "Join waitlist"}
        </button>
      </form>
      {(status === "invalid" || status === "error") && (
        <div
          style={{
            marginTop: "10px",
            font: "500 12.5px var(--font-ibm-plex-sans),sans-serif",
            color: isLight ? "#b3261e" : "#ffb4b4",
          }}
        >
          {status === "invalid" ? "Enter a valid email to continue." : errorMessage}
        </div>
      )}
    </>
  );
}

export default function LandingPage() {
  useEffect(() => {
    const rev = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    rev.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition =
        "opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1)";
      el.style.willChange = "opacity, transform";
    });
    const steps = Array.from(document.querySelectorAll<HTMLElement>("[data-step]"));
    const visuals = Array.from(document.querySelectorAll<HTMLElement>("[data-visual]"));
    const hero = document.getElementById("hero");
    const dash = document.querySelector<HTMLElement>("[data-dash]");

    let activeStep: number | null = null;
    let rafId = 0;

    function update() {
      const vh = window.innerHeight;

      if (hero && dash) {
        const scrolled = Math.max(0, -hero.getBoundingClientRect().top);
        let p = Math.min(1, scrolled / 560);
        p = 1 - Math.pow(1 - p, 3);
        const s = (0.86 + 0.14 * p).toFixed(4);
        const ty = ((1 - p) * 34).toFixed(2);
        dash.style.transform = `translateX(-50%) translateY(${ty}px) scale(${s})`;
      }

      rev.forEach((el) => {
        if (el.dataset.shown) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.88 && r.bottom > 0) {
          el.dataset.shown = "1";
          const d = parseInt(el.getAttribute("data-reveal-delay") || "0", 10);
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "none";
          }, d);
        }
      });

      if (steps.length && visuals.length) {
        let best = 1;
        let bestDist = Infinity;
        steps.forEach((s) => {
          const r = s.getBoundingClientRect();
          const center = r.top + r.height / 2;
          const dist = Math.abs(center - vh / 2);
          if (dist < bestDist) {
            bestDist = dist;
            best = Number(s.getAttribute("data-step"));
          }
        });
        if (best !== activeStep) {
          activeStep = best;
          visuals.forEach((v) => {
            const on = Number(v.getAttribute("data-visual")) === best;
            v.style.opacity = on ? "1" : "0";
            v.style.transform = on ? "translateY(0) scale(1)" : "translateY(16px) scale(.98)";
            v.style.pointerEvents = on ? "auto" : "none";
          });
          steps.forEach((s) => {
            s.style.opacity = Number(s.getAttribute("data-step")) === best ? "1" : ".32";
          });
        }
      }
    }

    const onScroll = () => update();
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll, { passive: true });

    const loop = () => {
      update();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    update();

    const safety = setTimeout(() => {
      rev.forEach((el) => {
        if (!el.dataset.shown) {
          el.dataset.shown = "1";
          el.style.opacity = "1";
          el.style.transform = "none";
        }
      });
    }, 2600);

    return () => {
      window.removeEventListener("scroll", onScroll, { capture: true } as EventListenerOptions);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
      clearTimeout(safety);
    };
  }, []);

  return (
    <>
<div style={{overflowX: "clip", background: "radial-gradient(rgba(20,24,36,.05) 1px,transparent 1.5px) 0 0/24px 24px,radial-gradient(52% 40% at 10% 20%,rgba(47,76,219,.13),transparent 64%),radial-gradient(50% 40% at 92% 42%,rgba(64,96,255,.11),transparent 68%),radial-gradient(46% 36% at 58% 74%,rgba(36,59,196,.10),transparent 70%),radial-gradient(60% 30% at 30% 96%,rgba(80,120,255,.08),transparent 72%),#f4f2ec"}}>

{/* ============ HERO ============ */}
<div id="hero" style={{position: "relative", height: "880px", background: "url('/hero-dawn.jpg') center 22%/cover no-repeat", overflow: "hidden"}}>
  <div style={{position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(248,246,242,.92) 0%,rgba(248,246,242,.7) 22%,rgba(248,246,242,.5) 38%,rgba(248,246,242,.28) 52%,rgba(248,246,242,.05) 64%,rgba(248,246,242,0) 74%)"}}></div>
  <nav style={{position: "relative", maxWidth: "1180px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 40px"}}>
    <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
      <div style={{width: "27px", height: "27px", borderRadius: "7px", background: "#243bc4", boxShadow: "0 4px 12px rgba(36,59,196,.45)"}}></div>
      <span style={{font: "600 17px var(--font-space-grotesk),sans-serif", letterSpacing: "-.01em", color: "#0f1420"}}>Cobalt Analytix</span>
    </div>
    <div style={{display: "flex", alignItems: "center", gap: "30px", font: "500 14.5px var(--font-ibm-plex-sans),sans-serif"}}>
      <a href="#how" style={{color: "#1c2230"}}>How it works</a>
      <a href="#features" style={{color: "#1c2230"}}>Features</a>
      <a href="#contact" style={{color: "#1c2230"}}>Contact</a>
      <a href="#faq" style={{color: "#1c2230"}}>FAQ</a>
      <a href="#waitlist" style={{padding: "9px 17px", borderRadius: "9px", background: "#0f1420", color: "#fff", fontWeight: "500"}}>Join waitlist</a>
    </div>
  </nav>

  <div style={{position: "relative", textAlign: "center", padding: "38px 40px 0"}} data-reveal="">
    <div style={{display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 13px", borderRadius: "100px", background: "rgba(255,255,255,.9)", border: "1px solid rgba(36,59,196,.35)", font: "500 12.5px var(--font-ibm-plex-mono),monospace", color: "#243bc4", boxShadow: "0 2px 10px rgba(20,24,36,.08)"}}>
      <span style={{width: "6px", height: "6px", borderRadius: "50%", background: "#243bc4"}}></span>Now in private beta
    </div>
    <h1 style={{margin: "20px auto 0", maxWidth: "880px", font: "700 74px/1.0 var(--font-space-grotesk),sans-serif", letterSpacing: "-.035em", color: "#0c1018", textWrap: "balance", textShadow: "0 1px 22px rgba(248,246,242,.55)"}}>
      Consumer insight,<br /><span style={{color: "#243bc4"}}>before the week is out.</span>
    </h1>
    <p style={{margin: "22px auto 0", maxWidth: "580px", font: "500 19px/1.55 var(--font-ibm-plex-sans),sans-serif", color: "#131722", textWrap: "pretty", textShadow: "0 1px 14px rgba(248,246,242,.9),0 1px 3px rgba(248,246,242,.9)"}}>
      Cobalt runs your surveys, analyzes the responses with AI, and hands you decisions — not spreadsheets. Days, not weeks.
    </p>
    <WaitlistForm variant="light" />
    <div style={{marginTop: "14px", font: "500 12.5px var(--font-ibm-plex-sans),sans-serif", color: "#333a48"}}>Fresh panels · 30+ markets · No sales call required</div>
  </div>

  {/* live dashboard window */}
  <div data-dash="" style={{position: "absolute", left: "50%", bottom: "-244px", transform: "translateX(-50%) translateY(34px) scale(.86)", transformOrigin: "50% 16%", willChange: "transform", width: "1000px", borderRadius: "16px 16px 0 0", border: "1px solid rgba(20,24,36,.12)", borderBottom: "none", background: "#f5f6f9", boxShadow: "0 -24px 70px -28px rgba(20,24,36,.55)", overflow: "hidden"}}>
    <div style={{display: "flex", alignItems: "center", gap: "12px", padding: "11px 16px", background: "#eceef2", borderBottom: "1px solid rgba(20,24,36,.08)"}}>
      <div style={{display: "flex", gap: "6px"}}><span style={{width: "11px", height: "11px", borderRadius: "50%", background: "#ff5f57"}}></span><span style={{width: "11px", height: "11px", borderRadius: "50%", background: "#febc2e"}}></span><span style={{width: "11px", height: "11px", borderRadius: "50%", background: "#28c840"}}></span></div>
      <div style={{flex: "1", display: "flex", justifyContent: "center"}}><div style={{display: "flex", alignItems: "center", gap: "7px", padding: "5px 14px", background: "#fff", border: "1px solid rgba(20,24,36,.09)", borderRadius: "7px", font: "500 12px var(--font-ibm-plex-mono),monospace", color: "#5a6070"}}><span style={{width: "6px", height: "6px", borderRadius: "50%", background: "#12a150"}}></span>app.cobaltanalytix.com/studies/snack-bars-q3</div></div>
      <div style={{width: "24px", height: "24px", borderRadius: "50%", background: "linear-gradient(135deg,#6d86ff,#243bc4)"}}></div>
    </div>
    <div style={{padding: "20px", background: "#f5f6f9"}}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "16px"}}>
        <div>
          <div style={{font: "600 19px var(--font-space-grotesk),sans-serif", color: "#0f1420", letterSpacing: "-.01em"}}>Consumer Pulse — Snack Bars</div>
          <div style={{font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "#7a8090", marginTop: "2px"}}>Study #4821 · closed 2 days ago · 2,410 responses</div>
        </div>
        <div style={{display: "flex", gap: "8px"}}>
          <span style={{padding: "7px 13px", border: "1px solid rgba(20,24,36,.14)", borderRadius: "8px", background: "#fff", font: "500 12.5px var(--font-ibm-plex-sans),sans-serif", color: "#3a4150"}}>Export</span>
          <span style={{padding: "7px 13px", border: "none", borderRadius: "8px", background: "#243bc4", color: "#fff", font: "500 12.5px var(--font-ibm-plex-sans),sans-serif"}}>Share brief</span>
        </div>
      </div>
      <div style={{display: "grid", gridTemplateColumns: "1.35fr 1fr 1.1fr", gap: "14px"}}>
        <div style={{display: "flex", flexDirection: "column", gap: "14px"}}>
          <div style={{background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "13px", padding: "18px"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}><span style={{font: "500 12.5px var(--font-ibm-plex-sans),sans-serif", color: "#7a8090"}}>Purchase intent</span><span style={{font: "500 11px var(--font-ibm-plex-mono),monospace", color: "#12a150", background: "rgba(18,161,80,.1)", padding: "3px 7px", borderRadius: "20px"}}>▲ 18.4%</span></div>
            <div style={{display: "flex", alignItems: "baseline", gap: "8px", margin: "8px 0 4px"}}><span style={{font: "700 42px var(--font-space-grotesk),sans-serif", color: "#0f1420", letterSpacing: "-.02em"}}>73%</span><span style={{font: "400 12px var(--font-ibm-plex-sans),sans-serif", color: "#7a8090"}}>would buy at $2.99</span></div>
            <div style={{display: "flex", alignItems: "flex-end", gap: "6px", height: "70px", marginTop: "10px"}}>
              <div style={{flex: "1", height: "44%", borderRadius: "4px 4px 0 0", background: "#c7d0ee"}}></div>
              <div style={{flex: "1", height: "56%", borderRadius: "4px 4px 0 0", background: "#c7d0ee"}}></div>
              <div style={{flex: "1", height: "50%", borderRadius: "4px 4px 0 0", background: "#c7d0ee"}}></div>
              <div style={{flex: "1", height: "72%", borderRadius: "4px 4px 0 0", background: "#8ea0e8"}}></div>
              <div style={{flex: "1", height: "88%", borderRadius: "4px 4px 0 0", background: "#243bc4"}}></div>
              <div style={{flex: "1", height: "66%", borderRadius: "4px 4px 0 0", background: "#8ea0e8"}}></div>
              <div style={{flex: "1", height: "79%", borderRadius: "4px 4px 0 0", background: "#8ea0e8"}}></div>
            </div>
          </div>
          <div style={{background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "13px", padding: "18px"}}>
            <div style={{font: "500 12.5px var(--font-ibm-plex-sans),sans-serif", color: "#7a8090", marginBottom: "12px"}}>Top purchase drivers</div>
            <div style={{display: "flex", flexDirection: "column", gap: "11px"}}>
              <div><div style={{display: "flex", justifyContent: "space-between", font: "500 12px var(--font-ibm-plex-sans),sans-serif", color: "#3a4150", marginBottom: "4px"}}><span>Price</span><span>82</span></div><div style={{height: "7px", borderRadius: "20px", background: "#eef0f5"}}><div style={{width: "82%", height: "100%", borderRadius: "20px", background: "#243bc4"}}></div></div></div>
              <div><div style={{display: "flex", justifyContent: "space-between", font: "500 12px var(--font-ibm-plex-sans),sans-serif", color: "#3a4150", marginBottom: "4px"}}><span>Taste</span><span>74</span></div><div style={{height: "7px", borderRadius: "20px", background: "#eef0f5"}}><div style={{width: "74%", height: "100%", borderRadius: "20px", background: "#4964e0"}}></div></div></div>
              <div><div style={{display: "flex", justifyContent: "space-between", font: "500 12px var(--font-ibm-plex-sans),sans-serif", color: "#3a4150", marginBottom: "4px"}}><span>Health</span><span>66</span></div><div style={{height: "7px", borderRadius: "20px", background: "#eef0f5"}}><div style={{width: "66%", height: "100%", borderRadius: "20px", background: "#6d86ff"}}></div></div></div>
              <div><div style={{display: "flex", justifyContent: "space-between", font: "500 12px var(--font-ibm-plex-sans),sans-serif", color: "#3a4150", marginBottom: "4px"}}><span>Brand</span><span>48</span></div><div style={{height: "7px", borderRadius: "20px", background: "#eef0f5"}}><div style={{width: "48%", height: "100%", borderRadius: "20px", background: "#9db0f2"}}></div></div></div>
            </div>
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "column", gap: "14px"}}>
          <div style={{background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "13px", padding: "18px", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{alignSelf: "flex-start", font: "500 12.5px var(--font-ibm-plex-sans),sans-serif", color: "#7a8090", marginBottom: "12px"}}>Sentiment</div>
            <div style={{position: "relative", width: "120px", height: "120px", borderRadius: "50%", background: "conic-gradient(#243bc4 0 62%,#c7d0ee 62% 86%,#ff8a7a 86% 100%)"}}>
              <div style={{position: "absolute", inset: "16px", borderRadius: "50%", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}><span style={{font: "700 26px var(--font-space-grotesk),sans-serif", color: "#0f1420"}}>62%</span><span style={{font: "400 10px var(--font-ibm-plex-mono),monospace", color: "#7a8090"}}>positive</span></div>
            </div>
            <div style={{display: "flex", gap: "14px", marginTop: "14px", font: "400 11px var(--font-ibm-plex-sans),sans-serif", color: "#5a6070"}}>
              <span style={{display: "flex", alignItems: "center", gap: "5px"}}><span style={{width: "8px", height: "8px", borderRadius: "2px", background: "#243bc4"}}></span>Pos</span>
              <span style={{display: "flex", alignItems: "center", gap: "5px"}}><span style={{width: "8px", height: "8px", borderRadius: "2px", background: "#c7d0ee"}}></span>Neutral</span>
              <span style={{display: "flex", alignItems: "center", gap: "5px"}}><span style={{width: "8px", height: "8px", borderRadius: "2px", background: "#ff8a7a"}}></span>Neg</span>
            </div>
          </div>
          <div style={{background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "13px", padding: "16px"}}>
            <div style={{font: "500 12.5px var(--font-ibm-plex-sans),sans-serif", color: "#7a8090", marginBottom: "10px"}}>Responses / day</div>
            <div style={{display: "flex", alignItems: "flex-end", gap: "3px", height: "46px"}}>
              <div style={{flex: "1", height: "30%", background: "#c7d0ee", borderRadius: "2px"}}></div><div style={{flex: "1", height: "45%", background: "#c7d0ee", borderRadius: "2px"}}></div><div style={{flex: "1", height: "38%", background: "#c7d0ee", borderRadius: "2px"}}></div><div style={{flex: "1", height: "62%", background: "#8ea0e8", borderRadius: "2px"}}></div><div style={{flex: "1", height: "55%", background: "#8ea0e8", borderRadius: "2px"}}></div><div style={{flex: "1", height: "80%", background: "#243bc4", borderRadius: "2px"}}></div><div style={{flex: "1", height: "100%", background: "#243bc4", borderRadius: "2px"}}></div><div style={{flex: "1", height: "72%", background: "#8ea0e8", borderRadius: "2px"}}></div><div style={{flex: "1", height: "48%", background: "#c7d0ee", borderRadius: "2px"}}></div><div style={{flex: "1", height: "36%", background: "#c7d0ee", borderRadius: "2px"}}></div>
            </div>
          </div>
        </div>
        <div style={{background: "linear-gradient(180deg,#12173a,#0f1420)", borderRadius: "13px", padding: "18px", display: "flex", flexDirection: "column", gap: "12px"}}>
          <div style={{display: "flex", alignItems: "center", gap: "8px"}}><span style={{width: "18px", height: "18px", borderRadius: "5px", background: "linear-gradient(135deg,#6d86ff,#243bc4)", display: "flex", alignItems: "center", justifyContent: "center", font: "700 11px var(--font-space-grotesk),sans-serif", color: "#fff"}}>✦</span><span style={{font: "600 13px var(--font-space-grotesk),sans-serif", color: "#fff"}}>AI summary</span></div>
          <p style={{margin: "0", font: "400 12.5px/1.55 var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.78)"}}>Price sensitivity eased sharply this quarter. At $2.99, intent clears 70% for the first time — driven by the 25–34 segment.</p>
          <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
            <div style={{display: "flex", gap: "8px", font: "400 12px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.72)"}}><span style={{color: "#6d86ff"}}>▸</span>Health framing lifts intent +9pts</div>
            <div style={{display: "flex", gap: "8px", font: "400 12px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.72)"}}><span style={{color: "#6d86ff"}}>▸</span>Negative reviews cite pack size</div>
            <div style={{display: "flex", gap: "8px", font: "400 12px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.72)"}}><span style={{color: "#6d86ff"}}>▸</span>Repeat-buy signal strongest in urban</div>
          </div>
          <div style={{marginTop: "auto", padding: "10px 12px", borderRadius: "9px", background: "rgba(109,134,255,.16)", border: "1px solid rgba(109,134,255,.3)", font: "500 12px var(--font-ibm-plex-sans),sans-serif", color: "#c3ceff"}}>Recommended: launch at $2.99 with health-forward pack</div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ============ TRUST STRIP ============ */}
<div style={{padding: "300px 40px 0", maxWidth: "1180px", margin: "0 auto"}} data-reveal="">
  <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "14px 48px", paddingBottom: "6px"}}>
    <span style={{font: "500 12px var(--font-ibm-plex-mono),monospace", letterSpacing: ".08em", textTransform: "uppercase", color: "#8a90a0"}}>Built for insight teams at</span>
    <span style={{font: "600 20px var(--font-space-grotesk),sans-serif", color: "#b7bac2"}}>Northwind</span>
    <span style={{font: "600 20px var(--font-space-grotesk),sans-serif", color: "#b7bac2"}}>Verda Foods</span>
    <span style={{font: "600 20px var(--font-space-grotesk),sans-serif", color: "#b7bac2"}}>Aster Retail</span>
    <span style={{font: "600 20px var(--font-space-grotesk),sans-serif", color: "#b7bac2"}}>Loop Labs</span>
    <span style={{font: "600 20px var(--font-space-grotesk),sans-serif", color: "#b7bac2"}}>Halden & Co</span>
  </div>
</div>

{/* ============ PROBLEM ============ */}
<section style={{maxWidth: "1180px", margin: "0 auto", padding: "120px 40px 40px"}}>
  <div style={{maxWidth: "760px"}} data-reveal="">
    <div style={{font: "500 13px var(--font-ibm-plex-mono),monospace", letterSpacing: ".06em", textTransform: "uppercase", color: "#243bc4"}}>The problem</div>
    <h2 style={{margin: "16px 0 0", font: "600 46px/1.08 var(--font-space-grotesk),sans-serif", letterSpacing: "-.03em", color: "#0f1420", textWrap: "balance"}}>Market research still moves at the speed of 2005.</h2>
    <p style={{margin: "20px 0 0", font: "400 18px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#4a5160", maxWidth: "640px"}}>By the time a legacy report lands, the decision&apos;s already been made — on a hunch. Cobalt collapses weeks of fieldwork and analysis into a couple of days, at a price a startup can actually pay.</p>
  </div>
  <div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginTop: "48px"}}>
    <div data-reveal="" data-reveal-delay="0" style={{background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "16px", padding: "26px"}}>
      <div style={{font: "700 40px var(--font-space-grotesk),sans-serif", color: "#243bc4", letterSpacing: "-.02em"}}>6–8 wks</div>
      <div style={{marginTop: "8px", font: "500 15px var(--font-ibm-plex-sans),sans-serif", color: "#0f1420"}}>Legacy turnaround</div>
      <p style={{margin: "8px 0 0", font: "400 14px/1.55 var(--font-ibm-plex-sans),sans-serif", color: "#6a707e"}}>Briefs, panels, fielding, cleaning, decks. Cobalt does it in 2 days.</p>
    </div>
    <div data-reveal="" data-reveal-delay="90" style={{background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "16px", padding: "26px"}}>
      <div style={{font: "700 40px var(--font-space-grotesk),sans-serif", color: "#243bc4", letterSpacing: "-.02em"}}>$50k+</div>
      <div style={{marginTop: "8px", font: "500 15px var(--font-ibm-plex-sans),sans-serif", color: "#0f1420"}}>Typical study cost</div>
      <p style={{margin: "8px 0 0", font: "400 14px/1.55 var(--font-ibm-plex-sans),sans-serif", color: "#6a707e"}}>Enterprise minimums lock out the teams who need answers most.</p>
    </div>
    <div data-reveal="" data-reveal-delay="180" style={{background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "16px", padding: "26px"}}>
      <div style={{font: "700 40px var(--font-space-grotesk),sans-serif", color: "#243bc4", letterSpacing: "-.02em"}}>200 pg</div>
      <div style={{marginTop: "8px", font: "500 15px var(--font-ibm-plex-sans),sans-serif", color: "#0f1420"}}>PDF nobody reads</div>
      <p style={{margin: "8px 0 0", font: "400 14px/1.55 var(--font-ibm-plex-sans),sans-serif", color: "#6a707e"}}>You wanted a decision. You got a data dump. We ship the decision.</p>
    </div>
  </div>
</section>

{/* ============ HOW IT WORKS — SCROLLYTELLING ============ */}
<section id="how" style={{background: "#0f1420", position: "relative", marginTop: "80px"}}>
  <div style={{maxWidth: "1180px", margin: "0 auto", padding: "70px 40px 0", textAlign: "center"}} data-reveal="">
    <div style={{font: "500 13px var(--font-ibm-plex-mono),monospace", letterSpacing: ".06em", textTransform: "uppercase", color: "#9fb0ff"}}>How it works</div>
    <h2 style={{margin: "14px auto 0", maxWidth: "720px", font: "600 46px/1.08 var(--font-space-grotesk),sans-serif", letterSpacing: "-.03em", color: "#fff", textWrap: "balance"}}>From question to decision, in four moves.</h2>
    <p style={{margin: "16px auto 0", maxWidth: "540px", font: "400 17px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.6)"}}>Scroll to watch a study travel the pipeline.</p>
  </div>

  <div style={{maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr"}}>
    {/* sticky visual stage */}
    <div style={{position: "relative"}}>
      <div style={{position: "sticky", top: "0", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px"}}>
        <div style={{position: "relative", width: "100%", maxWidth: "440px", height: "520px"}}>
          {/* v1 : book */}
          <div data-visual="1" style={{position: "absolute", inset: "0", opacity: "1", transform: "none", transition: "opacity .5s ease,transform .5s ease"}}>
            <div style={{height: "100%", background: "#161c30", border: "1px solid rgba(255,255,255,.1)", borderRadius: "18px", padding: "26px", display: "flex", flexDirection: "column", gap: "16px"}}>
              <div style={{font: "500 12px var(--font-ibm-plex-mono),monospace", color: "#9fb0ff", textTransform: "uppercase", letterSpacing: ".05em"}}>New study</div>
              <div>
                <div style={{font: "400 12px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.5)", marginBottom: "6px"}}>Objective</div>
                <div style={{background: "#0f1420", border: "1px solid rgba(255,255,255,.12)", borderRadius: "10px", padding: "13px", font: "400 14px var(--font-ibm-plex-sans),sans-serif", color: "#fff"}}>Test price sensitivity for a new snack bar</div>
              </div>
              <div>
                <div style={{font: "400 12px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.5)", marginBottom: "6px"}}>Audience</div>
                <div style={{display: "flex", flexWrap: "wrap", gap: "7px"}}>
                  <span style={{padding: "6px 11px", borderRadius: "20px", background: "rgba(109,134,255,.18)", border: "1px solid rgba(109,134,255,.35)", font: "500 12px var(--font-ibm-plex-sans),sans-serif", color: "#c3ceff"}}>US · 25–34</span>
                  <span style={{padding: "6px 11px", borderRadius: "20px", background: "rgba(109,134,255,.18)", border: "1px solid rgba(109,134,255,.35)", font: "500 12px var(--font-ibm-plex-sans),sans-serif", color: "#c3ceff"}}>Grocery buyers</span>
                  <span style={{padding: "6px 11px", borderRadius: "20px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)", font: "500 12px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.6)"}}>+ add</span>
                </div>
              </div>
              <div style={{display: "flex", gap: "12px"}}>
                <div style={{flex: "1", background: "#0f1420", border: "1px solid rgba(255,255,255,.12)", borderRadius: "10px", padding: "13px"}}><div style={{font: "700 22px var(--font-space-grotesk),sans-serif", color: "#fff"}}>12</div><div style={{font: "400 11px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.5)"}}>questions</div></div>
                <div style={{flex: "1", background: "#0f1420", border: "1px solid rgba(255,255,255,.12)", borderRadius: "10px", padding: "13px"}}><div style={{font: "700 22px var(--font-space-grotesk),sans-serif", color: "#fff"}}>2,500</div><div style={{font: "400 11px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.5)"}}>target n</div></div>
              </div>
              <button style={{marginTop: "auto", padding: "14px", border: "none", borderRadius: "11px", background: "#243bc4", color: "#fff", font: "600 14px var(--font-ibm-plex-sans),sans-serif", cursor: "pointer"}}>Launch study →</button>
            </div>
          </div>
          {/* v2 : field */}
          <div data-visual="2" style={{position: "absolute", inset: "0", opacity: "0", transform: "translateY(16px) scale(.98)", transition: "opacity .5s ease,transform .5s ease"}}>
            <div style={{height: "100%", background: "#161c30", border: "1px solid rgba(255,255,255,.1)", borderRadius: "18px", padding: "26px", display: "flex", flexDirection: "column", gap: "16px"}}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}><span style={{font: "500 12px var(--font-ibm-plex-mono),monospace", color: "#9fb0ff", textTransform: "uppercase", letterSpacing: ".05em"}}>Fielding · live</span><span style={{display: "flex", alignItems: "center", gap: "6px", font: "500 12px var(--font-ibm-plex-sans),sans-serif", color: "#7dffb0"}}><span style={{width: "7px", height: "7px", borderRadius: "50%", background: "#7dffb0"}}></span>collecting</span></div>
              <div><div style={{display: "flex", alignItems: "baseline", gap: "8px"}}><span style={{font: "700 44px var(--font-space-grotesk),sans-serif", color: "#fff", letterSpacing: "-.02em"}}>1,842</span><span style={{font: "400 14px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.5)"}}>/ 2,500</span></div><div style={{height: "8px", borderRadius: "20px", background: "rgba(255,255,255,.1)", marginTop: "12px"}}><div style={{width: "74%", height: "100%", borderRadius: "20px", background: "linear-gradient(90deg,#6d86ff,#243bc4)"}}></div></div></div>
              <div style={{display: "flex", flexDirection: "column", gap: "9px"}}>
                <div style={{display: "flex", justifyContent: "space-between", font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.7)"}}><span>United States</span><span style={{color: "#fff"}}>1,120</span></div>
                <div style={{display: "flex", justifyContent: "space-between", font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.7)"}}><span>United Kingdom</span><span style={{color: "#fff"}}>402</span></div>
                <div style={{display: "flex", justifyContent: "space-between", font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.7)"}}><span>Canada</span><span style={{color: "#fff"}}>320</span></div>
              </div>
              <div style={{marginTop: "auto", display: "flex", alignItems: "center", gap: "-8px"}}>
                <div style={{display: "flex"}}>
                  <span style={{width: "30px", height: "30px", borderRadius: "50%", background: "#6d86ff", border: "2px solid #161c30"}}></span>
                  <span style={{width: "30px", height: "30px", borderRadius: "50%", background: "#8ea0e8", border: "2px solid #161c30", marginLeft: "-8px"}}></span>
                  <span style={{width: "30px", height: "30px", borderRadius: "50%", background: "#243bc4", border: "2px solid #161c30", marginLeft: "-8px"}}></span>
                  <span style={{width: "30px", height: "30px", borderRadius: "50%", background: "#3f5bd8", border: "2px solid #161c30", marginLeft: "-8px"}}></span>
                </div>
                <span style={{font: "400 12px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.55)", marginLeft: "12px"}}>verified respondents, live now</span>
              </div>
            </div>
          </div>
          {/* v3 : AI */}
          <div data-visual="3" style={{position: "absolute", inset: "0", opacity: "0", transform: "translateY(16px) scale(.98)", transition: "opacity .5s ease,transform .5s ease"}}>
            <div style={{height: "100%", background: "#161c30", border: "1px solid rgba(255,255,255,.1)", borderRadius: "18px", padding: "26px", display: "flex", flexDirection: "column", gap: "14px"}}>
              <div style={{display: "flex", alignItems: "center", gap: "8px"}}><span style={{width: "18px", height: "18px", borderRadius: "5px", background: "linear-gradient(135deg,#6d86ff,#243bc4)", display: "flex", alignItems: "center", justifyContent: "center", font: "700 11px var(--font-space-grotesk),sans-serif", color: "#fff"}}>✦</span><span style={{font: "500 12px var(--font-ibm-plex-mono),monospace", color: "#9fb0ff", textTransform: "uppercase", letterSpacing: ".05em"}}>AI pipeline</span></div>
              <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                <div style={{display: "flex", alignItems: "center", gap: "10px", padding: "11px 13px", background: "#0f1420", border: "1px solid rgba(255,255,255,.1)", borderRadius: "10px"}}><span style={{color: "#7dffb0"}}>✓</span><span style={{font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.8)"}}>Cleaned & de-duplicated</span></div>
                <div style={{display: "flex", alignItems: "center", gap: "10px", padding: "11px 13px", background: "#0f1420", border: "1px solid rgba(255,255,255,.1)", borderRadius: "10px"}}><span style={{color: "#7dffb0"}}>✓</span><span style={{font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.8)"}}>Open-ends coded into themes</span></div>
                <div style={{display: "flex", alignItems: "center", gap: "10px", padding: "11px 13px", background: "rgba(109,134,255,.14)", border: "1px solid rgba(109,134,255,.35)", borderRadius: "10px"}}><span style={{width: "14px", height: "14px", borderRadius: "50%", border: "2px solid #6d86ff", borderTopColor: "transparent"}}></span><span style={{font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "#c3ceff"}}>Drafting insight summary…</span></div>
              </div>
              <div style={{background: "#0f1420", border: "1px solid rgba(255,255,255,.1)", borderRadius: "10px", padding: "14px", flex: "1"}}>
                <div style={{height: "8px", width: "90%", borderRadius: "20px", background: "rgba(255,255,255,.14)", marginBottom: "9px"}}></div>
                <div style={{height: "8px", width: "78%", borderRadius: "20px", background: "rgba(255,255,255,.1)", marginBottom: "9px"}}></div>
                <div style={{height: "8px", width: "84%", borderRadius: "20px", background: "rgba(255,255,255,.1)", marginBottom: "9px"}}></div>
                <div style={{height: "8px", width: "52%", borderRadius: "20px", background: "rgba(109,134,255,.4)"}}></div>
              </div>
            </div>
          </div>
          {/* v4 : deliver */}
          <div data-visual="4" style={{position: "absolute", inset: "0", opacity: "0", transform: "translateY(16px) scale(.98)", transition: "opacity .5s ease,transform .5s ease"}}>
            <div style={{height: "100%", background: "#fff", borderRadius: "18px", padding: "26px", display: "flex", flexDirection: "column", gap: "14px", boxShadow: "0 30px 60px -20px rgba(0,0,0,.5)"}}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}><span style={{font: "500 12px var(--font-ibm-plex-mono),monospace", color: "#243bc4", textTransform: "uppercase", letterSpacing: ".05em"}}>Insight brief</span><span style={{font: "400 11px var(--font-ibm-plex-sans),sans-serif", color: "#8a90a0"}}>delivered · 31h</span></div>
              <div style={{font: "600 22px/1.2 var(--font-space-grotesk),sans-serif", color: "#0f1420", letterSpacing: "-.01em"}}>Launch at $2.99 with a health-forward pack.</div>
              <div style={{display: "flex", flexDirection: "column", gap: "9px"}}>
                <div style={{display: "flex", gap: "9px", font: "400 13.5px var(--font-ibm-plex-sans),sans-serif", color: "#3a4150"}}><span style={{color: "#243bc4"}}>▸</span>Purchase intent hits 73% at $2.99</div>
                <div style={{display: "flex", gap: "9px", font: "400 13.5px var(--font-ibm-plex-sans),sans-serif", color: "#3a4150"}}><span style={{color: "#243bc4"}}>▸</span>Health framing lifts intent +9 pts</div>
                <div style={{display: "flex", gap: "9px", font: "400 13.5px var(--font-ibm-plex-sans),sans-serif", color: "#3a4150"}}><span style={{color: "#243bc4"}}>▸</span>Shrink pack size to close the gap</div>
              </div>
              <div style={{marginTop: "auto", display: "flex", gap: "10px"}}>
                <div style={{flex: "1", background: "#f4f5f8", borderRadius: "11px", padding: "13px"}}><div style={{font: "700 22px var(--font-space-grotesk),sans-serif", color: "#0f1420"}}>62%</div><div style={{font: "400 11px var(--font-ibm-plex-sans),sans-serif", color: "#8a90a0"}}>positive</div></div>
                <div style={{flex: "1", background: "#f4f5f8", borderRadius: "11px", padding: "13px"}}><div style={{font: "700 22px var(--font-space-grotesk),sans-serif", color: "#0f1420"}}>2,410</div><div style={{font: "400 11px var(--font-ibm-plex-sans),sans-serif", color: "#8a90a0"}}>responses</div></div>
              </div>
              <button style={{padding: "13px", border: "none", borderRadius: "11px", background: "#0f1420", color: "#fff", font: "600 13px var(--font-ibm-plex-sans),sans-serif", cursor: "pointer"}}>Open in dashboard</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* steps */}
    <div style={{padding: "0 40px"}}>
      <div data-step="1" style={{minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", opacity: "1", transition: "opacity .4s ease"}}>
        <div style={{font: "600 15px var(--font-ibm-plex-mono),monospace", color: "#6d86ff"}}>01</div>
        <h3 style={{margin: "14px 0 0", font: "600 34px/1.12 var(--font-space-grotesk),sans-serif", letterSpacing: "-.02em", color: "#fff"}}>Book a survey</h3>
        <p style={{margin: "16px 0 0", maxWidth: "400px", font: "400 17px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.65)"}}>Tell us the question and who to ask. Pick from templates or write your own — no research degree required. Launch in minutes.</p>
      </div>
      <div data-step="2" style={{minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", opacity: ".35", transition: "opacity .4s ease"}}>
        <div style={{font: "600 15px var(--font-ibm-plex-mono),monospace", color: "#6d86ff"}}>02</div>
        <h3 style={{margin: "14px 0 0", font: "600 34px/1.12 var(--font-space-grotesk),sans-serif", letterSpacing: "-.02em", color: "#fff"}}>We field it</h3>
        <p style={{margin: "16px 0 0", maxWidth: "400px", font: "400 17px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.65)"}}>Your study goes live to fresh, verified panels across 30+ markets. Watch responses land in real time — most studies fill within a day.</p>
      </div>
      <div data-step="3" style={{minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", opacity: ".35", transition: "opacity .4s ease"}}>
        <div style={{font: "600 15px var(--font-ibm-plex-mono),monospace", color: "#6d86ff"}}>03</div>
        <h3 style={{margin: "14px 0 0", font: "600 34px/1.12 var(--font-space-grotesk),sans-serif", letterSpacing: "-.02em", color: "#fff"}}>AI runs the analysis</h3>
        <p style={{margin: "16px 0 0", maxWidth: "400px", font: "400 17px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.65)"}}>Our pipeline cleans the data, codes every open-ended answer into themes, runs the cross-tabs, and drafts the story — the part that used to take analysts weeks.</p>
      </div>
      <div data-step="4" style={{minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", opacity: ".35", transition: "opacity .4s ease"}}>
        <div style={{font: "600 15px var(--font-ibm-plex-mono),monospace", color: "#6d86ff"}}>04</div>
        <h3 style={{margin: "14px 0 0", font: "600 34px/1.12 var(--font-space-grotesk),sans-serif", letterSpacing: "-.02em", color: "#fff"}}>Delivered to you</h3>
        <p style={{margin: "16px 0 0", maxWidth: "400px", font: "400 17px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.65)"}}>A decision-ready brief lands in your inbox and your dashboard — headline, evidence, and a recommended action. Share it, or dig into the raw data yourself.</p>
      </div>
    </div>
  </div>
</section>

{/* ============ FEATURES ============ */}
<section id="features" style={{maxWidth: "1180px", margin: "0 auto", padding: "120px 40px 40px"}}>
  <div style={{textAlign: "center", maxWidth: "680px", margin: "0 auto"}} data-reveal="">
    <div style={{font: "500 13px var(--font-ibm-plex-mono),monospace", letterSpacing: ".06em", textTransform: "uppercase", color: "#243bc4"}}>What you get</div>
    <h2 style={{margin: "14px 0 0", font: "600 46px/1.08 var(--font-space-grotesk),sans-serif", letterSpacing: "-.03em", color: "#0f1420", textWrap: "balance"}}>Enterprise-grade research, startup-grade speed.</h2>
  </div>
  <div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginTop: "52px"}}>
    <div data-reveal="" style={{background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "16px", padding: "28px"}}>
      <div style={{width: "42px", height: "42px", borderRadius: "11px", background: "rgba(36,59,196,.1)", display: "flex", alignItems: "center", justifyContent: "center", font: "700 18px var(--font-space-grotesk),sans-serif", color: "#243bc4"}}>⚡</div>
      <h3 style={{margin: "18px 0 0", font: "600 19px var(--font-space-grotesk),sans-serif", color: "#0f1420", letterSpacing: "-.01em"}}>Real-time, not next-quarter</h3>
      <p style={{margin: "9px 0 0", font: "400 14.5px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#6a707e"}}>Field and analyze in parallel. Insight arrives while the question still matters.</p>
    </div>
    <div data-reveal="" data-reveal-delay="80" style={{background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "16px", padding: "28px"}}>
      <div style={{width: "42px", height: "42px", borderRadius: "11px", background: "rgba(36,59,196,.1)", display: "flex", alignItems: "center", justifyContent: "center", font: "700 18px var(--font-space-grotesk),sans-serif", color: "#243bc4"}}>✦</div>
      <h3 style={{margin: "18px 0 0", font: "600 19px var(--font-space-grotesk),sans-serif", color: "#0f1420", letterSpacing: "-.01em"}}>AI that reads every answer</h3>
      <p style={{margin: "9px 0 0", font: "400 14.5px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#6a707e"}}>Open-ends coded, themes surfaced, the story drafted — with the quotes to back it up.</p>
    </div>
    <div data-reveal="" data-reveal-delay="160" style={{background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "16px", padding: "28px"}}>
      <div style={{width: "42px", height: "42px", borderRadius: "11px", background: "rgba(36,59,196,.1)", display: "flex", alignItems: "center", justifyContent: "center", font: "700 18px var(--font-space-grotesk),sans-serif", color: "#243bc4"}}>◎</div>
      <h3 style={{margin: "18px 0 0", font: "600 19px var(--font-space-grotesk),sans-serif", color: "#0f1420", letterSpacing: "-.01em"}}>Fresh, verified panels</h3>
      <p style={{margin: "9px 0 0", font: "400 14.5px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#6a707e"}}>Real people, screened and de-duplicated. Target by market, age, behavior, and more.</p>
    </div>
    <div data-reveal="" style={{background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "16px", padding: "28px"}}>
      <div style={{width: "42px", height: "42px", borderRadius: "11px", background: "rgba(36,59,196,.1)", display: "flex", alignItems: "center", justifyContent: "center", font: "700 18px var(--font-space-grotesk),sans-serif", color: "#243bc4"}}>$</div>
      <h3 style={{margin: "18px 0 0", font: "600 19px var(--font-space-grotesk),sans-serif", color: "#0f1420", letterSpacing: "-.01em"}}>Pay per study</h3>
      <p style={{margin: "9px 0 0", font: "400 14.5px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#6a707e"}}>No six-figure retainer. Run one study or a hundred — pricing scales with you.</p>
    </div>
    <div data-reveal="" data-reveal-delay="80" style={{background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "16px", padding: "28px"}}>
      <div style={{width: "42px", height: "42px", borderRadius: "11px", background: "rgba(36,59,196,.1)", display: "flex", alignItems: "center", justifyContent: "center", font: "700 18px var(--font-space-grotesk),sans-serif", color: "#243bc4"}}>▦</div>
      <h3 style={{margin: "18px 0 0", font: "600 19px var(--font-space-grotesk),sans-serif", color: "#0f1420", letterSpacing: "-.01em"}}>Live dashboards</h3>
      <p style={{margin: "9px 0 0", font: "400 14.5px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#6a707e"}}>Slice, filter, and export. Share a link — your team sees the same living view you do.</p>
    </div>
    <div data-reveal="" data-reveal-delay="160" style={{background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "16px", padding: "28px"}}>
      <div style={{width: "42px", height: "42px", borderRadius: "11px", background: "rgba(36,59,196,.1)", display: "flex", alignItems: "center", justifyContent: "center", font: "700 18px var(--font-space-grotesk),sans-serif", color: "#243bc4"}}>⬡</div>
      <h3 style={{margin: "18px 0 0", font: "600 19px var(--font-space-grotesk),sans-serif", color: "#0f1420", letterSpacing: "-.01em"}}>Track it over time</h3>
      <p style={{margin: "9px 0 0", font: "400 14.5px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#6a707e"}}>Re-run any study on a schedule and watch the trend line, not just a snapshot.</p>
    </div>
  </div>
</section>

{/* ============ DASHBOARD PREVIEW ============ */}
<section style={{maxWidth: "1180px", margin: "0 auto", padding: "100px 40px 40px"}}>
  <div style={{background: "linear-gradient(160deg,#12173a,#0f1420)", borderRadius: "24px", padding: "60px 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center", overflow: "hidden"}} data-reveal="">
    <div>
      <div style={{font: "500 13px var(--font-ibm-plex-mono),monospace", letterSpacing: ".06em", textTransform: "uppercase", color: "#9fb0ff"}}>The dashboard</div>
      <h2 style={{margin: "16px 0 0", font: "600 40px/1.1 var(--font-space-grotesk),sans-serif", letterSpacing: "-.03em", color: "#fff", textWrap: "balance"}}>Every study becomes a living answer.</h2>
      <p style={{margin: "18px 0 0", maxWidth: "420px", font: "400 17px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.66)"}}>Headline metric up top, the evidence underneath, and an AI-written recommendation you can actually act on. Filter by segment, export to your deck, or hand a share link to the team.</p>
      <div style={{display: "flex", gap: "28px", marginTop: "28px"}}>
        <div><div style={{font: "700 30px var(--font-space-grotesk),sans-serif", color: "#fff"}}>31h</div><div style={{font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.55)"}}>avg. turnaround</div></div>
        <div><div style={{font: "700 30px var(--font-space-grotesk),sans-serif", color: "#fff"}}>30+</div><div style={{font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.55)"}}>markets</div></div>
        <div><div style={{font: "700 30px var(--font-space-grotesk),sans-serif", color: "#fff"}}>94%</div><div style={{font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.55)"}}>completion</div></div>
      </div>
    </div>
    <div style={{background: "#fff", borderRadius: "16px", padding: "18px", boxShadow: "0 30px 60px -24px rgba(0,0,0,.6)"}}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px"}}><span style={{font: "600 14px var(--font-space-grotesk),sans-serif", color: "#0f1420"}}>Brand consideration</span><span style={{font: "500 11px var(--font-ibm-plex-mono),monospace", color: "#12a150", background: "rgba(18,161,80,.1)", padding: "3px 7px", borderRadius: "20px"}}>▲ 6.1%</span></div>
      <div style={{display: "flex", alignItems: "flex-end", gap: "7px", height: "130px"}}>
        <div style={{flex: "1", height: "48%", borderRadius: "5px 5px 0 0", background: "#c7d0ee"}}></div>
        <div style={{flex: "1", height: "60%", borderRadius: "5px 5px 0 0", background: "#c7d0ee"}}></div>
        <div style={{flex: "1", height: "54%", borderRadius: "5px 5px 0 0", background: "#8ea0e8"}}></div>
        <div style={{flex: "1", height: "72%", borderRadius: "5px 5px 0 0", background: "#8ea0e8"}}></div>
        <div style={{flex: "1", height: "66%", borderRadius: "5px 5px 0 0", background: "#8ea0e8"}}></div>
        <div style={{flex: "1", height: "90%", borderRadius: "5px 5px 0 0", background: "#243bc4"}}></div>
      </div>
      <div style={{height: "1px", background: "rgba(20,24,36,.08)", margin: "16px 0"}}></div>
      <div style={{display: "flex", gap: "12px"}}>
        <div style={{flex: "1", background: "#f4f5f8", borderRadius: "11px", padding: "14px"}}><div style={{font: "700 24px var(--font-space-grotesk),sans-serif", color: "#0f1420"}}>41%</div><div style={{font: "400 11px var(--font-ibm-plex-sans),sans-serif", color: "#8a90a0"}}>aided awareness</div></div>
        <div style={{flex: "1", background: "#f4f5f8", borderRadius: "11px", padding: "14px"}}><div style={{font: "700 24px var(--font-space-grotesk),sans-serif", color: "#0f1420"}}>+12</div><div style={{font: "400 11px var(--font-ibm-plex-sans),sans-serif", color: "#8a90a0"}}>NPS vs. Q2</div></div>
      </div>
    </div>
  </div>
</section>

{/* ============ CONTACT ============ */}
<section id="contact" style={{maxWidth: "1180px", margin: "0 auto", padding: "100px 40px 40px"}}>
  <div style={{textAlign: "center", maxWidth: "680px", margin: "0 auto"}} data-reveal="">
    <div style={{font: "500 13px var(--font-ibm-plex-mono),monospace", letterSpacing: ".06em", textTransform: "uppercase", color: "#243bc4"}}>Get in touch</div>
    <h2 style={{margin: "14px 0 0", font: "600 46px/1.08 var(--font-space-grotesk),sans-serif", letterSpacing: "-.03em", color: "#0f1420", textWrap: "balance"}}>Talk to us about your first study.</h2>
    <p style={{margin: "16px auto 0", maxWidth: "520px", font: "400 17px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#4a5160"}}>We&apos;re in private beta and onboarding a handful of teams by hand. Book a 30-minute call and we&apos;ll scope your first study together — no pricing deck, no pressure.</p>
  </div>
  <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "14px", marginTop: "40px"}} data-reveal="" data-reveal-delay="80">
    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{padding: "15px 28px", borderRadius: "11px", border: "none", background: "#243bc4", color: "#fff", font: "600 15px var(--font-ibm-plex-sans),sans-serif", boxShadow: "0 8px 20px -6px rgba(36,59,196,.7)"}}>Talk to us →</a>
    <a href="#waitlist" style={{padding: "15px 28px", borderRadius: "11px", border: "1px solid rgba(20,24,36,.16)", background: "#fff", color: "#0f1420", font: "500 15px var(--font-ibm-plex-sans),sans-serif"}}>Join waitlist</a>
  </div>
</section>

{/* ============ FAQ ============ */}
<section id="faq" style={{maxWidth: "820px", margin: "0 auto", padding: "100px 40px 40px"}}>
  <div style={{textAlign: "center", marginBottom: "44px"}} data-reveal="">
    <div style={{font: "500 13px var(--font-ibm-plex-mono),monospace", letterSpacing: ".06em", textTransform: "uppercase", color: "#243bc4"}}>FAQ</div>
    <h2 style={{margin: "14px 0 0", font: "600 42px/1.1 var(--font-space-grotesk),sans-serif", letterSpacing: "-.03em", color: "#0f1420"}}>Questions, answered.</h2>
  </div>
  <div data-reveal="" style={{display: "flex", flexDirection: "column", gap: "12px"}}>
    <details style={{background: "#fff", border: "1px solid rgba(20,24,36,.1)", borderRadius: "14px", padding: "20px 22px"}}>
      <summary style={{display: "flex", justifyContent: "space-between", alignItems: "center", font: "600 17px var(--font-space-grotesk),sans-serif", color: "#0f1420"}}>How fast do I actually get results?<span className="faq-plus" style={{font: "300 24px var(--font-ibm-plex-sans),sans-serif", color: "#243bc4", transition: "transform .2s ease"}}>+</span></summary>
      <p style={{margin: "14px 0 0", font: "400 15px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#5a6070"}}>Most studies field within 24 hours and land as a finished, AI-analyzed brief in about 31 hours on average. Rush fielding is available for time-sensitive calls.</p>
    </details>
    <details style={{background: "#fff", border: "1px solid rgba(20,24,36,.1)", borderRadius: "14px", padding: "20px 22px"}}>
      <summary style={{display: "flex", justifyContent: "space-between", alignItems: "center", font: "600 17px var(--font-space-grotesk),sans-serif", color: "#0f1420"}}>How big and fresh are your panels?<span className="faq-plus" style={{font: "300 24px var(--font-ibm-plex-sans),sans-serif", color: "#243bc4", transition: "transform .2s ease"}}>+</span></summary>
      <p style={{margin: "14px 0 0", font: "400 15px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#5a6070"}}>We source verified respondents across 30+ markets and screen and de-duplicate every one. You can target by geography, age, income, category behavior, and custom screeners.</p>
    </details>
    <details style={{background: "#fff", border: "1px solid rgba(20,24,36,.1)", borderRadius: "14px", padding: "20px 22px"}}>
      <summary style={{display: "flex", justifyContent: "space-between", alignItems: "center", font: "600 17px var(--font-space-grotesk),sans-serif", color: "#0f1420"}}>How is this cheaper than NielsenIQ or Kantar?<span className="faq-plus" style={{font: "300 24px var(--font-ibm-plex-sans),sans-serif", color: "#243bc4", transition: "transform .2s ease"}}>+</span></summary>
      <p style={{margin: "14px 0 0", font: "400 15px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#5a6070"}}>Legacy firms bill for large analyst teams and long timelines. Our AI pipeline does the cleaning, coding, and first-draft analysis, so we pass the savings on — with no six-figure minimums.</p>
    </details>
    <details style={{background: "#fff", border: "1px solid rgba(20,24,36,.1)", borderRadius: "14px", padding: "20px 22px"}}>
      <summary style={{display: "flex", justifyContent: "space-between", alignItems: "center", font: "600 17px var(--font-space-grotesk),sans-serif", color: "#0f1420"}}>What kinds of questions can I ask?<span className="faq-plus" style={{font: "300 24px var(--font-ibm-plex-sans),sans-serif", color: "#243bc4", transition: "transform .2s ease"}}>+</span></summary>
      <p style={{margin: "14px 0 0", font: "400 15px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#5a6070"}}>Concept tests, pricing, brand tracking, message testing, segmentation, open-ended discovery — anything you&apos;d run a survey for. Start from a template or write your own; we&apos;ll flag leading or biased questions before launch.</p>
    </details>
    <details style={{background: "#fff", border: "1px solid rgba(20,24,36,.1)", borderRadius: "14px", padding: "20px 22px"}}>
      <summary style={{display: "flex", justifyContent: "space-between", alignItems: "center", font: "600 17px var(--font-space-grotesk),sans-serif", color: "#0f1420"}}>Is my data secure?<span className="faq-plus" style={{font: "300 24px var(--font-ibm-plex-sans),sans-serif", color: "#243bc4", transition: "transform .2s ease"}}>+</span></summary>
      <p style={{margin: "14px 0 0", font: "400 15px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#5a6070"}}>Your studies and results are yours. We&apos;re building toward SOC 2, offer SSO and custom DPAs on Scale, and never sell or train third-party models on your data.</p>
    </details>
  </div>
</section>

{/* ============ FINAL CTA / WAITLIST ============ */}
<section id="waitlist" style={{position: "relative", marginTop: "60px", background: "url('/hero-dawn.jpg') center 60%/cover no-repeat", overflow: "hidden"}}>
  <div style={{position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(15,20,32,.72),rgba(15,20,32,.88))"}}></div>
  <div style={{position: "relative", maxWidth: "720px", margin: "0 auto", padding: "110px 40px", textAlign: "center"}} data-reveal="">
    <h2 style={{margin: "0", font: "700 54px/1.05 var(--font-space-grotesk),sans-serif", letterSpacing: "-.03em", color: "#fff", textWrap: "balance"}}>Get answers before your next decision.</h2>
    <p style={{margin: "20px auto 0", maxWidth: "480px", font: "400 18px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.72)"}}>Join the waitlist for early access. We&apos;re onboarding a handful of teams each week.</p>
    <WaitlistForm variant="dark" />
    <div style={{marginTop: "14px", font: "500 12.5px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.55)"}}>No credit card · No sales call · Unsubscribe anytime</div>
  </div>
</section>

{/* ============ FOOTER ============ */}
<footer style={{background: "#0b0e17", color: "rgba(255,255,255,.6)"}}>
  <div style={{maxWidth: "1180px", margin: "0 auto", padding: "56px 40px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "32px"}}>
    <div>
      <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
        <div style={{width: "24px", height: "24px", borderRadius: "6px", background: "#243bc4"}}></div>
        <span style={{font: "600 16px var(--font-space-grotesk),sans-serif", color: "#fff"}}>Cobalt Analytix</span>
      </div>
      <p style={{margin: "14px 0 0", maxWidth: "260px", font: "400 13.5px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.5)"}}>Consumer surveys and AI analysis that turn questions into decisions — in days, not weeks.</p>
    </div>
    <div>
      <div style={{font: "600 12px var(--font-ibm-plex-mono),monospace", textTransform: "uppercase", letterSpacing: ".06em", color: "rgba(255,255,255,.4)", marginBottom: "14px"}}>Product</div>
      <div style={{display: "flex", flexDirection: "column", gap: "10px", font: "400 14px var(--font-ibm-plex-sans),sans-serif"}}><a href="#how" style={{color: "rgba(255,255,255,.65)"}}>How it works</a><a href="#features" style={{color: "rgba(255,255,255,.65)"}}>Features</a><a href="#contact" style={{color: "rgba(255,255,255,.65)"}}>Contact</a></div>
    </div>
    <div>
      <div style={{font: "600 12px var(--font-ibm-plex-mono),monospace", textTransform: "uppercase", letterSpacing: ".06em", color: "rgba(255,255,255,.4)", marginBottom: "14px"}}>Company</div>
      <div style={{display: "flex", flexDirection: "column", gap: "10px", font: "400 14px var(--font-ibm-plex-sans),sans-serif"}}><a href="#" style={{color: "rgba(255,255,255,.65)"}}>About</a><a href="#" style={{color: "rgba(255,255,255,.65)"}}>Careers</a><a href="#" style={{color: "rgba(255,255,255,.65)"}}>Contact</a></div>
    </div>
    <div>
      <div style={{font: "600 12px var(--font-ibm-plex-mono),monospace", textTransform: "uppercase", letterSpacing: ".06em", color: "rgba(255,255,255,.4)", marginBottom: "14px"}}>Resources</div>
      <div style={{display: "flex", flexDirection: "column", gap: "10px", font: "400 14px var(--font-ibm-plex-sans),sans-serif"}}><a href="#" style={{color: "rgba(255,255,255,.65)"}}>Sample report</a><a href="#faq" style={{color: "rgba(255,255,255,.65)"}}>FAQ</a><a href="#" style={{color: "rgba(255,255,255,.65)"}}>Privacy</a></div>
    </div>
  </div>
  <div style={{borderTop: "1px solid rgba(255,255,255,.08)"}}><div style={{maxWidth: "1180px", margin: "0 auto", padding: "20px 40px", display: "flex", justifyContent: "space-between", font: "400 12.5px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.4)"}}><span>© 2026 Cobalt Analytix. All rights reserved.</span><span>Made for teams who decide with data.</span></div></div>
</footer>

</div>
    </>
  );
}
