import { JSX } from "react/jsx-runtime";
import { HeaderDataProps } from "../../../types/api";

interface SectionHeroProps {
  header: HeaderDataProps;
}

export const SectionHero = ({ header }: SectionHeroProps): JSX.Element => {
  return (
    <section className="flex flex-col w-full py-6 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Badge de Status / Introdução */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-max backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
        <span className="text-xs font-bold tracking-widest text-purple-200 uppercase">
          Introdução
        </span>
      </div>

      {/* Título Principal Gigante */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
        Transformando <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
          dados complexos
        </span>{" "}
        em soluções elegantes.
      </h1>

      {/* Subtítulo / Descrição */}
      <h2 className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mt-2">
        Olá! Atuo como <strong className="text-white font-semibold">{header.rolePosition}</strong>. 
        {' '}{header.openToWork 
          ? 'Atualmente estou aberto a novas oportunidades e desafios para criar arquiteturas escaláveis e eficientes.' 
          : `Atualmente desenvolvendo soluções na ${header.companyEmployed}.`}
      </h2>

      {/* Bento Box Stats (Caixas de Estatísticas) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <div className="flex flex-col justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-colors hover:bg-white/10">
          <span className="text-4xl md:text-5xl font-bold text-white mb-2">+10</span>
          <span className="text-sm font-medium text-purple-300">Anos de Experiência</span>
        </div>
        
        <div className="flex flex-col justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-colors hover:bg-white/10">
          <span className="text-4xl md:text-5xl font-bold text-white mb-2">+50</span>
          <span className="text-sm font-medium text-purple-300">Projetos Entregues</span>
        </div>
        
        <div className="flex flex-col justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-colors hover:bg-white/10 col-span-2 md:col-span-1">
          <span className="text-4xl md:text-5xl font-bold text-white mb-2">100%</span>
          <span className="text-sm font-medium text-purple-300">Comprometimento</span>
        </div>
      </div>

    </section>
  );
};