import { Flex, Icon, IconButton, Text, useBreakpointValue } from "@chakra-ui/react";
import { BsPersonFill } from "react-icons/bs";
import { RiErrorWarningFill, RiMenuLine, RiNotification2Fill, RiTaskFill } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { BoxNotification } from "./BoxNotification";

export function Header() {
    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        '2xl': true,
    })

    return (
        <Flex
            as="header"
            h="200px"
            alignItems="center"
            p="32px"
            gap="20px"
            w="100%"
            justifyContent="space-around"
        >

            {!isWideVersion && (
                <IconButton
                    height="60px"
                    minW="80px"
                    backgroundColor="darkBlue.100"
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                />
            )}

            <Flex
                h="100px"
                w="800px"
                bgColor="darkBlue.100"
                alignItems="center"
                rounded="lg"
                p="20px"
                justify="center"
                mx="25px"
            >
                <Text fontSize={["16px", "16px", "25px", "30px"]}>Seja bem vindo, Gustavo Soares</Text>
            </Flex>


            {
                isWideVersion && (
                    <Flex gap="20px">
                        <BoxNotification
                            icon={BsPersonFill}
                            content="Pessoas cadastradas"
                            count="20"
                            buttonColor="darkBlue.100"
                            hoverColor="lightBlue.50"
                        />
                        <BoxNotification
                            icon={RiTaskFill}
                            content="Tarefas"
                            count="5"
                            buttonColor="darkBlue.100"
                            hoverColor="lightBlue.50"
                        />
                        <BoxNotification
                            icon={RiNotification2Fill}
                            content="Notificações"
                            count="3"
                            buttonColor="darkBlue.100"
                            hoverColor="lightBlue.50"
                        />
                        <BoxNotification
                            icon={RiErrorWarningFill}
                            content="Chamados em aberto"
                            count="10"
                            buttonColor="red.500"
                            hoverColor="red.700"
                        />
                    </Flex>
                )
            }

        </Flex>
    )
}