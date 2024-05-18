import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Image1 from './components/Image1'
import Image2 from './components/Image2'
import Image3 from './components/Image3'
import Image4 from './components/Image4'
import Image5 from './components/Image5'
import Image6 from './components/Image6'
import Image7 from './components/Image7'
import Image8 from './components/Image8'
import Image9 from './components/Image9'
import Image10 from './components/Image10'
import Image11 from './components/Image11'
import Image12 from './components/Image12'
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Image1" element={<Image1 />} />
        <Route path="/Image2" element={<Image2 />} />
        <Route path="/Image3" element={<Image3 />} />
        <Route path="/Image4" element={<Image4 />} />
        <Route path="/Image5" element={<Image5 />} />
        <Route path="/Image6" element={<Image6 />} />
        <Route path="/Image7" element={<Image7 />} />
        <Route path="/Image8" element={<Image8 />} />
        <Route path="/Image9" element={<Image9 />} />
        <Route path="/Image10" element={<Image10 />} />
        <Route path="/Image11" element={<Image11/>} />
        <Route path="/Image12" element={<Image12/>} />
      </Routes>
      <Navigation/>
    </Router>
  )
}

export default App
