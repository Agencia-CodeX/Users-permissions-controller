import { Avatar, Box, Flex, Spinner, Table, Tbody, Td, Text, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { ChartComponent } from "../components/ChartComponent";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useQuery } from "react-query";

export default function Dashboard() {
    const { data, isLoading, error } = useQuery('recentAddedUsers', async () => {
        const response = await fetch('http://localhost:3000/api/users');
        const data = await response.json();
        return data;
    })

    const isWideVersion = useBreakpointValue({
        base: false,
        xl: true,
    })

    return (
        <Flex
        >
            <Sidebar />
            <Flex
                w="100%"
                flexDirection="column"
            >
                <Header />
                <Flex
                    w="100%"
                    gap="20px"
                    p={["0", "20px"]}
                    flexDirection={["column", "column", "column", "column", "row"]}
                >
                    <Flex
                        flexDirection="column"
                        gap="20px"
                        width={["100%", "100%", "100%", "100%", "50%"]}
                    >
                        <Flex
                            flexDirection="column"
                            width="100%"
                            h="350px"
                            p="30px"
                            alignItems="center"
                            backgroundColor="darkBlue.100"
                            rounded="lg"
                            gap="20px"
                            maxW="800px"
                            m="0 auto"
                        >
                            <Text fontSize={20}>Usuarios cadastrados nas ultimas semanas</Text>
                            <ChartComponent type="area" size={360} labels={[1, 2, 3, 4, 5, 6, 7]} />
                        </Flex>
                        <Flex
                            flexDirection="column"
                            width="100%"
                            // h="350px"
                            p="30px"
                            alignItems="center"
                            backgroundColor="darkBlue.100"
                            rounded="lg"
                            gap="20px"
                            maxW="800px"
                            mx="auto"
                        >
                            <Text m="0 auto" fontSize={["16px", "20px"]}>Ultimos usuarios cadastrados</Text>
                            {isLoading ? (
                                <Flex h="100%" align="center">
                                    <Spinner />
                                </Flex>
                            ) : (
                                <Table>
                                    <Tbody>
                                        {data.users.map(user => {
                                            return (
                                                <Tr key={user.id}>
                                                    <Td w="25%"><Avatar src={user.image} name={user.name} /></Td>
                                                    <Td w="33%"><Text>{user.name}</Text></Td>
                                                    <Td w="33%"><Text>{user.role}</Text></Td>
                                                </Tr>
                                            )
                                        }
                                        )}
                                    </Tbody>
                                </Table>
                            )}
                        </Flex>
                    </Flex>
                    <Flex
                        width={{ base: '100%', '2xl': '50%' }}
                        align="center"
                        justify="center"
                    >
                        {isWideVersion ? (
                            <Flex
                                height="100%"
                                w="100%"
                                maxW="980px"
                                h="720px"
                                justify="center"
                                align="center"
                                flexDirection="column"
                                backgroundColor="darkBlue.100"
                                rounded="lg"
                                gap="100px"
                            >
                                <Text>
                                    Abertura de chamados nos ultimos 7 dias
                                </Text>
                                <ChartComponent type="bar" size={500} labels={[
                                    "Domingo",
                                    "Segunda",
                                    "Terça",
                                    "Quarta",
                                    "Quinta",
                                    "Sexta",
                                    "Sábado",
                                ]} />
                            </Flex>
                        ) : <Flex
                            height="100%"
                            w="100%"
                            maxH="500px"
                            maxW="800px"
                            h="720px"
                            justify="center"
                            align="center"
                            flexDirection="column"
                            backgroundColor="darkBlue.100"
                            rounded="lg"
                            gap="100px"
                        >
                            <Text>
                                Abertura de chamados nos ultimos 7 dias
                            </Text>
                            <ChartComponent type="bar" size={360} labels={[
                                "Domingo",
                                "Segunda",
                                "Terça",
                                "Quarta",
                                "Quinta",
                                "Sexta",
                                "Sábado",
                            ]} />
                        </Flex>}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}