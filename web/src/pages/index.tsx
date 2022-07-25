import { Button, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import { FormEvent, useContext, useState } from "react";
import { Input } from "../components/Form/Input";
import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  // Por enquanto usar estados, remover depois
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    
    const data = {
      email,
      password
    }
    try {
      await signIn(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  
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
        <Flex
          as="form"
          onSubmit={handleSubmit}
          w="100%"
          maxWidth="360px"
          bg="darkBlue.100"
          p="8"
          borderRadius="8"
          gap="8"
          flexDirection="column"
        >
          <Text mx="auto" as="h1" fontSize="30px" >Login</Text>
          <Input 
            name="email" 
            type="email" 
            label="E-Mail" 
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <Input 
            name="password" 
            type="password" 
            label="password" 
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <Button
            type="submit"
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
