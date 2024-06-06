import React, { useState, useEffect, useRef } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => {
            if (!headerRef.current) return;
            const scrolled = window.scrollY > headerRef.current.offsetHeight;
            setIsScrolled(scrolled);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div ref={headerRef} className={`h-20 flex text-white justify-between border border-solid border-red-500 fixed w-full ${isScrolled ? 'bg-rgba(0, 0, 255, 0.5)' : 'bg-black'}`}>
            <div>버튼 아이콘</div>
            <div className='flex'>
                <h1 className="">가입하기</h1>
                <h1 className="">로그인하기</h1>
            </div>
        </div>
    )
}