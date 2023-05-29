import {
  Heading,
  Progress
} from "@chakra-ui/react";

interface ProgressTechProps {
  techName: string;
  valueOfProgress: number;
  colorProgress: string;
  isMobile?: boolean;
}

export function ProgressTech({
  techName,
  valueOfProgress,
  colorProgress = "orange.500",
  isMobile,
}: ProgressTechProps) {
  return (
    <>
      <Heading size={isMobile ? "xs" : "sm"} color="whiteAlpha.900">{techName}</Heading>
      <Progress
        colorScheme={colorProgress}
        value={valueOfProgress}
        height=".6rem"
        size="md"
      />
    </>
  );
}
