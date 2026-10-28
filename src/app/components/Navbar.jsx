"use client"
import React, { useState } from 'react';
import Link from 'next/link';

// User Icon component
const UserIcon = () => (
    <svg className="w-4 h-4 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const leftNavItems = [
        { name: 'Home', href: '/' },
        { name: 'Destinations', href: '/destinations' },
        { name: 'My Bookings', href: '/add-destination' },
        { name: 'Admin', href: '/admin' },
    ];

    const rightNavItems = [
        { name: 'Profile', href: '/profile', icon: <UserIcon /> },
        { name: 'Login', href: '/login' },
        { name: 'Sign Up', href: '/sign-up' },
    ];

    return (
        <nav className="w-full bg-white border-b border-slate-100 px-6 sm:px-12 py-5 shadow-xs font-sans">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* LEFT: Navigation Links */}
                <div className="hidden md:flex items-center space-x-8 text-[15px] text-slate-900 font-normal">
                    {leftNavItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveTab(item.name)}
                            className={
                                activeTab === item.name
                                    ? "text-[#00a2c7] font-medium underline underline-offset-[8px] decoration-2 decoration-[#00a2c7]"
                                    : "hover:text-[#00a2c7] transition-colors"
                            }
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* CENTER: Brand Logo */}
                <div className="flex items-center justify-center">
                    <Link
                        href="/"
                        className="text-2xl sm:text-3xl font-extrabold text-[#00a2c7] tracking-tight hover:opacity-95 transition"
                    >
                        Wanderlast
                    </Link>
                </div>

                {/* RIGHT: User Actions */}
                <div className="hidden md:flex items-center space-x-8 text-[15px] text-slate-900 font-normal">
                    {rightNavItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveTab(item.name)}
                            className="flex items-center gap-1.5 hover:text-[#00a2c7] transition-colors"
                        >
                            {item.icon && <span>{item.icon}</span>}
                            <span className={activeTab === item.name ? "text-[#00a2c7] font-medium" : ""}>
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Hamburger Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

            </div>

            {/* Mobile Menu Dropdown Drawer */}
            {isMobileMenuOpen && (
                <div className="md:hidden pt-4 pb-3 space-y-3 border-t border-slate-100 mt-4 text-[15px]">
                    <div className="space-y-1">
                        {leftNavItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => {
                                    setActiveTab(item.name);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`block w - full text - left px - 3 py - 2 rounded - lg transition ${
    activeTab === item.name
    ? 'text-[#00a2c7] font-semibold bg-cyan-50/60'
    : 'text-slate-800 hover:bg-slate-50'
} `}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="pt-2 border-t border-slate-100 space-y-1">
                        {rightNavItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => {
                                    setActiveTab(item.name);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg text-slate-800 hover:bg-slate-50 transition"
                            >
                                {item.icon && <span>{item.icon}</span>}
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;