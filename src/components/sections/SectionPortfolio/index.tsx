"use client";

import { JSX, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { JobsDataProps, PortfolioDataProps } from "../../../types/api";
import { PortFolioBox } from "../../PortFolioBox";

interface SectionPortfolioProps {
    portfolio: PortfolioDataProps;
}

export const SectionPortfolio = ({ portfolio }: SectionPortfolioProps): JSX.Element => {
    // Tipagem rigorosa para a referência do container do carrossel
    const carouselRef = useRef<HTMLDivElement>(null);

    // Tipagem estrita limitando os valores de direção
    const scroll = (direction: 'left' | 'right'): void => {
        if (carouselRef.current) {
            // A quantidade de rolagem equivale aproximadamente à largura de um card + gap
            const scrollAmount = direction === 'left' ? -400 : 400;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="flex flex-col w-full py-12 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            
            {/* Cabeçalho da Seção com Linha Decorativa e Controles do Carrossel */}
            <div className="flex items-center gap-6 mb-2">
                <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
                    Projetos em <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Destaque</span>
                </h2>
                
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                
                {/* Botões de Navegação (Visíveis apenas em telas maiores onde não há swipe natural) */}
                <div className="hidden md:flex gap-2">
                    <button 
                        onClick={() => scroll('left')}
                        className="p-2 text-gray-400 transition-all bg-white/5 border border-white/10 rounded-full hover:bg-purple-500 hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] focus:outline-none"
                        aria-label="Rolar projetos para a esquerda"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={() => scroll('right')}
                        className="p-2 text-gray-400 transition-all bg-white/5 border border-white/10 rounded-full hover:bg-purple-500 hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] focus:outline-none"
                        aria-label="Rolar projetos para a direita"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
            
            {/* Container do Carrossel Nativo
                - snap-x e snap-mandatory garantem a parada exata nos cartões
                - hide-scrollbar via classes arbitrárias do Tailwind v4
            */}
            <div 
                ref={carouselRef}
                className="flex w-full gap-6 pb-8 overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                {portfolio.jobs && portfolio.jobs.map(({ name, workbench, image, url }: JobsDataProps) => (
                    // Shrink-0 impede o flexbox de espremer o cartão, e definimos larguras específicas para o Bento Box
                    <div 
                        key={name} 
                        className="snap-center shrink-0 w-[85vw] sm:w-[350px] lg:w-[420px] h-full"
                    >
                        <PortFolioBox
                            image={{
                                source: image.url,
                                alt: name
                            }}
                            title={name}
                            description={workbench}
                            isActiveSite={true}
                            redirectTo={url} 
                        />
                    </div>
                ))}
            </div>
            
        </section>
    );
};