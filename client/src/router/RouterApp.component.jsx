import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/layout/Header/Header.component';
import Footer from '../components/layout/Footer/Footer.component';
import Home from '../components/pages/Home/Home.component';
import Page404 from '../components/pages/Page404/Page404.component';

function RouterApp() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='*' element={<Page404/>}/>
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default RouterApp;