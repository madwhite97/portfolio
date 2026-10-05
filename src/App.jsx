import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function ScrollToHash() {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        if (pathname === "/work" || pathname === "/contact") {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });
            return;
        }

        if (!hash) return;

        const timer = setTimeout(() => {
            const element = document.getElementById(
                decodeURIComponent(hash.slice(1))
            );

            element?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 100);

        return () => clearTimeout(timer);
    }, [pathname, hash, key]);

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