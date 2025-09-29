import { BrowserRouter,Routes, Route, Link } from "react-router-dom"
import Interviewee from "./pages/Interviewee"
import Interviewer from "./pages/Interviewer"


function App() {

  return (
    <BrowserRouter>
      <Link to="/">Interviewee</Link>
      <Link to="/dashboard">Interviewer</Link>

      <Routes>
        <Route path="/" element={<Interviewee/>}></Route>
        <Route path="/dashboard" element={<Interviewer/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
