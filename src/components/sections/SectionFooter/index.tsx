import { JSX } from "react/jsx-runtime";

export const SectionFooter = (): JSX.Element => {
    const currentDate = new Date();
    
    return (
        <footer className="w-full mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-gray-400 text-sm pb-8">
            <p className="transition-colors hover:text-gray-300">
                Feito com ❤️ usando <span className="text-white font-medium">Next.js</span> + <span className="text-purple-400 font-medium">Tailwind CSS</span> + <span className="text-white font-medium">Hygraph</span>
            </p>
            <p className="text-xs text-gray-500 tracking-wide">
                {`© 2009-${currentDate.getFullYear()} Angelo Reis. Todos os direitos reservados.`}
            </p>
        </footer>
    );
}