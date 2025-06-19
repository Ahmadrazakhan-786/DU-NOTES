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
import LabEM from "./pages/Semester2/ElectricityMagnetism/LabEM";
import NotesEM from "./pages/Semester2/ElectricityMagnetism/NotesEM";
import PYQSEM from "./pages/Semester2/ElectricityMagnetism/PYQSEM";
import PYQSolutionsEM from "./pages/Semester2/ElectricityMagnetism/PYQSolutionsEM";
import SyllabusEM from "./pages/Semester2/ElectricityMagnetism/SyllabusEM";

import ElectricalCircuitAnalysis from "./pages/Semester2/ElectricalCircuitAnalysis/ElectricalCircuitAnalysis";
import LabECA from "./pages/Semester2/ElectricalCircuitAnalysis/LabECA";
import NotesECA from "./pages/Semester2/ElectricalCircuitAnalysis/NotesECA";
import PYQSECA from "./pages/Semester2/ElectricalCircuitAnalysis/PYQSECA";
import PYQSolutionsECA from "./pages/Semester2/ElectricalCircuitAnalysis/PYQSolutionsECA";
import SyllabusECA from "./pages/Semester2/ElectricalCircuitAnalysis/SyllabusECA";


// Semester 3
import MathPhysics3 from "./pages/Semester3/MathPhysics3/MathPhysics3";
import LabMath3 from "./pages/Semester3/MathPhysics3/LabMath3";
import NotesMath3 from "./pages/Semester3/MathPhysics3/NotesMath3";
import PYQSMath3 from "./pages/Semester3/MathPhysics3/PYQSMath3";
import PYQSolutionsMath3 from "./pages/Semester3/MathPhysics3/PYQSolutionsMath3";
import SyllabusMath3 from "./pages/Semester3/MathPhysics3/SyllabusMath3";

import ThermalPhysics from "./pages/Semester3/ThermalPhysics/ThermalPhysics";
import LabThermal from "./pages/Semester3/ThermalPhysics/LabThermal";
import NotesThermal from "./pages/Semester3/ThermalPhysics/NotesThermal";
import PYQSThermal from "./pages/Semester3/ThermalPhysics/PYQSThermal";
import PYQSolutionsThermal from "./pages/Semester3/ThermalPhysics/PYQSolutionsThermal";
import SyllabusThermal from "./pages/Semester3/ThermalPhysics/SyllabusThermal";

import LightAndMatter from "./pages/Semester3/LightAndMatter/LightAndMatter";
import LabLM from "./pages/Semester3/LightAndMatter/LabLM";
import NotesLM from "./pages/Semester3/LightAndMatter/NotesLM";
import PYQSLM from "./pages/Semester3/LightAndMatter/PYQSLM";
import PYQSolutionsLM from "./pages/Semester3/LightAndMatter/PYQSolutionsLM";
import SyllabusLM from "./pages/Semester3/LightAndMatter/SyllabusLM";


// Semester 4
import ModernPhysics from "./pages/Semester4/ModernPhysics/ModernPhysics";
import LabModern from "./pages/Semester4/ModernPhysics/LabModern";
import NotesModern from "./pages/Semester4/ModernPhysics/NotesModern";
import PYQSModern from "./pages/Semester4/ModernPhysics/PYQSModern";
import PYQSolutionsModern from "./pages/Semester4/ModernPhysics/PYQSolutionsModern";
import SyllabusModern from "./pages/Semester4/ModernPhysics/SyllabusModern";

import SolidStatePhysics from "./pages/Semester4/SolidStatePhysics/SolidStatePhysics";
import LabSolid from "./pages/Semester4/SolidStatePhysics/LabSolid";
import NotesSolid from "./pages/Semester4/SolidStatePhysics/NotesSolid";
import PYQSSolid from "./pages/Semester4/SolidStatePhysics/PYQSSolid";
import PYQSolutionsSolid from "./pages/Semester4/SolidStatePhysics/PYQSolutionsSolid";
import SyllabusSolid from "./pages/Semester4/SolidStatePhysics/SyllabusSolid";


