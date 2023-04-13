import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from '../../pages/Home';
import { PresentationPage } from '../../pages/Presentation';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/presentation" element={<PresentationPage />} />
            </Routes>
        </BrowserRouter>
    );
}
