import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Homepage from './Page/Homepage/Homepage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" index element={<Homepage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
