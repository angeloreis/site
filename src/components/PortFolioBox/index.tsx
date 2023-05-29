import { Badge, Box, Image, Link } from "@chakra-ui/react";
interface ImageProps {
  source: string;
  alt: string;
  height: string;
}
interface PortFolioBoxProps {
  image: ImageProps;
  title: string;
  description: string;
  isActiveSite: boolean;
  redirectTo?: string;
}

export function PortFolioBox({
  image,
  title,
  description,
  isActiveSite = false,
  redirectTo,
}: PortFolioBoxProps) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      minW="310px"
      width="100%"
      height="460px"
      background="purple.900"
    >
      <Image src={image.source} alt={image.alt} w="100%" h={image.height} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {!isActiveSite ? "Apenas repositório" : "Ativo"}
          </Badge>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
        </Box>
        <Box mt="1" as="h6" lineHeight="tight" noOfLines={2}>
          {description}
        </Box>
        {redirectTo && (
          <Link
            href={redirectTo}
            target="_blank"
            isExternal={true}
            background="purple.500"
            display="flex"
            alignContent="center"
            justifyContent="center"
            mt="1rem"
            px="6.5rem"
            py=".8rem"
            borderRadius="8px"
            _hover={{ background: "purple.400" }}
          >
            Visitar
          </Link>
        )}
      </Box>
    </Box>
  );
}
