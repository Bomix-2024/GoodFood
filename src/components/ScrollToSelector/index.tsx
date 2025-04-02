'use client'

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronUp } from "lucide-react";
import { scrollToSelector } from "../../utils/scroll";

export default function ScrollToSelector() {
    const searchParams = useSearchParams();
    const [showScrollTop, setShowScrollTop] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const scrollTo = searchParams.get('scrollTo');

        if (scrollTo) {
            scrollToSelector(`#${scrollTo}`);
        }
    }, [searchParams]);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 600);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {showScrollTop && (
                <button 
                    onClick={scrollToTop}
                    className="fixed bottom-20 right-6 bg-accent text-white p-3 rounded-xl shadow-lg hover:bg-opacity-80 transition-opacity"
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={28} />
                </button>
            )}
        </>
    );
}