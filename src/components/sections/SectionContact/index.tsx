import Link from "next/link";
import { Mail, MessageCircle, Palette, Video } from "lucide-react";
import { FaDribbble, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { ContactsDataProps, HeaderDataProps } from "../../../types/api";
import { JSX } from "react/jsx-runtime";

interface SectionContactProps {
    header: HeaderDataProps;
    contactMe: ContactsDataProps;
}

// Dicionário de ícones com tamanho ligeiramente maior para o layout novo
const socialIcon: Record<string, JSX.Element> = {
    github: <FaGithub size={24} className="group-hover:text-white transition-colors" />,
    linkedin: <FaLinkedin size={24} className="group-hover:text-[#0A66C2] transition-colors" />,
    dribbble: <FaDribbble size={24} className="group-hover:text-[#EA4C89] transition-colors" />,
    behance: <Palette size={24} className="group-hover:text-[#1769ff] transition-colors" />, 
    whatsapp: <MessageCircle size={24} className="group-hover:text-[#25D366] transition-colors" />,
    email: <Mail size={24} className="group-hover:text-purple-400 transition-colors" />,
    instagram: <FaInstagram size={24} className="group-hover:text-[#E4405F] transition-colors" />,
    youtube: <FaYoutube size={24} className="group-hover:text-[#FF0000] transition-colors" />,
    vimeo: <Video size={24} className="group-hover:text-[#1AB7EA] transition-colors" />
};

export function SectionContact({ header, contactMe }: SectionContactProps): JSX.Element {
    return (
        <section
            id="contato"
            className="flex flex-col w-full py-12 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300"
        >
            {/* Cabeçalho da Secção com Linha Decorativa */}
            <div className="flex items-center gap-6 mb-2">
                <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
                    Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Conversar</span>
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>

            {/* Contentor Bento Box Principal */}
            <div className="relative flex flex-col items-center justify-center w-full p-8 md:p-12 overflow-hidden bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md shadow-2xl">
                
                {/* Efeito de Brilho Fundo (Glow) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>

                {header.openToWork ? (
                    <div className="relative z-10 flex flex-col items-center w-full">
                        <p className="mb-8 text-center text-gray-300 max-w-xl">
                            Estou sempre aberto a discutir desenvolvimento de produtos, novas arquiteturas ou oportunidades de parceria. Escolha a sua rede preferida:
                        </p>
                        
                        {/* Grelha de Contactos Dinâmica */}
                        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
                            {contactMe && contactMe.contacts.map(({ socialUrl, usernameSocial, type }) => (
                                <Link
                                    href={type !== 'email' ? socialUrl : `mailto:${socialUrl}`}
                                    key={socialUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center p-4 gap-4 transition-all duration-300 bg-[#111]/50 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-purple-500/30 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="flex items-center justify-center w-12 h-12 text-gray-400 bg-white/5 rounded-xl border border-white/10 transition-colors group-hover:bg-white/10">
                                        {socialIcon[type] || <Mail size={24} />}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase transition-colors group-hover:text-gray-300">
                                            {type}
                                        </span>
                                        <span className="font-medium text-white transition-colors group-hover:text-purple-300">
                                            {usernameSocial}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="relative z-10 flex flex-col items-center justify-center space-y-6 text-center">
                        <span className="px-4 py-1 text-sm font-semibold text-gray-400 border border-gray-600/30 rounded-full bg-gray-500/10">
                            Agenda Completa
                        </span>
                        
                        <h3 className="text-2xl font-bold text-white">
                            No momento estou indisponível para contratações.
                        </h3>

                        <div className="flex flex-col items-center justify-center mt-4 space-y-4 text-gray-300">
                            <p>
                                Ainda assim, se quiser trocar ideias, sinta-se à vontade para enviar uma mensagem:
                            </p>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="mailto:angelo.desenvolvedor@gmail.com?subject=Seu site - Podemos conversar?"
                                    className="flex items-center gap-2 px-6 py-3 font-medium text-white transition-all bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-purple-300"
                                >
                                    <Mail size={18} />
                                    Enviar E-mail
                                </a>
                                <a
                                    href="https://api.whatsapp.com/send?phone=5591992664715&text=Ol%C3%A1%2C%20estou%20precisando%20de%20um%20desenvolvedor%20na%20minha%20empresa!%20Teria%20como%20voc%C3%AA%20d%C3%A1%20uma%20ajuda%3F"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 font-medium text-white transition-all bg-purple-600/80 border border-purple-500/50 rounded-xl hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                                >
                                    <MessageCircle size={18} />
                                    Mensagem no WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}