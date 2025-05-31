import { Flex, Paper, rem, Text } from "@mantine/core";

export default function App() {
  return (
    <Flex direction={"column"} gap={rem(100)}>
      <Text>Hello</Text>
      <Paper bg={"green"} w={"full"} h={"full"}>
        <Text>What</Text>
      </Paper>
    </Flex>
  );
}
