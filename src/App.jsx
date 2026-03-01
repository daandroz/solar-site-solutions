import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Especialidades, Proceso, Quote, Contacto, Footer } from './components/Sections'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Especialidades />
      <Proceso />
      <Quote />
      <Contacto />
      <Footer />
    </>
  )
}
