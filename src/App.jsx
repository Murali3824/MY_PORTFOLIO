import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
// import Experience from './pages/Experience'
import Hero from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Education from './pages/Education'

function App() {

  return (
    <div className="min-h-screen overflow-hidden bg-gray-50 dark:bg-black">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education/>
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
