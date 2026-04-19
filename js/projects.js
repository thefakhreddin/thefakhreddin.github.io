// ─────────────────────────────────────────────────────────────────────────────
//  PROJECT DATA
//  To add a project: copy one object below and fill in the fields.
//
//  type     : "mechanical" | "software" | "video" | "electronics"
//  category : display label shown on the card
//  source   : "instructables" | "personal" | "youtube" | "hackster"
//  url      : link the card opens — use "" for personal projects with no link
//  img      : thumbnail URL — right-click cover image → Copy image address
// ─────────────────────────────────────────────────────────────────────────────

const PROJECTS = [

  // ── Mechanical / LEGO Design ─────────────────────────────────────────────

  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "DIY Quadruped Robot",
    desc:     "4-legged walking robot built with Arduino, 3D printed parts, and LEGO-compatible components.",
    source:   "instructables",
    url:      "https://www.instructables.com/A-DIY-Quadruped-Robot-With-Arduino-3D-Printed-and-/",
    img:      ""
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "DIY Hexapod Robot",
    desc:     "6-legged walking robot with fluid gait control, Arduino-driven with 3D printed and LEGO-compatible parts.",
    source:   "instructables",
    url:      "https://www.instructables.com/A-DIY-Hexapod-Robot-With-Arduino-Lego-and-3D-Print/",
    img:      ""
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "DIY Biped Robot",
    desc:     "Classic two-legged walking robot with Arduino control, 3D printed frame, and LEGO-compatible parts.",
    source:   "instructables",
    url:      "https://www.instructables.com/A-DIY-Biped-Robot-With-Arduino-Lego-and-3D-Printed/",
    img:      ""
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "Sound-Activated Biped Robot",
    desc:     "Two-legged walking robot that starts moving in response to sound — no buttons needed.",
    source:   "instructables",
    url:      "https://www.instructables.com/A-Sound-activated-DIY-Biped-Robot-With-a-Lego-comp/",
    img:      ""
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "Flapping-Wing Robotic Bat",
    desc:     "Ornithopter-style bat robot with Arduino-driven flapping wings — 3D printed and LEGO-compatible.",
    source:   "instructables",
    url:      "https://www.instructables.com/A-DIY-Flapping-wing-Robotic-Bat-With-Arduino-3D-Pr/",
    img:      ""
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "DIY Zipline Robot",
    desc:     "Monkey-like robot that traverses a zipline cable using alternating arm motion.",
    source:   "instructables",
    url:      "https://www.instructables.com/A-DIY-Zipline-Robot-With-Arduino-Lego-and-3D-Print/",
    img:      ""
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "DIY Rescue Robot",
    desc:     "Arduino-powered rescue-themed robot with LEGO-compatible structure and 3D printed chassis.",
    source:   "instructables",
    url:      "https://www.instructables.com/A-DIY-Rescue-Robot-With-Arduino-Lego-and-3D-Printe/",
    img:      ""
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "Tower Crane Desktop Replica",
    desc:     "Fully functional desktop-scale tower crane replica with working lift and slew, controlled by Arduino.",
    source:   "instructables",
    url:      "https://www.instructables.com/A-Fully-Functional-Tower-Crane-Desktop-Replica-Wit/",
    img:      ""
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "Bicycle Rider Replica",
    desc:     "Lively desktop model of a person riding a bicycle, powered by the Cherry Tart controller.",
    source:   "instructables",
    url:      "https://www.instructables.com/This-Project-Is-a-Lively-Desktop-Replica-Model-of-/",
    img:      ""
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "Orange Tart Soccer Robot",
    desc:     "LEGO-compatible soccer-playing robot designed for fun, competition, and STEM learning.",
    source:   "instructables",
    url:      "https://www.instructables.com/Orange-Tart-Lego-compatible-Soccer-Robot-for-Fun-a/",
    img:      ""
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "Tangible Coding Robot",
    desc:     "Robot programmed through physical tangible blocks — a hands-on coding experience for kids.",
    source:   "instructables",
    url:      "https://www.instructables.com/A-DIY-Tangible-Coding-Robot-With-Arduino-Lego-and-/",
    img:      ""
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "Unstoppable Discovery Robot",
    desc:     "Interactive LEGO-compatible robot for kids that keeps exploring its environment autonomously.",
    source:   "instructables",
    url:      "https://www.instructables.com/Build-LEGO-compatible-and-Interactive-Unstoppabe-D/",
    img:      ""
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "LEGO-Compatible Gyroscope",
    desc:     "Motorized spinning gyroscope built from LEGO-compatible parts — a physics demo for STEM education.",
    source:   "instructables",
    url:      "https://www.instructables.com/Build-LEGO-compatible-Gyroscope-Robotic-Project-fo/",
    img:      ""
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "LEGO-Compatible Motorcycle",
    desc:     "Motorized motorcycle model built from LEGO-compatible parts — a beginner-friendly robotic build.",
    source:   "instructables",
    url:      "https://www.instructables.com/Robotic-Project-for-Kids-How-to-Build-LEGO-compati/",
    img:      ""
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "Cherry Tart Robot Kit",
    desc:     "Interactive, nature-inspired LEGO-compatible robot kit designed for kids and adults to build and innovate.",
    source:   "instructables",
    url:      "https://www.instructables.com/Cherry-Tart-the-Interactive-LEGO-compatible-Crafti/",
    img:      ""
  },

  // ── Add more projects below ───────────────────────────────────────────────
  //
  // {
  //   type:     "electronics",          // mechanical | software | video | electronics
  //   category: "electronics · pcb",
  //   title:    "Your Project Title",
  //   desc:     "One or two sentences about what you built and what it does.",
  //   source:   "personal",             // instructables | personal | youtube | hackster
  //   url:      "",                     // leave "" for no link
  //   img:      ""                      // paste image URL here
  // },

];
