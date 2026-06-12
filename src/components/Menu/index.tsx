"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu as MenuIcon, X } from 'lucide-react';

interface MenuItemProps {
    label: string;
    href: string;
    target?: string;
    rel?: string;
}

function MenuMobileItem({ label, href, target, rel }: MenuItemProps) {
    return (
        <li className="list-none">
            <Link 
                href={href} 
                target={target} 
                rel={rel}
                className="flex items-center justify-center w-32 h-32 my-2 text-base text-gray-100 bg-purple-800 rounded-md transition-all hover:font-semibold hover:text-purple-900 active:font-semibold active:text-purple-900"
            >
                {label}
            </Link>
        </li>
    );
}

function MenuItem({ label, href, target, rel }: MenuItemProps) {
    return (
        <li className="pr-3 list-none text-base text-gray-100 transition-colors hover:font-semibold hover:text-purple-900">
            <Link href={href} target={target} rel={rel}>
                {label}
            </Link>
        </li>
    );
}

export function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="flex items-center">
            {/* Botão Hambúrguer - Visível apenas no Mobile (até tamanho médio) */}
            <button 
                onClick={toggleMenu}
                className="flex items-center justify-center p-2 text-white bg-purple-300 rounded-md md:hidden"
                aria-label="Alternar menu"
            >
                {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>

            {/* Drawer Mobile (Painel Lateral) */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex md:hidden">
                    {/* Overlay escuro de fundo */}
                    <div 
                        className="fixed inset-0 transition-opacity bg-black/60" 
                        onClick={toggleMenu}
                    />
                    
                    {/* Conteúdo do Menu Lateral */}
                    <div className="relative z-50 flex flex-col w-full max-w-xs h-full text-white/90 bg-purple-700 shadow-xl animate-in slide-in-from-left">
                        <div className="flex items-center justify-between p-4 border-b border-purple-600">
                            <span className="font-medium">Menu de navegação</span>
                            <button 
                                onClick={toggleMenu}
                                className="p-2 text-white bg-purple-300 rounded-md"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        
                        {/* Grid de Links Mobile */}
                        <div className="flex-1 p-4 overflow-y-auto">
                            <ul className="grid grid-cols-2 gap-6 place-items-center">
                                <MenuMobileItem href='/' label='Home' />
                                <MenuMobileItem href="#quemsou" label='Quem Sou' />
                                <MenuMobileItem href="#portifolio" label='PortFólio' />
                                <MenuMobileItem href="#contato" label='Contato' />
                                <MenuMobileItem href="https://github.com/angeloreis" target="_blank" rel="noreferrer" label='Github' />
                                <MenuMobileItem href="https://linkedin.com/in/angelodosreis/" target="_blank" rel="noreferrer" label='Linkedin' />
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Menu Desktop - Escondido no mobile, visível a partir do tamanho médio (md) */}
            <ul className="items-center justify-center hidden m-0 p-0 md:flex">
                <MenuItem href='/' label='Home' />
                <MenuItem href="#quemsou" label='Quem Sou' />
                <MenuItem href="#portifolio" label='PortFólio' />
                <MenuItem href="#contato" label='Contato' />
                <MenuItem href="https://github.com/angeloreis" target="_blank" rel="noreferrer" label='Github' />
                <MenuItem href="https://linkedin.com/in/angelodosreis/" target="_blank" rel="noreferrer" label='Linkedin' />
            </ul>
        </nav>
    );
}