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
            <NavLink children="Dashboard" active />
            <NavLink children="Cadastrar usuario" />

        </Flex>
    )
}