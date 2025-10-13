import LandingPage from "./LandingPage";
import Header from "./components/header";
import Hero from "./components/hero";
import Servicos from "./components/servicos";
import Diferenciais from "./components/diferenciais";
import Depoimentos from "./components/depoimentos";
import Localizacao from "./components/localizacao";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Servicos />
      <Diferenciais />
      <Depoimentos />
      <Localizacao />
      <LandingPage />
    </div>
  );
}

export default App;
