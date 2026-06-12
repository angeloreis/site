import { Header } from '../components/Header';
import { SectionAboutMe } from '../components/sections/SectionAboutMe';
import { SectionContact } from '../components/sections/SectionContact';
import { SectionFooter } from '../components/sections/SectionFooter';
import { SectionHero } from '../components/sections/SectionHero';
import { SectionPortfolio } from '../components/sections/SectionPortfolio';

import { client } from '../graphql/client';
import { GET_LANDING_PAGE } from '../graphql/queries';
import { LandingPageDataProps } from '../types/api';

async function getLandingPageData(): Promise<LandingPageDataProps> {
    const { landingPages } = await client.request<{ landingPages: LandingPageDataProps[] }>(
        GET_LANDING_PAGE
    );
    return landingPages[0];
}

export default async function Home() {
    const data = await getLandingPageData();
    const { header, aboutMe, tech, portfolio, contactMe } = data;

    return (
        // Fundo cinza super escuro (quase preto) com o grid por cima
        <div className="min-h-screen bg-[#0a0a0a] bg-grid-pattern text-white relative">

            {/* Container principal que centraliza tudo na tela */}
            <div className="max-w-7xl mx-auto px-4 py-8 md:px-8 md:py-12">

                {/* Nova Estrutura de Colunas: Flex no mobile, Grid no Desktop */}
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">

                    {/* COLUNA ESQUERDA (SIDEBAR FIXA) */}
                    <aside className="w-full lg:col-span-3 lg:sticky lg:top-8 flex flex-col gap-6">
                        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                            {/* Agora passamos a prop contactMe também! */}
                            <SectionAboutMe aboutMe={aboutMe} tech={tech} contactMe={contactMe} />
                        </div>
                    </aside>

                    {/* COLUNA DIREITA (CONTEÚDO ROLÁVEL) - Ocupa 9 colunas de 12 */}
                    <main className="w-full lg:col-span-9 flex flex-col gap-12">
                        <Header />
                        <SectionHero header={header} />

                        {/* Aqui entrarão os novos blocos de status e timeline */}

                        <SectionPortfolio portfolio={portfolio} />
                        <SectionContact header={header} contactMe={contactMe} />
                    </main>

                </div>

                <SectionFooter />
            </div>
        </div>
    );
}