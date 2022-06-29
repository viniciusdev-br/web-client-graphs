import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import { Button, Box, Text } from "@chakra-ui/react";

import { GraphFormTableProps } from "./types";
import { GraphFormTableHeader, GraphTable } from "./styles";

export function GraphFormTable({ edgeMatrix, setIsOpen }: GraphFormTableProps) {
  return (
    <div>
      <GraphFormTableHeader>
        <Text fontSize="md" fontWeight="600">
          Tabela de arestas
        </Text>
        <Button
          type="button"
          onClick={() => setIsOpen(true)}
          colorScheme="purple"
          gap={1}
        >
          <FiPlus size={16} /> aresta
        </Button>
      </GraphFormTableHeader>
      <GraphTable>
        <Box as="thead" bg="gray.100">
          <tr>
            <th>Vértice de partida</th>
            <th>Vértice de chegada</th>
            <th>Peso</th>
          </tr>
        </Box>
        <Box
          as="tbody"
          __css={{
            "tr:not(:last-child)": {
              borderBottom: "1px solid",
              borderColor: "gray.200",
            },
            "tr:nth-child(even)": {
              background: "gray.50",
            },
          }}
        >
          {edgeMatrix.map((row, index) => (
            <tr key={index}>
              <td>{row.start}</td>
              <td>{row.final}</td>
              <td>{row.weight}</td>
            </tr>
          ))}
        </Box>
      </GraphTable>
    </div>
  );
}
