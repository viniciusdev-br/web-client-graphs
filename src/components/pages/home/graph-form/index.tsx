import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

import { Button } from "../../../global/button";

import { Card } from "../../../global/card";
import { Input } from "../../../global/input";
import { GraphFormTable } from "./graph-form-table";

import { GraphFormContainer, GraphFormRow } from "./styles";
import { GraphFormTableProps } from "./types";

export function GraphForm({ edgeMatrix }: GraphFormTableProps) {
  const { register, control, handleSubmit } = useForm();

  function handleSubmitFirstStep(data: any) {
    console.log(data);
  }

  return (
    <GraphFormContainer>
      <h2>Preencha os dados abaixo</h2>

      <Card title="Passo 1 de 2" expansive>
        <form onSubmit={handleSubmit(handleSubmitFirstStep)}>
          <GraphFormRow>
            <label htmlFor="graph-orientation">Grafo orientado?</label>
            <Controller
              control={control}
              name="is-graph-orientation"
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <Select
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  name={name}
                  ref={ref}
                  options={[
                    {
                      value: true,
                      label: "Sim",
                    },
                    {
                      value: false,
                      label: "Não",
                    },
                  ]}
                />
              )}
            />
          </GraphFormRow>
          <GraphFormRow>
            <label htmlFor="edges-have-weight">As arestas tem pesos?</label>
            <Controller
              control={control}
              name="edges-have-weight"
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <Select
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  name={name}
                  ref={ref}
                  options={[
                    {
                      value: true,
                      label: "Sim",
                    },
                    {
                      value: false,
                      label: "Não",
                    },
                  ]}
                />
              )}
            />
          </GraphFormRow>
          <GraphFormRow>
            <label htmlFor="edges-quantity">Informe o número de vértices</label>
            <Input
              type="number"
              placeholder="Digite o número de vértices"
              {...register("edges-quantity")}
            />
          </GraphFormRow>
          <Button type="submit">Prosseguir</Button>
        </form>
      </Card>

      <Card title="Passo 2 de 2" expansive>
        <form onSubmit={handleSubmit(handleSubmitFirstStep)}>
          <GraphFormTable edgeMatrix={edgeMatrix} />
          {/* <GraphFormRow>
            <label htmlFor="start-edge">Selecione o vértice de partida</label>
            <Controller
              control={control}
              name="start-edge"
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <Select
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  name={name}
                  ref={ref}
                  options={[
                    {
                      value: "a",
                      label: "A",
                    },
                    {
                      value: "b",
                      label: "B",
                    },
                  ]}
                />
              )}
            />
          </GraphFormRow>
          <GraphFormRow>
            <label htmlFor="final-edge">Selecione o vértice de chegada</label>
            <Controller
              control={control}
              name="final-edge"
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <Select
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  name={name}
                  ref={ref}
                  options={[
                    {
                      value: "a",
                      label: "A",
                    },
                    {
                      value: "b",
                      label: "B",
                    },
                  ]}
                />
              )}
            />
          </GraphFormRow> */}
          <Button type="submit">Processar</Button>
        </form>
      </Card>
    </GraphFormContainer>
  );
}
