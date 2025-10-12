import LandingPage from "./LandingPage";
import Header from "./components/header";
import Hero from "./components/hero";
import Servicos from "./components/servicos";
import Diferenciais from "./components/diferenciais";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Servicos />
      <Diferenciais />
      <LandingPage />
    </div>
  );
}

export default App;
