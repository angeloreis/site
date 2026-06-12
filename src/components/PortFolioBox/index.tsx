import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ImageProps {
  source: string;
  alt: string;
}

interface PortFolioBoxProps {
  image: ImageProps;
  title: string;
  description: string;
  isActiveSite?: boolean;
  redirectTo?: string;
}

export function PortFolioBox({
  image,
  title,
  description,
  isActiveSite = false,
  redirectTo,
}: PortFolioBoxProps) {
  return (
    <div className="group relative flex flex-col w-full overflow-hidden bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)]">
      
      <div className="p-4 pb-0">
        <div className="relative w-full h-48 overflow-hidden rounded-2xl bg-[#111]">
          {/* Substituímos a <img> pelo <Image> otimizado */}
          <Image
            src={image.source}
            alt={image.alt}
            fill // Ocupa todo o espaço do container pai
            sizes="(max-width: 768px) 85vw, (max-width: 1200px) 350px, 420px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between mb-4">
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full border ${
              isActiveSite
                ? 'bg-purple-500/10 text-purple-300 border-purple-500/20'
                : 'bg-gray-500/10 text-gray-400 border-gray-500/20'
            }`}
          >
            {isActiveSite ? "Projeto Ativo" : "Apenas Repositório"}
          </span>
        </div>

        {/* Correção de Acessibilidade: h4 virou h3 */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm text-gray-400 line-clamp-2 mb-8 flex-1">
          {description}
        </p>

        {redirectTo && (
          <a
            href={redirectTo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visualizar projeto ${title}`} // Correção Identical Links
            className="inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-purple-400 mt-auto w-max"
          >
            Visualizar Projeto
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        )}
      </div>
    </div>
  );
}