import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import "./styles/global.css"
import About from "./pages/About"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  )
}

export default App
