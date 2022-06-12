import { useState } from "react";

import { FiChevronRight } from "react-icons/fi";

import {
  CardContainer,
  CardContainerContent,
  CardContainerHeader,
} from "./styles";

import { CardProps } from "./types";

export function Card({ children, title, expansive }: CardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CardContainer>
      {expansive && (
        <CardContainerHeader
          onClick={() => setIsOpen(!isOpen)}
          isExpanded={isOpen}
        >
          <h3>{title}</h3>

          <FiChevronRight size={24} />
        </CardContainerHeader>
      )}

      <CardContainerContent isExpanded={isOpen}>
        {children}
      </CardContainerContent>
    </CardContainer>
  );
}
