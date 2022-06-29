import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

import { Text, Button } from "@chakra-ui/react";

import { Card } from "../../../global/card";
import { GraphFormTable } from "./graph-form-table";

import { GraphFormContainer, GraphFormRow } from "./styles";
import { GraphFormDialog } from "./graph-form-dialog";
import { GraphFormProps } from "./types";

export function GraphForm({ edgeMatrix, setEdgeMatrix }: GraphFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { register, control, handleSubmit } = useForm();

  function handleSubmitFirstStep(data: any) {
    console.log(data);
  }

  return (
    <GraphFormContainer>
      <Text fontWeight="bold" fontSize="lg">
        Preencha os dados abaixo
      </Text>

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
            <label htmlFor="graph-weighted">Grafo ponderado?</label>
            <Controller
              control={control}
              name="is-graph-weighted"
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
          <GraphFormTable setIsOpen={setIsOpen} edgeMatrix={edgeMatrix} />
          <Button type="submit" colorScheme="purple">
            Processar
          </Button>
        </form>
      </Card>

      {isOpen && (
        <GraphFormDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onChange={(edge) => {
            setEdgeMatrix([...edgeMatrix, edge]);
          }}
        />
      )}
    </GraphFormContainer>
  );
}
