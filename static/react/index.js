import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import TestPage from './TestPage';
import TestPage1 from './TestPage1'

const container = document.getElementById("app");
const root = createRoot(container);
//Nested routes are displayed with outlet tag
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="testpage1" element={<TestPage1 />} />
            </Route>
            <Route path="testpage" element={<TestPage />} />
        </Routes>
    </BrowserRouter>
);