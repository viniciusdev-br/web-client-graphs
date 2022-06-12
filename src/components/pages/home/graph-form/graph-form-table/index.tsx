import { useState } from "react";

import { GraphFormTableProps } from "../types";

export function GraphFormTable({ edgeMatrix }: GraphFormTableProps) {
  return (
    <div>
      <div>
        <h3>Tabela de vértices</h3>
        <button>Novo caminho</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Vértice de partida</th>
            <th>Vértice de chegada</th>
            <th>Peso</th>
          </tr>
        </thead>
        <tbody>
          {edgeMatrix.map((row, index) => (
            <tr key={index}>
              <td>{row.start}</td>
              <td>{row.final}</td>
              <td>{row.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
