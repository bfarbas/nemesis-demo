import { useState, useEffect } from "react";
import { useTypingEffect } from "../hooks/useTypingEffect";

export default function SelectionStep({ step, stepIndex, totalSteps, onSelect, selections }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);
  const { displayed: typedPrompt } = useTypingEffect(step.prompt, 35, 100);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, [step.id]);

  return (
    <div className={`step-screen ${visible ? "visible" : ""}`}>
      <div className="scanlines" />
      <div className="grid-overlay" />

      {/* Top nav bar */}
      <div className="topbar">
        <div className="topbar-logo">
          <div className="logo-diamond small" />
          <span>NEMESIS</span>
        </div>
        <div className="progress-track">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`progress-pip ${i < stepIndex ? "done" : ""} ${i === stepIndex ? "active" : ""}`}
            />
          ))}
        </div>
        <div className="topbar-step">
          STEP {stepIndex + 1} / {totalSteps}
        </div>
      </div>

      {/* Breadcrumb of prior selections */}
      {Object.keys(selections).length > 0 && (
        <div className="breadcrumb">
          {Object.entries(selections).map(([key, val]) => (
            <span key={key} className="bc-chip">
              <span className="bc-key">{key.toUpperCase()}</span>
              <span className="bc-val">{val.label}</span>
            </span>
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="step-content">
        <div className="step-header">
          <div className="step-eyebrow">
            <span className="amber">// {step.label}</span>
          </div>
          <h2 className="step-title">{typedPrompt}<span className="cursor">█</span></h2>
          <p className="step-subtitle">{step.subtitle}</p>
          <div className="divider" />
        </div>

        <div className="options-grid" data-count={step.options.length}>
          {step.options.map((opt, i) => (
            <button
              key={opt.id}
              className={`option-card ${hovered === opt.id ? "hovered" : ""}`}
              style={{ animationDelay: `${i * 80}ms` }}
              onClick={() => onSelect(step.id, opt)}
              onMouseEnter={() => setHovered(opt.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="option-corner tl" />
              <div className="option-corner tr" />
              <div className="option-corner bl" />
              <div className="option-corner br" />

              <div className="option-icon">{opt.icon}</div>
              <div className="option-label">{opt.label}</div>
              <div className="option-desc">{opt.desc}</div>
              <div className="option-select-label">SELECT →</div>
            </button>
          ))}
        </div>
      </div>

      <div className="splash-footer">
        <span>CLASSIFIED // NOFORN</span>
        <span>{step.label} // AWAITING SELECTION</span>
        <span>OPERATOR AUTHENTICATED</span>
      </div>
    </div>
  );
}
