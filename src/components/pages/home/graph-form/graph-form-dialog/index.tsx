import { Box, Flex, Text, Button, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FiX } from "react-icons/fi";

import { GraphFormDialogProps } from "./types";

type GraphFormDialogState = {
  "start-vertex-name": string;
  "final-vertex-name": string;
  "edge-weight": number;
};

export function GraphFormDialog({ setIsOpen, onChange }: GraphFormDialogProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GraphFormDialogState>();

  function handleSubmitEdge(data: GraphFormDialogState) {
    onChange({
      start: data["start-vertex-name"].toUpperCase(),
      end: data["final-vertex-name"].toUpperCase(),
      weight: data["edge-weight"],
    });
    setIsOpen(false);
  }

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      bg="blackAlpha.600"
      w="full"
      h="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box bg="white" borderRadius="lg" p="8" w="lg">
        <Flex alignItems="center" justifyContent="space-between" mb="4">
          <Text fontSize="lg" fontWeight="700">
            Preencha os dados abaixo
          </Text>
          <Button
            variant="ghost"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <FiX size={16} />
          </Button>
        </Flex>
        <form onSubmit={handleSubmit(handleSubmitEdge)}>
          <Flex direction="column">
            <FormLabel fontSize="sm" htmlFor="edge-name">
              Vértice de partida
            </FormLabel>
            <Input
              {...register("start-vertex-name", {
                required: true,
              })}
            />
            {errors["start-vertex-name"] && (
              <Text fontSize="xs" color="red" mt={2}>
                Campo obrigatório
              </Text>
            )}
          </Flex>
          <Flex direction="column">
            <FormLabel fontSize="sm" htmlFor="edge-name">
              Vértice de chegada
            </FormLabel>
            <Input
              {...register("final-vertex-name", {
                required: true,
              })}
            />
            {errors["final-vertex-name"] && (
              <Text fontSize="xs" color="red" mt={2}>
                Campo obrigatório
              </Text>
            )}
          </Flex>
          <Flex direction="column">
            <FormLabel fontSize="sm" htmlFor="edge-name">
              Peso da aresta
            </FormLabel>
            <Input
              type="number"
              {...register("edge-weight", {
                required: true,
              })}
            />
            {errors["edge-weight"] && (
              <Text fontSize="xs" color="red" mt={2}>
                Campo obrigatório
              </Text>
            )}
          </Flex>
          <Button type="submit" colorScheme="purple">
            Adicionar
          </Button>
        </form>
      </Box>
    </Box>
  );
}
