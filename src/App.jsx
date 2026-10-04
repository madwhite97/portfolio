import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const timer = setTimeout(() => {
            const element = document.querySelector(hash);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [hash]);

    return null;
}

function App() {
    return (
        <>
            <ScrollToHash />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;