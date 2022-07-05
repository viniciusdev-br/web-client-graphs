import { useState } from "react";

import { Button, Select, Flex } from "@chakra-ui/react";

import { Card } from "../../../global/card";
import { GraphFormTable } from "./graph-form-table";

import { GraphFormContainer, GraphFormRow } from "./styles";
import { GraphFormDialog } from "./graph-form-dialog";
import { useGraphs } from "../../../../shared/hooks/use-graphs";

export function GraphForm() {
  const [isOpen, setIsOpen] = useState(false);

  const { edges, insertEdge, sendGraph, options, changeOptions, vertexes } =
    useGraphs();

  return (
    <GraphFormContainer>
      <Card title="Preencha os dados abaixo">
        <Flex direction="column" gridGap="8">
          <GraphFormRow>
            <label htmlFor="oriented">Grafo orientado?</label>
            <Select
              name="oriented"
              value={options.oriented}
              onChange={(e) => {
                changeOptions({
                  ...options,
                  oriented: Number(e.target.value),
                });
              }}
            >
              <option value={1}>Sim</option>
              <option value={0}>Não</option>
            </Select>
          </GraphFormRow>
          <GraphFormRow>
            <label htmlFor="requirement">Requisito?</label>
            <Select
              name="requirement"
              value={options.requirement}
              onChange={(e) => {
                changeOptions({
                  ...options,
                  requirement: Number(e.target.value),
                });
              }}
            >
              {new Array(12).fill(0).map((_, i) => (
                <option key={i} value={i + 1}>
                  Requisito {i + 1}
                </option>
              ))}
            </Select>
          </GraphFormRow>
          {[1, 2, 3].includes(options.requirement) && (
            <Flex gridGap="4">
              <GraphFormRow>
                <label htmlFor="selected_vertex">Vertice 1</label>
                <Select
                  name="selected_vertex"
                  value={options.selected_vertex}
                  onChange={(e) => {
                    console.log(e.target.value);
                    changeOptions({
                      ...options,
                      selected_vertex: e.target.value,
                    });
                  }}
                >
                  <option>Selecione um vértice</option>
                  {vertexes.map((v) => (
                    <option key={Math.random().toString(32)} value={v}>
                      {v}
                    </option>
                  ))}
                </Select>
              </GraphFormRow>
              {options.requirement === 1 && (
                <GraphFormRow>
                  <label htmlFor="selected_vertex2">Vertice 2</label>
                  <Select
                    name="selected_vertex2"
                    value={options.selected_vertex2}
                    onChange={(e) => {
                      changeOptions({
                        ...options,
                        selected_vertex2: e.target.value,
                      });
                    }}
                  >
                    <option>Selecione um vértice</option>
                    {vertexes.map((v) => (
                      <option key={Math.random().toString(32)} value={v}>
                        {v}
                      </option>
                    ))}
                  </Select>
                </GraphFormRow>
              )}
            </Flex>
          )}
          <GraphFormTable setIsOpen={setIsOpen} edgeMatrix={edges} />
          <Button
            colorScheme="purple"
            onClick={() => {
              sendGraph();
            }}
          >
            Processar
          </Button>
        </Flex>
      </Card>

      {isOpen && (
        <GraphFormDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onChange={(edge) => {
            insertEdge(edge);
          }}
        />
      )}
    </GraphFormContainer>
  );
}
