import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { useGraphs } from "../../../shared/hooks/use-graphs";
import { Layout } from "../../core/layout";
import { Terminal } from "../../global/terminal";
import { GraphForm } from "./graph-form";
import { HomeWrapper } from "./styles";

export function HomePage() {
  const { graphImageBytes, outputImageBytes, outputs } = useGraphs();

  return (
    <Layout>
      <Container maxW="container.lg">
        <HomeWrapper>
          <Flex gridGap="6" position="relative">
            <GraphForm />
            <Box
              w="full"
              h="fit-content"
              position="sticky"
              top="2"
              zIndex="docked"
            >
              <Flex direction="column" gridGap="6">
                {graphImageBytes.length > 0 && (
                  <Flex direction="column">
                    <Text>Grafo de entrada:</Text>
                    <Image
                      src={`data:image/png;base64,${graphImageBytes}`}
                      alt="Graph"
                      w="full"
                      h="64"
                      objectFit="contain"
                    />
                  </Flex>
                )}
                {outputImageBytes.length > 0 && (
                  <Flex direction="column">
                    <Text>Grafo de saída:</Text>
                    <Image
                      src={`data:image/png;base64,${outputImageBytes}`}
                      alt="Graph output"
                      w="full"
                      h="64"
                      objectFit="contain"
                    />
                  </Flex>
                )}
                <Terminal lines={outputs.map((o) => `> ${o}`)} />
              </Flex>
            </Box>
          </Flex>
        </HomeWrapper>
      </Container>
    </Layout>
  );
}
