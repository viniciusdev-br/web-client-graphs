import { useState } from "react";

import { Collapse, Text, useDisclosure } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";

import {
  CardContainer,
  CardContainerContent,
  CardContainerHeader,
} from "./styles";

import { CardProps } from "./types";

export function Card({ children, title, expansive }: CardProps) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <CardContainer>
      {expansive && (
        <CardContainerHeader onClick={onToggle} isExpanded={isOpen}>
          <Text fontSize="lg" fontWeight="semibold">
            {title}
          </Text>

          <FiChevronRight size={24} />
        </CardContainerHeader>
      )}

      <Collapse in={isOpen}>
        <CardContainerContent isExpanded={isOpen}>
          {children}
        </CardContainerContent>
      </Collapse>
    </CardContainer>
  );
}
