import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

import Home from '../pages/Home'
import Skills from '../pages/Skills'
import ProjChecklist from '../pages/ProjChecklist'
import ProjPorfolio from '../pages/ProjPortfolio'
import ProjEcommerce from '../pages/ProjEcommerce'
import ProjForm from '../pages/ProjForm'
import ProjQuotes from '../pages/ProjQuotes'
import ProjGame from '../pages/ProjGame'

import Contact from '../pages/Contact'
import Error from '../pages/Error'

import { Container, CenterArea } from "./styles";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Container>
                <CenterArea>
                    <Sidebar />
                    <Routes>
                        <Route path='/portfolio' element={<Home />} />
                        <Route path='/skills' element={<Skills />} />
                        <Route path='/projchecklist' element={<ProjChecklist />} />
                        <Route path='/projportfolio' element={<ProjPorfolio />} />
                        <Route path='/projecommerce' element={<ProjEcommerce />} />
                        <Route path='/projform' element={<ProjForm />} />
                        <Route path='/projquotes' element={<ProjQuotes />} />
                        <Route path='/projgame' element={<ProjGame />} />

                        <Route path='/contact' element={<Contact />} />
                        <Route path='/*' element={<Error />} />
                    </Routes>
                </CenterArea>
                <Footer />
            </Container>
        </BrowserRouter>
    )
}