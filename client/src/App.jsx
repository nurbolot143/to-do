import "./App.scss";
import "./components/Nav";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Day from "./pages/Day";
// import Tuesday from "./pages/Tuesday";
// import Wednesday from "./pages/Wednesday";
// import Thursday from "./pages/Thursday";
// import Friday from "./pages/Friday";
// import { useState } from "react";

const days = [
  { day: "monday", number: 0 },
  { day: "tuesday", number: 0 },
  { day: "wednesday", number: 0 },
  { day: "thursday", number: 0 },
  { day: "friday", number: 0 },
];

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <h1 className="main__title">Задачи</h1>

        <Routes>
          {days.map((el, idx) => {
            return <Route key={idx} path={el.day} element={<Day />} />;
          })}
          {/* <Route path="tuesday" element={<Tuesday />} />
          <Route path="wednesday" element={<Wednesday />} />
          <Route path="thursday" element={<Thursday />} />
          <Route path="friday" element={<Friday />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
