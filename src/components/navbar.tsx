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
        <>
            <div
                ref={navbarRef}
                className={` navBar h-[9vh] w-[100%] bg-slate-800 items-center flex transition-all duration-1000 ease-in-out ${isSticky ? 'fixed top-0  z-50 shadow-lg' : ''
                    }`}
            >


                <div className="elements h-[5vh] w-[100%] items-center flex justify-center">
                    <ul className="tracking-[0.1vw] text-lg text-slate-200 cursor-pointer flex gap-[5vh]">

                        <li className='hover:text-cyan-400'>Overview</li>
                        <li className='hover:text-cyan-400'>Authentication</li>
                        <li className='hover:text-cyan-400'>Endpoints</li>
                        <li className='hover:text-cyan-400'>Tutorial</li>
                        <li className='hover:text-cyan-400'>Code Examples</li>
                        <li className='hover:text-cyan-400'>PRICING</li>


                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBar;
