import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Semester 1
import MathPhysics1 from "./pages/Semester1/MathPhysics1/MathPhysics1";
import Mechanics from "./pages/Semester1/Mechanics/Mechanics";
import WavesOscillations from "./pages/Semester1/WavesOscillations/WavesOscillations";

// Semester 2
import MathPhysics2 from "./pages/Semester2/MathPhysics2/MathPhysics2";
import ElectricityMagnetism from "./pages/Semester2/ElectricityMagnetism/ElectricityMagnetism";
import ElectricalCircuitAnalysis from "./pages/Semester2/ElectricalCircuitAnalysis/ElectricalCircuitAnalysis";

// Semester 3
import MathPhysics3 from "./pages/Semester3/MathPhysics3/MathPhysics3";
import ThermalPhysics from "./pages/Semester3/ThermalPhysics/ThermalPhysics";
import LightAndMatter from "./pages/Semester3/LightAndMatter/LightAndMatter";

// Semester 4
import ModernPhysics from "./pages/Semester4/ModernPhysics";
import SolidStatePhysics from "./pages/Semester4/SolidStatePhysics";
import AnalogElectronics from "./pages/Semester4/AnalogElectronics";

// Semester 5
import ElectromagneticTheory from "./pages/Semester5/ElectromagneticTheory";
import QuantumMechanics1 from "./pages/Semester5/QuantumMechanics1";
import DigitalElectronics from "./pages/Semester5/DigitalElectronics";

