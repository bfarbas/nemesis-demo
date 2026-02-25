import { useEffect, useState } from "react";
import { useTypingEffect } from "../hooks/useTypingEffect";

export default function SplashScreen({ onEnter }) {
  const [visible, setVisible] = useState(false);
  const { displayed: line1 } = useTypingEffect("NEMESIS CONFIGURATION SYSTEM", 45, 300);
  const { displayed: line2, done: line2done } = useTypingEffect("v2.4.1 // CLASSIFIED", 45, 1800);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    if (line2done) {
      const t = setTimeout(() => setShowBtn(true), 600);
      return () => clearTimeout(t);
    }
  }, [line2done]);

  return (
    <div className={`splash ${visible ? "visible" : ""}`}>
      <div className="scanlines" />
      <div className="grid-overlay" />

      <div className="splash-logo">
        <div className="logo-mark">
          <div className="logo-diamond" />
          <div className="logo-ring" />
        </div>
        <span className="logo-text">NEMESIS</span>
      </div>

      <div className="splash-center">
        <div className="terminal-box">
          <div className="terminal-header">
            <span className="term-dot red" />
            <span className="term-dot amber" />
            <span className="term-dot green" />
            <span className="term-label">TERMINAL // AUTH LEVEL: COSMIC</span>
          </div>
          <div className="terminal-body">
            <p className="term-line dim">&gt; INITIALISING NEMESIS TACTICAL INTERFACE...</p>
            <p className="term-line">&gt; {line1}<span className="cursor">█</span></p>
            <p className="term-line dim">&gt; {line2}</p>
            <p className="term-line dim">&gt; AWAITING OPERATOR INPUT</p>
          </div>
        </div>

        <h1 className="splash-headline">
          SELECT<br />
          <span className="amber">UNIT SIZE</span>
        </h1>

        <p className="splash-sub">
          Configure your operational element through the NEMESIS guided selection protocol
        </p>

        <button
          className={`btn-primary ${showBtn ? "btn-enter" : ""}`}
          onClick={onEnter}
          disabled={!showBtn}
        >
          <span className="btn-bracket">[</span>
          INITIATE CONFIGURATION
          <span className="btn-bracket">]</span>
        </button>
      </div>

      <div className="splash-footer">
        <span>CLASSIFIED // NOFORN // REL TO FVEY</span>
        <span>SYS:ONLINE // UPTIME: 99.97%</span>
        <span>LAT: 38.8977° N // LON: 77.0365° W</span>
      </div>
    </div>
  );
}
