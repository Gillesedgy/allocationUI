// src/App.jsx
import NavBar from "./Components/Navigation/NavBar";
import ClientList from "./Components/Clients/ClientsList";
import Employees from "./Components/Employees/Employees";
import RateCard from "./Components/RateCard/RateCard";
import Contracts from "./Components/Contracts/Contracts";
import Contact from "./Components/Contact/Contact";
import Banner from "./Components/Banner/Banner";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="home" className="p-8">
        <h1 className="text-4xl font-extrabold text-center">
          Welcome to People Shores Allocation System
          <Banner />
        </h1>
      </section>
      <section id="about" className="p-8 bg-gray-100">
        <p className="text-lg text-center">
          This system helps manage clients, contracts, employees, and rate cards
          efficiently.
        </p>
      </section>
      <section id="clients">
        <ClientList />
      </section>
      <section id="employees">
        <Employees />
      </section>
      <section id="rating">
        <RateCard />
      </section>
      <section id="contracts">
        <Contracts />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import NavBar from "./Components/Navigation/NavBar/";
// import Main from "./Components/Home/Main";
// import About from "./Components/About/About";
// import ClientList from "./Components/Clients/ClientList";
// import Contact from "./Components/Contact/Contact";
// import Contracts from "./Components/Contracts/Contracts";
// import Employees from "./Components/Employees/Employees";
// import RateCard from "./Components/RateCard/RateCard";

// function App() {
//   return (
//     <div className=" App">
//       <Router>
//         <div className="sticky top-0 z-50">
//           {" "}
//           <NavBar />
//         </div>
//         <section id="home">
//           <Main />
//         </section>
//         <section id="employees">
//           <Employees />
//         </section>
//         <section id="rating">
//           <RateCard />
//         </section>
//         <section id="clients">
//           <ClientList />
//         </section>
//         {/* <section id="projects">
//           <ProjectsPage />
//         </section> */}
//         <section id="contracts">
//           <Contracts />
//         </section>

//         {/* Contact AKA FOOTER */}
//         <section id="about">
//           <About />
//         </section>
//         <section id="contact">
//           <Contact />
//         </section>

//         {/* Single Page Navigation */}
//         <Routes>
//           <Route path="/clients" element={<ClientList />} />
//           {/* <Route path="/client/:id" element={<ClientDetail />} /> */}
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;