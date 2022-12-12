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
                <option key={0} value={1}>
                  Requisito 1 - Existencia de uma aresta
                </option>
                <option key={2} value={2}>
                  Requisito 2 - Grau de um vértice
                </option>
                <option key={3} value={3}>
                  Requisito 3 - Adjacência de um vértice
                </option>
                <option key={4} value={4}>
                  Requisito 4 - Verificar se um grafo não-orientado é conexo.
                </option>
                <option key={5} value={5}>
                  Requisito 5 -  Verificar se um dı́grafo é fracamente conexo.
                </option>
                <option key={6} value={6}>
                  Requisito 6 - Verificar se um dı́grafo é unilateralmente conexo.
                </option>
                <option key={7} value={7}>
                  Requisito 7 - Verificar se um dı́grafo é fortemente conexo e informar qual ou
quais são os seus componentes fortemente conexos.
                </option>
                <option key={8} value={8}>
                  Requisito 8 - Dado um grafo conexo, verificar se ele é cı́clico.
                </option>
                <option key={9} value={9}>
                  Requisito 9 - Dado um dı́grafo acı́clico e conexo, informar uma ordenação
topológica presente no dı́grafo.
                </option>
                <option key={10} value={10}>
                  Requisito 10 - Dado um grafo não-orientado e conexo, verificar se ele é planar,
2-conexo e/ou euleriano. Caso seja possı́vel, informar um ciclo
euleriano presente no grafo.
                </option>
                <option key={11} value={11}>
                  Requisito 11 - Busca em Largura
                </option>
                <option key={12} value={12}>
                  Requisito 12 - Encontrar uma árvore geradora mı́nima de um grafo não-orientado
e conexo
                </option>
                <option key={13} value={13}>
                  Requisito 13 - Classificação de arestas
                </option>
                <option key={14} value={14}>
                  Requisito 14 - Verificação de ciclo
                </option>
                <option key={15} value={15}>
                  Requisito 15 - Ordenação Topológica
                </option>
                <option key={16} value={16}>
                  Requisito 16 - Componentes Fortes
                </option>
                <option key={17} value={17}>
                  Requisito 17 - Dijkstra
                </option>
                <option key={18} value={18}>
                  Requisito 18 - Prim
                </option>
                <option key={19} value={19}>
                  Requisito 19 - Print lista de adjacências 
                </option>
                <option key={20} value={20}>
                  Requisito 20 - Retornar o número de vértices e de arestas
                </option>
                
            </Select>
          </GraphFormRow>
          {[1, 2, 3, 11, 12, 13, 14, 16, 17, 18].includes(options.requirement) && (
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
              {[1].includes(options.requirement) && (
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
