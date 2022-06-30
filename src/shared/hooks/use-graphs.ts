import { useContext } from "react";
import { GraphContext } from "../contexts/graph-context";

export function useGraphs() {
  const context = useContext(GraphContext);

  if (!context) {
    throw new Error("useGraphs must be used within a GraphProvider");
  }

  return context;
}
