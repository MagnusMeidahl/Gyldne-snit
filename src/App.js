import './App.css';
import { Route, Routes } from "react-router-dom";
import Page1 from "./Components/page1"
import Page2 from "./Components/page2"
import Navigation from "./Components/Navigation";
function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <br />
        <Routes>
          <Route exact path="page1" element={<Page1 />} />
          <Route exact path="page2" element={<Page2 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;


// https://dev.to/salehmubashar/react-router-dom-36a2
