import "./App.css";
import Routers from "./routers/Routers";
import { Header, Footer } from "./layouts";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="relative">
        <Header />
        <Routers />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
