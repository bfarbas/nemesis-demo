import { useEffect, useState } from "react";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { STEPS } from "../data/flow";

export default function LoadoutCard({ selections, onReset }) {
  const [visible, setVisible] = useState(false);
  const [revealed, setRevealed] = useState({});
  const { displayed: headline } = useTypingEffect("MISSION LOADOUT CONFIRMED", 40, 300);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;
    STEPS.forEach((step, i) => {
      setTimeout(() => {
        setRevealed((prev) => ({ ...prev, [step.id]: true }));
      }, 400 + i * 300);
    });
  }, [visible]);

  const missionId = Math.random().toString(36).slice(2, 10).toUpperCase();

  return (
    <div className={`loadout-screen ${visible ? "visible" : ""}`}>
      <div className="scanlines" />
      <div className="grid-overlay" />

      <div className="topbar">
        <div className="topbar-logo">
          <div className="logo-diamond small" />
          <span>NEMESIS</span>
        </div>
        <div className="topbar-step amber">CONFIGURATION COMPLETE</div>
      </div>

      <div className="loadout-content">
        <div className="loadout-header">
          <div className="step-eyebrow amber">// MISSION BRIEF</div>
          <h2 className="step-title">{headline}<span className="cursor">█</span></h2>
          <p className="step-subtitle">
            All parameters locked. Review your operational configuration below.
          </p>
          <div className="divider" />
        </div>

        <div className="loadout-card">
          <div className="card-corner tl" />
          <div className="card-corner tr" />
          <div className="card-corner bl" />
          <div className="card-corner br" />

          <div className="card-header">
            <div>
              <div className="card-title">OPERATIONAL LOADOUT</div>
              <div className="card-mission-id">MISSION ID: {missionId}</div>
            </div>
            <div className="card-status">
              <span className="status-dot" />
              ACTIVE
            </div>
          </div>

          <div className="card-divider" />

          <div className="card-rows">
            {STEPS.map((step) => {
              const sel = selections[step.id];
              return (
                <div key={step.id} className={`card-row ${revealed[step.id] ? "revealed" : ""}`}>
                  <div className="card-row-label">{step.label}</div>
                  <div className="card-row-value">
                    {sel ? (
                      <>
                        <span className="amber">{sel.label}</span>
                        <span className="card-row-desc">{sel.desc}</span>
                      </>
                    ) : (
                      <span className="dim">—</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="card-divider" />

          <div className="card-footer">
            <div className="card-classification">CLASSIFICATION: TOP SECRET // SCI</div>
            <div className="card-auth">AUTH: COSMIC CLEARANCE VERIFIED</div>
          </div>
        </div>

        <div className="loadout-actions">
          <button className="btn-primary" onClick={onReset}>
            <span className="btn-bracket">[</span>
            RECONFIGURE LOADOUT
            <span className="btn-bracket">]</span>
          </button>
        </div>
      </div>

      <div className="splash-footer">
        <span>CLASSIFIED // NOFORN // REL TO FVEY</span>
        <span>LOADOUT LOCKED // MISSION READY</span>
        <span>PRINT FOR OPERATIONAL USE</span>
      </div>
    </div>
  );
}
