import React from 'react';
import Navbar from '../navbar/navbar.jsx';
import ProgramsHighlights from './programs-highlights.jsx';
import ProgramsList from './programs-lists.jsx';
import Scholarships from './programs-pages/Scholarships';
import Training from './programs-pages/Training';
import Hackathons from './programs-pages/Hackathons';
import DigitalInclusion from './programs-pages/DigitalInclusion';
import './styles-programs.css';
import '../navbar/style-navbar.css';

function Programs() {
  return (
    <div>
      <Navbar />
      <ProgramsHighlights />
      <ProgramsList/>
    </div>
  );
}

export default Programs;
