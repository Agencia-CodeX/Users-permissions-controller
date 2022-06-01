import { Avatar, Box, Flex, Spinner, Table, Tbody, Td, Text, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { ChartComponent } from "../components/ChartComponent";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { getRecentUsers, useUsers } from "../services/hooks/useUsers";

export default function Dashboard() {
    const { data, isLoading, isFetching } = useUsers("recentAddUsers", getRecentUsers, 10);

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
                    flexDirection={{ base: "column", xl: "row" }}
                >
                    <Flex
                        flexDirection="column"
                        gap="20px"
                        width={{ base: "100%", xl: "50%" }}
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
                            <Flex gap="40px">
                                <Text m="0 auto" fontSize={["16px", "20px"]}>Ultimos usuarios cadastrados</Text>
                                {!isLoading && isFetching && <Spinner />}
                            </Flex>
                            {isLoading ? (
                                <Flex h="100%" align="center">
                                    <Spinner />
                                </Flex>
                            ) : (
                                <Table variant={"unstyled"}>
                                    <Tbody>
                                        {data.map(user => {
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
                        width={{ base: '100%', '2xl': '45%' }}
                        align="center"
                        justify="center"
                    >
                        {isWideVersion ? (
                            <Flex
                                height="100%"
                                w="100%"
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