import React from 'react';
import Navbar from '../navbar/navbar.jsx';
import UpcomingEvents from './upcomingEvents'; 
import EventDetails from './eventDetails';
import PastEvents from './pastEvents';
import './styles-events.css';
const Events = () => {
  return (
    <div>
      <Navbar />
      <UpcomingEvents/>
      <EventDetails />
      <PastEvents />
    </div>
  );
};

export default Events;
