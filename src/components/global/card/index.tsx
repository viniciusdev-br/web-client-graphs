import { Text } from "@chakra-ui/react";

import { CardContainer } from "./styles";

import { CardProps } from "./types";

export function Card({ children, title }: CardProps) {
  return (
    <CardContainer>
      <Text fontSize="lg" fontWeight="semibold" mb="6">
        {title}
      </Text>

      {children}
    </CardContainer>
  );
}
