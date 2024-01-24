// Components
import About from "./components/About.jsx";
import History from "./components/History.jsx";
import Flag from "./components/Flag.jsx";
import Projects from "./components/Projects.jsx" 

import { MyProvider } from "./Context.jsx";

import "./App.css";

function App() {
  return (
    <MyProvider>
      <Flag />
      <div className="container">
        <About />
        <History />
      </div>
        <Projects />
    </MyProvider>
  );
}

export default App;
