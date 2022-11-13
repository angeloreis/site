import { Badge, Box, Button, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface ImageProps {
    source: string
    alt: string
    height: string
}

interface PortFolioBoxProps {
    image: ImageProps
    title: string
    description: string
    isActiveSite: boolean
    redirectTo?: string
}

export function PortFolioBox({ image, title, description, isActiveSite = false, redirectTo }: PortFolioBoxProps) {
    const router = useRouter()

    function onClickRouter(urlItem: string) {
        router.push(urlItem)
    }
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius='lg' overflow='hidden' minW="310px" width="100%">
            <Image src={image.source} alt={image.alt} w="100%" h={image.height} />

            <Box p='6'>
                <Box display="flex" alignItems="baseline">
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        {!isActiveSite ? 'Apenas repositório' : 'Ativo'}
                    </Badge>
                </Box>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >{title}
                </Box>
                <Box
                    mt='1'
                    as='h6'
                    lineHeight='tight'
                    noOfLines={2}
                >{description}
                </Box>
                {redirectTo && (
                    <Box mt='5' w='100%'>
                        <Button
                            background='purple.500'
                            w='100%'
                            _hover={{ background: 'purple.400' }}
                            onClick={() => onClickRouter(redirectTo)}>
                            Visitar
                        </Button>
                    </Box>
                )}
            </Box>
        </Box>
    )
}