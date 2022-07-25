import { Flex } from "@chakra-ui/react";
import { RiDashboard2Line } from "react-icons/ri";
import { signOut } from "../../contexts/AuthContext";
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
            <NavLink href="/dashboard" icon={RiDashboard2Line} hoverColor="lightBlue.100">Dashboard</NavLink>
            <NavLink href="/users" icon={RiDashboard2Line} hoverColor="lightBlue.100">Listar usuarios</NavLink>
            <NavLink
                href="#"
                icon={RiDashboard2Line}
                hoverColor="lightBlue.100"

            >
                Ver chamados
            </NavLink>
            <NavLink
                href="/"
                icon={RiDashboard2Line}
                hoverColor="red.600"
                onClick={signOut}
                shouldMatchExactHref={true}
            >
                Sair
            </NavLink>
        </Flex>
    )
}