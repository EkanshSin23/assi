import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import Event from './pages/event/Event';
import Preview from './pages/preview/Preview';

import { createContext, useState } from "react";
import { context } from './context/context';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [eventname, seteventname] = useState([{}])
  console.log(eventname)

  return (
    <>
      <context.Provider value={{ eventname, seteventname }}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/preview" element={<Preview array={eventname} />} />
        </Routes>

      </context.Provider>

    </>
  );
}

export default App;
