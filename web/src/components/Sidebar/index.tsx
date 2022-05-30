import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SidebarNav } from "./SidebarNav";
import { SidebarProfile } from "./SidebarProfile";

export function Sidebar() {

    const { isOpen, onClose } = useSidebarDrawer();

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        '2xl': false,
    })

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bgColor="darkBlue.100" p="2">
                        <DrawerCloseButton mt="6" />
                        <DrawerBody mt="40px">
                            <SidebarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return (
        <Flex
            minW="400px"
            minH="100vh"
            bgColor="darkBlue.100"
            flexDirection="column"
        >
            <SidebarProfile />
            <SidebarNav />
        </Flex>
    )
}