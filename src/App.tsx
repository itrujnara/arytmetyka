import { Route, Routes } from "react-router-dom"
import "./App.css"
import Training from "./pages/Training"
import Challenge from "./pages/Challenge"
import Navigation from "./components/navigation"
import InfoPanel from "./components/infoPanel"
import Race from "./pages/Race"

function App() {
  return (
    <div className="w-screen max-w-[500px] h-full m-0">
      <div className="mx-2">
        <Navigation className="my-2" />
        <Routes>
          <Route path="/" Component={Training} />
          <Route path="/challenge" Component={Challenge} />
          <Route path="/race" Component={Race} />
          <Route path="/about" Component={InfoPanel} />
        </Routes>
      </div>
    </div>
  )
}

export default App
