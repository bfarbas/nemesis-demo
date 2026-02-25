import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import SelectionStep from "./components/SelectionStep";
import LoadoutCard from "./components/LoadoutCard";
import { STEPS } from "./data/flow";
import "./App.css";

const PHASE_SPLASH = "splash";
const PHASE_STEPS = "steps";
const PHASE_SUMMARY = "summary";

export default function App() {
  const [phase, setPhase] = useState(PHASE_SPLASH);
  const [stepIndex, setStepIndex] = useState(0);
  const [selections, setSelections] = useState({});
  const [transitioning, setTransitioning] = useState(false);

  function transition(fn) {
    setTransitioning(true);
    setTimeout(() => {
      fn();
      setTransitioning(false);
    }, 400);
  }

  function handleEnter() {
    transition(() => {
      setStepIndex(0);
      setPhase(PHASE_STEPS);
    });
  }

  function handleSelect(stepId, option) {
    const newSelections = { ...selections, [stepId]: option };
    setSelections(newSelections);

    transition(() => {
      if (stepIndex < STEPS.length - 1) {
        setStepIndex(stepIndex + 1);
      } else {
        setPhase(PHASE_SUMMARY);
      }
    });
  }

  function handleReset() {
    transition(() => {
      setSelections({});
      setStepIndex(0);
      setPhase(PHASE_SPLASH);
    });
  }

  return (
    <div className={`app-shell ${transitioning ? "fade-out" : "fade-in"}`}>
      {phase === PHASE_SPLASH && (
        <SplashScreen onEnter={handleEnter} />
      )}
      {phase === PHASE_STEPS && (
        <SelectionStep
          key={stepIndex}
          step={STEPS[stepIndex]}
          stepIndex={stepIndex}
          totalSteps={STEPS.length}
          onSelect={handleSelect}
          selections={selections}
        />
      )}
      {phase === PHASE_SUMMARY && (
        <LoadoutCard selections={selections} onReset={handleReset} />
      )}
    </div>
  );
}
