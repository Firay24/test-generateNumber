import { Stack, Input, Button, HStack, Text } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Stack h="89vh" gap={5}>
      <Input placeholder="input angka" />
      <HStack>
        <Button>Generate segitiga</Button>
        <Button>Generate bilangan ganjil</Button>
        <Button>Generate bilangan prima</Button>
      </HStack>
      <Text textAlign="start" fontWeight="semibold">
        Result
      </Text>
    </Stack>
  );
}

export default App;
