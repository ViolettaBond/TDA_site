import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Homepage from './Page/Homepage/Homepage';
import News from './Page/News/News';
import Footer from './Shared/Footer/Footer';
import Catalog from './Page/Catalog/Catalog';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" index element={<Homepage />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/catalog" element={<Catalog />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
