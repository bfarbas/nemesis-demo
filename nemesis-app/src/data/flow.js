export const STEPS = [
  {
    id: "unit",
    label: "UNIT SIZE",
    prompt: "SELECT UNIT SIZE",
    subtitle: "Define the scale of your operational element",
    options: [
      { id: "platoon", label: "PLATOON", desc: "~30–50 personnel", icon: "◈" },
      { id: "company", label: "COMPANY", desc: "~100–200 personnel", icon: "◈◈" },
      { id: "brigade", label: "BRIGADE", desc: "~3,000–5,000 personnel", icon: "◈◈◈" },
      { id: "army", label: "ARMY", desc: "~100,000+ personnel", icon: "◈◈◈◈" },
      { id: "corps", label: "CORPS", desc: "~20,000–45,000 personnel", icon: "◈◈◈◈◈" },
    ],
  },
  {
    id: "spectrum",
    label: "SPECTRUM OF OPERATIONS",
    prompt: "SELECT SPECTRUM OF OPERATIONS",
    subtitle: "Identify the operational environment and rules of engagement",
    options: [
      { id: "protester", label: "PROTESTER", desc: "Civil unrest / crowd management", icon: "▲" },
      { id: "dv", label: "DOMESTIC VIOLENCE", desc: "Law enforcement intervention", icon: "▲▲" },
      { id: "coin", label: "COUNTER INSURGENCY", desc: "COIN doctrine — hearts and minds", icon: "▲▲▲" },
      { id: "hewf", label: "HIGH END WARFIGHTING", desc: "Full-spectrum peer adversary conflict", icon: "▲▲▲▲" },
    ],
  },
  {
    id: "vehicle",
    label: "VEHICLE LOADOUT",
    prompt: "SELECT VEHICLE LOADOUT",
    subtitle: "Configure organic mobility and platform type",
    options: [
      { id: "recon", label: "RECON", desc: "Light fast-movers, minimal signature", icon: "⬡" },
      { id: "isr", label: "ISR", desc: "Intelligence, Surveillance & Reconnaissance", icon: "⬡⬡" },
      { id: "mech", label: "MECHANISED INFANTRY", desc: "IFV / APC-mounted combined arms", icon: "⬡⬡⬡" },
    ],
  },
  {
    id: "weapon",
    label: "WEAPON LOADOUT",
    prompt: "SELECT WEAPON LOADOUT",
    subtitle: "Arm your element for the mission profile",
    options: [
      { id: "shaving", label: "SHAVING KIT", desc: "Non-lethal grooming deterrent", icon: "✦" },
      { id: "rollingpin", label: "MAMA'S ROLLING PIN", desc: "Close-quarters baking implement", icon: "✦✦" },
      { id: "m2", label: "M2 BROWNING", desc: ".50 cal HMG — sustained fire superiority", icon: "✦✦✦" },
      { id: "ppk", label: "WALTHER PPK", desc: "Compact sidearm — Bond approved", icon: "✦✦✦✦" },
      { id: "slbm", label: "SLBM", desc: "Submarine-launched ballistic missile", icon: "✦✦✦✦✦" },
    ],
  },
];
