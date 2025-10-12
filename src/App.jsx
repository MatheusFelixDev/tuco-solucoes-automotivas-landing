import LandingPage from "./LandingPage";
import Header from "./components/header";
import Hero from "./components/hero";
import Servicos from "./components/servicos";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Servicos />
      <LandingPage />
    </div>
  );
}

export default App;
