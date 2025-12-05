import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FloatingContactButton from './components/FloatingContactButton';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <ScrollProgressBar />
            <AnimatePresence>
                {loading && <Loader />}
            </AnimatePresence>

            {!loading && (
                <main>
                    <Navbar />
                    <Hero />
                    <About />
                    <PracticeAreas />
                    <Contact />
                    <ContactForm />
                    <Testimonials />
                    <FAQ />
                    <Footer />
                    <FloatingContactButton />
                </main>
            )}
        </>
    );
}

export default App;
