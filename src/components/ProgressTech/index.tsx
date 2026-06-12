interface ProgressTechProps {
  techName: string;
  valueOfProgress: number;
  colorProgress?: string;
  isMobile?: boolean;
}

const colorMap: Record<string, string> = {
  orange: "bg-orange-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  red: "bg-red-500",
  purple: "bg-purple-500",
  cyan: "bg-cyan-500",
  teal: "bg-teal-500",
  pink: "bg-pink-500",
};

export function ProgressTech({
  techName,
  valueOfProgress,
  colorProgress = "orange.500",
  isMobile,
}: ProgressTechProps) {
  const baseColor = colorProgress.split(".")[0];
  const progressBgClass = colorMap[baseColor] || colorMap.orange;
  const safeProgress = Math.min(100, Math.max(0, valueOfProgress));

  return (
    <div className="flex flex-col w-full gap-2 mb-4">
      <h3 className={`font-bold text-white/90 ${isMobile ? "text-xs" : "text-sm"}`}>
        {techName}
      </h3>
      
      {/* Trilha (Fundo do progresso) */}
      <div className="w-full overflow-hidden bg-gray-700 rounded-full h-[0.6rem]">
        
        {/* Barra de Preenchimento */}
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${progressBgClass}`}
          style={{ width: `${safeProgress}%` }}
          role="progressbar"
          aria-valuenow={safeProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}