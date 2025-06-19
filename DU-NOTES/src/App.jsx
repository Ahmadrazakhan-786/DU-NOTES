import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

// Semester 1
import MathPhysics1 from "./pages/Semester1/MathPhysics1/MathPhysics1";
import Lab from "./pages/Semester1/MathPhysics1/Lab";
import Notes from "./pages/Semester1/MathPhysics1/Notes";
import PYQS from "./pages/Semester1/MathPhysics1/PYQS";
import PYQSolutions from "./pages/Semester1/MathPhysics1/PYQSolutions";
import Syllabus from "./pages/Semester1/MathPhysics1/Syllabus";

// Mechanics Subject
import Mechanics from "./pages/Semester1/Mechanics/Mechanics";
import LabMechanics from "./pages/Semester1/Mechanics/LabMechanics ";
import NotesMechanics from "./pages/Semester1/Mechanics/NotesMechanics ";
import PYQSMechanics from "./pages/Semester1/Mechanics/PYQSMechanics ";
import PYQSolutionsMechanics from "./pages/Semester1/Mechanics/PYQSolutionsMechanics ";
import SyllabusMechanics from "./pages/Semester1/Mechanics/SyllabusMechanics ";

import WavesOscillations from "./pages/Semester1/WavesOscillations/WavesOscillations";
import LabWaves from "./pages/Semester1/WavesOscillations/LabWaves ";
import NotesWaves from "./pages/Semester1/WavesOscillations/NotesWaves ";
import PYQSWaves from "./pages/Semester1/WavesOscillations/PYQSWaves ";
import PYQSolutionsWaves from "./pages/Semester1/WavesOscillations/PYQSolutionsWaves ";
import SyllabusWaves from "./pages/Semester1/WavesOscillations/SyllabusWaves ";

// Semester 2
import MathPhysics2 from "./pages/Semester2/MathPhysics2/MathPhysics2";
import LabMath2 from "./pages/Semester2/MathPhysics2/LabMath2 ";
import NotesMath2 from "./pages/Semester2/MathPhysics2/NotesMath2 ";
import PYQSMath2 from "./pages/Semester2/MathPhysics2/PYQSMath2 ";
import PYQSolutionsMath2 from "./pages/Semester2/MathPhysics2/PYQSolutionsMath2 ";
import SyllabusMath2 from "./pages/Semester2/MathPhysics2/SyllabusMath2 ";

import ElectricityMagnetism from "./pages/Semester2/ElectricityMagnetism/ElectricityMagnetism";
import ElectricalCircuitAnalysis from "./pages/Semester2/ElectricalCircuitAnalysis/ElectricalCircuitAnalysis";

// Semester 3
import MathPhysics3 from "./pages/Semester3/MathPhysics3/MathPhysics3";
import ThermalPhysics from "./pages/Semester3/ThermalPhysics/ThermalPhysics";
import LightAndMatter from "./pages/Semester3/LightAndMatter/LightAndMatter";

// Semester 4
import ModernPhysics from "./pages/Semester4/ModernPhysics/ModernPhysics";
import SolidStatePhysics from "./pages/Semester4/SolidStatePhysics/SolidStatePhysics";
import AnalogElectronics from "./pages/Semester4/AnalogElectronics/AnalogElectronics";

// Semester 5
import ElectromagneticTheory from "./pages/Semester5/ElectromagneticTheory/ElectromagneticTheory";
import QuantumMechanics1 from "./pages/Semester5/QuantumMechanics1/QuantumMechanics1";
import DigitalElectronics from "./pages/Semester5/DigitalElectronics/DigitalElectronics";

// Semester 6
import StatisticalMechanics from "./pages/Semester6/StatisticalMechanics/StatisticalMechanics";
import AtomicMolecularNuclearPhysics from "./pages/Semester6/AtomicMolecularNuclearPhysics/AtomicMolecularNuclearPhysics";
import StatisticalAnalysis from "./pages/Semester6/StatisticalAnalysis/StatisticalAnalysis";