// Semester 6
import StatisticalMechanics from "./pages/Semester6/StatisticalMechanics";
import AtomicMolecularNuclearPhysics from "./pages/Semester6/AtomicMolecularNuclearPhysics";
import StatisticalAnalysis from "./pages/Semester6/StatisticalAnalysis";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <Router>
      <Navbar dark={dark} setDark={setDark} />
      <div
        className={`pt-32 px-4 sm:px-10 md:px-16 min-h-screen transition-colors duration-300 ${
          dark ? "bg-[#050414] text-white" : "bg-white text-gray-900"
        }`}
      >
        <Routes>
          {/* General */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Semester 1 */}
          <Route path="/semester1/math-physics-1" element={<MathPhysics1 />} />
          <Route path="/semester1/math-physics-1/notes" element={<div>MathPhysics1 Notes</div>} />
          <Route path="/semester1/math-physics-1/pyqs" element={<div>MathPhysics1 PYQs</div>} />
          <Route path="/semester1/math-physics-1/pyq-solutions" element={<div>MathPhysics1 PYQ Solutions</div>} />
          <Route path="/semester1/math-physics-1/lab" element={<div>MathPhysics1 Lab Content</div>} />
          <Route path="/semester1/math-physics-1/syllabus" element={<div>MathPhysics1 Syllabus</div>} />

          <Route path="/semester1/mechanics" element={<Mechanics />} />
          <Route path="/semester1/mechanics/notes" element={<div>Mechanics Notes</div>} />
          <Route path="/semester1/mechanics/pyqs" element={<div>Mechanics PYQs</div>} />
          <Route path="/semester1/mechanics/pyq-solutions" element={<div>Mechanics PYQ Solutions</div>} />
          <Route path="/semester1/mechanics/lab" element={<div>Mechanics Lab Content</div>} />
          <Route path="/semester1/mechanics/syllabus" element={<div>Mechanics Syllabus</div>} />

          <Route path="/semester1/waves-oscillations" element={<WavesOscillations />} />
          <Route path="/semester1/waves-oscillations/notes" element={<div>Waves Notes</div>} />
          <Route path="/semester1/waves-oscillations/pyqs" element={<div>Waves PYQs</div>} />
          <Route path="/semester1/waves-oscillations/pyq-solutions" element={<div>Waves PYQ Solutions</div>} />
          <Route path="/semester1/waves-oscillations/lab" element={<div>Waves Lab Content</div>} />
          <Route path="/semester1/waves-oscillations/syllabus" element={<div>Waves Syllabus</div>} />

          {/* Semester 2 */}
          <Route path="/semester2/math-physics-2" element={<MathPhysics2 />} />
          <Route path="/semester2/math-physics-2/notes" element={<div>MathPhysics2 Notes</div>} />
          <Route path="/semester2/math-physics-2/pyqs" element={<div>MathPhysics2 PYQs</div>} />
          <Route path="/semester2/math-physics-2/pyq-solutions" element={<div>MathPhysics2 PYQ Solutions</div>} />
          <Route path="/semester2/math-physics-2/lab" element={<div>MathPhysics2 Lab Content</div>} />
          <Route path="/semester2/math-physics-2/syllabus" element={<div>MathPhysics2 Syllabus</div>} />

          <Route path="/semester2/electricity-magnetism" element={<ElectricityMagnetism />} />
          <Route path="/semester2/electricity-magnetism/notes" element={<div>Electricity & Magnetism Notes</div>} />
          <Route path="/semester2/electricity-magnetism/pyqs" element={<div>Electricity & Magnetism PYQs</div>} />
          <Route path="/semester2/electricity-magnetism/pyq-solutions" element={<div>Electricity & Magnetism PYQ Solutions</div>} />
          <Route path="/semester2/electricity-magnetism/lab" element={<div>Electricity & Magnetism Lab Content</div>} />
          <Route path="/semester2/electricity-magnetism/syllabus" element={<div>Electricity & Magnetism Syllabus</div>} />

          <Route path="/semester2/electrical-circuit-analysis" element={<ElectricalCircuitAnalysis />} />
          <Route path="/semester2/electrical-circuit-analysis/notes" element={<div>Electrical Circuit Analysis Notes</div>} />
          <Route path="/semester2/electrical-circuit-analysis/pyqs" element={<div>Electrical Circuit Analysis PYQs</div>} />
          <Route path="/semester2/electrical-circuit-analysis/pyq-solutions" element={<div>Electrical Circuit Analysis PYQ Solutions</div>} />
          <Route path="/semester2/electrical-circuit-analysis/lab" element={<div>Electrical Circuit Analysis Lab Content</div>} />
          <Route path="/semester2/electrical-circuit-analysis/syllabus" element={<div>Electrical Circuit Analysis Syllabus</div>} />

          {/* Semester 3 */}
          <Route path="/semester3/math-physics-3" element={<MathPhysics3 />} />
          <Route path="/semester3/math-physics-3/notes" element={<div>Math Physics 3 Notes</div>} />
          <Route path="/semester3/math-physics-3/pyqs" element={<div>Math Physics 3 PYQs</div>} />
          <Route path="/semester3/math-physics-3/pyq-solutions" element={<div>Math Physics 3 PYQ Solutions</div>} />
          <Route path="/semester3/math-physics-3/lab" element={<div>Math Physics 3 Lab Content</div>} />
          <Route path="/semester3/math-physics-3/syllabus" element={<div>Math Physics 3 Syllabus</div>} />

          <Route path="/semester3/thermal-physics" element={<ThermalPhysics />} />
          <Route path="/semester3/thermal-physics/notes" element={<div>Thermal Physics Notes</div>} />
          <Route path="/semester3/thermal-physics/pyqs" element={<div>Thermal Physics PYQs</div>} />
          <Route path="/semester3/thermal-physics/pyq-solutions" element={<div>Thermal Physics PYQ Solutions</div>} />
          <Route path="/semester3/thermal-physics/lab" element={<div>Thermal Physics Lab Content</div>} />
          <Route path="/semester3/thermal-physics/syllabus" element={<div>Thermal Physics Syllabus</div>} />

          <Route path="/semester3/light-and-matter" element={<LightAndMatter />} />
          <Route path="/semester3/light-and-matter/notes" element={<div>Light and Matter Notes</div>} />
          <Route path="/semester3/light-and-matter/pyqs" element={<div>Light and Matter PYQs</div>} />
          <Route path="/semester3/light-and-matter/pyq-solutions" element={<div>Light and Matter PYQ Solutions</div>} />
          <Route path="/semester3/light-and-matter/lab" element={<div>Light and Matter Lab Content</div>} />
          <Route path="/semester3/light-and-matter/syllabus" element={<div>Light and Matter Syllabus</div>} />

          

          {/* Semester 4 */}
          <Route path="/semester4/modern-physics" element={<ModernPhysics />} />
          <Route path="/semester4/solid-state-physics" element={<SolidStatePhysics />} />
          <Route path="/semester4/analog-electronics" element={<AnalogElectronics />} />

          {/* Semester 5 */}
          <Route path="/semester5/electromagnetic-theory" element={<ElectromagneticTheory />} />
          <Route path="/semester5/quantum-mechanics-1" element={<QuantumMechanics1 />} />
          <Route path="/semester5/digital-electronics" element={<DigitalElectronics />} />

          {/* Semester 6 */}
          <Route path="/semester6/statistical-mechanics" element={<StatisticalMechanics />} />
          <Route path="/semester6/atomic-molecular-nuclear-physics" element={<AtomicMolecularNuclearPhysics />} />
          <Route path="/semester6/statistical-analysis" element={<StatisticalAnalysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
