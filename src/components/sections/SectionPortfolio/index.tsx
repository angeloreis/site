import { Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import { JobsDataProps, PortfolioDataProps } from "../../../types/api"
import { PortFolioBox } from "../../PortFolioBox"

interface SectionPortifolioProps {
    portfolio: PortfolioDataProps
}

export const SectionPortfolio = ({ portfolio }: SectionPortifolioProps) => {
    return (
        <Flex
            id='portifolio'
            h='100%'
            w='100%'
            flexDirection='column'
            alignItems='center'
            justify='center'
            paddingY='15px'>
            <Heading paddingTop="24px">Portifólio</Heading>
            <SimpleGrid
                columns={{sm: 1, md: 2, lg: 3, xl: 4}}
                spacing='32px'
                paddingY="24px"
                alignItems="center"
                justifyContent="center">
                {
                    portfolio.jobs && (portfolio.jobs.map(({ name, workbench, image, url }: JobsDataProps) =>
                        <PortFolioBox
                            image={{
                                source: `${image.url}`,
                                height: '50%',
                                alt: name
                            }}
                            title={name}
                            description={workbench}
                            isActiveSite={true}
                            redirectTo={url}
                            key={name} />
                    )
                    )}
            </SimpleGrid>
        </Flex>
    )
}