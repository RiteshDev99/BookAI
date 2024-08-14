import React, { useEffect, useRef, useState } from 'react';

const NavBar: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (navbarRef.current) {
            setIsSticky(window.scrollY > navbarRef.current.offsetTop);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={navbarRef}
            className={`navBar w-full bg-slate-800 flex items-center transition-all duration-1000 ease-in-out ${isSticky ? 'fixed top-0 z-50 shadow-lg' : ''
                }`}
        >
            <div className="elements w-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
                <ul className="text-sm sm:text-base md:text-lg text-slate-200 cursor-pointer flex flex-col sm:flex-row gap-2 sm:gap-6 md:gap-8 lg:gap-10 text-center">
                    <li className="hover:text-cyan-400">Overview</li>
                    <li className="hover:text-cyan-400">Authentication</li>
                    <li className="hover:text-cyan-400">Endpoints</li>
                    <li className="hover:text-cyan-400">Tutorial</li>
                    <li className="hover:text-cyan-400">Code Examples</li>
                    <li className="hover:text-cyan-400">PRICING</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
