import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Oferta } from './pages/Oferta'
import { Realizacje } from './pages/Realizacje'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Privacy } from './pages/Privacy'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/oferta" element={<Oferta />} />
        <Route path="/realizacje" element={<Realizacje />} />
        <Route path="/o-firmie" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/polityka-prywatnosci" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
