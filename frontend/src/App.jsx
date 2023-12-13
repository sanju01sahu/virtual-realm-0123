import React from "react"; // import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Allroutes from "./Routes/Allroutes";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Allroutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
