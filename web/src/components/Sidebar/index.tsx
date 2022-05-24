import { Flex } from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";
import { SidebarProfile } from "./SidebarProfile";

export function Sidebar() {
    return (
        <>
            <SidebarProfile />
            <SidebarNav />
        </>
    )
}