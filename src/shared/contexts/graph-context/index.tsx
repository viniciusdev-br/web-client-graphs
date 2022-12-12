import { createContext, useEffect, useMemo, useState } from "react";
import { Edge } from "../../models/edge";
import { api } from "../../services/api";
import { GraphContextProps, GraphModel, GraphProviderProps } from "./types";

export const GraphContext = createContext(null as unknown as GraphContextProps);

export function GraphProvider({ children }: GraphProviderProps) {
  const [edges, setEdges] = useState<Edge[]>([]);
  const [outputs, setOutputs] = useState<string[]>([]);
  const [graphImageBytes, setGraphImageBytes] = useState<string>("");
  const [outputImageBytes, setOutputImageBytes] = useState<string>("");

  const [options, setOptions] = useState({
    oriented: 0,
    requirement: 1,
    selected_vertex: "",
    selected_vertex2: "",
  });

  const vertexes = useMemo(
    () => [
      ...new Set([...edges.map((e) => e.start), ...edges.map((e) => e.end)]),
    ],
    [edges]
  );

  function changeOptions(
    options: Omit<GraphModel, "edges" | "size" | "weighted">
  ) {
    setOptions(options);
  }

  function insertEdge(edge: Edge) {
    setEdges([...edges, edge]);
  }

  function removeEdge(edge_id: string) {
    setEdges(edges.filter((e) => e.id !== edge_id));
  }

  async function sendGraph() {
    const filteredWeightedEdges = edges.filter((e) => e.weight > 0);

    const res = await api.post("/teste", {
      ...options,
      weighted: !!filteredWeightedEdges.length,
      size: vertexes.length,
      edges: edges.map((e) => ({
        start: e.start,
        end: e.end,
        weight: e.weight,
      })),
    });

    if (options.requirement === 12) {
      return setOutputImageBytes(res.data.data);
    }

    if (options.requirement === 15) {
      if(!res.data.data){
        setOutputImageBytes("")
        return setOutputs([...outputs, res.data.result]);
      }
      if (options.oriented){
        setOutputImageBytes(res.data.data);
        return setOutputs([...outputs, res.data.result]);
      };
    }

    if (options.requirement === 18){
      setOutputs([...outputs, res.data.result]);
      return setOutputImageBytes(res.data.data);
    }
    return setOutputs([...outputs, res.data.result]);
  }

  useEffect(() => {
    async function handle() {
      const response = await api.post("/rendergraph", {
        oriented: options.oriented,
        edges: edges.map((e) => ({
          start: e.start,
          end: e.end,
          weight: e.weight,
        })),
      });

      if (response.data?.data) {
        setGraphImageBytes(response.data.data);
      }
    }

    if (edges.length) {
      void handle();
    } else {
      setGraphImageBytes("");
    }
  }, [edges, options.oriented]);

  return (
    <GraphContext.Provider
      value={{
        edges,
        vertexes,
        outputs,
        graphImageBytes,
        outputImageBytes,
        options,
        insertEdge,
        removeEdge,
        sendGraph,
        changeOptions,
      }}
    >
      {children}
    </GraphContext.Provider>
  );
}
