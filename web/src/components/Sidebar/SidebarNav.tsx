import { Flex } from "@chakra-ui/react";
import { NavLink } from "./NavLink";

export function SidebarNav() {
    return (
        <Flex
            mx="auto"
            mt="10px"
            bgColor="darkblue.50"
            w="80%"
            gap="20px"
            flexDirection="column"
        >
            <NavLink children="Dashboard" hoverColor="lightBlue.100" active />
            <NavLink children="Cadastrar usuario" hoverColor="lightBlue.100" />
            <NavLink children="Ver chamados" hoverColor="lightBlue.100" />
            <NavLink children="Sair" hoverColor="red.600" />
        </Flex>
    )
}