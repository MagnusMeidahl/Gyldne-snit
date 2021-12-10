import './App.css';
import { Route, Routes } from "react-router-dom";
import Gyldnespiral from "./Components/gyldnespiral"
import Gyldnesnit from "./Components/gyldnesnit"
import Intetdesign from "./Components/intetdesign"
import Navigation from "./Components/Navigation";
function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <br />
        <Routes>
          <Route exact path="gyldnespiral" element={<Gyldnespiral />} />
          <Route exact path="gyldnesnit" element={<Gyldnesnit />} />
          <Route exact path="intetdesign" element={<Intetdesign />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
