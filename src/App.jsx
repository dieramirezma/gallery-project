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

  const images = [
    { path: '/Image1', component: Image1 },
    { path: '/Image2', component: Image2 },
    { path: '/Image3', component: Image3 },
    { path: '/Image4', component: Image4 },
    { path: '/Image5', component: Image5 },
    { path: '/Image6', component: Image6 },
    { path: '/Image7', component: Image7 },
    { path: '/Image8', component: Image8 },
    { path: '/Image9', component: Image9 },
    { path: '/Image10', component: Image10 },
    { path: '/Image11', component: Image11 },
    { path: '/Image12', component: Image12 },
  ]

  return (
    <div className="flex flex-col justify-center items-center bg-gray-300">
      <h1 className="my-6 text-3xl font-bold">
        Photo Gallery
      </h1>
      <Router>
        <Routes>
          {images.map((image, index) => (
            <Route key={index} path={image.path} element={<image.component customStyle={'mb-4 w-2/5 rounded-xl'} />} />
          ))}
        </Routes>
        <Navigation />
      </Router>
    </div>
  )
}

export default App
