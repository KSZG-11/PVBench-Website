/* One distinct source ID per physical dimension, selected from the provided LingBot I2V list. */
window.PVBenchModels = [
  {
    "id": "seedance25",
    "name": "Seedance 2.5",
    "short": "SD 2.5",
    "fileKey": "seedance25"
  },
  {
    "id": "minimax-h3",
    "name": "MiniMax H3",
    "short": "H3",
    "fileKey": "minimax"
  },
  {
    "id": "wan21",
    "name": "Wan 2.1",
    "short": "W2.1",
    "fileKey": "wan21"
  },
  {
    "id": "wan22",
    "name": "Wan 2.2",
    "short": "W2.2",
    "fileKey": "wan22"
  },
  {
    "id": "lingbot",
    "name": "LingBot",
    "short": "LingBot",
    "fileKey": "lingbot",
    "i2vVerifiedFrom": "lingbot_i2v_missing_20260917.txt"
  }
];
window.PVBenchPhysicsCases = [
  {
    "number": "001",
    "dimension": "R01",
    "name": "Depth",
    "domain": "Geometry & spatial consistency",
    "method": "VGGT-Ω · geometry",
    "keyPrompt": "A white robot arm before an orange storage bin, their silhouettes overlapping near the center. A familiar height, distance, support, or water-line reference is visible beside the physical target. A small white triangle registration marker identifies this exact hybrid layout beside the apparatus; The arm raises its gripper slightly while the bin stays at its floor marker. The declared…",
    "promptId": "U46V2-0243",
    "t2vSlot": "PV-001-T2V",
    "i2vSlot": "PV-001-I2V"
  },
  {
    "number": "002",
    "dimension": "R02",
    "name": "Surface normal",
    "domain": "Geometry & spatial consistency",
    "method": "StableNormal · geometry",
    "keyPrompt": "In the same marked test area, a quadruped robot waits beside the apparatus. A matte ceramic face mask containing convex and concave regions. An amber trigger indicator is visible beside the existing release mechanism. A small teal cross registration marker identifies this exact hybrid layout beside the apparatus; The quadruped robot activates the existing release or control; then the…",
    "promptId": "U46V2-0463",
    "t2vSlot": "PV-002-T2V",
    "i2vSlot": "PV-002-I2V"
  },
  {
    "number": "003",
    "dimension": "R03",
    "name": "Shape",
    "domain": "Geometry & spatial consistency",
    "method": "VGGT-Ω · geometry",
    "keyPrompt": "A red torus-knot sculpture on a pedestal against a dark background. The principal target has a clear initial relation to its support, container, path, or reference object. A small white star registration marker identifies this exact hybrid layout beside the apparatus; The pedestal turns through several viewpoints. The declared event exposes that same spatial relation. The white star…",
    "promptId": "U46V2-0323",
    "t2vSlot": "PV-003-T2V",
    "i2vSlot": "PV-003-I2V"
  },
  {
    "number": "004",
    "dimension": "R04",
    "name": "Absolute scale",
    "domain": "Geometry & spatial consistency",
    "method": "DA3 + SAM 3 · scale and pose",
    "keyPrompt": "A tennis ball, soccer ball, and basketball beside a one-meter measuring stick. A yellow safety rail, blue equipment cabinet, and high windows identify the setting as an industrial test hall. A small indigo pentagon registration marker identifies this exact hybrid layout beside the apparatus; A hand rolls the tennis ball a short marked distance. The industrial setting remains visible…",
    "promptId": "U46V2-0353",
    "t2vSlot": "PV-004-T2V",
    "i2vSlot": "PV-004-I2V"
  },
  {
    "number": "005",
    "dimension": "R05",
    "name": "Current deformation state",
    "domain": "Material & field state",
    "method": "VGGT-Ω + SpatialTracker V2 · deformation",
    "keyPrompt": "In the same marked test area, a dual arm robot waits beside the apparatus. A foam cylinder between two parallel transparent plates. The visible actuator begins separated from one initially stationary physical target. A small lime triangle registration marker identifies this exact hybrid layout beside the apparatus; The dual arm robot activates the existing release or control; then…",
    "promptId": "U46V2-0234",
    "t2vSlot": "PV-005-T2V",
    "i2vSlot": "PV-005-I2V"
  },
  {
    "number": "006",
    "dimension": "R06",
    "name": "Material properties",
    "domain": "Material & field state",
    "method": "Qwen3.8-27B · material judgment",
    "keyPrompt": "A thin glass vial held above a steel plate; The vial is released onto the plate",
    "promptId": "U46V2-0151",
    "t2vSlot": "PV-006-T2V",
    "i2vSlot": "PV-006-I2V"
  },
  {
    "number": "007",
    "dimension": "R07",
    "name": "Thermal radiation",
    "domain": "Material & field state",
    "method": "Qwen3.8-27B · thermal judgment",
    "keyPrompt": "A steel bar just removed from a furnace, held with tongs in a dark workshop; The bar is carried past three distance markers and turned",
    "promptId": "U46V2-0156",
    "t2vSlot": "PV-007-T2V",
    "i2vSlot": "PV-007-I2V"
  },
  {
    "number": "008",
    "dimension": "R08",
    "name": "Multi-view geometry consistency",
    "domain": "Geometry & spatial consistency",
    "method": "VGGT-Ω · multi-view geometry",
    "keyPrompt": "Ten-second video with exactly three consecutive temporal shots, not a split screen. The same static scene and target are used in every shot: A small house model with open porch, chimney, and side stairs. The existing principal target carries one asymmetric magenta patch and a small silver tag. A small silver hexagon registration marker identifies this exact hybrid layout beside the…",
    "promptId": "U46V2-0269",
    "t2vSlot": "PV-008-T2V",
    "i2vSlot": "PV-008-I2V"
  },
  {
    "number": "009",
    "dimension": "R09",
    "name": "Relative scale",
    "domain": "Geometry & spatial consistency",
    "method": "VGGT-Ω + SAM 3 · scale and pose",
    "keyPrompt": "A helium balloon held near ground level against a wide sky. A red checkerboard mat and one asymmetric yellow target stripe make the opening arrangement distinctive. A small maroon crescent registration marker identifies this exact hybrid layout beside the apparatus; The hand releases the balloon and the fixed wide camera observes its path. The declared event starts from that same…",
    "promptId": "U46V2-0302",
    "t2vSlot": "PV-009-T2V",
    "i2vSlot": "PV-009-I2V"
  },
  {
    "number": "010",
    "dimension": "R10",
    "name": "3D pose",
    "domain": "Geometry & spatial consistency",
    "method": "Any6D / VGGT-Ω · pose",
    "keyPrompt": "In the same marked test area, a biped robot waits beside the apparatus. An asymmetric cube with colored faces at the center of a coordinate grid. The visible actuator begins separated from one initially stationary physical target. A small navy triangle registration marker identifies this exact hybrid layout beside the apparatus; The biped robot activates the existing release or…",
    "promptId": "U46V2-0236",
    "t2vSlot": "PV-010-T2V",
    "i2vSlot": "PV-010-I2V"
  },
  {
    "number": "011",
    "dimension": "R11",
    "name": "Spatial relation",
    "domain": "Geometry & spatial consistency",
    "method": "VGGT-Ω + SAM 3 · spatial relation",
    "keyPrompt": "In the same marked test area, a wheeled robot waits beside the apparatus. A toy train before a station building on a circular track. The visible actuator begins separated from one initially stationary physical target. A small silver triangle registration marker identifies this exact hybrid layout beside the apparatus; The wheeled robot activates the existing release or control; then…",
    "promptId": "U46V2-0237",
    "t2vSlot": "PV-011-T2V",
    "i2vSlot": "PV-011-I2V"
  },
  {
    "number": "012",
    "dimension": "R12",
    "name": "Stability",
    "domain": "Geometry & spatial consistency",
    "method": "VGGT-Ω + SAM 3 · static stability",
    "keyPrompt": "A fifteen-block tower in alternating layers on a rigid table; Nobody touches the table during the full observation",
    "promptId": "U46V2-0211",
    "t2vSlot": "PV-012-T2V",
    "i2vSlot": "PV-012-I2V"
  },
  {
    "number": "013",
    "dimension": "R13",
    "name": "Light–space consistency",
    "domain": "Material & field state",
    "method": "ReasonX + StableNormal · lighting geometry",
    "keyPrompt": "A small statue, a white screen, and one visible spotlight on a dark stage; The spotlight carriage moves from one marked side position to another",
    "promptId": "U46V2-0163",
    "t2vSlot": "PV-013-T2V",
    "i2vSlot": "PV-013-I2V"
  },
  {
    "number": "014",
    "dimension": "R14",
    "name": "Magnetic / electric relation",
    "domain": "Material & field state",
    "method": "Qwen3.8-27B · field interaction",
    "keyPrompt": "A horseshoe magnet held above scattered steel paperclips and wooden beads; The magnet descends toward the mixed objects and later lifts",
    "promptId": "U46V2-0166",
    "t2vSlot": "PV-014-T2V",
    "i2vSlot": "PV-014-I2V"
  },
  {
    "number": "015",
    "dimension": "R15",
    "name": "Displacement",
    "domain": "Kinematic & persistence",
    "method": "SpatialTracker V2 · displacement",
    "keyPrompt": "A weighted rod displaced from the center of an angle-marked background; The rod is released and observed through several swings",
    "promptId": "U46V2-0182",
    "t2vSlot": "PV-015-T2V",
    "i2vSlot": "PV-015-I2V"
  },
  {
    "number": "016",
    "dimension": "R16",
    "name": "Speed & acceleration",
    "domain": "Kinematic & persistence",
    "method": "SpatialTracker V2 · kinematics",
    "keyPrompt": "A metal ball held at the top of a marked inclined ramp; The ball is released and travels down the ramp past the tick marks",
    "promptId": "U46V2-0186",
    "t2vSlot": "PV-016-T2V",
    "i2vSlot": "PV-016-I2V"
  },
  {
    "number": "017",
    "dimension": "R17",
    "name": "Angular velocity",
    "domain": "Kinematic & persistence",
    "method": "Any6D / VGGT-Ω · Kabsch",
    "keyPrompt": "A three-blade ceiling fan with a red sticker on one blade tip; The fan motor is switched on for the rest of the shot",
    "promptId": "U46V2-0191",
    "t2vSlot": "PV-017-T2V",
    "i2vSlot": "PV-017-I2V"
  },
  {
    "number": "018",
    "dimension": "R18",
    "name": "Light–time consistency",
    "domain": "Material & field state",
    "method": "ReasonX · temporal lighting",
    "keyPrompt": "Three fruit and a vase under one visible studio light from the upper left; The camera observes the still life while the light mount remains at its marked point",
    "promptId": "U46V2-0171",
    "t2vSlot": "PV-018-T2V",
    "i2vSlot": "PV-018-I2V"
  },
  {
    "number": "019",
    "dimension": "R19",
    "name": "Cross-frame geometric consistency",
    "domain": "Kinematic & persistence",
    "method": "VGGT-Ω + FlowSeek · cross-frame geometry",
    "keyPrompt": "A straight corridor with repeated columns and textured floor tiles; The camera advances along the center line from one floor mark to another",
    "promptId": "U46V2-0196",
    "t2vSlot": "PV-019-T2V",
    "i2vSlot": "PV-019-I2V"
  },
  {
    "number": "020",
    "dimension": "R20",
    "name": "Motion continuity",
    "domain": "Kinematic & persistence",
    "method": "VFIMamba + SpatialTracker V2 · motion",
    "keyPrompt": "A ball at the start of a long serpentine transparent tube; The ball travels through the entire tube",
    "promptId": "U46V2-0203",
    "t2vSlot": "PV-020-T2V",
    "i2vSlot": "PV-020-I2V"
  },
  {
    "number": "021",
    "dimension": "R21",
    "name": "Object persistence",
    "domain": "Kinematic & persistence",
    "method": "SAM 3 + VGGT-Ω + Qwen3.8-27B · persistence",
    "keyPrompt": "A curated physical scene for this dimension; inspect the object-level geometry and motion while preserving the stated scene",
    "promptId": "U46V2-0206",
    "t2vSlot": "PV-021-T2V",
    "i2vSlot": "PV-021-I2V"
  },
  {
    "number": "022",
    "dimension": "R22",
    "name": "Force and dynamic effect",
    "domain": "Mechanical & conservation",
    "method": "SpatialTracker V2 · force response",
    "keyPrompt": "A heavy cardboard box at rest on a marked wooden floor with a hand beside it; The hand pushes the box briefly and lets go",
    "promptId": "U46V2-0216",
    "t2vSlot": "PV-022-T2V",
    "i2vSlot": "PV-022-I2V"
  },
  {
    "number": "023",
    "dimension": "R23",
    "name": "Momentum conservation",
    "domain": "Mechanical & conservation",
    "method": "SpatialTracker V2 · momentum",
    "keyPrompt": "A curated physical scene for this dimension; inspect the object-level geometry and motion while preserving the stated scene",
    "promptId": "U46V2-0221",
    "t2vSlot": "PV-023-T2V",
    "i2vSlot": "PV-023-I2V"
  },
  {
    "number": "024",
    "dimension": "R24",
    "name": "Energy conservation",
    "domain": "Mechanical & conservation",
    "method": "SpatialTracker V2 · energy",
    "keyPrompt": "A brass pendulum bob held to one side before angle marks; The bob is released and observed for several full cycles",
    "promptId": "U46V2-0226",
    "t2vSlot": "PV-024-T2V",
    "i2vSlot": "PV-024-I2V"
  },
  {
    "number": "025",
    "dimension": "R25",
    "name": "Phase change",
    "domain": "Mechanical & conservation",
    "method": "Qwen3.8-27B · phase-change judgment",
    "keyPrompt": "A clear ice cube on a dark stone plate above a switched-off warming pad; The warming pad is switched on and the cube is observed for the remaining time",
    "promptId": "U46V2-0176",
    "t2vSlot": "PV-025-T2V",
    "i2vSlot": "PV-025-I2V"
  }
];
