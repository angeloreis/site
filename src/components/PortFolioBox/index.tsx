import { Badge, Box, Image } from "@chakra-ui/react";

interface ImageProps {
    source: string
    alt: string
    width: string
    height: string
}

interface PortFolioBoxProps {
    image: ImageProps
    title: string
    description: string
    isActiveSite: boolean
}

export function PortFolioBox({image, title, description, isActiveSite = false}: PortFolioBoxProps) {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius='lg' overflow='hidden'>
            <Image src={image.source} alt={image.alt} w={image.width} h={image.height}/>

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
            </Box>
        </Box>
    )
}