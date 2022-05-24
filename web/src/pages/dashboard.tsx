import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";
import { Avatar, Flex, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

const options: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[500]
        },
        axisTicks: {
            color: theme.colors.gray[600],
        },
        categories: [
            '2022-05-19T00:00.00Z',
            '2022-05-20T00:00.00Z',
            '2022-05-21T00:00.00Z',
            '2022-05-22T00:00.00Z',
            '2022-05-23T00:00.00Z',
            '2022-05-24T00:00.00Z',
            '2022-05-25T00:00.00Z'
        ],
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
}

const series = [
    { name: 'series1', data: [0, 3, 5, 2, 2, 3, 5] }
]

export default function Dashboard() {
    return (
        <>
            <Flex h="100vh">
                <Flex
                    w="30%"
                    h="100vh"
                    maxW="400px"
                    bgColor="darkBlue.100"
                    minW="300px"
                    flexDirection="column"
                >
                    <Sidebar />
                </Flex>
                <Flex
                    h="100vh"
                    w="100vw"
                    flexDirection="column"
                >
                    <Header />
                    <Flex width="100%" height="100vh">
                        <Flex width="50%" gap="20px" flexDirection="column">
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
                                <Chart options={options} series={series} type="area" width={400} />
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
                                <Text m="0 auto" fontSize="20">Ultimos usuarios cadastrados</Text>
                                <Flex alignItems="center" w="100%" justify="space-evenly">
                                    <Avatar name="Bruno Vimieiro" src="https://github.com/brunovimieiro.png" />
                                    <Text>Bruno vimieiro</Text>
                                    <Text>Função exercida</Text>
                                </Flex>
                                <Flex alignItems="center" w="100%" justify="space-evenly">
                                    <Avatar name="Gustavo Soares" src="https://github.com/zankei1.png" />
                                    <Text>Gustavo Soares</Text>
                                    <Text>Função exercida</Text>
                                </Flex>
                                <Flex alignItems="center" w="100%" justify="space-evenly">
                                    <Avatar name="Pedro Henrique" src="https://github.com/pedromm65.png" />
                                    <Text>Pedro Henrique</Text>
                                    <Text>Função exercida</Text>
                                </Flex>
                                <Flex alignItems="center" w="100%" justify="space-evenly">
                                    <Avatar name="Miguel Marcola" src="https://github.com/miguelmarcola.png" />
                                    <Text>Miguel marcola</Text>
                                    <Text>Função exercida</Text>
                                </Flex>
                            </Flex>
                        </Flex>

                        <Flex
                            width="50%"
                            align="center"
                            justify="center"
                            mr="30px"
                        >
                            <Flex
                                width="80%"
                                height="90%"
                                flexDirection="column"
                                alignItems="center"
                                justify="center"
                                backgroundColor="darkBlue.100"
                                rounded="lg"
                                gap="20px"
                            >
                                <Text>
                                    Abertura de chamados nos ultimos 7 dias
                                </Text>
                                <Chart options={options} series={series} type="bar" width={800} />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}


{/* <Sidebar />

<Flex direction="column" w="100%">
    <Header />

    <Flex
        flexDirection="column"
        mt="20px"
        ml="240px"
        w="600px"
        h="350px"
        p="30px"
        alignItems="center"
        backgroundColor="darkBlue.100"
        rounded="lg"
    >
        <Text fontSize={20}>Usuarios cadastrados nas ultimas semanas</Text>
        <Chart options={{}} series={series} type="area" width={400} />
    </Flex>
    <Flex
        flexDirection="column"
        mt="20px"
        ml="240px"
        w="600px"
        h="350px"
        p="30px"
        backgroundColor="darkBlue.100"
        rounded="lg"
        gap="20px"
    >
        <Text m="0 auto" fontSize="20">Ultimos usuarios cadastrados</Text>
        <Flex alignItems="center" justifyContent="space-evenly">
            <Avatar name="Bruno Vimieiro" src="https://github.com/brunovimieiro.png" />
            <Text>Bruno vimieiro</Text>
            <Text>Função exercida</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-evenly">
            <Avatar name="Gustavo Soares" src="https://github.com/zankei1.png" />
            <Text>Gustavo Soares</Text>
            <Text>Função exercida</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-evenly">
            <Avatar name="Pedro Henrique" src="https://github.com/pedromm65.png" />
            <Text>Pedro Henrique</Text>
            <Text>Função exercida</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-evenly">
            <Avatar name="Miguel Marcola" src="https://github.com/miguelmarcola.png" />
            <Text>Miguel marcola</Text>
            <Text>Função exercida</Text>
        </Flex>
    </Flex>
</Flex> */}