function App() {
  const [dark, setDark] = useState(false);

  return (

   
    <Router>
      <Navbar dark={dark} setDark={setDark} />
     
      <div
        className={`pt-32 px-4 sm:px-10 md:px-16 min-h-screen transition-colors duration-300 ${
          dark ? "bg-[#2c2c2c] text-white" : "bg-[#fdfbd4] text-gray-900"
        }`}
      >
        <Routes>
          {/* General */}
          <Route path="/" element={<Home dark={dark}/>} />
          <Route path="/about" element={<About dark={dark}/>} />
          <Route path="/contact" element={<Contact dark={dark} />} />

          {/* Semester 1 */}
          <Route path="/semester1/math-physics-1" element={<MathPhysics1 />} />
          <Route path="/semester1/math-physics-1/lab" element={<Lab />} />
          <Route path="/semester1/math-physics-1/notes" element={<Notes />} />
<Route path="/semester1/math-physics-1/pyqs" element={<PYQS />} />
<Route path="/semester1/math-physics-1/pyq-solutions" element={<PYQSolutions />} />
<Route path="/semester1/math-physics-1/syllabus" element={<Syllabus />} />  

  <Route path="/semester1/mechanics" element={<Mechanics />} />
<Route path="/semester1/mechanics/lab" element={<LabMechanics />} />
<Route path="/semester1/mechanics/notes" element={<NotesMechanics />} />
<Route path="/semester1/mechanics/pyqs" element={<PYQSMechanics />} />
<Route path="/semester1/mechanics/pyq-solutions" element={<PYQSolutionsMechanics />} />
<Route path="/semester1/mechanics/syllabus" element={<SyllabusMechanics />} />


         <Route path="/semester1/waves-oscillations" element={<WavesOscillations />} />
<Route path="/semester1/waves-oscillations/lab" element={<LabWaves />} />
<Route path="/semester1/waves-oscillations/notes" element={<NotesWaves />} />
<Route path="/semester1/waves-oscillations/pyqs" element={<PYQSWaves />} />
<Route path="/semester1/waves-oscillations/pyq-solutions" element={<PYQSolutionsWaves />} />
<Route path="/semester1/waves-oscillations/syllabus" element={<SyllabusWaves />} />


          {/* Semester 2 */}
          <Route path="/semester2/math-physics-2" element={<MathPhysics2 />} />
<Route path="/semester2/math-physics-2/lab" element={<LabMath2 />} />
<Route path="/semester2/math-physics-2/notes" element={<NotesMath2 />} />
<Route path="/semester2/math-physics-2/pyqs" element={<PYQSMath2 />} />
<Route path="/semester2/math-physics-2/pyq-solutions" element={<PYQSolutionsMath2 />} />
<Route path="/semester2/math-physics-2/syllabus" element={<SyllabusMath2 />} />

          

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
          <Route path="/semester4/modern-physics/syllabus" element={<div>Modern Physics Syllabus</div>} />
          <Route path="/semester4/modern-physics/notes" element={<div>Modern Physics Notes</div>} />
          <Route path="/semester4/modern-physics/pyqs" element={<div>Modern Physics PYQs</div>} />
          <Route path="/semester4/modern-physics/pyq-solutions" element={<div>Modern Physics PYQ Solutions</div>} />
          <Route path="/semester4/modern-physics/lab" element={<div>Modern Physics Lab Content</div>} />

          <Route path="/semester4/solid-state-physics" element={<SolidStatePhysics />} />
          <Route path="/semester4/solid-state-physics/syllabus" element={<div>Solid State Physics Syllabus</div>} />
          <Route path="/semester4/solid-state-physics/notes" element={<div>Solid State Physics Notes</div>} />
          <Route path="/semester4/solid-state-physics/pyqs" element={<div>Solid State Physics PYQs</div>} />
          <Route path="/semester4/solid-state-physics/pyq-solutions" element={<div>Solid State Physics PYQ Solutions</div>} />
          <Route path="/semester4/solid-state-physics/lab" element={<div>Solid State Physics Lab Content</div>} />

 
          <Route path="/semester4/analog-electronics" element={<AnalogElectronics />} />
          <Route path="/semester4/analog-electronics/syllabus" element={<div>Analog Electronics Syllabus</div>} />
          <Route path="/semester4/analog-electronics/notes" element={<div>Analog Electronics Notes</div>} />
          <Route path="/semester4/analog-electronics/pyqs" element={<div>Analog Electronics PYQs</div>} />
          <Route path="/semester4/analog-electronics/pyq-solutions" element={<div>Analog Electronics PYQ Solutions</div>} />
          <Route path="/semester4/analog-electronics/lab" element={<div>Analog Electronics Lab Content</div>} />

          
          

          {/* Semester 5 */}
          <Route path="/semester5/electromagnetic-theory" element={<ElectromagneticTheory />} />
          <Route path="/semester5/electromagnetic-theory/syllabus" element={<div>Electromagnetic Theory Syllabus</div>} />
          <Route path="/semester5/electromagnetic-theory/notes" element={<div>Electromagnetic Theory Notes</div>} />
          <Route path="/semester5/electromagnetic-theory/pyqs" element={<div>Electromagnetic Theory PYQs</div>} />
          <Route path="/semester5/electromagnetic-theory/pyq-solutions" element={<div>Electromagnetic Theory PYQ Solutions</div>} />
          <Route path="/semester5/electromagnetic-theory/lab" element={<div>Electromagnetic Theory Lab Content</div>} />

        <Route path="/semester5/quantum-mechanics-1" element={<QuantumMechanics1 />} />
        <Route path="/semester5/quantum-mechanics-1/syllabus" element={<div>Quantum Mechanics 1 Syllabus</div>} />
        <Route path="/semester5/quantum-mechanics-1/notes" element={<div>Quantum Mechanics 1 Notes</div>} />
        <Route path="/semester5/quantum-mechanics-1/pyqs" element={<div>Quantum Mechanics 1 PYQs</div>} />
        <Route path="/semester5/quantum-mechanics-1/pyq-solutions" element={<div>Quantum Mechanics 1 PYQ Solutions</div>} />
        <Route path="/semester5/quantum-mechanics-1/lab" element={<div>Quantum Mechanics 1 Lab Content</div>} />

        <Route path="/semester5/digital-electronics" element={<DigitalElectronics />} />
        <Route path="/semester5/digital-electronics/syllabus" element={<div>Digital Electronics Syllabus</div>} />
        <Route path="/semester5/digital-electronics/notes" element={<div>Digital Electronics Notes</div>} />
        <Route path="/semester5/digital-electronics/pyqs" element={<div>Digital Electronics PYQs</div>} />
        <Route path="/semester5/digital-electronics/pyq-solutions" element={<div>Digital Electronics PYQ Solutions</div>} />
        <Route path="/semester5/digital-electronics/lab" element={<div>Digital Electronics Lab Content</div>} />

          
          

          {/* Semester 6 */}
          <Route path="/semester6/statistical-mechanics" element={<StatisticalMechanics />} />
          <Route path="/semester6/statistical-mechanics/syllabus" element={<div>Statistical Mechanics Syllabus</div>} />
          <Route path="/semester6/statistical-mechanics/notes" element={<div>Statistical Mechanics Notes</div>} />
          <Route path="/semester6/statistical-mechanics/pyqs" element={<div>Statistical Mechanics PYQs</div>} />
          <Route path="/semester6/statistical-mechanics/pyq-solutions" element={<div>Statistical Mechanics PYQ Solutions</div>} />
          <Route path="/semester6/statistical-mechanics/lab" element={<div>Statistical Mechanics Lab Content</div>} />

          <Route path="/semester6/atomic-molecular-nuclear-physics" element={<AtomicMolecularNuclearPhysics />} />
          <Route path="/semester6/atomic-molecular-nuclear-physics/syllabus" element={<div>Atomic Molecular Nuclear Physics Syllabus</div>} />
          <Route path="/semester6/atomic-molecular-nuclear-physics/notes" element={<div>Atomic Molecular Nuclear Physics Notes</div>} />
          <Route path="/semester6/atomic-molecular-nuclear-physics/pyqs" element={<div>Atomic Molecular Nuclear Physics PYQs</div>} />
          <Route path="/semester6/atomic-molecular-nuclear-physics/pyq-solutions" element={<div>Atomic Molecular Nuclear Physics PYQ Solutions</div>} />
          <Route path="/semester6/atomic-molecular-nuclear-physics/lab" element={<div>Atomic Molecular Nuclear Physics Lab Content</div>} />

          <Route path="/semester6/statistical-analysis" element={<StatisticalAnalysis />} />
          <Route path="/semester6/statistical-analysis/syllabus" element={<div>Statistical Analysis Syllabus</div>} />
          <Route path="/semester6/statistical-analysis/notes" element={<div>Statistical Analysis Notes</div>} />
          <Route path="/semester6/statistical-analysis/pyqs" element={<div>Statistical Analysis PYQs</div>} />
          <Route path="/semester6/statistical-analysis/pyq-solutions" element={<div>Statistical Analysis PYQ Solutions</div>} />
          <Route path="/semester6/statistical-analysis/lab" element={<div>Statistical Analysis Lab Content</div>} />
        </Routes>
         <Footer dark={dark}/>
      </div>
    </Router>
   
  );
}

export default App;
