import "./assets/scss/main.scss";
import BrandLogo from "./components/Utility/BrandLogo";
import TempPanel from "./components/TempPanel";
import DetailsPanel from "./components/DeatilsPanel/DetailsPanel";
const App = () => {
  return (
    <div className="App">
      <main>
        <TempPanel />
        <DetailsPanel />
      </main>
    </div>
  );
};

export default App;
