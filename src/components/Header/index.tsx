import { JSX } from "react/jsx-runtime";
import { Menu } from "../Menu";

export function Header(): JSX.Element {
    return (
        <header className="flex flex-row items-center justify-between px-[30px] min-h-[97px] w-full">
            <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                ANGELO REIS
            </span>
            <Menu />    
        </header>
    );
}