import AnalogElectronics from "./pages/Semester4/AnalogElectronics/AnalogElectronics";
import LabAnalog from "./pages/Semester4/AnalogElectronics/LabAnalog";
import NotesAnalog from "./pages/Semester4/AnalogElectronics/NotesAnalog";
import PYQSAnalog from "./pages/Semester4/AnalogElectronics/PYQSAnalog";
import PYQSolutionsAnalog from "./pages/Semester4/AnalogElectronics/PYQSolutionsAnalog";
import SyllabusAnalog from "./pages/Semester4/AnalogElectronics/SyllabusAnalog";


// Semester 5
import ElectromagneticTheory from "./pages/Semester5/ElectromagneticTheory/ElectromagneticTheory";
import LabEMT from "./pages/Semester5/ElectromagneticTheory/LabEMT";
import NotesEMT from "./pages/Semester5/ElectromagneticTheory/NotesEMT";
import PYQSEMT from "./pages/Semester5/ElectromagneticTheory/PYQSEMT";
import PYQSolutionsEMT from "./pages/Semester5/ElectromagneticTheory/PYQSolutionsEMT";
import SyllabusEMT from "./pages/Semester5/ElectromagneticTheory/SyllabusEMT";

import QuantumMechanics1 from "./pages/Semester5/QuantumMechanics1/QuantumMechanics1";
import LabQM1 from "./pages/Semester5/QuantumMechanics1/LabQM1";
import NotesQM1 from "./pages/Semester5/QuantumMechanics1/NotesQM1";
import PYQSQM1 from "./pages/Semester5/QuantumMechanics1/PYQSQM1";
import PYQSolutionsQM1 from "./pages/Semester5/QuantumMechanics1/PYQSolutionsQM1";
import SyllabusQM1 from "./pages/Semester5/QuantumMechanics1/SyllabusQM1";

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
<Route path="/semester2/electricity-magnetism/lab" element={<LabEM />} />
<Route path="/semester2/electricity-magnetism/notes" element={<NotesEM />} />
<Route path="/semester2/electricity-magnetism/pyqs" element={<PYQSEM />} />
<Route path="/semester2/electricity-magnetism/pyq-solutions" element={<PYQSolutionsEM />} />
<Route path="/semester2/electricity-magnetism/syllabus" element={<SyllabusEM />} />


        <Route path="/semester2/electrical-circuit-analysis" element={<ElectricalCircuitAnalysis />} />
<Route path="/semester2/electrical-circuit-analysis/lab" element={<LabECA />} />
<Route path="/semester2/electrical-circuit-analysis/notes" element={<NotesECA />} />
<Route path="/semester2/electrical-circuit-analysis/pyqs" element={<PYQSECA />} />
<Route path="/semester2/electrical-circuit-analysis/pyq-solutions" element={<PYQSolutionsECA />} />
<Route path="/semester2/electrical-circuit-analysis/syllabus" element={<SyllabusECA />} />


          {/* Semester 3 */}
         <Route path="/semester3/math-physics-3" element={<MathPhysics3 />} />
<Route path="/semester3/math-physics-3/lab" element={<LabMath3 />} />
<Route path="/semester3/math-physics-3/notes" element={<NotesMath3 />} />
<Route path="/semester3/math-physics-3/pyqs" element={<PYQSMath3 />} />
<Route path="/semester3/math-physics-3/pyq-solutions" element={<PYQSolutionsMath3 />} />
<Route path="/semester3/math-physics-3/syllabus" element={<SyllabusMath3 />} />


          <Route path="/semester3/thermal-physics" element={<ThermalPhysics />} />
