import React from "react";
import Header from "./components/Header";
import Biography from "./components/Biography";
import Proposals from "./components/Proposals";
import Agenda from "./components/Agenda";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Biography />
        <Proposals />
        <Agenda />
      </main>
      <Footer />
    </div>
  );
}

export default App;
