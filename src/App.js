import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// Components
import Homepage from "./components/Homepage"
import Menu from "./components/Menu"
// Pages
import Projects from "./pages/Projects"
import Error from "./pages/Error"
import Contacts from "./pages/Contacts"

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/error" element={<Error />} />

      </Routes>
    </Router>
  )
}

export default App
