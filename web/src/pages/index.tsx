import { Button, Flex, Stack, Text, Box } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function Home() {
  return (
    <>
      <Flex
        w="100vw"
        h="90vh"
        alignItems="center"
        justify="center"
        flexDirection="column"
      >
        <Text as="h1" fontSize="30px" mb="20px">Login</Text>
        <Flex
          as="form"
          w="100%"
          maxWidth="360px"
          bg="gray.800"
          p="8"
          borderRadius="8"
          flexDirection="column"
        >
          <Stack spacing="4">
            <Input type="email" name="email" label="E-mail" />
            <Input type="password" name="password" label="Senha" />
          </Stack>
          <Button
            type="submit"
            marginTop="6"
            size="lg"
            bgColor="blue.50"
            _hover={{
              bgColor: "blue.100"
            }}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
