import { Box, List, ListItem, Text } from "@chakra-ui/react";
import { Pipeline } from "./styles";
import { TerminalProps } from "./types";

export function Terminal({ lines }: TerminalProps) {
  return (
    <Box
      p="4"
      borderRadius="md"
      bg="black"
      w="full"
      h="fit-content"
      maxH="72"
      overflow="auto"
    >
      <List fontFamily="JetBrains Mono" fontSize="sm" color="white">
        {lines.map((line, index) => (
          <ListItem key={index}>{line}</ListItem>
        ))}
        <ListItem>
          <Pipeline />
        </ListItem>
      </List>
    </Box>
  );
}
