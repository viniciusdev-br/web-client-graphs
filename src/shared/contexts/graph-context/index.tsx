import { createContext, useState } from "react";
import { Edge } from "../../models/edge";
import { api } from "../../services/api";
import {
  GraphContextProps,
  GraphModel,
  GraphProviderProps,
  RequisitoProps,
} from "./types";

export const GraphContext = createContext(null as unknown as GraphContextProps);

export function GraphProvider({ children }: GraphProviderProps) {
  const [edges, setEdges] = useState<Edge[]>([]);

  const [options, setOptions] = useState({
    oriented: false,
    weighted: false,
    size: 0,
    selected_vertex: "",
    selected_vertex2: "",
  });

  function changeOptions(options: Omit<GraphModel, "edges">) {
    setOptions({ ...options });
  }

  function insertEdge(edge: Edge) {
    setEdges([...edges, edge]);
  }

  async function sendGraph(requisito: RequisitoProps) {
    await api.post("/teste", {
      ...options,
      edges,
    });
  }

  return (
    <GraphContext.Provider
      value={{
        edges,
        options,
        insertEdge,
        sendGraph,
        changeOptions,
      }}
    >
      {children}
    </GraphContext.Provider>
  );
}
