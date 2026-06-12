"use client";

import { JSX, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const navigationItems = [
        { label: "Home", href: "#" },
        { label: "Portfólio", href: "#portifolio" },
        { label: "Contato", href: "#contato" },
    ];

    return (
        <header className="sticky top-0 z-40 w-full mb-4 pt-2">
            {/* Barra Principal de Vidro */}
            <div className="flex items-center justify-between w-full px-6 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300">
                
                {/* Logo Retrabalhada */}
                <Link href="#" className="text-lg font-black tracking-wider text-white hover:text-purple-400 transition-colors">
                    ANGELO<span className="text-purple-500">REIS</span>
                </Link>

                {/* Navegação Desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-semibold text-gray-300 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-500 after:transition-all hover:after:w-full"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Botão do Menu Mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-gray-400 hover:text-white md:hidden transition-colors focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Menu Dropdown Mobile com Animação */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-[#0a0a0a]/95 border border-white/10 backdrop-blur-xl rounded-2xl md:hidden animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl z-50">
                    <nav className="flex flex-col gap-2">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-gray-300 hover:text-purple-300 py-3 px-4 rounded-xl hover:bg-white/5 transition-all"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}