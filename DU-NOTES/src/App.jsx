import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MathPhysics1 from "./pages/Semester1/MathPhysics1";
import Mechanics from "./pages/Semester1/Mechanics";
import WavesOscillations from "./pages/Semester1/WavesOscillations";
import MathPhysics2 from "./pages/Semester2/MathPhysics2";
import ElectricityMagnetism from "./pages/Semester2/ElectricityMagnetism";
import ElectricalCircuitAnalysis from "./pages/Semester2/ElectricalCircuitAnalysis";
import MathPhysics3 from "./pages/Semester3/MathPhysics3";
import ThermalPhysics from "./pages/Semester3/ThermalPhysics";
import LightAndMatter from "./pages/Semester3/LightAndMatter";
import ModernPhysics from "./pages/Semester4/ModernPhysics";
import SolidStatePhysics from "./pages/Semester4/SolidStatePhysics";
import AnalogElectronics from "./pages/Semester4/AnalogElectronics";
import ElectromagneticTheory from "./pages/Semester5/ElectromagneticTheory";
import QuantumMechanics1 from "./pages/Semester5/QuantumMechanics1";
import DigitalElectronics from "./pages/Semester5/DigitalElectronics";
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/semester1/math-physics-1" element={<MathPhysics1 />} />
          <Route path="/semester1/mechanics" element={<Mechanics />} />
          <Route path="/semester1/waves-oscillations" element={<WavesOscillations />} />
          <Route path="/semester2/math-physics-2" element={<MathPhysics2 />} />
          <Route path="/semester2/electricity-magnetism" element={<ElectricityMagnetism />} />
          <Route path="/semester2/electrical-circuit-analysis" element={<ElectricalCircuitAnalysis />} />
          <Route path="/semester3/math-physics-3" element={<MathPhysics3 />} />
          <Route path="/semester3/thermal-physics" element={<ThermalPhysics />} />
          <Route path="/semester3/light-and-matter" element={<LightAndMatter />} />
          <Route path="/semester4/modern-physics" element={<ModernPhysics />} />
          <Route path="/semester4/solid-state-physics" element={<SolidStatePhysics />} />
          <Route path="/semester4/analog-electronics" element={<AnalogElectronics />} />
          <Route path="/semester5/electromagnetic-theory" element={<ElectromagneticTheory />} />
          <Route path="/semester5/quantum-mechanics-1" element={<QuantumMechanics1 />} />
          <Route path="/semester5/digital-electronics" element={<DigitalElectronics />} />
          <Route path="/semester6/statistical-mechanics" element={<StatisticalMechanics />} />
          <Route path="/semester6/atomic-molecular-nuclear-physics" element={<AtomicMolecularNuclearPhysics />} />
          <Route path="/semester6/statistical-analysis" element={<StatisticalAnalysis />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
