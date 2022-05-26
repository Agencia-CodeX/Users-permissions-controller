import { Avatar, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { ChartComponent } from "../components/ChartComponent";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
    const isWideVersion = useBreakpointValue({
        base: false,
        xl: true,
    })

    return (
        <Flex>
            <Sidebar />
            <Flex
                w="full"
                h="full"
                flexDirection="column"
            >
                <Header />
                <Flex
                    w="100%"
                    gap="20px"
                    p="20px"
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
                            h="350px"
                            p="30px"
                            alignItems="center"
                            backgroundColor="darkBlue.100"
                            rounded="lg"
                            gap="20px"
                            maxW="800px"
                            mx="auto"
                        >
                            <Text m="0 auto" fontSize={["16px", "20px"]}>Ultimos usuarios cadastrados</Text>
                            <Flex alignItems="center" w="100%" justify="space-evenly">
                                <Avatar mr="20px" name="Bruno Vimieiro" src="https:github.com/brunovimieiro.png" />
                                <Text>Bruno vimieiro</Text>
                                <Text>Função exercida</Text>
                            </Flex>
                            <Flex alignItems="center" w="100%" justify="space-evenly">
                                <Avatar mr="20px" name="Gustavo Soares" src="https:github.com/zankei1.png" />
                                <Text>Gustavo Soares</Text>
                                <Text>Função exercida</Text>
                            </Flex>
                            <Flex alignItems="center" w="100%" justify="space-evenly">
                                <Avatar mr="20px" name="Pedro Henrique" src="https:github.com/pedromm65.png" />
                                <Text>Pedro Henrique</Text>
                                <Text>Função exercida</Text>
                            </Flex>
                            <Flex alignItems="center" w="100%" justify="space-evenly">
                                <Avatar mr="20px" name="Miguel Marcola" src="https:github.com/miguelmarcola.png" />
                                <Text>Miguel marcola</Text>
                                <Text>Função exercida</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex
                        width={["100%", "100%", "100%", "100%", "50%"]}
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
                                <ChartComponent type="bar" size={600} labels={[
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