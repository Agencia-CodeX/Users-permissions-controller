import { Button, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Input } from "../components/Form/Input";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Flex
        w="100vw"
        h="90vh"
        alignItems="center"
        justify="center"
        flexDirection="column"

      >
        <Text as="h1" mb="20px">Login</Text>
        <Flex
          as="form"
          w="100%"
          maxWidth="360px"
          bg="darkBlue.100"
          p="8"
          borderRadius="8"
          gap="8"
          flexDirection="column"
        >
          <Input name="email" type="email" label="E-Mail" />
          <Input name="password" type="password" label="password" />
          <Button
            type="button"
            size="lg"
            bg="lightBlue.50"
            color="white"
            variant="unstyled"
            _hover={{
              bgColor: "lightBlue.100"
            }}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
