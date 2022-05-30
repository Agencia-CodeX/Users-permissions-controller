import { Flex, Box, Heading, Link, Table, Thead, Tr, Th, Checkbox, useBreakpointValue, Tbody, Spinner, Td, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { useQuery } from "react-query";

export default function Users() {
    const { data, isLoading, error } = useQuery('users', async () => {
        const response = await fetch('http://localhost:3000/api/users');
        const data = await response.json();
        return data;
    })

    const isWideVersion = useBreakpointValue({
        base: false,
        xl: true,
    })

    return (
        <Flex w="100%">
            <Sidebar />
            <Flex w="100%" flexDirection="column">
                <Header />
                <Box
                    w="90%"
                    backgroundColor="darkBlue.100"
                    borderRadius="lg"
                    mt="20px"
                    mx="auto"
                    p={{ base: "0", md: "60px" }}
                >
                    <Flex
                        align="center"
                        justify="space-between"
                        p="30px"
                    >
                        <Heading>Usuarios</Heading>
                        <Link
                            w="100px"
                            textAlign="center"
                            lineHeight="40px"
                            h="40px"
                            backgroundColor="lightBlue.50"
                            borderRadius="lg"
                            _hover={{
                                textDecoration: "none",
                                backgroundColor: "lightBlue.100",
                            }}
                        >
                            Criar novo
                        </Link>
                    </Flex>
                    {isLoading
                        ? <Flex w="90%" h="40vh" align="center" justify="center">
                            <Spinner />
                         </Flex>
                        :
                        <Table>

                            <Thead>
                                <Tr borderBottom={{ base: "none" }}>
                                    <Th><Checkbox backgroundColor="darkBlue.100" /></Th>
                                    <Th>Usuario</Th>
                                    {isWideVersion && (<Th>Função</Th>)}
                                    {isWideVersion && (<Th>Data de cadastro</Th>)}
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data?.users.map(user => {
                                    return (
                                        <Tr key={user.id}>
                                            <Td><Checkbox backgroundColor="darkblue.100" /></Td>
                                            <Td>{user.name}</Td>
                                            <Td>{user.role}</Td>
                                            {isWideVersion && (<Td>{user.createdAt}</Td>)}
                                        </Tr>
                                    )
                                })}
                            </Tbody>
                        </Table>
                    }

                </Box>
            </Flex>
        </Flex>
    )
}