<Route path="/semester3/thermal-physics/lab" element={<LabThermal />} />
<Route path="/semester3/thermal-physics/notes" element={<NotesThermal />} />
<Route path="/semester3/thermal-physics/pyqs" element={<PYQSThermal />} />
<Route path="/semester3/thermal-physics/pyq-solutions" element={<PYQSolutionsThermal />} />
<Route path="/semester3/thermal-physics/syllabus" element={<SyllabusThermal />} />

         

          <Route path="/semester3/light-and-matter" element={<LightAndMatter />} />
<Route path="/semester3/light-and-matter/lab" element={<LabLM />} />
<Route path="/semester3/light-and-matter/notes" element={<NotesLM />} />
<Route path="/semester3/light-and-matter/pyqs" element={<PYQSLM />} />
<Route path="/semester3/light-and-matter/pyq-solutions" element={<PYQSolutionsLM />} />
<Route path="/semester3/light-and-matter/syllabus" element={<SyllabusLM />} />

          

          

          {/* Semester 4 */}
          <Route path="/semester4/modern-physics" element={<ModernPhysics />} />
<Route path="/semester4/modern-physics/lab" element={<LabModern />} />
<Route path="/semester4/modern-physics/notes" element={<NotesModern />} />
<Route path="/semester4/modern-physics/pyqs" element={<PYQSModern />} />
<Route path="/semester4/modern-physics/pyq-solutions" element={<PYQSolutionsModern />} />
<Route path="/semester4/modern-physics/syllabus" element={<SyllabusModern />} />


          <Route path="/semester4/solid-state-physics" element={<SolidStatePhysics />} />
<Route path="/semester4/solid-state-physics/lab" element={<LabSolid />} />
<Route path="/semester4/solid-state-physics/notes" element={<NotesSolid />} />
<Route path="/semester4/solid-state-physics/pyqs" element={<PYQSSolid />} />
<Route path="/semester4/solid-state-physics/pyq-solutions" element={<PYQSolutionsSolid />} />
<Route path="/semester4/solid-state-physics/syllabus" element={<SyllabusSolid />} />

     

 
          <Route path="/semester4/analog-electronics" element={<AnalogElectronics />} />
<Route path="/semester4/analog-electronics/lab" element={<LabAnalog />} />
<Route path="/semester4/analog-electronics/notes" element={<NotesAnalog />} />
<Route path="/semester4/analog-electronics/pyqs" element={<PYQSAnalog />} />
<Route path="/semester4/analog-electronics/pyq-solutions" element={<PYQSolutionsAnalog />} />
<Route path="/semester4/analog-electronics/syllabus" element={<SyllabusAnalog />} />

        

          
          

          {/* Semester 5 */}
          <Route path="/semester5/electromagnetic-theory" element={<ElectromagneticTheory />} />
<Route path="/semester5/electromagnetic-theory/lab" element={<LabEMT />} />
<Route path="/semester5/electromagnetic-theory/notes" element={<NotesEMT />} />
<Route path="/semester5/electromagnetic-theory/pyqs" element={<PYQSEMT />} />
<Route path="/semester5/electromagnetic-theory/pyq-solutions" element={<PYQSolutionsEMT />} />
<Route path="/semester5/electromagnetic-theory/syllabus" element={<SyllabusEMT />} />

        

        <Route path="/semester5/quantum-mechanics-1" element={<QuantumMechanics1 />} />
        <Route path="/semester5/quantum-mechanics-1" element={<QuantumMechanics1 />} />
<Route path="/semester5/quantum-mechanics-1/lab" element={<LabQM1 />} />
<Route path="/semester5/quantum-mechanics-1/notes" element={<NotesQM1 />} />
<Route path="/semester5/quantum-mechanics-1/pyqs" element={<PYQSQM1 />} />
<Route path="/semester5/quantum-mechanics-1/pyq-solutions" element={<PYQSolutionsQM1 />} />
<Route path="/semester5/quantum-mechanics-1/syllabus" element={<SyllabusQM1 />} />

        

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
