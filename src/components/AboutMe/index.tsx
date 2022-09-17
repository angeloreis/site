import { Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ProgressTech } from "../ProgressTech";

interface AboutMeProps {
    employee: boolean
    isMobile: boolean
    children: ReactNode
}

export function AboutMe({ employee, isMobile, children }: AboutMeProps) {
    return (
        <Flex id="quemsou" width="100%" flexDirection={isMobile ? "column" : "row"} alignItems="center" justify="center" paddingY='15px' background="purple.700">
            <Flex flexDirection="column" alignItems="center" justify="center" minW='318px' w={['319px', '450px']} paddingX="10px">
            <Heading paddingY="24px">Quem sou</Heading>
                <Image
                    src="https://github.com/angeloreis.png"
                    width="256px"
                    height="256px"
                    alt="Foto de perfil do Angelo Reis via Github"
                    borderRadius="100%"
                    marginY="35px" />
                <Text>
                    Sou angelo Reis, tenho 34 anos de idade e sou formado em Jornalismo.
                    Trabalho na área de tecnologia desde os 14 anos de idade.
                    Comecei como suporte técnico na empresa da minha família (<a href="https://arsistemas.com.br" target="_blank" rel="noreferrer">AR-Sistemas</a>)
                    e estou atualmente {employee ? children : 'estou aberto a propostas'}.
                    Com decorrer do tempo aprendi algumas linguagens de forma certa e com professores qualificados.
                    Vou destacar aqui algumas métricas das tecnologias que domino:
                </Text>
            </Flex>

            <SimpleGrid columns={[2, 4]} spacing={['12px', '4px']} paddingY="24px">
                <ProgressTech techName='HTML' valueOfProgress={100} colorProgress='green.500' isMobile={isMobile} />
                <ProgressTech techName='CSS' valueOfProgress={90} colorProgress='green.500' isMobile={isMobile} />
                <ProgressTech techName='BEM' valueOfProgress={90} colorProgress='green.500' isMobile={isMobile} />
                <ProgressTech techName={isMobile ? 'JS' : 'Javascript'} valueOfProgress={80} colorProgress='green.500' isMobile={isMobile} />
                <ProgressTech techName='PHP' valueOfProgress={80} colorProgress='green.500' isMobile={isMobile} />
                <ProgressTech techName='ReactJS' valueOfProgress={90} colorProgress='green.500' isMobile={isMobile} />
                <ProgressTech techName='NextJS' valueOfProgress={80} colorProgress='green.500' isMobile={isMobile} />
                <ProgressTech techName='Node.JS' valueOfProgress={70} colorProgress='blue.500' isMobile={isMobile} />
                <ProgressTech techName='NestJS' valueOfProgress={40} colorProgress='red.500' isMobile={isMobile} />
                <ProgressTech techName='RN' valueOfProgress={20} colorProgress='red.500' isMobile={isMobile} />
                <ProgressTech techName='Jest' valueOfProgress={70} colorProgress='teal.500' isMobile={isMobile} />
                <ProgressTech techName='Hasura' valueOfProgress={90} colorProgress='green.500' isMobile={isMobile} />
                <ProgressTech techName='Firebase' valueOfProgress={70} colorProgress='teal.500' isMobile={isMobile} />
                <ProgressTech techName='FaunaDB' valueOfProgress={70} colorProgress='teal.500' isMobile={isMobile} />
                <ProgressTech techName='Docker' valueOfProgress={70} colorProgress='teal.500' isMobile={isMobile} />
                <ProgressTech techName='Redis' valueOfProgress={50} colorProgress='teal.500' isMobile={isMobile} />
            </SimpleGrid>

        </Flex>
    )
}