/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Input, Button, HStack, Text } from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import axios from "axios";

interface ApiResponse {
  message: string[];
}

function App() {
  const [inputValue, setInputValue] = useState<number>(0);
  const [result, setResult] = useState<string[]>([]);

  const handleInputChange = (e: any) => {
    setInputValue(parseInt(e.target.value));
  };

  const fetchData = async (url: string, data: { angka: number }) => {
    const urlApi = `http://127.0.0.1:5000/${url}`;
    try {
      const response = await axios.post<ApiResponse>(urlApi, data);
      setResult(response.data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResult(["Error fetching data"]);
    }
  };

  const handleGenerateSegitiga = () => {
    fetchData("segitiga", { angka: inputValue });
  };

  const handleGenerateGanjil = () => {
    fetchData("ganjil", { angka: inputValue });
  };

  const handleGeneratePrima = () => {
    fetchData("prima", { angka: inputValue });
  };

  return (
    <Stack h="89vh" gap={5}>
      <Input
        placeholder="input angka"
        onChange={(e) => handleInputChange(e)}
        value={inputValue}
      />
      <HStack>
        <Button onClick={() => handleGenerateSegitiga()}>
          Generate segitiga
        </Button>
        <Button onClick={() => handleGenerateGanjil()}>
          Generate bilangan ganjil
        </Button>
        <Button onClick={() => handleGeneratePrima()}>
          Generate bilangan prima
        </Button>
      </HStack>
      <Text textAlign="start" fontWeight="semibold">
        Result
      </Text>
      <Stack>
        {result.map((value: any) => (
          <Text textAlign="start">{value}</Text>
        ))}
      </Stack>
    </Stack>
  );
}

export default App;
