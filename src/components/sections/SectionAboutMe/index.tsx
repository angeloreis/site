"use client";

import { JSX, useState } from "react";
import { X, Code2, UserSquare, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaDribbble, FaInstagram, FaYoutube } from "react-icons/fa";
import { AboutMeDataProps, TechDataProps, ContactsDataProps } from "../../../types/api";
import { getColorStack } from "../../../util/functions";
import { ProgressTech } from "../../ProgressTech";
import Link from "next/link";
import Image from "next/image";

// Tipagem estrita para o estado do Modal
type ModalView = 'about' | 'tech' | null;

interface AboutMeTechProps {
    aboutMe: AboutMeDataProps;
    tech: TechDataProps;
    contactMe: ContactsDataProps; // Nova propriedade injetada
}

// Dicionário rigoroso de ícones
const socialIcon: Record<string, JSX.Element> = {
    github: <FaGithub size={18} />,
    linkedin: <FaLinkedin size={18} />,
    dribbble: <FaDribbble size={18} />,
    instagram: <FaInstagram size={18} />,
    youtube: <FaYoutube size={18} />,
    email: <Mail size={18} />
};

const ModalBodyAboutMe = ({ description }: AboutMeDataProps) => {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: description.html }}
            className="px-4 py-8 text-white prose prose-invert max-w-none"
        />
    );
};

const ModalBodyTech = ({ tech }: { tech: TechDataProps }) => {
    return (
        <div className="flex flex-col py-6 space-y-4">
            {tech && tech.stackKnowledges.map((stackItem, index) => (
                <ProgressTech
                    key={index}
                    techName={stackItem.name}
                    valueOfProgress={stackItem.percentageKnowledge}
                    colorProgress={getColorStack(stackItem.percentageKnowledge)}
                />
            ))}
        </div>
    );
};

export function SectionAboutMe({ aboutMe, tech, contactMe }: AboutMeTechProps) {
    const [activeModal, setActiveModal] = useState<ModalView>(null);
    const { photo, title } = aboutMe;

    const closeModal = () => setActiveModal(null);

    return (
        <section className="flex flex-col items-center w-full">

            {/* Imagem de Perfil estilo Bento */}
            <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-2xl bg-white/5 border border-white/10">
                <Image
                    src={photo.url}
                    alt="Foto de perfil"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 768px) 100vw, 330px"
                    className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
            </div>

            {/* Informações Pessoais */}
            <h2 className="text-2xl font-bold text-white mb-1">Angelo Reis</h2>
            <h3 className="text-sm font-semibold tracking-widest text-purple-400 uppercase mb-4 text-center">
                {title}
            </h3>

            {/* Linha divisória sutil */}
            <div className="w-full h-px bg-white/10 my-2"></div>

            {/* E-mail (Resgatado estaticamente para o design) */}
            <a
                href="mailto:angelo.desenvolvedor@gmail.com"
                className="text-sm text-gray-400 hover:text-purple-300 transition-colors my-4"
            >
                angelo.desenvolvedor@gmail.com
            </a>

            {/* Redes Sociais */}
            <div className="flex items-center justify-center gap-3 w-full mb-6">
                {contactMe && contactMe.contacts
                    .filter(contact => contact.type !== 'email') // Filtra o email para não duplicar
                    .map(({ socialUrl, type }) => (
                        <Link
                            key={socialUrl}
                            href={socialUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-gray-300 border border-white/10 transition-all hover:bg-purple-500 hover:text-white hover:-translate-y-1"
                            aria-label={`Acessar ${type}`}
                        >
                            {socialIcon[type] || <FaGithub size={18} />}
                        </Link>
                    ))}
            </div>

            {/* Botões de Ação (Abrem os modais) */}
            <div className="flex flex-col w-full gap-3">
                <button
                    onClick={() => setActiveModal('tech')}
                    className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10"
                >
                    <Code2 size={18} />
                    Minha Stack
                </button>

                <button
                    onClick={() => setActiveModal('about')}
                    className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white transition-all duration-200 bg-purple-600 rounded-xl hover:bg-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
                >
                    <UserSquare size={18} />
                    Sobre Mim
                </button>
            </div>

            {/* Renderização Condicional do Modal (Mantida idêntica para não quebrar a lógica) */}
            {activeModal !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
                    <div
                        className="fixed inset-0 transition-opacity bg-black/60 backdrop-blur-sm"
                        onClick={closeModal}
                        aria-hidden="true"
                    />

                    <div
                        className="relative z-50 flex flex-col w-full max-w-2xl bg-[#111] border border-white/10 rounded-2xl shadow-2xl max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="flex items-center justify-between p-4 border-b border-white/10">
                            <span className="text-white font-semibold">
                                {activeModal === 'about' ? 'Sobre mim' : 'Minha Stack'}
                            </span>
                            <button
                                onClick={closeModal}
                                className="p-2 text-gray-400 transition-colors rounded-md hover:bg-white/10 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 px-4 pb-4 overflow-y-auto custom-scrollbar">
                            {activeModal === 'about' ? (
                                <ModalBodyAboutMe {...aboutMe} />
                            ) : (
                                <ModalBodyTech tech={tech} />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}