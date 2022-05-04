import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// Components
import Homepage from "./components/Homepage"
// Pages
import Projects from "./pages/Projects"
import Error from "./pages/Error"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/error" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
