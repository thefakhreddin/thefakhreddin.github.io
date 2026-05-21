// ─────────────────────────────────────────────────────────────────────────────
//  PROJECT DATA
//  To add a project: copy one object below and fill in the fields.
//
//  group    : section heading shown above a run of cards (set only on the first
//             card of each new group; omit on the rest)
//  type     : "mechanical" | "software" | "video" | "electronics"
//  category : display label shown on the card
//  source   : "instructables" | "personal" | "youtube" | "hackster" | "github"
//  url      : link the card opens — use "" for personal projects with no link
//  img      : thumbnail URL
// ─────────────────────────────────────────────────────────────────────────────

const PROJECTS = [

  // ── Original Builds ──────────────────────────────────────────────────────

  {
    type:     "mechanical",
    category: "mechanical · electronics",
    title:    "Meet Christopher",
    desc:     "Ceiling-mounted skeleton that drops over unsuspecting victims on PIR trigger, then retracts to ambush again — entire cycle driven by a single DC motor with a clever release mechanism. No servos. Electronics fit on a cheap motor driver and a JK flip-flop.",
    source:   "personal",
    url:      "christopher.html",
    img:      "projects/Christopher/tn3.jpg"
  },

  {
    type:     "mechanical",
    category: "mechanical · cnc machining",
    title:    "Metal Hexapod Robot",
    desc:     "Six-legged walking robot driven by a single DC motor through a crankshaft linkage mechanism. All six legs actuated by one actuator. Designed to be machined in a basic shop from flat aluminum or steel stock.",
    source:   "personal",
    url:      "metal-hexapod.html",
    img:      "projects/Metal%20Hexapod%20Robot/photo_2026-05-05_22-30-14.jpg"
  },

  {
    type:     "mechanical",
    category: "mechanical · robotics · ros",
    title:    "3-Wheel Omni Robot (ROS)",
    desc:     "Holonomic 3-wheeled mobile robot with full ROS navigation stack. Three omniwheels at 120° give 3-DOF planar motion. Spinning ultrasonic sensor head acts as a low-cost LIDAR substitute for SLAM and motion planning.",
    source:   "personal",
    url:      "omni-robot.html",
    img:      "projects/Omni%20directional%20mobile%20robot/IMG_0659.JPG"
  },

  // ── Research / Sensors ───────────────────────────────────────────────────

  {
    type:     "electronics",
    category: "electronics · sensors · research",
    title:    "Aluminum Smelting Sensors",
    desc:     "Non-contact inductive and resonant capacitive sensors for real-time bath level and composition measurement inside molten aluminum smelting cells. Two IEEE publications.",
    source:   "personal",
    url:      "aluminum-smelting.html",
    img:      "projects/Aluminum%20Smelting%20Sensor/tn3.jpg"
  },

  {
    type:     "software",
    category: "simulation · fem · mems",
    title:    "MEMS Resonator FEM Study",
    desc:     "FEM analysis of a MEMS spring–proof mass resonator in SolidWorks and COMSOL Multiphysics. Characterized resonant deflection and von Mises stress distribution across the flexure springs under harmonic excitation.",
    source:   "personal",
    url:      "mems-resonator.html",
    img:      "projects/memsResonator/180resonanceDeflection.png"
  },

  // ── LEGO Mechanical ──────────────────────────────────────────────────────

  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "DIY Quadruped Robot",
    desc:     "4-legged walking robot built with Arduino, 3D printed parts, and LEGO-compatible components.",
    source:   "instructables",
    url:      "https://www.instructables.com/A-DIY-Quadruped-Robot-With-Arduino-3D-Printed-and-/",
    img:      "https://content.instructables.com/FBV/ETPD/KJVFNXZ0/FBVETPDKJVFNXZ0.jpg?frame=true&width=1024&height=1024&fit=bounds"
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "DIY Hexapod Robot",
    desc:     "6-legged walking robot with fluid gait control, Arduino-driven with 3D printed and LEGO-compatible parts.",
    source:   "instructables",
    url:      "https://www.instructables.com/A-DIY-Hexapod-Robot-With-Arduino-Lego-and-3D-Print/",
    img:      "https://content.instructables.com/FOR/TG19/KF140E9C/FORTG19KF140E9C.jpg?frame=true&width=1024&height=1024&fit=bounds"
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "DIY Biped Robot",
    desc:     "Classic two-legged walking robot with Arduino control, 3D printed frame, and LEGO-compatible parts.",
    source:   "instructables",
    url:      "https://www.instructables.com/A-DIY-Biped-Robot-With-Arduino-Lego-and-3D-Printed/",
    img:      "https://content.instructables.com/F6A/FYLL/KEMTPMN8/F6AFYLLKEMTPMN8.jpg?frame=true&width=1024&height=1024&fit=bounds"
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "Sound-Activated Biped Robot",
    desc:     "Two-legged walking robot that starts moving in response to sound — no buttons needed.",
    source:   "instructables",
    url:      "https://www.instructables.com/A-Sound-activated-DIY-Biped-Robot-With-a-Lego-comp/",
    img:      "https://content.instructables.com/FL4/QQZ4/L7ES09TQ/FL4QQZ4L7ES09TQ.jpg?frame=true&width=1024&height=1024&fit=bounds"
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "Flapping-Wing Robotic Bat",
    desc:     "Ornithopter-style bat robot with Arduino-driven flapping wings — 3D printed and LEGO-compatible.",
    source:   "instructables",
    url:      "https://www.instructables.com/A-DIY-Flapping-wing-Robotic-Bat-With-Arduino-3D-Pr/",
    img:      "https://content.instructables.com/FVS/Q8DE/KHQ9VMIY/FVSQ8DEKHQ9VMIY.jpg?frame=true&width=1024&height=1024&fit=bounds"
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "DIY Zipline Robot",
    desc:     "Monkey-like robot that traverses a zipline cable using alternating arm motion.",
    source:   "instructables",
    url:      "https://www.instructables.com/A-DIY-Zipline-Robot-With-Arduino-Lego-and-3D-Print/",
    img:      "https://content.instructables.com/F2L/XQO8/KF1409M4/F2LXQO8KF1409M4.jpg?frame=true&width=1024&height=1024&fit=bounds"
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "DIY Rescue Robot",
    desc:     "Arduino-powered rescue-themed robot with LEGO-compatible structure and 3D printed chassis.",
    source:   "instructables",
    url:      "https://www.instructables.com/A-DIY-Rescue-Robot-With-Arduino-Lego-and-3D-Printe/",
    img:      "https://content.instructables.com/FMU/4ZSQ/KFL46NCN/FMU4ZSQKFL46NCN.jpg?frame=true&width=1024&height=1024&fit=bounds"
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "Tower Crane Desktop Replica",
    desc:     "Fully functional desktop-scale tower crane replica with working lift and slew, controlled by Arduino.",
    source:   "instructables",
    url:      "https://www.instructables.com/A-Fully-Functional-Tower-Crane-Desktop-Replica-Wit/",
    img:      "https://content.instructables.com/FIH/XUJQ/KHG9T9KW/FIHXUJQKHG9T9KW.jpg?frame=true&width=1024&height=1024&fit=bounds"
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "Bicycle Rider Replica",
    desc:     "Lively desktop model of a person riding a bicycle, powered by the Cherry Tart controller.",
    source:   "instructables",
    url:      "https://www.instructables.com/This-Project-Is-a-Lively-Desktop-Replica-Model-of-/",
    img:      "https://content.instructables.com/F52/B6D2/L2RLCV99/F52B6D2L2RLCV99.jpg?frame=true&width=1024&height=1024&fit=bounds"
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "Orange Tart Soccer Robot",
    desc:     "LEGO-compatible soccer-playing robot designed for fun, competition, and STEM learning.",
    source:   "instructables",
    url:      "https://www.instructables.com/Orange-Tart-Lego-compatible-Soccer-Robot-for-Fun-a/",
    img:      "https://content.instructables.com/F1J/WRTN/KPB70OOE/F1JWRTNKPB70OOE.jpg?frame=true&width=1024&height=1024&fit=bounds"
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "Tangible Coding Robot",
    desc:     "Robot programmed through physical tangible blocks — a hands-on coding experience for kids.",
    source:   "instructables",
    url:      "https://www.instructables.com/A-DIY-Tangible-Coding-Robot-With-Arduino-Lego-and-/",
    img:      "https://content.instructables.com/FYD/GIJP/KGC9HVBX/FYDGIJPKGC9HVBX.jpg?frame=true&width=1024&height=1024&fit=bounds"
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "Unstoppable Discovery Robot",
    desc:     "Interactive LEGO-compatible robot for kids that keeps exploring its environment autonomously.",
    source:   "instructables",
    url:      "https://www.instructables.com/Build-LEGO-compatible-and-Interactive-Unstoppabe-D/",
    img:      "https://content.instructables.com/FHA/YACX/L9RIWLPX/FHAYACXL9RIWLPX.jpg?frame=true&width=1024&height=1024&fit=bounds"
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "LEGO-Compatible Gyroscope",
    desc:     "Motorized spinning gyroscope built from LEGO-compatible parts — a physics demo for STEM education.",
    source:   "instructables",
    url:      "https://www.instructables.com/Build-LEGO-compatible-Gyroscope-Robotic-Project-fo/",
    img:      "https://content.instructables.com/FV8/R1PC/L6URQMI4/FV8R1PCL6URQMI4.jpg?frame=true&width=700&height=1024&fit=bounds"
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "LEGO-Compatible Motorcycle",
    desc:     "Motorized motorcycle model built from LEGO-compatible parts — a beginner-friendly robotic build.",
    source:   "instructables",
    url:      "https://www.instructables.com/Robotic-Project-for-Kids-How-to-Build-LEGO-compati/",
    img:      "https://content.instructables.com/FEE/7XDO/L6M73HV2/FEE7XDOL6M73HV2.jpg?frame=true&width=1024&height=1024&fit=bounds"
  },
  {
    type:     "mechanical",
    category: "mechanical · lego design",
    title:    "Cherry Tart Robot Kit",
    desc:     "Interactive, nature-inspired LEGO-compatible robot kit designed for kids and adults to build and innovate.",
    source:   "instructables",
    url:      "https://www.instructables.com/Cherry-Tart-the-Interactive-LEGO-compatible-Crafti/",
    img:      "https://content.instructables.com/FW1/U5ON/LE8JKHMV/FW1U5ONLE8JKHMV.jpg"
  },

  // ── Robotics / ROS ────────────────────────────────────────────────────────

  {
    type:     "software",
    category: "software · deep learning · ros",
    title:    "LPM-Net: Deep MPC Local Planner",
    desc:     "Predictive deep learning model for ROS robot navigation. 50% less compute than classic MPC. Published in a journal and packaged for ROS.",
    source:   "github",
    url:      "https://github.com/thefakhreddin/deep_mpc_local_planner",
    img:      "https://github.com/user-attachments/assets/af6847a0-cb7f-403b-a214-a4b70d04c7b4"
  },
  {
    type:     "software",
    category: "software · computer vision · robotics",
    title:    "2-DOF Object Tracking Arm",
    desc:     "Robot arm that locks a webcam onto a moving target using TFLite + MobileNet CNN on Raspberry Pi.",
    source:   "github",
    url:      "https://github.com/thefakhreddin/TFLite_CNN_2DOF_Object_Tracking_Arm",
    img:      "assets/other/IMG_7572.JPG"
  },
  {
    type:     "software",
    category: "software · computer vision · education",
    title:    "Vision Coding",
    desc:     "Android app + vision system for tangible block-based programming. Physical jigsaw-shaped coding blocks are arranged by hand; the camera detects and classifies each block and translates the layout into a robot command sequence. Screen-free coding for children.",
    source:   "personal",
    url:      "vision-coding.html",
    img:      "projects/visionCoding/photo_2021-12-07_11-09-15.jpg"
  },
  {
    type:     "software",
    category: "electronics · firmware",
    title:    "Orange Tart STM32 Firmware",
    desc:     "Embedded C firmware for the Orange Tart soccer robot's STM32 microcontroller.",
    source:   "github",
    url:      "https://github.com/thefakhreddin/OrangeTart_Firmware_stm32",
    img:      ""
  },

  // ── Add more projects below ───────────────────────────────────────────────
  //
  // {
  //   group:    "your section title",   // omit if continuing same section
  //   type:     "electronics",          // mechanical | software | video | electronics
  //   category: "electronics · pcb",
  //   title:    "Your Project Title",
  //   desc:     "One or two sentences about what you built and what it does.",
  //   source:   "personal",             // instructables | personal | youtube | hackster | github
  //   url:      "",                     // leave "" for no link
  //   img:      ""                      // paste image URL here
  // },

];
