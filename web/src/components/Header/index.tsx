import { Box, Flex, Text } from "@chakra-ui/react";
import { BsPersonFill } from "react-icons/bs";
import { RiErrorWarningFill, RiNotification2Fill, RiTaskFill } from "react-icons/ri";
import { BoxNotification } from "./BoxNotification";

export function Header() {
    return (
        <Flex
            h="200px"
            alignItems="center"
            p="32px"
            gap="20px"
            w="100%"
            justifyContent="space-around"
            m="0 auto"
        >
            <Flex 
                h="100px" 
                w="810px"
                bgColor="darkBlue.100" 
                alignItems="center" 
                rounded="lg"
                p="20px"
                justify="center"
            >
                <Text fontSize="30px">Seja bem vindo, Gustavo Soares</Text>
            </Flex>

            <Flex gap="20px">
                <BoxNotification icon={BsPersonFill} content="Pessoas cadastradas" count="20" />
                <BoxNotification icon={RiTaskFill} content="Tarefas" count="5" />
                <BoxNotification icon={RiNotification2Fill} content="Notificações" count="3" />
                <BoxNotification icon={RiErrorWarningFill} content="Chamados em aberto" count="10" color />
            </Flex>
        </Flex>
    );
}